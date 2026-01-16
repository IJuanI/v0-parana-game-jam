import Image from "next/image"

interface SponsorLogoProps {
  name: string
  logo: string
  tier: "gold" | "silver" | "bronze"
  placeholder?: string
}

export function SponsorLogo({ name, logo, tier, placeholder }: SponsorLogoProps) {
  const sizeClasses = {
    gold: "h-16 md:h-20",
    silver: "h-12 md:h-16",
    bronze: "h-10 md:h-12",
  }

  return (
    <div className="relative group">
      <div
        className={`${sizeClasses[tier]} aspect-[3/1] relative transition-all duration-300 opacity-70 hover:opacity-100`}
      >
        <Image src={logo || "/placeholder.svg"} alt={name} fill className="object-contain" />
      </div>
      {placeholder && (
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[12pt] text-muted-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          {placeholder}
        </div>
      )}
    </div>
  )
}
