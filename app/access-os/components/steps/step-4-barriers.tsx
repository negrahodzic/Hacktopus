"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { useWizard } from "../modal-wizard"

const barriers = [
  {
    key: "cost",
    label: "Cost",
    icon: "💰",
    tip: "Look for free online courses, government-funded training programs, and employer-sponsored learning opportunities. Many green skills can be developed through free resources.",
  },
  {
    key: "time",
    label: "Time",
    icon: "⏰",
    tip: "Start with micro-learning - 15 minutes daily can build significant skills over time. Many courses offer flexible, self-paced learning that fits around your schedule.",
  },
  {
    key: "childcare",
    label: "Childcare",
    icon: "👶",
    tip: "Look for training providers that offer childcare support, online learning options, or family-friendly scheduling. Some programs specifically support parents returning to work.",
  },
  {
    key: "digital",
    label: "Digital Access",
    icon: "💻",
    tip: "Many libraries offer free computer and internet access. Some training programs provide equipment loans. Community centers often have digital inclusion programs.",
  },
  {
    key: "language",
    label: "Language",
    icon: "🗣️",
    tip: "Look for training in your preferred language, or programs that offer language support alongside technical training. Many employers value multilingual skills in green careers.",
  },
  {
    key: "imposter",
    label: "Imposter Syndrome",
    icon: "🤔",
    tip: "You belong in green careers! Connect with mentors who've felt the same way, join peer support groups, and remember that diverse perspectives are essential for solving climate challenges.",
  },
  {
    key: "confidence",
    label: "Lack of Confidence",
    icon: "💪",
    tip: "Build confidence through small wins and skill-building. Join supportive communities, celebrate your progress, and remember that everyone starts somewhere. Your unique background is an asset.",
  },
]

export default function Step4Barriers() {
  const { data, updateData, nextStep, prevStep } = useWizard()
  const [selectedBarriers, setSelectedBarriers] = useState<string[]>(data.barriers)

  const handleBarrierChange = (barrier: string, checked: boolean) => {
    if (checked) {
      setSelectedBarriers([...selectedBarriers, barrier])
    } else {
      setSelectedBarriers(selectedBarriers.filter((b) => b !== barrier))
    }
  }

  const handleNext = () => {
    updateData({ barriers: selectedBarriers })
    nextStep()
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-octopus-white mb-4">Barriers & Resources</h1>
        <p className="text-lg text-octopus-white/80">
          What challenges might you face? We'll provide targeted support tips.
        </p>
      </div>

      <div className="bg-octopus-dark p-6 rounded-xl border border-octopus-white/20">
        <h2 className="text-xl font-semibold text-octopus-white mb-2">Select any barriers that apply to you</h2>
        <p className="text-sm text-octopus-white/60 mb-6">
          Don't worry - for each barrier you select, we'll provide specific tips and resources to help overcome it.
        </p>
        
        <div className="space-y-4">
          {barriers.map((barrier) => (
            <div key={barrier.key} className="space-y-3">
              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-octopus-white/5 border border-octopus-white/10">
                <Checkbox
                  id={barrier.key}
                  checked={selectedBarriers.includes(barrier.key)}
                  onCheckedChange={(checked) => handleBarrierChange(barrier.key, checked as boolean)}
                  className="mt-1 border-octopus-white data-[state=checked]:bg-octopus-green data-[state=checked]:border-octopus-green"
                />
                <div className="flex-1">
                  <Label
                    htmlFor={barrier.key}
                    className="flex items-center space-x-2 cursor-pointer text-octopus-white"
                  >
                    <span className="text-lg">{barrier.icon}</span>
                    <span className="font-medium">{barrier.label}</span>
                  </Label>
                </div>
              </div>

              {selectedBarriers.includes(barrier.key) && (
                <div className="ml-8 bg-octopus-darkLight p-4 rounded-lg border border-octopus-green/20">
                  <div className="flex items-start space-x-2">
                    <span className="text-octopus-green">💡</span>
                    <div>
                      <h4 className="font-medium text-octopus-white mb-1">Resource Tip</h4>
                      <p className="text-octopus-white/80 text-sm">{barrier.tip}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {selectedBarriers.length === 0 && (
        <div className="bg-octopus-dark p-4 rounded-xl border border-octopus-green/20">
          <div className="flex items-center space-x-2">
            <span className="text-octopus-green">🎉</span>
            <p className="text-octopus-white/80 text-sm">
              Great! It looks like you're ready to dive into green career opportunities. We'll still provide general
              resources and support in your action plan.
            </p>
          </div>
        </div>
      )}

      {selectedBarriers.length > 0 && (
        <div className="bg-octopus-dark p-4 rounded-xl border border-octopus-pink/20">
          <h3 className="font-semibold text-octopus-white mb-2">🛠️ Your Support Plan</h3>
          <p className="text-octopus-white/80 text-sm mb-2">
            We've identified {selectedBarriers.length} area{selectedBarriers.length > 1 ? "s" : ""} where we can
            provide targeted support:
          </p>
          <div className="flex flex-wrap gap-2">
            {selectedBarriers.map((barrier) => (
              <Badge key={barrier} className="bg-octopus-pink text-octopus-white">
                {barriers.find((b) => b.key === barrier)?.label}
              </Badge>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-between pt-4">
        <Button 
          variant="outline" 
          onClick={prevStep}
          className="border-octopus-white/20 text-octopus-white hover:bg-octopus-white/10"
        >
          Back
        </Button>
        <Button 
          onClick={handleNext} 
          className="bg-octopus-pink hover:bg-octopus-pink/90 text-octopus-white font-semibold"
        >
          Continue
        </Button>
      </div>
    </div>
  )
}
