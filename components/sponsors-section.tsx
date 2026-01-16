import { HudFrame } from "./hud-frame"
import { SponsorLogo } from "./sponsor-logo"
import { Button } from "./ui/button"
import Link from "next/link"

const goldSponsors = [
  {
    name: "Entre Ríos GameDevs",
    logo: "/logos/organizadores/ergd-logo-color.svg",
    placeholder: "Entre Ríos GameDevs",
  },
  {
    name: "Polo Tecnológico del Paraná",
    logo: "/logos/organizadores/Polo Tec.PNG",
    placeholder: "Polo Tecnologico",
  },
  { name: "Secretaria de Ciencia, Tecnología e Innovación", logo: "/logos/organizadores/ER-CyT.png", placeholder: "Ministerio de Desarrollo Económico - Gobierno de Entre Ríos" },
  { name: "FCyT - UADER", logo: "/logos/organizadores/FCyT.svg", placeholder: "Facultad de Ciencia y Tecnología - UADER" },
  { name: "Club de Emprendedores", logo: "/logos/organizadores/Club-Emprendedores.png", placeholder: "Club de Emprendedores" },
]

const silverSponsors: { name: string; logo: string; placeholder: string }[] = []

export function SponsorsSection() {
  return (
    <section id="sponsors" className="py-20 px-4 hud-grid">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            <span className="text-secondary text-glow-purple">Sponsors</span>{" "}
            <span className="text-foreground">& Colaboradores</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-[family-name:var(--font-inter)]">
            Gracias a las organizaciones e instituciones que hacen posible este evento.
          </p>
        </div>

        <HudFrame label="Organizadores" className="mb-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 py-4">
            {goldSponsors.map((sponsor, index) => (
              <SponsorLogo key={index} {...sponsor} tier="gold" />
            ))}
          </div>
        </HudFrame>

        {silverSponsors.length > 0 && (
          <HudFrame label="Auspician" className="mb-8">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 py-4">
              {silverSponsors.map((sponsor, index) => (
                <SponsorLogo key={index} {...sponsor} tier="silver" />
              ))}
            </div>
          </HudFrame>
        )}

        <div className="text-center">
          <p className="text-muted-foreground mb-4">¿Interesado en patrocinar el evento?</p>
          <Button
            asChild
            className="bg-secondary text-secondary-foreground hover:bg-[#6d3fb5] uppercase tracking-wider font-bold"
          >
            <Link href="/sponsors">Ser Sponsor</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
