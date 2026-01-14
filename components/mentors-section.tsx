import { MentorCard } from "./mentor-card"

const mentors = [
  {
    name: "Nombre del Mentor",
    role: "Game Designer",
    specialty: "Diseño de niveles",
    image: "/professional-game-designer-portrait.jpg",
    placeholder: "REEMPLAZAR: Foto mentor 1",
  },
  {
    name: "Nombre del Mentor",
    role: "Programador",
    specialty: "Unity / C#",
    image: "/professional-programmer.png",
    placeholder: "REEMPLAZAR: Foto mentor 2",
  },
  {
    name: "Nombre del Mentor",
    role: "Artista 2D/3D",
    specialty: "Arte conceptual",
    image: "/professional-digital-artist-portrait.jpg",
    placeholder: "REEMPLAZAR: Foto mentor 3",
  },
  {
    name: "Nombre del Mentor",
    role: "Sound Designer",
    specialty: "Audio para juegos",
    image: "/professional-sound-designer.png",
    placeholder: "REEMPLAZAR: Foto mentor 4",
  },
  {
    name: "Nombre del Mentor",
    role: "Productor",
    specialty: "Gestión de proyectos",
    image: "/professional-project-manager.png",
    placeholder: "REEMPLAZAR: Foto mentor 5",
  },
  {
    name: "Nombre del Mentor",
    role: "Narrativa",
    specialty: "Storytelling interactivo",
    image: "/professional-writer-portrait.png",
    placeholder: "REEMPLAZAR: Foto mentor 6",
  },
]

export function MentorsSection() {
  return (
    <section id="mentores" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-secondary">Mentores</span> <span className="text-foreground">del Evento</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Profesionales de la industria que te guiarán durante las 48 horas de desarrollo. Consultá cualquier duda
            sobre diseño, programación, arte o audio.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {mentors.map((mentor, index) => (
            <MentorCard key={index} {...mentor} />
          ))}
        </div>
      </div>
    </section>
  )
}
