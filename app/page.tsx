import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { Timeline } from "@/components/timeline"
import { MentorsSection } from "@/components/mentors-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden scanline">
      <Navigation />
      <HeroSection />
      <AboutSection />

      {/* Timeline Section */}
      <section id="cronograma" className="hud-grid hex-pattern py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">Cronograma</span> <span className="text-foreground">del Evento</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              48 horas de desarrollo intenso con actividades organizadas para maximizar tu creatividad.
            </p>
          </div>
          <Timeline />
        </div>
      </section>

      <MentorsSection />
      <SponsorsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
