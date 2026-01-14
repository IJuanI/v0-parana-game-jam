import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "./countdown-timer"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-16 hud-grid overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rotate-45 opacity-30" />
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-secondary/20 rotate-12 opacity-30" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-secondary rounded-full animate-pulse" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
        {/* Event Logo */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/images/logo.png"
            alt="Paraná Game Jam"
            width={400}
            height={150}
            className="w-auto h-24 md:h-32"
            priority
          />
        </div>

        {/* Global Game Jam Badge */}
        <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6">
          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-primary text-xs">🌍</span>
          </div>
          <span className="text-sm text-muted-foreground font-mono">Global Game Jam 2025 - Sede Paraná</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          <span className="text-primary">Paraná</span> <span className="text-secondary">Game</span>{" "}
          <span className="text-foreground">Jam</span>
        </h1>

        {/* Event Dates */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px flex-1 max-w-16 bg-border" />
          <p className="text-xl md:text-2xl font-mono text-foreground">
            <span className="text-primary">30 DE ENERO</span>
            <span className="text-muted-foreground"> AL </span>
            <span className="text-secondary">1 DE FEBRERO</span>
          </p>
          <div className="h-px flex-1 max-w-16 bg-border" />
        </div>

        {/* Event Time & Location */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <div className="bg-secondary/20 border border-secondary/30 rounded px-4 py-2">
            <span className="text-secondary font-mono text-sm">INICIO 16 HS • CIERRE 19 HS</span>
          </div>
          <div className="text-muted-foreground">
            <span className="font-mono text-sm">LUGAR:</span>{" "}
            <span className="text-primary font-semibold">Mirador TEC</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Únete a la experiencia más grande de desarrollo de videojuegos del mundo. 48 horas para crear, colaborar y dar
          vida a tu juego. Sin importar tu experiencia, hay un lugar para vos en la comunidad gamer de Paraná.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono uppercase tracking-wider px-8"
          >
            <a href="https://globalgamejam.org" target="_blank" rel="noopener noreferrer">
              Registrarse Ahora
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-secondary text-secondary hover:bg-secondary/10 font-mono uppercase tracking-wider px-8 bg-transparent"
          >
            <a href="https://discord.gg" target="_blank" rel="noopener noreferrer">
              Unirse al Discord
            </a>
          </Button>
        </div>

        {/* Countdown */}
        <div className="max-w-2xl mx-auto">
          <CountdownTimer />
        </div>
      </div>
    </section>
  )
}
