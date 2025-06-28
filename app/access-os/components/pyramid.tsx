"use client"

interface PyramidProps {
  currentTier?: string
  showLabels?: boolean
  size?: "sm" | "md" | "lg"
}

const tiers = [
  {
    id: "trailblazer",
    label: "Trailblazer",
    description: "Leading green innovation",
    level: 4,
  },
  {
    id: "accelerator",
    label: "Accelerator",
    description: "Advanced green expertise",
    level: 3,
  },
  {
    id: "builder",
    label: "Builder",
    description: "Building green foundations",
    level: 2,
  },
  {
    id: "explorer",
    label: "Explorer",
    description: "Starting green journey",
    level: 1,
  },
]

export default function Pyramid({ currentTier, showLabels = true, size = "md" }: PyramidProps) {
  const sizeClasses = {
    sm: { base: "w-32", step: 8 },
    md: { base: "w-48", step: 12 },
    lg: { base: "w-64", step: 16 },
  }

  const { base, step } = sizeClasses[size]

  return (
    <div className="flex flex-col items-center space-y-2">
      {tiers.map((tier, index) => {
        const isActive = currentTier?.toLowerCase() === tier.id
        const width = `w-${Number.parseInt(base.slice(2)) - index * step}`

        return (
          <div key={tier.id} className="flex flex-col items-center">
            <div
              className={`
                ${width} h-12 flex items-center justify-center rounded-lg transition-all duration-300
                ${
                  isActive
                    ? "bg-octopus-accent text-white ring-4 ring-white shadow-lg scale-105"
                    : "bg-octopus-primary text-white hover:bg-opacity-80"
                }
              `}
              style={{
                width: `${Number.parseInt(base.slice(2)) - index * step}px`,
              }}
            >
              {showLabels && (
                <div className="text-center">
                  <div className="font-semibold text-sm">{tier.label}</div>
                  <div className="text-xs opacity-90">{tier.description}</div>
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
