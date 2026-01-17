import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HudFrame } from "@/components/hud-frame"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Globe,
  Users,
  Trophy,
  Monitor,
  CheckCircle,
  TrendingUp,
  Target,
  Sparkles,
  Gamepad,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Ser Sponsor",
  description:
    "Patrocina la Paraná Game Jam 2026 y conecta tu marca con la comunidad de desarrollo de videojuegos de Entre Ríos. Descubrí los beneficios de ser sponsor del Global Game Jam en Argentina.",
  alternates: {
    canonical: "/sponsors",
  },
  openGraph: {
    title: "Ser Sponsor | Paraná Game Jam 2026",
    description: "Conecta tu marca con la comunidad gamedev de Entre Ríos. Patrocina el Global Game Jam en Argentina.",
  },
}

const ggjStats = [
  { value: "900+", label: "Sedes en el mundo", icon: Globe },
  { value: "40,000+", label: "Participantes globales", icon: Users },
  { value: "8,000+", label: "Juegos creados", icon: Trophy },
  { value: "100+", label: "Países participantes", icon: Target },
]

const localStats = [
  { value: "15", label: "Sedes en Argentina", icon: Globe },
  { value: "8", label: "Años en paraná", icon: TrendingUp },
  { value: "50+", label: "Participantes locales", icon: Users },
  { value: "12+", label: "Juegos locales por año", icon: Gamepad },
]

const kitBenefits = [
  {
    icon: Monitor,
    title: "Presencia en el Sitio Web",
    description: "Tu logo destacado en nuestra página oficial durante todo el evento.",
  },
  {
    icon: Sparkles,
    title: "Mención en Apertura y Cierre",
    description: "Agradecimiento especial durante las ceremonias de apertura y cierre del evento.",
  },
  {
    icon: TrendingUp,
    title: "Visibilidad en Streaming",
    description: "Tu logo en rotación durante la transmisión en vivo del evento.",
  },
  {
    icon: Target,
    title: "Pantalla Principal",
    description: "Anuncios rotativos de tu marca en la pantalla principal durante toda la Jam.",
  },
]

const audiences = [
  { label: "Desarrolladores", percentage: 40 },
  { label: "Artistas", percentage: 25 },
  { label: "Diseñadores", percentage: 20 },
  { label: "Músicos", percentage: 15 },
]

