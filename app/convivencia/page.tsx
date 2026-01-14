import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HudFrame } from "@/components/hud-frame"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Users, Heart, AlertTriangle } from "lucide-react"

const policies = [
  {
    icon: Shield,
    title: "Respeto Mutuo",
    items: [
      "Tratá a todos los participantes con respeto y cortesía.",
      "No se tolerará ningún tipo de discriminación por género, orientación sexual, etnia, religión, o cualquier otra característica personal.",
      "Las opiniones y perspectivas de todos son valiosas.",
    ],
  },
  {
    icon: Users,
    title: "Colaboración",
    items: [
      "La Game Jam es un evento colaborativo, no competitivo.",
      "Compartí conocimientos y ayudá a otros participantes cuando sea posible.",
      "Respetá el trabajo y las ideas de los demás equipos.",
      "Si un equipo necesita ayuda, ofrecé tu apoyo sin esperar nada a cambio.",
    ],
  },
  {
    icon: Heart,
    title: "Ambiente Seguro",
    items: [
      "El acoso de cualquier tipo no será tolerado.",
      "Esto incluye comentarios ofensivos, intimidación, fotografías no consentidas, interrupción sostenida de charlas u otros eventos.",
      "Respetá el espacio personal de los demás.",
      "Si alguien te pide que pares un comportamiento, hacelo inmediatamente.",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Uso del Espacio",
    items: [
      "Mantené limpio tu espacio de trabajo y las áreas comunes.",
      "No consumas alcohol ni sustancias ilegales en el evento.",
      "Respetá los equipos e instalaciones del lugar.",
      "Seguí las indicaciones del personal de seguridad y organizadores.",
    ],
  },
]

const consequences = [
  "Advertencia verbal por parte de los organizadores.",
  "Expulsión del evento sin derecho a reembolso.",
  "Prohibición de participar en futuros eventos organizados por Paraná Game Jam.",
  "En casos graves, se podrá contactar a las autoridades correspondientes.",
]

export default function ConvivenciaPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden scanline">
      <Navigation />

      <div className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-8 text-muted-foreground hover:text-primary">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al Inicio
            </Link>
          </Button>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-secondary">Normas de</span> <span className="text-foreground">Convivencia</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Para garantizar una experiencia positiva para todos los participantes, te pedimos que leas y respetes
              estas normas durante el evento.
            </p>
          </div>

          {/* Intro */}
          <HudFrame label="Bienvenida" className="mb-8">
            <p className="text-foreground leading-relaxed">
              La <span className="text-primary">Paraná Game Jam</span> es un espacio inclusivo donde personas de todas
              las edades, géneros, orientaciones y niveles de experiencia se reúnen para crear videojuegos. Nuestro
              objetivo es fomentar la creatividad, el aprendizaje y la colaboración en un ambiente seguro y respetuoso.
            </p>
          </HudFrame>

          {/* Policies */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {policies.map((policy, index) => (
              <HudFrame key={index} className="h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <policy.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{policy.title}</h3>
                </div>
                <ul className="space-y-2">
                  {policy.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-muted-foreground text-sm flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </HudFrame>
            ))}
          </div>

          {/* Consequences */}
          <HudFrame label="Incumplimiento" className="mb-8 border-destructive/30">
            <h3 className="text-lg font-semibold text-foreground mb-4">Consecuencias del Incumplimiento</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Los organizadores se reservan el derecho de tomar las siguientes medidas en caso de incumplimiento de
              estas normas:
            </p>
            <ol className="space-y-2">
              {consequences.map((consequence, index) => (
                <li key={index} className="text-muted-foreground text-sm flex gap-2">
                  <span className="text-destructive font-mono">{index + 1}.</span>
                  <span>{consequence}</span>
                </li>
              ))}
            </ol>
          </HudFrame>

          {/* Reporting */}
          <HudFrame label="Reportar Incidentes" className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">¿Cómo Reportar un Incidente?</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Si experimentás o sos testigo de cualquier comportamiento que viole estas normas, por favor reportalo
              inmediatamente a cualquier miembro del equipo organizador. Podés identificarlos por sus credenciales de{" "}
              <span className="text-primary">STAFF</span>.
            </p>
            <p className="text-muted-foreground text-sm">
              También podés contactarnos de forma confidencial a través de nuestro
              <a href="mailto:contacto@paranagamejam.com" className="text-secondary hover:underline ml-1">
                email de contacto
              </a>{" "}
              o por
              <a
                href="https://discord.gg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline ml-1"
              >
                mensaje privado en Discord
              </a>
              .
            </p>
          </HudFrame>

          {/* Agreement */}
          <HudFrame className="text-center bg-primary/5 border-primary/30">
            <p className="text-foreground font-semibold mb-2">
              Al participar en la Paraná Game Jam, aceptás cumplir con estas normas de convivencia.
            </p>
            <p className="text-muted-foreground text-sm">
              ¡Gracias por ayudarnos a crear un evento increíble para toda la comunidad!
            </p>
          </HudFrame>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono uppercase tracking-wider"
            >
              <Link href="/">Volver al Inicio</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
