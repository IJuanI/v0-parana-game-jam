import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import path from 'path';

const PUBLIC_DIR = './public';

// Image optimization config - targeting 2x display for crisp images
const optimizations = [
  // Sponsor logos - displayed at max ~160px height, so 320px is plenty for 2x
  {
    glob: 'logos/organizadores/*.png',
    maxWidth: 400,
    maxHeight: 200,
    quality: 90,
  },
  {
    glob: 'logos/organizadores/*.PNG',
    maxWidth: 400,
    maxHeight: 200,
    quality: 90,
  },
  // Mirador TEC - displayed at 100x24, so 200x48 for 2x is plenty
  {
    file: 'images/mirador-tec.png',
    maxWidth: 200,
    maxHeight: 50,
    quality: 90,
  },
  // GGJ logo
  {
    file: 'images/ggj.png',
    maxWidth: 300,
    maxHeight: 150,
    quality: 90,
  },
  // Main logo - used for OG image, keep it larger
  {
    file: 'images/logo.png',
    maxWidth: 800,
    maxHeight: 800,
    quality: 90,
  },
];

async function getImageFiles(dir, pattern) {
  const files = [];
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        files.push(...await getImageFiles(fullPath, pattern));
      } else if (entry.isFile() && entry.name.match(/\.(png|jpg|jpeg|PNG|JPG|JPEG)$/)) {
        files.push(fullPath);
      }
    }
  } catch (err) {
    // Directory doesn't exist, skip
  }
  return files;
}

async function optimizeImage(filePath, config) {
  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    console.log(`\nProcessing: ${filePath}`);
    console.log(`  Original: ${metadata.width}x${metadata.height}`);
    
    const originalStats = await stat(filePath);
    const originalSize = originalStats.size;
    console.log(`  Original size: ${(originalSize / 1024).toFixed(1)} KB`);

    // Calculate new dimensions maintaining aspect ratio
    let newWidth = metadata.width;
    let newHeight = metadata.height;
    
    if (metadata.width > config.maxWidth || metadata.height > config.maxHeight) {
      const widthRatio = config.maxWidth / metadata.width;
      const heightRatio = config.maxHeight / metadata.height;
      const ratio = Math.min(widthRatio, heightRatio);
      
      newWidth = Math.round(metadata.width * ratio);
      newHeight = Math.round(metadata.height * ratio);
    }

    // Skip if no resize needed and file is already small
    if (newWidth === metadata.width && newHeight === metadata.height && originalSize < 50000) {
      console.log(`  Skipping: already optimal`);
      return;
    }

    const outputBuffer = await image
      .resize(newWidth, newHeight, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .png({
        quality: config.quality,
        compressionLevel: 9,
        palette: false, // Keep full color for logos
      })
      .toBuffer();

    // Only save if we actually reduced the size
    if (outputBuffer.length < originalSize) {
      await sharp(outputBuffer).toFile(filePath);
      console.log(`  New: ${newWidth}x${newHeight}`);
      console.log(`  New size: ${(outputBuffer.length / 1024).toFixed(1)} KB`);
      console.log(`  Saved: ${((originalSize - outputBuffer.length) / 1024).toFixed(1)} KB (${((1 - outputBuffer.length / originalSize) * 100).toFixed(0)}%)`);
    } else {
      console.log(`  Skipping: optimized version is larger`);
    }
  } catch (err) {
    console.error(`  Error: ${err.message}`);
  }
}

async function main() {
  console.log('🖼️  Optimizing images...\n');

  for (const config of optimizations) {
    if (config.file) {
      const filePath = path.join(PUBLIC_DIR, config.file);
      await optimizeImage(filePath, config);
    } else if (config.glob) {
      const dir = path.join(PUBLIC_DIR, path.dirname(config.glob));
      const files = await getImageFiles(dir, config.glob);
      for (const file of files) {
        await optimizeImage(file, config);
      }
    }
  }

  console.log('\n✅ Image optimization complete!');
}

main().catch(console.error);
