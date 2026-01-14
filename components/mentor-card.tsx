import Image from "next/image"
import { HudFrame } from "./hud-frame"

interface MentorCardProps {
  name: string
  role: string
  specialty: string
  image: string
  placeholder?: string
}

export function MentorCard({ name, role, specialty, image, placeholder }: MentorCardProps) {
  return (
    <HudFrame className="text-center group hover:border-primary/50 transition-all duration-300">
      <div className="relative w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full border-2 border-primary/30 group-hover:border-primary transition-colors">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        {placeholder && (
          <div className="absolute inset-0 bg-card/80 flex items-center justify-center">
            <span className="text-[8px] text-muted-foreground text-center px-1">{placeholder}</span>
          </div>
        )}
      </div>
      <h4 className="text-foreground font-semibold text-sm">{name}</h4>
      <p className="text-secondary text-xs mt-1">{role}</p>
      <p className="text-muted-foreground text-xs mt-1">{specialty}</p>
    </HudFrame>
  )
}
