"use client"

import { useState, useEffect } from "react"
import { HudFrame } from "./hud-frame"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const targetDate = new Date("2025-01-30T16:00:00-03:00").getTime()

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!mounted) {
    return (
      <HudFrame label="Cuenta Regresiva" className="w-full">
        <div className="grid grid-cols-4 gap-4">
          {["Días", "Horas", "Min", "Seg"].map((label) => (
            <div key={label} className="text-center">
              <div className="text-4xl md:text-6xl font-mono text-primary font-bold">--</div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-2">{label}</div>
            </div>
          ))}
        </div>
      </HudFrame>
    )
  }

  const timeUnits = [
    { label: "Días", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Seg", value: timeLeft.seconds },
  ]

  return (
    <HudFrame label="Cuenta Regresiva" className="w-full">
      <div className="grid grid-cols-4 gap-4">
        {timeUnits.map(({ label, value }) => (
          <div key={label} className="text-center">
            <div className="text-4xl md:text-6xl font-mono text-primary font-bold tabular-nums">
              {String(value).padStart(2, "0")}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-2">{label}</div>
          </div>
        ))}
      </div>
    </HudFrame>
  )
}
