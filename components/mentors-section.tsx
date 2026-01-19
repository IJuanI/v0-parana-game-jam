"use client"

import { MentorCard } from "./mentor-card"
import { Gamepad2, Code2, Palette, Music } from "lucide-react"

const mentors = [
  {
    name: "Lionel Angerami",
    role: "Game Designer",
    specialty: "Diseño de niveles",
    icon: Gamepad2,
    discordId: "163002286551859210",
  },
  {
    name: "Juan Cruz Leiva",
    role: "Programador",
    specialty: "Unity / C#",
    icon: Code2,
    discordId: "286572944144990208",
  },
  {
    name: "Nombre del Mentor",
    role: "Programador",
    specialty: "Godot / Unreal",
    icon: Code2,
    contactLink: "#",
  },
  {
    name: "Martín Valpondi",
    role: "Diseño UI/UX",
    specialty: "Experiencia de usuario",
    icon: Palette,
    contactLink: "#",
  },
  {
    name: "Leandro Gomez",
    role: "Sound Designer",
    specialty: "Audio para juegos",
    icon: Music,
    contactLink: "https://discord.gg/Kh6JDj44cE",
    contactLabel: "Mentorias por Discord",
  }
]

export function MentorsSection() {
  return (
    <section id="mentores" className="hud-grid hex-pattern py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-secondary">Mentores</span> <span className="text-foreground">del Evento</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Profesionales de la industria que te guiarán durante el evento. Consultá cualquier duda
            sobre diseño, programación, arte o audio.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {mentors.map((mentor, index) => (
            <MentorCard key={index} {...mentor} />
          ))}
        </div>
      </div>
    </section>
  )
}
