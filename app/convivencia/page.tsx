import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HudFrame } from "@/components/hud-frame"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Users, Bed, ShowerHead, UtensilsCrossed, Building, Lock, Baby } from "lucide-react"

export const metadata: Metadata = {
  title: "Normas de Convivencia",
  description:
    "Normas de convivencia para participantes de la Paraná Game Jam 2026. Reglas de respeto, seguridad y comportamiento durante el evento.",
  alternates: {
    canonical: "/convivencia",
  },
  openGraph: {
    title: "Normas de Convivencia | Paraná Game Jam 2026",
    description: "Reglas y normas para garantizar una experiencia segura y respetuosa durante el evento.",
  },
}

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
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="text-secondary">Normas de</span> <span className="text-foreground">Convivencia</span>
            </h1>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
              Para garantizar una experiencia positiva, segura y respetuosa para todos los participantes, solicitamos el
              cumplimiento de las siguientes normas básicas de convivencia.
            </p>
          </div>

          {/* Intro & Important Notice */}
          <div className="space-y-4 mb-6">
            <HudFrame label="Bienvenida">
              <p className="text-foreground text-base leading-relaxed">
                La <span className="text-primary">Paraná Game Jam</span> es un espacio inclusivo donde personas de todas
                las edades, genders, orientaciones y niveles de experiencia se reúnen para crear videojuegos. Nuestro
                objetivo es fomentar la creatividad, el aprendizaje y la colaboración en un ambiente seguro y respetuoso.
              </p>
            </HudFrame>

            <HudFrame label="Importante" className="border-primary/50 bg-primary/5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Baby className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">Menores de Edad</h3>
                  <p className="text-muted-foreground text-sm">
                    Los <span className="text-primary font-semibold">menores de edad</span> deben estar acompañados por un adulto responsable durante toda la Game Jam. El adulto será responsable del menor y debe permanecer en las instalaciones.
                  </p>
                </div>
              </div>
            </HudFrame>
          </div>

          {/* Policies - 2 column layout for first 6 policies */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {policies.slice(0, 6).map((policy, index) => (
              <HudFrame key={index} className="h-full">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <policy.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground leading-tight">{policy.title}</h3>
                </div>
                <ul className="space-y-1">
                  {policy.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-muted-foreground text-sm flex gap-1.5">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </HudFrame>
            ))}
          </div>

          {/* Seguridad and Incumplimiento - Side by Side */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <HudFrame className="h-full">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground leading-tight">{policies[6].title}</h3>
              </div>
              <ul className="space-y-1">
                {policies[6].items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-muted-foreground text-sm flex gap-1.5">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </HudFrame>

            <HudFrame label="Incumplimiento" className="h-full border-destructive/30">
              <h3 className="text-base font-semibold text-foreground mb-2">Consecuencias</h3>
              <p className="text-muted-foreground mb-2 text-sm">
                Los organizadores pueden tomar las siguientes medidas:
              </p>
              <ol className="space-y-1">
                {consequences.map((consequence, index) => (
                  <li key={index} className="text-muted-foreground text-sm flex gap-1.5">
                    <span className="text-destructive font-mono">{index + 1}.</span>
                    <span>{consequence}</span>
                  </li>
                ))}
              </ol>
            </HudFrame>
          </div>

          {/* Reporting */}
          <div className="space-y-4 mb-6">
            <HudFrame label="Reportar Incidentes">
              <h3 className="text-base font-semibold text-foreground mb-2">¿Cómo Reportar?</h3>
              <p className="text-muted-foreground mb-2 text-sm">
                Si experimentás o sos testigo de cualquier comportamiento que viole estas normas, reportalo
                inmediatamente a cualquier miembro del <span className="text-primary">STAFF</span>.
              </p>
              <p className="text-muted-foreground text-sm">
                También podés contactarnos a través de nuestro
                <a href="mailto:contacto@paranagamejam.com" className="text-secondary hover:underline ml-1">
                  email
                </a>{" "}
                o por
                <a
                  href="https://discord.gg/Kh6JDj44cE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline ml-1"
                >
                  Discord
                </a>
                .
              </p>
            </HudFrame>
          </div>

          {/* Agreement */}
          <HudFrame className="text-center bg-primary/5 border-primary/30">
            <p className="text-foreground font-semibold text-base mb-1">
              Al participar en la Paraná Game Jam, aceptás cumplir con estas normas de convivencia.
            </p>
            <p className="text-muted-foreground text-sm">
              ¡Gracias por ayudarnos a crear un evento increíble para toda la comunidad!
            </p>
          </HudFrame>

          {/* Back to Home */}
          <div className="text-center mt-8">
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
