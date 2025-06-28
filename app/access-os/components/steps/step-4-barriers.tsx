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
        <h1 className="text-3xl font-bold text-octopus-heading mb-4">Barriers & Resources</h1>
        <p className="text-lg text-octopus-textDark">
          What challenges might you face? We'll provide targeted support tips.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-octopus-textDark">Select any barriers that apply to you</CardTitle>
          <p className="text-sm text-gray-600">
            Don't worry - for each barrier you select, we'll provide specific tips and resources to help overcome it.
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {barriers.map((barrier) => (
              <div key={barrier.key} className="space-y-3">
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                  <Checkbox
                    id={barrier.key}
                    checked={selectedBarriers.includes(barrier.key)}
                    onCheckedChange={(checked) => handleBarrierChange(barrier.key, checked as boolean)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <Label
                      htmlFor={barrier.key}
                      className="flex items-center space-x-2 cursor-pointer text-octopus-textDark"
                    >
                      <span className="text-lg">{barrier.icon}</span>
                      <span className="font-medium">{barrier.label}</span>
                    </Label>
                  </div>
                </div>

                {selectedBarriers.includes(barrier.key) && (
                  <Card className="ml-8 bg-blue-50 border-blue-200">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-600">💡</span>
                        <div>
                          <h4 className="font-medium text-blue-900 mb-1">Resource Tip</h4>
                          <p className="text-blue-800 text-sm">{barrier.tip}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {selectedBarriers.length === 0 && (
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <span className="text-green-600">🎉</span>
              <p className="text-green-800 text-sm">
                Great! It looks like you're ready to dive into green career opportunities. We'll still provide general
                resources and support in your action plan.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {selectedBarriers.length > 0 && (
        <Card className="bg-purple-50 border-purple-200">
          <CardContent className="p-4">
            <h3 className="font-semibold text-purple-900 mb-2">🛠️ Your Support Plan</h3>
            <p className="text-purple-800 text-sm mb-2">
              We've identified {selectedBarriers.length} area{selectedBarriers.length > 1 ? "s" : ""} where we can
              provide targeted support:
            </p>
            <div className="flex flex-wrap gap-2">
              {selectedBarriers.map((barrier) => (
                <Badge key={barrier} variant="secondary" className="bg-purple-100 text-purple-800">
                  {barriers.find((b) => b.key === barrier)?.label}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={handleNext} className="bg-purple-600 hover:bg-purple-700">
          Continue
        </Button>
      </div>
    </div>
  )
}
