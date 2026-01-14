import { HudFrame } from "./hud-frame"
import { SponsorLogo } from "./sponsor-logo"

const goldSponsors = [
  { name: "ERGD - Entre Ríos GameDevs", logo: "/ergd-gaming-community-logo.jpg", placeholder: "REEMPLAZAR: Logo ERGD" },
  { name: "Gobierno de Entre Ríos", logo: "/government-institution-logo.jpg", placeholder: "REEMPLAZAR: Logo Gob. ER" },
]

const silverSponsors = [
  { name: "Polo Tecnológico del Paraná", logo: "/technology-hub-logo.jpg", placeholder: "REEMPLAZAR: Logo Polo Tec" },
  { name: "FCyT - UADER", logo: "/university-faculty-logo.jpg", placeholder: "REEMPLAZAR: Logo FCyT" },
  { name: "Mirador TEC", logo: "/tech-venue-logo.jpg", placeholder: "REEMPLAZAR: Logo Mirador" },
]

const bronzeSponsors = [
  { name: "Sponsor Bronce 1", logo: "/abstract-tech-logo-1.png", placeholder: "REEMPLAZAR: Logo sponsor 1" },
  { name: "Sponsor Bronce 2", logo: "/gaming-company-logo.png", placeholder: "REEMPLAZAR: Logo sponsor 2" },
  { name: "Sponsor Bronce 3", logo: "/software-company-logo.png", placeholder: "REEMPLAZAR: Logo sponsor 3" },
]

export function SponsorsSection() {
  return (
    <section id="sponsors" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Sponsors</span> <span className="text-foreground">& Colaboradores</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Gracias a las organizaciones e instituciones que hacen posible este evento.
          </p>
        </div>

        <HudFrame label="Organizadores Principales" className="mb-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 py-4">
            {goldSponsors.map((sponsor, index) => (
              <SponsorLogo key={index} {...sponsor} tier="gold" />
            ))}
          </div>
        </HudFrame>

        <HudFrame label="Auspiciantes" className="mb-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 py-4">
            {silverSponsors.map((sponsor, index) => (
              <SponsorLogo key={index} {...sponsor} tier="silver" />
            ))}
          </div>
        </HudFrame>

        <HudFrame label="Colaboradores">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 py-4">
            {bronzeSponsors.map((sponsor, index) => (
              <SponsorLogo key={index} {...sponsor} tier="bronze" />
            ))}
          </div>
        </HudFrame>
      </div>
    </section>
  )
}
