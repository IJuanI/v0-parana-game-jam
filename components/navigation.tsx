"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Cronograma", href: "/#cronograma" },
  { label: "Colaboradores", href: "/#colaboradores" },
  { label: "Convivencia", href: "/convivencia" },
  { label: "Contacto", href: "/#contacto" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const handleNavClick = (href: string) => {
    setIsOpen(false)

    // If we're on a subpage and clicking an anchor link, navigate to home first
    if (href.startsWith("/#") && pathname !== "/") {
      window.location.href = href
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-secondary/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Text only */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xl font-extrabold whitespace-nowrap">
              <span className="text-primary text-glow-green">Paraná</span>{" "}
              <span className="text-secondary text-glow-purple">Game</span> <span className="text-foreground">Jam</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider font-semibold"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons Section */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              asChild
              className="bg-secondary text-secondary-foreground hover:bg-[#6d3fb5] uppercase tracking-wider font-bold"
            >
              <Link href="/sponsors">Ser Sponsor</Link>
            </Button>
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-[#1ecf7a] uppercase tracking-wider font-bold"
            >
              <Link href="/registro">Registrarse</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground p-2"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-background border-b border-secondary/30">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider font-semibold"
              >
                {link.label}
              </Link>
            ))}
            <div className="space-y-2 pt-2 border-t border-secondary/30">
              <Button
                asChild
                className="w-full bg-secondary text-secondary-foreground hover:bg-[#6d3fb5] uppercase tracking-wider font-bold"
              >
                <Link href="/sponsors">Ser Sponsor</Link>
              </Button>
              <Button
                asChild
                className="w-full bg-primary text-primary-foreground hover:bg-[#1ecf7a] uppercase tracking-wider font-bold"
              >
                <Link href="/registro">Registrarse</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
