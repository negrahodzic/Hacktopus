"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
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
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-octopus-white mb-4">Self-Assessment</h1>
        <p className="text-lg text-octopus-white/80">Rate your current skills from 1 (developing) to 5 (expert)</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {skillsToAssess.map((skill) => {
          const currentValue = skills[skill.key] || 1
          const level = getSkillLevel(currentValue)

          return (
            <div key={skill.key} className="bg-octopus-dark p-6 rounded-xl border border-octopus-white/20">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-octopus-white">{skill.label}</h3>
                  <Badge className={`${level.color} font-medium`}>{level.label}</Badge>
                </div>
                <p className="text-sm text-octopus-white/70">{skill.description}</p>
              </div>
              <div className="space-y-3">
                <Slider
                  value={[currentValue]}
                  onValueChange={(value) => handleSkillChange(skill.key, value)}
                  max={5}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-octopus-white/50">
                  <span>Developing</span>
                  <span>Basic</span>
                  <span>Good</span>
                  <span>Strong</span>
                  <span>Expert</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {lowSkills.length > 0 && (
        <div className="bg-octopus-dark p-4 rounded-xl border border-octopus-green/20">
          <div className="flex items-start space-x-3">
            <span className="text-2xl">🤖</span>
            <div>
              <h3 className="font-semibold text-octopus-white mb-2">AI Learning Suggestions</h3>
              <p className="text-octopus-white/80 text-sm mb-2">
                Based on your ratings, we'll suggest mini-lessons for: <strong className="text-octopus-green">{lowSkills.join(", ")}</strong>
              </p>
              <p className="text-octopus-white/60 text-xs">
                Don't worry - everyone has areas to develop! We'll provide targeted resources to help you grow.
              </p>
            </div>
          </div>
        </div>
      )}

      {!allSkillsRated && (
        <div className="bg-octopus-dark p-4 rounded-xl border border-octopus-pink/30">
          <p className="text-octopus-pink text-sm">⚠️ Please rate all skills to continue</p>
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
          disabled={!allSkillsRated} 
          className="bg-octopus-pink hover:bg-octopus-pink/90 text-octopus-white font-semibold disabled:opacity-50"
        >
          Continue
        </Button>
      </div>
    </div>
  )
}
