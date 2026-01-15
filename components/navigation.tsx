"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Cronograma", href: "/#cronograma" },
  { label: "Sponsors", href: "/#sponsors" },
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
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-extrabold">
              <span className="text-primary text-glow-green">Paraná</span>{" "}
              <span className="text-secondary text-glow-purple">Game</span> <span className="text-foreground">Jam</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
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

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-[#1ecf7a] uppercase tracking-wider font-bold"
            >
              <a href="https://forms.gle/T2fBkjApbVzQFzgZ9" target="_blank" rel="noopener noreferrer">
                Registrarse
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-secondary/30">
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
            <Button
              asChild
              className="w-full bg-primary text-primary-foreground hover:bg-[#1ecf7a] uppercase tracking-wider font-bold"
            >
              <a href="https://forms.gle/T2fBkjApbVzQFzgZ9" target="_blank" rel="noopener noreferrer">
                Registrarse
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
