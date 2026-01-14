import { HudFrame } from "./hud-frame"
import { Gamepad2, Users, Clock, Trophy } from "lucide-react"

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
    <section className="py-20 px-4 hud-grid">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">¿Qué es</span> <span className="text-foreground">la Game Jam?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            La Global Game Jam es el evento de creación de videojuegos más grande del mundo. Durante un fin de semana,
            participantes de todo el planeta desarrollan juegos basados en un tema sorpresa revelado al inicio del
            evento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <HudFrame key={index} className="text-center hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-foreground font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </HudFrame>
          ))}
        </div>
      </div>
    </section>
  )
}
