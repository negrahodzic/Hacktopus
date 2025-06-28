"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useWizard } from "../modal-wizard"

const ethnicityOptions = [
  "Black/African/Caribbean",
  "Asian/Asian British",
  "Mixed/Multiple ethnic groups",
  "White",
  "Other ethnic group",
  "Prefer not to say",
]

export default function Step0Welcome() {
  const { data, updateData, nextStep } = useWizard()
  const [consent, setConsent] = useState(data.consent)
  const [ethnicity, setEthnicity] = useState<string[]>(data.ethnicity)
  const [location, setLocation] = useState(data.location)

  const handleEthnicityChange = (option: string, checked: boolean) => {
    if (checked) {
      setEthnicity([...ethnicity, option])
    } else {
      setEthnicity(ethnicity.filter((e) => e !== option))
    }
  }

  const handleNext = () => {
    updateData({ consent, ethnicity, location })
    nextStep()
  }

  const canProceed = consent

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-octopus-heading mb-4">Unlock your path to a green career</h1>
        <p className="text-lg text-octopus-textDark">
          Let's discover your unique journey to climate leadership and sustainable careers
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-octopus-textDark">
            <span>🌱</span>
            <span>Welcome to Your Green Career Journey</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-emerald-50 p-4 rounded-lg">
            <p className="text-sm text-emerald-800">
              This tool will help you identify your strengths, overcome barriers, and connect with opportunities in the
              growing green economy. Your responses will be used to create a personalized action plan with resources,
              mentorship opportunities, and career pathways.
            </p>
          </div>

          {/* Consent */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="consent"
                checked={consent}
                onCheckedChange={(checked) => setConsent(checked as boolean)}
                className="mt-1"
              />
              <Label htmlFor="consent" className="text-sm leading-relaxed text-octopus-textDark">
                <span className="font-medium text-red-600">* Required:</span> I agree to share my answers to receive a
                personalized green-career plan. Your data will be used to match you with relevant opportunities and will
                not be shared with third parties without your consent.
              </Label>
            </div>
          </div>

          {/* Optional Demographics */}
          <div className="space-y-4">
            <h3 className="font-medium text-octopus-textDark">Optional Information</h3>
            <p className="text-sm text-gray-600">
              This information helps us provide more relevant opportunities and track our impact in supporting diverse
              communities.
            </p>

            <div className="space-y-3">
              <Label className="text-sm font-medium text-octopus-textDark">Ethnicity (select all that apply)</Label>
              <div className="grid grid-cols-2 gap-3">
                {ethnicityOptions.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <Checkbox
                      id={option}
                      checked={ethnicity.includes(option)}
                      onCheckedChange={(checked) => handleEthnicityChange(option, checked as boolean)}
                    />
                    <Label htmlFor={option} className="text-sm text-octopus-textDark">
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="text-sm font-medium text-octopus-textDark">
                Location (City/Region)
              </Label>
              <Input
                id="location"
                placeholder="e.g., London, Manchester, Birmingham"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <Button onClick={handleNext} disabled={!canProceed} className="bg-purple-600 hover:bg-purple-700">
              Get Started
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
