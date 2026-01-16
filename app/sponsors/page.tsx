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
  Megaphone,
  CheckCircle,
  TrendingUp,
  Target,
  Sparkles,
} from "lucide-react"

const ggjStats = [
  { value: "900+", label: "Sedes en el mundo", icon: Globe },
  { value: "40,000+", label: "Participantes globales", icon: Users },
  { value: "8,000+", label: "Juegos creados", icon: Trophy },
  { value: "100+", label: "Países participantes", icon: Target },
]

const localStats = [
  { value: "[NÚMERO]", label: "Participantes locales", icon: Users },
  { value: "[NÚMERO]", label: "Desarrolladores Paraná", icon: Trophy },
  { value: "[NÚMERO]", label: "Empresas participantes", icon: Target },
  { value: "[NÚMERO]", label: "Proyectos esperados", icon: Sparkles },
]

const regionalStats = [
  { value: "[NÚMERO]", label: "Participantes en la región", icon: Globe },
  { value: "[NÚMERO]", label: "Sedes regionales", icon: Users },
  { value: "[NÚMERO]", label: "Años de impacto", icon: TrendingUp },
  { value: "[NÚMERO]", label: "Crecimiento anual", icon: Target },
]

const kitBenefits = [
  {
    icon: Monitor,
    title: "Presencia en el Sitio Web",
    description: "Tu logo destacado en nuestra página oficial durante todo el evento y posteriores ediciones.",
  },
  {
    icon: Megaphone,
    title: "Redes Sociales",
    description: "Publicaciones dedicadas mencionando a tu marca en todas nuestras redes sociales.",
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
              Conectá tu marca con la comunidad de desarrollo de videojuegos más grande del mundo.
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
          </div>

          {/* Local Stats */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">
              <span className="text-primary">Números</span> <span className="text-foreground">Locales</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {localStats.map((stat, index) => (
                <HudFrame key={index} className="text-center py-6">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </HudFrame>
              ))}
            </div>
          </div>

          {/* Regional Stats */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">
              <span className="text-secondary">Números</span> <span className="text-foreground">Regionales</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {regionalStats.map((stat, index) => (
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
                  Una inversión accesible para conectar con la comunidad tech y gaming de la región.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    "Publicaciones en redes sociales",
                    "Mención en ceremonias",
                    "Presencia en streaming",
                    "Anuncios en pantalla principal",
                    "Networking con la comunidad tech",
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
                    <span>Apoyo al desarrollo de la industria tech regional.</span>
                  </li>
                </ul>
              </HudFrame>
            </div>

            {/* Uso de Fondos */}
            <HudFrame label="Uso de Fondos" className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">¿Cómo se utilizan los fondos?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-secondary mb-4">Presupuesto Estimado</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-card rounded">
                      <span className="text-muted-foreground">[CONCEPTO 1]</span>
                      <span className="text-foreground font-mono">[MONTO 1]</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-card rounded">
                      <span className="text-muted-foreground">[CONCEPTO 2]</span>
                      <span className="text-foreground font-mono">[MONTO 2]</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-card rounded">
                      <span className="text-muted-foreground">[CONCEPTO 3]</span>
                      <span className="text-foreground font-mono">[MONTO 3]</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-card rounded border border-primary/30">
                      <span className="text-foreground font-semibold">Total</span>
                      <span className="text-primary font-mono font-bold">[TOTAL]</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-4">Desglose de Inversión</h4>
                  <p className="text-muted-foreground mb-4">
                    Tu inversión se destina a garantizar una experiencia de clase mundial para todos los participantes:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>[DETALLE DE USO 1]</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>[DETALLE DE USO 2]</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>[DETALLE DE USO 3]</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>[DETALLE DE USO 4]</span>
                    </li>
                  </ul>
                </div>
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
                <a href="mailto:sponsorship@paranagamejam.com">Contratá tu Sponsorship Ahora</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary/10 uppercase tracking-wider px-8 bg-transparent font-bold"
              >
                <a href="https://wa.me/5493435000000" target="_blank" rel="noopener noreferrer">
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
