import { HudFrame } from "./hud-frame"
import { Gamepad2, Users, Clock, Trophy } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Gamepad2,
    title: "Crea Videojuegos",
    description: "Desarrolla un juego desde cero en 48 horas con un equipo",
  },
  {
    icon: Users,
    title: "Forma Equipos",
    description: "Conecta con artistas, programadores y diseñadores",
  },
  {
    icon: Clock,
    title: "48 Horas",
    description: "Desafío intenso con soporte continuo de mentores",
  },
  {
    icon: Trophy,
    title: "Comparte tu Juego",
    description: "Publica tu creación en la plataforma global de GGJ",
  },
]

export function AboutSection() {
  return (
    <section className="py-20 px-4 hud-grid relative">
      {/* Gaming decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-secondary/10 rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 border-2 border-primary/10 rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/ggj.png"
              alt="Global Game Jam"
              width={80}
              height={53}
              className="h-12 w-auto opacity-80"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            <span className="text-primary text-glow-green">¿Qué es</span>{" "}
            <span className="text-foreground">la Game Jam?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-[family-name:var(--font-inter)]">
            La Global Game Jam es el evento de creación de videojuegos más grande del mundo. Durante un fin de semana,
            participantes de todo el planeta desarrollan juegos basados en un tema sorpresa revelado al inicio del
            evento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <HudFrame key={index} className="text-center hover:border-primary/50 transition-all duration-300 group">
              <div className="w-14 h-14 mx-auto mb-4 rounded-lg bg-secondary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-secondary group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-foreground font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm font-[family-name:var(--font-inter)]">
                {feature.description}
              </p>
            </HudFrame>
          ))}
        </div>
      </div>
    </section>
  )
}
