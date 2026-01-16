import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Image src="/images/logo.png" alt="Paraná Game Jam" width={120} height={40} className="h-8 w-auto" />
            <span className="text-muted-foreground text-sm">|</span>
            <span className="text-muted-foreground text-sm font-mono">Global Game Jam 2026</span>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <Link href="/convivencia" className="text-muted-foreground hover:text-primary transition-colors font-mono">
              Normas de Convivencia
            </Link>
            <Link href="/sponsors" className="text-muted-foreground hover:text-primary transition-colors font-mono">
              Ser Sponsor
            </Link>
            <a
              href="https://globalgamejam.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors font-mono"
            >
              Global Game Jam
            </a>
          </div>

          <p className="text-muted-foreground text-xs font-mono">© 2026 Paraná Game Jam.</p>
        </div>
      </div>
    </footer>
  )
}
