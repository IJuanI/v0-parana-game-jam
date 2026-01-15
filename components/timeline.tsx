import { HudFrame } from "./hud-frame"

const events = [
  {
    date: "30 ENE",
    time: "16:00",
    title: "Disertación de estudio de videojuegos local",
    description: "",
  },
  {
    date: "30 ENE",
    time: "16:30",
    title: "Apertura & Keynote",
    description: "Inicio del evento, presentación del tema y formación de equipos",
  },
  {
    date: "30 ENE",
    time: "17:00 - 18:00",
    title: "Brainstorming",
    description: "Cada equipo define la idea de su juego",
  },
  {
    date: "30 ENE",
    time: "18:00",
    title: "Presentación de Equipos",
    description: "Un representante de cada equipo presenta su idea y equipo",
  },
  {
    date: "31 ENE",
    time: "Todo el día",
    title: "Jornada de Desarrollo",
    description: "Desarrollo continuo, con mentores a disposición",
  },
  {
    date: "01 FEB",
    time: "16:00",
    title: "Entrega de Proyectos",
    description: "Fecha límite para subir los juegos a la plataforma",
  },
  {
    date: "01 FEB",
    time: "17:00",
    title: "Presentaciones & Cierre",
    description: "Demos de los juegos y ceremonia de clausura",
  },
]

export function Timeline() {
  return (
    <HudFrame label="Cronograma" className="w-full">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[70px] md:left-[100px] top-0 bottom-0 w-px bg-border" />

        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={index} className="flex gap-4 md:gap-8 relative">
              <div className="w-16 md:w-24 flex-shrink-0 text-right pr-2">
                <div className="text-primary font-mono text-sm md:text-base font-bold">{event.date}</div>
                <div className="text-muted-foreground text-xs md:text-sm font-mono">{event.time}</div>
              </div>

              {/* Dot */}
              <div className="absolute left-[66px] md:left-[96px] top-1 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(74,222,128,0.5)]" />

              <div className="flex-1 pl-6 md:pl-8">
                <h4 className="text-foreground font-semibold text-sm md:text-base">{event.title}</h4>
                <p className="text-muted-foreground text-xs md:text-sm mt-1">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </HudFrame>
  )
}
