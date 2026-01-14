import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "./countdown-timer"
import { Gamepad2, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-16 hud-grid hex-pattern overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border border-secondary/20 rotate-45 opacity-30" />
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-primary/20 rotate-12 opacity-30" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary rounded-full animate-pulse glow-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-secondary rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-[#1ecf7a] rounded-full animate-ping" />
        <div
          className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-[#7d51fb] rounded-full animate-ping"
          style={{ animationDelay: "0.5s" }}
        />

        {/* Gaming icons floating */}
        <Gamepad2 className="absolute top-1/4 right-20 w-8 h-8 text-secondary/20 float-animation" />
        <Zap
          className="absolute bottom-1/3 left-20 w-6 h-6 text-primary/20 float-animation"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
        <div className="mb-6 flex justify-center">
          <Image
            src="/images/ggj.png"
            alt="Global Game Jam"
            width={120}
            height={80}
            className="h-16 md:h-20 w-auto float-animation"
          />
        </div>

        {/* Global Game Jam Badge */}
        <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground font-medium">Global Game Jam 2025 - Sede Paraná</span>
        </div>

        {/* Main Title - Text based with glowing effect */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 tracking-tight">
          <span className="text-primary text-glow-green">Paraná</span>{" "}
          <span className="text-secondary text-glow-purple">Game</span> <span className="text-foreground">Jam</span>
        </h1>

        {/* Event Dates */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px flex-1 max-w-20 bg-gradient-to-r from-transparent to-secondary/50" />
          <p className="text-xl md:text-2xl font-bold text-foreground">
            <span className="text-primary">30 DE ENERO</span>
            <span className="text-muted-foreground"> AL </span>
            <span className="text-secondary">1 DE FEBRERO</span>
          </p>
          <div className="h-px flex-1 max-w-20 bg-gradient-to-l from-transparent to-secondary/50" />
        </div>

        {/* Event Time & Location - with Mirador TEC logo */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <div className="bg-secondary/20 border border-secondary/30 rounded px-4 py-2">
            <span className="text-secondary font-bold text-sm">INICIO 16 HS • CIERRE 19 HS</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-card/50 border border-primary/30 rounded px-4 py-2">
            <span className="font-bold text-sm text-muted-foreground">LUGAR:</span>
            <div className="flex items-center justify-center">
              <Image
                src="/images/mirador-20tec-20out-20white.png"
                alt="Mirador TEC"
                width={100}
                height={24}
                className="h-5 w-auto"
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-[family-name:var(--font-inter)]">
          Únete a la experiencia más grande de desarrollo de videojuegos del mundo. 48 horas para crear, colaborar y dar
          vida a tu juego. Sin importar tu experiencia, hay un lugar para vos en la comunidad gamer de Paraná.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-[#1ecf7a] uppercase tracking-wider px-8 font-bold glow-pulse"
          >
            <a href="https://globalgamejam.org" target="_blank" rel="noopener noreferrer">
              Registrarse Ahora
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-secondary text-secondary hover:bg-secondary/10 uppercase tracking-wider px-8 bg-transparent font-bold"
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
