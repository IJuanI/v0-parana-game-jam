import { LucideIcon, MessageSquare, ChevronRight } from "lucide-react"
import Link from "next/link"

interface MentorCardProps {
  name: string
  role: string
  specialty: string
  icon: LucideIcon
  contactLink?: string
}

export function MentorCard({ name, role, specialty, icon: Icon, contactLink }: MentorCardProps) {
  const CardWrapper = contactLink ? Link : "div"
  const cardProps = contactLink 
    ? { href: contactLink, target: "_blank", rel: "noopener noreferrer" } 
    : {}

  return (
    <CardWrapper 
      {...cardProps}
      className="group relative block h-full cursor-pointer"
    >
      {/* Outer glow on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-secondary/0 to-primary/0 rounded-lg opacity-0 group-hover:opacity-100 group-hover:from-primary/40 group-hover:via-secondary/40 group-hover:to-primary/40 blur-sm transition-all duration-500" />
      
      {/* Main card with clip-path for gaming aesthetic */}
      <div className="relative h-full bg-gradient-to-br from-card via-card to-muted/30 border border-border/50 group-hover:border-primary/60 transition-all duration-300 overflow-hidden"
        style={{
          clipPath: "polygon(0 12px, 12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)"
        }}
      >
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/50 group-hover:border-primary transition-colors" 
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }} />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/50 group-hover:border-primary transition-colors"
          style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} />
        
        {/* Animated scan line on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none overflow-hidden">
          <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent -translate-y-full group-hover:translate-y-[200px] transition-transform duration-1000 ease-out" />
        </div>
        
        {/* Content */}
        <div className="relative p-4 pt-5 text-center flex flex-col h-full">
          {/* Icon container with hexagonal feel */}
          <div className="relative mx-auto mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/10 border-2 border-primary/40 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(60,255,158,0.3)] transition-all duration-300 flex items-center justify-center"
              style={{
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
              }}
            >
              <Icon className="w-8 h-8 text-primary group-hover:text-primary group-hover:drop-shadow-[0_0_8px_rgba(60,255,158,0.6)] transition-all duration-300" />
            </div>
            {/* Pulsing ring effect */}
            <div className="absolute inset-0 w-16 h-16 mx-auto border border-primary/20 group-hover:border-primary/40 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500"
              style={{
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
              }}
            />
          </div>
          
          {/* Info */}
          <div className="flex-grow">
            <h4 className="text-foreground font-bold text-sm tracking-wide group-hover:text-primary transition-colors duration-300">{name}</h4>
            <p className="text-secondary text-xs mt-1.5 font-semibold uppercase tracking-wider">{role}</p>
            <p className="text-muted-foreground text-xs leading-tight mt-1">{specialty}</p>
          </div>
          
          {/* Contact CTA */}
          {contactLink && (
            <div className="mt-4 pt-3 border-t border-border/30 group-hover:border-primary/30 transition-colors">
              <div className="flex items-center justify-center gap-2 text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-300">
                <MessageSquare className="w-4 h-4" />
                <span>Contactar</span>
                <ChevronRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          )}
        </div>
        
        {/* Bottom accent bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent group-hover:via-primary transition-all duration-300" />
      </div>
    </CardWrapper>
  )
}
