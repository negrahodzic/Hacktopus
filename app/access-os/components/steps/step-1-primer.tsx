"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useWizard } from "../modal-wizard"

const skillTiers = [
  {
    level: "Tier 4",
    title: "Specialist Expertise",
    description: "Solar design, policy strategy, advanced technical skills - the pinnacle of green career expertise",
    color: "bg-emerald-600",
    icon: "🎯",
  },
  {
    level: "Tier 3",
    title: "Upskilling",
    description: "Carbon accounting, retrofit tech, sector knowledge - building specialized green skills",
    color: "bg-emerald-500",
    icon: "📈",
  },
  {
    level: "Tier 2",
    title: "Core Skills",
    description: "Data analysis, materials knowledge, project management - essential professional capabilities",
    color: "bg-emerald-400",
    icon: "🔧",
  },
  {
    level: "Tier 1",
    title: "Green Mindset",
    description: "Positivity, solutions thinking, environmental awareness - the foundation of green careers",
    color: "bg-emerald-300",
    icon: "🌱",
  },
]

export default function Step1Primer() {
  const { nextStep, prevStep } = useWizard()

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-octopus-heading mb-4">Green Skills Pyramid</h1>
        <p className="text-lg text-octopus-textDark">Understanding the building blocks of green careers</p>
      </div>

      <div className="bg-gradient-to-b from-emerald-50 to-white p-6 rounded-xl">
        <div className="space-y-4">
          {skillTiers.map((tier, index) => (
            <div key={index} className="flex items-center justify-center">
              <Card className={`w-full max-w-${4 - index}xl ${tier.color} text-white border-0 shadow-lg`}>
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center space-x-3 mb-3">
                    <span className="text-2xl">{tier.icon}</span>
                    <Badge variant="secondary" className="bg-white/20 text-white">
                      {tier.level}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{tier.title}</h3>
                  <p className="text-sm opacity-90 leading-relaxed">{tier.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">💡 Remember</h3>
        <p className="text-blue-800 text-sm">
          Every green career journey starts with the right mindset. You don't need to be at Tier 4 to make an impact -
          there are meaningful opportunities at every level!
        </p>
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep} className="bg-purple-600 hover:bg-purple-700">
          Continue to Assessment
        </Button>
      </div>
    </div>
  )
}
