"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useWizard } from "../modal-wizard"

const domains = [
  { key: "renewables", label: "Renewable Energy", icon: "⚡", description: "Solar, wind, hydro power systems" },
  { key: "circular", label: "Circular Economy", icon: "♻️", description: "Waste reduction, recycling, reuse" },
  { key: "policy", label: "Climate Policy", icon: "🏛️", description: "Government, regulation, advocacy" },
  { key: "efficiency", label: "Energy Efficiency", icon: "🏠", description: "Building retrofits, smart systems" },
  { key: "finance", label: "Sustainable Finance", icon: "💰", description: "Green investments, ESG, carbon markets" },
  { key: "other", label: "Other", icon: "🌍", description: "Tell us what interests you" },
]

const roleTypes = [
  { key: "engineer", label: "Engineer", description: "Technical design and implementation" },
  { key: "analyst", label: "Analyst", description: "Data analysis and research" },
  { key: "manager", label: "Project Manager", description: "Leading teams and projects" },
  { key: "community", label: "Community Lead", description: "Engagement and outreach" },
  { key: "policy", label: "Policy Maker", description: "Strategy and regulation" },
  { key: "entrepreneur", label: "Entrepreneur", description: "Starting your own venture" },
]

export default function Step3Ambition() {
  const { data, updateData, nextStep, prevStep } = useWizard()
  const [selectedDomains, setSelectedDomains] = useState<string[]>(data.domains)
  const [roleType, setRoleType] = useState(data.roleType)
  const [otherDomain, setOtherDomain] = useState("")

  const handleDomainChange = (domain: string, checked: boolean) => {
    if (checked) {
      setSelectedDomains([...selectedDomains, domain])
    } else {
      setSelectedDomains(selectedDomains.filter((d) => d !== domain))
      if (domain === "other") {
        setOtherDomain("")
      }
    }
  }

  const handleNext = () => {
    const finalDomains =
      selectedDomains.includes("other") && otherDomain
        ? [...selectedDomains.filter((d) => d !== "other"), otherDomain]
        : selectedDomains

    updateData({ domains: finalDomains, roleType })
    nextStep()
  }

  const canProceed = selectedDomains.length > 0 && roleType

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-octopus-heading mb-4">Your Green Ambitions</h1>
        <p className="text-lg text-octopus-textDark">What areas of the green economy excite you most?</p>
      </div>

      {/* Domains */}
      <Card>
        <CardHeader>
          <CardTitle className="text-octopus-textDark">Which domains interest you? (Select all that apply)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {domains.map((domain) => (
              <div key={domain.key} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                <Checkbox
                  id={domain.key}
                  checked={selectedDomains.includes(domain.key)}
                  onCheckedChange={(checked) => handleDomainChange(domain.key, checked as boolean)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <Label
                    htmlFor={domain.key}
                    className="flex items-center space-x-2 cursor-pointer text-octopus-textDark"
                  >
                    <span className="text-lg">{domain.icon}</span>
                    <span className="font-medium">{domain.label}</span>
                  </Label>
                  <p className="text-sm text-gray-600 mt-1">{domain.description}</p>
                  {domain.key === "other" && selectedDomains.includes("other") && (
                    <Input
                      placeholder="Tell us what interests you..."
                      value={otherDomain}
                      onChange={(e) => setOtherDomain(e.target.value)}
                      className="mt-2"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Role Types */}
      <Card>
        <CardHeader>
          <CardTitle>What type of role appeals to you most?</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={roleType} onValueChange={setRoleType}>
            <div className="grid md:grid-cols-2 gap-4">
              {roleTypes.map((role) => (
                <div key={role.key} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                  <RadioGroupItem value={role.key} id={role.key} className="mt-1" />
                  <div className="flex-1">
                    <Label htmlFor={role.key} className="font-medium cursor-pointer">
                      {role.label}
                    </Label>
                    <p className="text-sm text-gray-600 mt-1">{role.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      {selectedDomains.length > 0 && (
        <Card className="bg-emerald-50 border-emerald-200">
          <CardContent className="p-4">
            <h3 className="font-semibold text-emerald-900 mb-2">🎯 Your Interests</h3>
            <div className="flex flex-wrap gap-2">
              {selectedDomains.map((domain) => (
                <Badge key={domain} variant="secondary" className="bg-emerald-100 text-emerald-800">
                  {domains.find((d) => d.key === domain)?.label || domain}
                </Badge>
              ))}
            </div>
            {roleType && (
              <p className="text-emerald-800 text-sm mt-2">
                As a <strong>{roleTypes.find((r) => r.key === roleType)?.label}</strong>
              </p>
            )}
          </CardContent>
        </Card>
      )}

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={handleNext} disabled={!canProceed} className="bg-purple-600 hover:bg-purple-700">
          Continue
        </Button>
      </div>
    </div>
  )
}
