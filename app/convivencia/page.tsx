import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HudFrame } from "@/components/hud-frame"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Users, Bed, ShowerHead, UtensilsCrossed, Building, Lock, Baby } from "lucide-react"

const policies = [
  {
    icon: Shield,
    title: "1. Trato y Respeto",
    items: [
      "Tratar a todas las personas con respeto, empatía y consideración.",
      "No se tolerarán actitudes discriminatorias, ofensivas, violentas o de acoso de ningún tipo.",
      "Respetar opiniones, ideas y formas de trabajo distintas a las propias.",
      "No utilizar elementos ajenos sin previo consentimiento.",
      "Cualquier conflicto debe resolverse mediante el diálogo o con ayuda de la organización.",
    ],
  },
  {
    icon: Users,
    title: "2. Convivencia General",
    items: [
      "Mantener un ambiente colaborativo y cordial durante toda la duración del evento.",
      "Respetar los espacios comunes manteniendo el orden y la limpieza.",
      "Seguir las indicaciones del equipo organizador en todo momento.",
    ],
  },
  {
    icon: Bed,
    title: "3. Descanso y Zona para Dormir",
    items: [
      "Utilizar la zona de descanso exclusivamente para dormir o reposar.",
      "Mantener silencio y orden en este espacio.",
      "Mantener las luces de lámparas y pantallas apagadas.",
    ],
  },
  {
    icon: ShowerHead,
    title: "4. Baños e Higiene Personal",
    items: [
      "Hacer uso responsable de los insumos comunes (papel higiénico, jabón, etc.)",
      "Dejar las duchas y baños limpios luego de usarlos.",
      "Cuidar la higiene personal como parte del respeto hacia los demás participantes.",
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "5. Comedor",
    items: [
      "Respetar los horarios establecidos para el uso del comedor.",
      "Mantener el espacio limpio, ordenado y libre de residuos.",
      "No retirar utensilios o elementos del comedor sin autorización.",
    ],
  },
  {
    icon: Building,
    title: "6. Cuidado del Espacio y Recursos",
    items: [
      "Cuidar las instalaciones, mobiliario y equipamiento del evento.",
      "No está permitido modificar espacios o recursos sin permiso.",
      "Cada participante es responsable de sus pertenencias personales.",
    ],
  },
  {
    icon: Lock,
    title: "7. Seguridad",
    items: [
      "No realizar acciones que puedan poner en riesgo la seguridad propia o ajena.",
      "Informar a la organización ante cualquier situación incómoda, insegura o fuera de lugar.",
      "No consumas alcohol ni sustancias ilegales en el evento.",
    ],
  },
]

const consequences = [
  "Advertencia verbal por parte de los organizadores.",
  "Expulsión del evento sin derecho a reembolso.",
  "Prohibición de participar en futuros eventos organizados por Paraná Game Jam.",
  "En casos graves, se podrá contactar a las autoridades correspondientes.",
  "Cualquier otro agravio al sentido común podrá derivar en las mismas medidas.",
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
              Para garantizar una experiencia positiva, segura y respetuosa para todos los participantes, solicitamos el
              cumplimiento de las siguientes normas básicas de convivencia.
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

          <HudFrame label="Importante" className="mb-8 border-primary/50 bg-primary/5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Baby className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Participantes Menores de Edad</h3>
                <p className="text-muted-foreground">
                  Los <span className="text-primary font-semibold">menores de edad</span> que asistan al evento deberán
                  estar acompañados por un adulto responsable durante toda la duración de la Game Jam. El adulto
                  acompañante será responsable del menor y deberá permanecer en las instalaciones del evento.
                </p>
              </div>
            </div>
          </HudFrame>

          {/* Policies - now in single column for better readability */}
          <div className="space-y-6 mb-8">
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
