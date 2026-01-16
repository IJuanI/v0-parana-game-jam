import Image from "next/image"

interface SponsorLogoProps {
  name: string
  logo: string
  tier: "gold" | "silver" | "bronze"
  placeholder?: string
  width?: "narrow" | "normal" | "wide" | "extra-wide"
}

export function SponsorLogo({ name, logo, tier, placeholder, width = "normal" }: SponsorLogoProps) {
  const sizeClasses = {
    gold: "h-16 md:h-20",
    silver: "h-12 md:h-16",
    bronze: "h-10 md:h-12",
  }

  const widthClasses = {
    narrow: "aspect-[2/1]",
    normal: "aspect-[3/1]",
    wide: "aspect-[4/1]",
    "extra-wide": "aspect-[5/1]",
  }

  return (
    <div className="relative group">
      <div
        className={`${sizeClasses[tier]} ${widthClasses[width]} relative transition-all duration-300`}
      >
        <Image src={logo || "/placeholder.svg"} alt={name} fill className="object-contain" />
      </div>
      {placeholder && (
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[12pt] text-muted-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          {placeholder}
        </div>
      )}
    </div>
  )
}
