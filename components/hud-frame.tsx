import type React from "react"
import { cn } from "@/lib/utils"

interface HudFrameProps {
  children: React.ReactNode
  className?: string
  label?: string
}

export function HudFrame({ children, className, label }: HudFrameProps) {
  return (
    <div className={cn("relative hud-border hud-corner bg-card/50 backdrop-blur-sm p-6", className)}>
      {label && (
        <div className="absolute -top-3 left-4 bg-background px-2 text-xs text-primary font-mono uppercase tracking-widest">
          {label}
        </div>
      )}
      {children}
    </div>
  )
}
