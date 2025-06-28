"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useWizard } from "../modal-wizard"

const skillLabels: { [key: string]: string } = {
  listening: "Listening",
  speaking: "Speaking",
  problemSolving: "Problem-Solving",
  creativity: "Creativity",
  teamwork: "Teamwork",
  leadership: "Leadership",
  stayingPositive: "Staying Positive",
  aimingHigh: "Aiming High",
}

const domainLabels: { [key: string]: string } = {
  renewables: "Renewable Energy",
  circular: "Circular Economy",
  policy: "Climate Policy",
  efficiency: "Energy Efficiency",
  finance: "Sustainable Finance",
}

const roleLabels: { [key: string]: string } = {
  engineer: "Engineer",
  analyst: "Analyst",
  manager: "Project Manager",
  community: "Community Lead",
  policy: "Policy Maker",
  entrepreneur: "Entrepreneur",
}

const barrierLabels: { [key: string]: string } = {
  cost: "Cost",
  time: "Time",
  childcare: "Childcare",
  digital: "Digital Access",
  language: "Language",
}

const calculateTier = (avgSkill: number, barriers: string[]) => {
  let score = avgSkill * 20 // Base score out of 100

  // Apply penalty for barriers
  const penalty = barriers.length * 5
  score = Math.max(0, score - penalty)

  if (score >= 80)
    return { tier: "Trailblazer", color: "bg-emerald-600", description: "Ready to lead green innovation" }
  if (score >= 60)
    return { tier: "Accelerator", color: "bg-emerald-500", description: "Prepared for advanced green roles" }
  if (score >= 40) return { tier: "Builder", color: "bg-emerald-400", description: "Building strong green foundations" }
  return { tier: "Explorer", color: "bg-emerald-300", description: "Starting your green journey" }
}

export default function Step6Review() {
  const { data, updateData, nextStep, prevStep } = useWizard()
  const [isCalculating, setIsCalculating] = useState(false)

  const avgSkill = Object.values(data.skills).reduce((sum, val) => sum + val, 0) / Object.values(data.skills).length
  const tierInfo = calculateTier(avgSkill, data.barriers)

  const handleCalculate = async () => {
    setIsCalculating(true)

    // Simulate calculation time
    await new Promise((resolve) => setTimeout(resolve, 2000))

    updateData({
      tier: tierInfo.tier,
      score: Math.round(avgSkill * 20 - data.barriers.length * 5),
    })

    setIsCalculating(false)
    nextStep()
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-octopus-heading mb-4">Review & Calculate</h1>
        <p className="text-lg text-octopus-textDark">
          Let's review your responses and calculate your green career profile
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Skills Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="text-octopus-textDark flex items-center space-x-2">
              <span>📊</span>
              <span>Skills Assessment</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Object.entries(data.skills).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-sm text-octopus-textDark">{skillLabels[key]}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${(value / 5) * 100}%` }} />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {value}/5
                    </Badge>
                  </div>
                </div>
              ))}
              <Separator className="my-3" />
              <div className="flex justify-between items-center font-medium">
                <span>Average Score</span>
                <Badge className="bg-emerald-100 text-emerald-800">{avgSkill.toFixed(1)}/5</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ambitions Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="text-octopus-textDark flex items-center space-x-2">
              <span>🎯</span>
              <span>Your Ambitions</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Interested Domains</h4>
                <div className="flex flex-wrap gap-2">
                  {data.domains.map((domain) => (
                    <Badge key={domain} variant="secondary" className="bg-blue-100 text-blue-800">
                      {domainLabels[domain] || domain}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Preferred Role</h4>
                <Badge className="bg-purple-100 text-purple-800">{roleLabels[data.roleType] || data.roleType}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Barriers & Support */}
        <Card>
          <CardHeader>
            <CardTitle className="text-octopus-textDark flex items-center space-x-2">
              <span>🛠️</span>
              <span>Support Needs</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {data.barriers.length > 0 ? (
                <>
                  <h4 className="font-medium">Identified Barriers</h4>
                  <div className="flex flex-wrap gap-2">
                    {data.barriers.map((barrier) => (
                      <Badge key={barrier} variant="outline" className="border-orange-300 text-orange-700">
                        {barrierLabels[barrier] || barrier}
                      </Badge>
                    ))}
                  </div>
                </>
              ) : (
                <p className="text-green-600 text-sm">✅ No significant barriers identified</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Network Status */}
        <Card>
          <CardHeader>
            <CardTitle className="text-octopus-textDark flex items-center space-x-2">
              <span>🤝</span>
              <span>Network & Mentorship</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Badge className={data.hasMentor ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"}>
                  {data.hasMentor ? "Has Mentor" : "Needs Mentor"}
                </Badge>
                {data.requestMentor && <Badge className="bg-purple-100 text-purple-800">Mentor Requested</Badge>}
              </div>
              {data.communityGroups && (
                <div>
                  <h4 className="font-medium text-sm mb-1">Community Connections</h4>
                  <p className="text-xs text-gray-600 line-clamp-2">{data.communityGroups}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Predicted Tier */}
      <Card className="bg-gradient-to-r from-emerald-50 to-blue-50 border-emerald-200">
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Your Predicted Green Career Tier</h3>
            <div
              className={`inline-flex items-center px-6 py-3 rounded-full ${tierInfo.color} text-white text-lg font-semibold mb-2`}
            >
              {tierInfo.tier}
            </div>
            <p className="text-gray-600">{tierInfo.description}</p>
            <p className="text-sm text-gray-500 mt-2">
              Based on your skills average of {avgSkill.toFixed(1)}/5 and {data.barriers.length} identified barrier
              {data.barriers.length !== 1 ? "s" : ""}
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={prevStep}>
          Back to Edit
        </Button>
        <Button onClick={handleCalculate} disabled={isCalculating} className="bg-purple-600 hover:bg-purple-700">
          {isCalculating ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Calculating...
            </>
          ) : (
            "Generate My Action Plan"
          )}
        </Button>
      </div>
    </div>
  )
}
