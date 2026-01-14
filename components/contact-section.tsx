import { HudFrame } from "./hud-frame"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, Phone } from "lucide-react"

const contactMethods = [
  {
    icon: MessageCircle,
    label: "Discord",
    value: "discord.gg/paranagamejam",
    href: "https://discord.gg",
    description: "Únete a nuestra comunidad",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contacto@paranagamejam.com",
    href: "mailto:contacto@paranagamejam.com",
    description: "Consultas generales",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+54 343 XXX-XXXX",
    href: "https://wa.me/54343XXXXXXX",
    description: "Atención directa",
  },
]

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-secondary">Contacto</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ¿Tenés preguntas sobre el evento? ¡Contactanos por cualquiera de estos medios!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <HudFrame key={index} className="text-center hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-secondary/10 flex items-center justify-center">
                <method.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-foreground font-semibold mb-1">{method.label}</h3>
              <p className="text-muted-foreground text-xs mb-3">{method.description}</p>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="text-primary hover:text-primary/80 font-mono text-xs"
              >
                <a href={method.href} target="_blank" rel="noopener noreferrer">
                  {method.value}
                </a>
              </Button>
            </HudFrame>
          ))}
        </div>
      </div>
    </section>
  )
}
