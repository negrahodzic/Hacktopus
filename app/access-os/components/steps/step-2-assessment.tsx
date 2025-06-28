"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { useWizard } from "../modal-wizard"

const skillsToAssess = [
  { key: "listening", label: "Listening", description: "Understanding others and taking in information" },
  { key: "speaking", label: "Speaking", description: "Communicating ideas clearly and confidently" },
  { key: "problemSolving", label: "Problem-Solving", description: "Finding creative solutions to challenges" },
  { key: "creativity", label: "Creativity", description: "Thinking outside the box and innovating" },
  { key: "teamwork", label: "Teamwork", description: "Collaborating effectively with others" },
  { key: "leadership", label: "Leadership", description: "Guiding and inspiring others" },
  { key: "stayingPositive", label: "Staying Positive", description: "Maintaining optimism in challenging situations" },
  { key: "aimingHigh", label: "Aiming High", description: "Setting ambitious goals and striving for excellence" },
]

const getSkillLevel = (value: number) => {
  if (value <= 1) return { label: "Developing", color: "bg-red-100 text-red-800" }
  if (value <= 2) return { label: "Basic", color: "bg-orange-100 text-orange-800" }
  if (value <= 3) return { label: "Good", color: "bg-yellow-100 text-yellow-800" }
  if (value <= 4) return { label: "Strong", color: "bg-blue-100 text-blue-800" }
  return { label: "Expert", color: "bg-green-100 text-green-800" }
}

export default function Step2Assessment() {
  const { data, updateData, nextStep, prevStep } = useWizard()
  const [skills, setSkills] = useState<{ [key: string]: number }>(data.skills)
  const [lowSkills, setLowSkills] = useState<string[]>([])

  useEffect(() => {
    const low = Object.entries(skills)
      .filter(([_, value]) => value <= 2)
      .map(([key, _]) => skillsToAssess.find((s) => s.key === key)?.label || key)
    setLowSkills(low)
  }, [skills])

  const handleSkillChange = (skillKey: string, value: number[]) => {
    setSkills((prev) => ({ ...prev, [skillKey]: value[0] }))
  }

  const handleNext = () => {
    updateData({ skills })
    nextStep()
  }

  const allSkillsRated = skillsToAssess.every((skill) => skills[skill.key] > 0)

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-octopus-heading mb-4">Self-Assessment</h1>
        <p className="text-lg text-octopus-textDark">Rate your current skills from 1 (developing) to 5 (expert)</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {skillsToAssess.map((skill) => {
          const currentValue = skills[skill.key] || 1
          const level = getSkillLevel(currentValue)

          return (
            <Card key={skill.key} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-octopus-textDark">{skill.label}</CardTitle>
                  <Badge className={level.color}>{level.label}</Badge>
                </div>
                <p className="text-sm text-octopus-textDark">{skill.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Slider
                    value={[currentValue]}
                    onValueChange={(value) => handleSkillChange(skill.key, value)}
                    max={5}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Developing</span>
                    <span>Basic</span>
                    <span>Good</span>
                    <span>Strong</span>
                    <span>Expert</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {lowSkills.length > 0 && (
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🤖</span>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">AI Learning Suggestions</h3>
                <p className="text-blue-800 text-sm mb-2">
                  Based on your ratings, we'll suggest mini-lessons for: <strong>{lowSkills.join(", ")}</strong>
                </p>
                <p className="text-blue-700 text-xs">
                  Don't worry - everyone has areas to develop! We'll provide targeted resources to help you grow.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {!allSkillsRated && (
        <Card className="bg-amber-50 border-amber-200">
          <CardContent className="p-4">
            <p className="text-amber-800 text-sm">⚠️ Please rate all skills to continue</p>
          </CardContent>
        </Card>
      )}

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={handleNext} disabled={!allSkillsRated} className="bg-purple-600 hover:bg-purple-700">
          Continue
        </Button>
      </div>
    </div>
  )
}
