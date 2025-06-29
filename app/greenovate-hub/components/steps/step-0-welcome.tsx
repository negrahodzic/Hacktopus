"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useWizard } from "../modal-wizard"

const ethnicityOptions = [
  "Black/African/Caribbean",
  "Asian/Asian British", 
  "Mixed/Multiple ethnic groups",
  "White",
  "Other ethnic group",
  "Prefer not to say",
]

const ukLocations = [
  "London",
  "Manchester",
  "Birmingham", 
  "Liverpool",
  "Leeds",
  "Sheffield",
  "Bristol",
  "Edinburgh",
  "Glasgow",
  "Newcastle",
  "Nottingham",
  "Cardiff",
  "Leicester",
  "Coventry",
  "Belfast",
  "Brighton",
  "Hull",
  "Plymouth",
  "Stoke-on-Trent",
  "Wolverhampton",
  "Derby",
  "Southampton",
  "Portsmouth",
  "Aberdeen",
  "Northampton",
  "Norwich",
  "Dundee",
  "Middlesbrough",
  "Milton Keynes",
  "Sunderland",
  "Other/Prefer not to say"
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
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-octopus-white mb-4">Start Your <span className="text-octopus-green">Green Career</span> Journey</h1>
        <p className="text-lg text-octopus-white/80">
          Discover your path to climate leadership
        </p>
      </div>

      <div className="space-y-8">
        <div className="bg-octopus-dark p-6 rounded-xl border border-octopus-green/20">
          <p className="text-octopus-white">
            <strong className="text-octopus-green">Quick 9-step assessment</strong> • Get personalized career plan • Connect with mentors • Access funding opportunities
          </p>
        </div>

        {/* Consent */}
        <div className="space-y-6">
          <div className="p-6 border-2 border-octopus-pink/30 rounded-xl bg-octopus-dark">
            <div className="flex items-start space-x-4">
              <Checkbox
                id="consent"
                checked={consent}
                onCheckedChange={(checked) => setConsent(checked as boolean)}
                className="mt-1 scale-125 border-octopus-white data-[state=checked]:bg-octopus-pink data-[state=checked]:border-octopus-pink"
              />
              <div>
                <Label htmlFor="consent" className="text-octopus-white leading-relaxed cursor-pointer">
                  <span className="font-bold text-octopus-pink">✓ Required:</span> I agree to receive my personalized career plan
                </Label>
                <p className="text-sm text-octopus-white/70 mt-2">
                  Your data helps us match you with opportunities. Not shared without consent.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Optional Demographics */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-octopus-white mb-3">Optional Information</h3>
            <div className="bg-octopus-dark p-4 rounded-xl border border-octopus-green/20">
              <p className="text-sm text-octopus-white">
                <strong className="text-octopus-green">💡 Why we ask:</strong> Helps us tailor opportunities and track diverse community impact.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <Label className="text-lg font-medium text-octopus-white">Background (optional)</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ethnicityOptions.map((option) => (
                <div key={option} className="flex items-center space-x-3 p-3 border border-octopus-white/20 rounded-xl hover:border-octopus-green/50 transition-colors bg-octopus-dark">
                  <Checkbox
                    id={option}
                    checked={ethnicity.includes(option)}
                    onCheckedChange={(checked) => handleEthnicityChange(option, checked as boolean)}
                    className="border-octopus-white data-[state=checked]:bg-octopus-green data-[state=checked]:border-octopus-green"
                  />
                  <Label htmlFor={option} className="text-sm text-octopus-white cursor-pointer">
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <Label htmlFor="location" className="text-lg font-medium text-octopus-white">
              Location
            </Label>
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger className="h-12 bg-octopus-dark border border-octopus-white/20 text-octopus-white">
                <SelectValue placeholder="Select your city or region" />
              </SelectTrigger>
              <SelectContent className="bg-octopus-dark border border-octopus-white/20">
                {ukLocations.map((city) => (
                  <SelectItem key={city} value={city} className="text-octopus-white hover:bg-octopus-darkLight">
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-end pt-6">
          <Button 
            onClick={handleNext} 
            disabled={!canProceed} 
            size="lg"
            className="bg-octopus-pink hover:bg-octopus-pink/90 text-octopus-white font-semibold px-8 py-3"
          >
            Start Journey 🚀
          </Button>
        </div>
      </div>
    </div>
  )
}