export default function SponsorsPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden scanline">
      <Navigation />

      <div className="pt-24 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-8 text-muted-foreground hover:text-primary">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al Inicio
            </Link>
          </Button>

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground font-medium">Oportunidad de Sponsorship</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-secondary">Sé parte</span> <span className="text-foreground">de la</span>{" "}
              <span className="text-primary">Paraná Game Jam</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Conectá tu marca con la comunidad de desarrollo de videojuegos de Entre Ríos.
            </p>
          </div>

          {/* What is GGJ */}
          <HudFrame label="Global Game Jam" className="mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <Image
                  src="/images/ggj.png"
                  alt="Global Game Jam"
                  width={150}
                  height={100}
                  className="w-32 md:w-40 h-auto"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">¿Qué es la Global Game Jam?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  La <span className="text-primary font-semibold">Global Game Jam</span> es el evento de creación de
                  videojuegos más grande del mundo. Durante 48 horas, miles de participantes en cientos de sedes
                  alrededor del planeta trabajan juntos para crear videojuegos desde cero. Es una celebración de la
                  creatividad, la colaboración y la innovación en la industria del entretenimiento digital.
                </p>
              </div>
            </div>
          </HudFrame>

          {/* What about Parana */}
          <HudFrame label="Entre Ríos GameDevs" className="mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <Image
                  src="/logos/organizadores/ergd-icon-color.svg"
                  alt="Global Game Jam"
                  width={150}
                  height={100}
                  className="w-32 md:w-40 h-auto p-4"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">¿Se hacen Videojuegos en Entre Ríos?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  La <span className="text-primary font-semibold">Global Game Jam</span> es el evento de creación de
                  videojuegos más grande del mundo. Durante 48 horas, miles de participantes en cientos de sedes
                  alrededor del planeta trabajan juntos para crear videojuegos desde cero. Es una celebración de la
                  creatividad, la colaboración y la innovación en la industria del entretenimiento digital.
                </p>
              </div>
            </div>
          </HudFrame>

          {/* Global Stats */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">
              <span className="text-secondary">Números</span> <span className="text-foreground">Globales</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {ggjStats.map((stat, index) => (
                <HudFrame key={index} className="text-center py-6">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </HudFrame>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {localStats.map((stat, index) => (
                <HudFrame key={index} className="text-center py-6">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </HudFrame>
              ))}
            </div>
          </div>

          {/* Audience breakdown */}
          <HudFrame label="Audiencia" className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Perfil de Participantes</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                {audiences.map((audience, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground font-medium">{audience.label}</span>
                      <span className="text-primary">{audience.percentage}%</span>
                    </div>
                    <div className="h-3 bg-card rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
                        style={{ width: `${audience.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <p className="text-muted-foreground">
                  Profesionales y entusiastas del desarrollo de videojuegos, desde estudiantes hasta expertos de la
                  industria, todos apasionados por la tecnología y el entretenimiento digital.
                </p>
              </div>
            </div>
          </HudFrame>

          {/* Sponsorship Kit */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                <span className="text-foreground">Kit de</span> <span className="text-primary">Sponsor</span>
              </h2>
              <p className="text-muted-foreground">Todo lo que incluye tu patrocinio</p>
            </div>

            <HudFrame className="border-primary/40 bg-gradient-to-br from-primary/5 to-secondary/5 mb-8">
              <div className="text-center mb-8">
                <div className="inline-block bg-primary/20 border border-primary/40 rounded-lg px-6 py-4 mb-4">
                  <span className="text-sm text-muted-foreground block mb-1">Inversión</span>
                  <span className="text-4xl md:text-5xl font-bold text-primary">$30.000</span>
                  <span className="text-xl text-muted-foreground ml-2">ARS</span>
                </div>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Una inversión accesible para conectar con la comunidad de gamedevs de la región.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {kitBenefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </HudFrame>

            {/* Benefits checklist visual */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <HudFrame>
                <h3 className="text-lg font-semibold text-foreground mb-4">Tu marca obtendrá:</h3>
                <ul className="space-y-3">
                  {[
                    "Logo en sitio web oficial",
                    "Mención en ceremonias",
                    "Presencia en streaming",
                    "Anuncios en pantalla principal",
                    "Networking con la comunidad",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </HudFrame>

              <HudFrame>
                <h3 className="text-lg font-semibold text-foreground mb-4">¿Por qué patrocinar?</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">01.</span>
                    <span>Visibilidad directa ante profesionales y estudiantes del sector tecnológico.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">02.</span>
                    <span>Asociación de marca con innovación, creatividad y comunidad.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">03.</span>
                    <span>Conexión con potenciales talentos para tu empresa.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">04.</span>
                    <span>Apoyo al desarrollo de la industria de videojuegos regional.</span>
                  </li>
                </ul>
              </HudFrame>
            </div>

            {/* Uso de Fondos */}
            <HudFrame label="Uso de Fondos" className="mb-12">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 text-center">Inversión en la Comunidad</h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                <p>
                  Todo el apoyo recibido por parte de nuestros sponsors se reinvierte directamente en elevar la calidad del evento y fortalecer el ecosistema local de desarrollo de videojuegos. Nuestra gestión es transparente y enfocada en cuatro pilares fundamentales:
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="space-y-3">
                    <h4 className="text-secondary font-bold flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      Logística y Confort
                    </h4>
                    <p className="text-sm">
                      Garantizamos que los participantes tengan un espacio óptimo durante las 48 horas: conectividad de alta velocidad, zonas de descanso adecuadas y servicios de catering (desayunos, almuerzos y cenas) para que solo se preocupen por crear.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-primary font-bold flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      Premios y Reconocimientos
                    </h4>
                    <p className="text-sm">
                      Buscamos incentivar el talento mediante premios que ayuden a los equipos a seguir desarrollando sus proyectos, además de kits de bienvenida y materiales que hacen de la Game Jam una experiencia memorable.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-secondary font-bold flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      Infraestructura y Técnica
                    </h4>
                    <p className="text-sm">
                      Cubrimos los costos operativos de las instalaciones, sistemas de acreditación, seguridad y el soporte técnico necesario para que el desarrollo no se detenga en ningún momento del fin de semana.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-primary font-bold flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      Difusión y Comunidad
                    </h4>
                    <p className="text-sm">
                      Invertimos en la generación de contenido, fotografía, video y streaming para que el trabajo de los participantes llegue a más personas, empresas y potenciales inversores del sector.
                    </p>
                  </div>
                </div>

                <p className="text-center pt-4 italic text-sm">
                  Al ser una organización sin fines de lucro, cada peso aportado tiene como único fin el crecimiento de la industria regional.
                </p>
              </div>
            </HudFrame>
          </div>

          {/* CTA Section */}
          <HudFrame className="text-center bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-secondary/40">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">¿Querés ser sponsor?</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Contactanos para más información sobre cómo tu marca puede ser parte de la Paraná Game Jam 2026.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-[#1ecf7a] uppercase tracking-wider px-8 font-bold"
              >
                <a href="mailto:contacto@paranagamejam.com">Envianos un Correo</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary/10 uppercase tracking-wider px-8 bg-transparent font-bold"
              >
                <a href="https://wa.me/+5493434513982" target="_blank" rel="noopener noreferrer">
                  Habla por WhatsApp
                </a>
              </Button>
            </div>
          </HudFrame>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Button asChild variant="ghost" className="text-muted-foreground hover:text-primary">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al Inicio
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
