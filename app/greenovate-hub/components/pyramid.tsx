"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

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
    detailedDescription: "Advanced technical expertise in specialized green fields like renewable energy system design, climate policy development, or sustainable finance strategy.",
    skills: ["Advanced technical skills", "Strategic thinking", "Innovation leadership", "Industry expertise"],
    examples: ["Chief Sustainability Officer", "Renewable Energy Systems Designer", "Climate Policy Director"],
    salaryRange: "£60,000 - £120,000+",
    timeToReach: "5-10+ years experience"
  },
  {
    id: "accelerator",
    label: "Accelerator",
    description: "Advanced green expertise",
    level: 3,
    detailedDescription: "Developing specialized knowledge in green sectors with ability to lead projects and mentor others. Ready for senior positions.",
    skills: ["Carbon accounting", "Retrofit technology", "Sector expertise", "Project leadership"],
    examples: ["Senior Sustainability Analyst", "Carbon Manager", "Green Finance Specialist"],
    salaryRange: "£40,000 - £70,000",
    timeToReach: "3-5 years experience"
  },
  {
    id: "builder",
    label: "Builder",
    description: "Building green foundations",
    level: 2,
    detailedDescription: "Solid foundation in core professional skills with growing knowledge of green practices. Ready for specialist green roles.",
    skills: ["Data analysis", "Project management", "Materials knowledge", "Sustainability basics"],
    examples: ["Sustainability Coordinator", "Junior Energy Analyst", "Environmental Consultant"],
    salaryRange: "£25,000 - £45,000",
    timeToReach: "1-3 years experience"
  },
  {
    id: "explorer",
    label: "Explorer",
    description: "Starting green journey",
    level: 1,
    detailedDescription: "Building environmental awareness and positive mindset. Perfect starting point for anyone interested in green careers.",
    skills: ["Environmental awareness", "Positive thinking", "Solutions mindset", "Basic communication"],
    examples: ["Environmental Assistant", "Sustainability Intern", "Green Team Member"],
    salaryRange: "£18,000 - £28,000",
    timeToReach: "Entry level"
  },
]

export default function Pyramid({ currentTier, showLabels = true, size = "md" }: PyramidProps) {
  const [selectedTier, setSelectedTier] = useState<typeof tiers[0] | null>(null)
  
  const sizeConfig = {
    sm: { baseWidth: 320, stepDecrease: 60 },
    md: { baseWidth: 480, stepDecrease: 80 },
    lg: { baseWidth: 600, stepDecrease: 100 },
  }

  const { baseWidth, stepDecrease } = sizeConfig[size]

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center space-y-3">
        {tiers.map((tier, index) => {
          const isActive = currentTier?.toLowerCase() === tier.id
          const isSelected = selectedTier?.id === tier.id
          // Top tier (index 0) should be smallest, bottom tier (index 3) should be largest
          const tierWidth = baseWidth - (3 - index) * stepDecrease

          return (
            <div key={tier.id} className="flex flex-col items-center">
              <div
                className={`
                  h-16 flex items-center justify-center rounded-lg transition-all duration-300 cursor-pointer
                  ${
                    isActive
                      ? "bg-octopus-green text-octopus-black ring-4 ring-octopus-green/30 shadow-lg scale-105"
                      : isSelected
                      ? "bg-octopus-green/80 text-octopus-black ring-2 ring-octopus-green/50 shadow-md"
                      : index === 0 
                        ? "bg-emerald-600 text-white hover:bg-emerald-500 hover:shadow-md"
                        : index === 1
                        ? "bg-emerald-500 text-white hover:bg-emerald-400 hover:shadow-md"
                        : index === 2
                        ? "bg-emerald-400 text-octopus-black hover:bg-emerald-300 hover:shadow-md"
                        : "bg-emerald-300 text-octopus-black hover:bg-emerald-200 hover:shadow-md"
                  }
                `}
                style={{
                  width: `${tierWidth}px`,
                }}
                onClick={() => setSelectedTier(selectedTier?.id === tier.id ? null : tier)}
                onMouseEnter={() => !selectedTier && setSelectedTier(tier)}
                onMouseLeave={() => !selectedTier && setSelectedTier(null)}
              >
                {showLabels && (
                  <div className="text-center px-4">
                    <div className="font-semibold text-sm md:text-base">{tier.label}</div>
                    <div className="text-xs md:text-sm opacity-90">{tier.description}</div>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Detailed Information Panel */}
      {selectedTier && (
        <div className="bg-octopus-dark border border-octopus-white/20 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-octopus-white">
              Tier {selectedTier.level}: {selectedTier.label}
            </h3>
            <div className="flex items-center space-x-2">
              <span className="bg-octopus-green text-octopus-black px-3 py-1 rounded-full text-sm font-medium">
                {selectedTier.salaryRange}
              </span>
              <span className="bg-octopus-pink text-octopus-white px-3 py-1 rounded-full text-sm">
                {selectedTier.timeToReach}
              </span>
            </div>
          </div>
          
          <p className="text-octopus-white/80 mb-4 leading-relaxed">
            {selectedTier.detailedDescription}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-octopus-white mb-2">Key Skills:</h4>
              <div className="space-y-1">
                {selectedTier.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-octopus-green rounded-full"></div>
                    <span className="text-sm text-octopus-white/70">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-octopus-white mb-2">Example Roles:</h4>
              <div className="space-y-1">
                {selectedTier.examples.map((example, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-octopus-pink rounded-full"></div>
                    <span className="text-sm text-octopus-white/70">{example}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-octopus-darkLight rounded-lg">
            <p className="text-octopus-white/80 text-sm">
              💡 <strong className="text-octopus-green">Click on different tiers</strong> to explore the full career progression pathway!
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
