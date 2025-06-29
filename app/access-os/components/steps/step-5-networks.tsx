"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { useWizard } from "../modal-wizard"

export default function Step5Networks() {
  const { data, updateData, nextStep, prevStep } = useWizard()
  const [hasMentor, setHasMentor] = useState<boolean>(data.hasMentor)
  const [requestMentor, setRequestMentor] = useState<boolean>(data.requestMentor)
  const [communityGroups, setCommunityGroups] = useState(data.communityGroups)

  const handleNext = () => {
    updateData({
      hasMentor,
      requestMentor: !hasMentor ? requestMentor : false,
      communityGroups,
    })
    nextStep()
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-octopus-heading mb-4">Networks & Support</h1>
        <p className="text-lg text-octopus-textDark">Building connections is key to green career success</p>
      </div>

      {/* Mentorship */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-octopus-textDark">
            <span>🤝</span>
            <span>Mentorship</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="text-base font-medium mb-3 block text-octopus-textDark">
              Do you currently have a mentor in the green/sustainability sector?
            </Label>
            <RadioGroup value={hasMentor ? "yes" : "no"} onValueChange={(value) => setHasMentor(value === "yes")}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="mentor-yes" />
                <Label htmlFor="mentor-yes">Yes, I have a mentor</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="mentor-no" />
                <Label htmlFor="mentor-no">No, I don't have a mentor</Label>
              </div>
            </RadioGroup>
          </div>

          {!hasMentor && (
            <Card className="bg-emerald-50 border-emerald-200">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="request-mentor"
                    checked={requestMentor}
                    onCheckedChange={(checked) => setRequestMentor(checked as boolean)}
                    className="mt-1"
                  />
                  <div>
                    <Label htmlFor="request-mentor" className="font-medium text-emerald-900 cursor-pointer">
                      I'd like mentorship support through our partner programs
                    </Label>
                    <p className="text-emerald-800 text-sm mt-1">
                      We partner with <strong>RCT (Rewriting the Code)</strong> and <strong>BCS (British Computer Society)</strong> 
                      to provide mentorship from experienced professionals in green careers who understand your unique journey.
                    </p>
                    
                    {requestMentor && (
                      <div className="mt-4 p-3 bg-emerald-100 rounded-lg">
                        <h4 className="font-medium text-emerald-900 mb-2">🎯 Smart Matching</h4>
                        <p className="text-emerald-800 text-sm mb-2">
                          We'll match you based on:
                        </p>
                        <ul className="text-emerald-800 text-sm space-y-1">
                          <li>• Your skill development areas</li>
                          <li>• Career interests and ambitions</li>
                          <li>• Similar background and experiences</li>
                          <li>• Geographic location (when possible)</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {hasMentor && (
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">🎉</span>
                  <p className="text-green-800 text-sm">
                    That's fantastic! Having a mentor gives you a significant advantage in your green career journey.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>

      {/* Community Groups */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-octopus-textDark">
            <span>👥</span>
            <span>Community & Professional Networks</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label className="text-base font-medium mb-3 block text-octopus-textDark">
                Are you part of any professional communities or networks?
              </Label>
              <RadioGroup 
                value={communityGroups ? "yes" : "no"} 
                onValueChange={(value) => setCommunityGroups(value === "yes" ? "Member of professional communities" : "")}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="community-yes" />
                  <Label htmlFor="community-yes">Yes, I'm active in professional communities</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="community-no" />
                  <Label htmlFor="community-no">No, I'd like to connect with professional networks</Label>
                </div>
              </RadioGroup>
            </div>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <h4 className="font-semibold text-blue-900 mb-3">🌟 Recommended Partner Networks</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 font-bold text-sm">R</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-blue-900">RCT (Rewriting the Code)</h5>
                      <p className="text-blue-800 text-sm">Empowering women and non-binary individuals in tech and sustainability careers</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm">B</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-blue-900">BCS (British Computer Society)</h5>
                      <p className="text-blue-800 text-sm">Professional network for technologists working on climate solutions</p>
                    </div>
                  </div>
                </div>
                <p className="text-blue-700 text-xs mt-3">
                  💡 We'll help connect you with these communities based on your interests and background
                </p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Summary */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-4">
          <h3 className="font-semibold text-blue-900 mb-2">🌐 Your Network Status</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Badge
                variant="secondary"
                className={hasMentor ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"}
              >
                {hasMentor ? "Has Mentor" : "Needs Mentor"}
              </Badge>
              {!hasMentor && requestMentor && (
                <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                  Mentor Requested
                </Badge>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <Badge
                variant="secondary"
                className={communityGroups ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"}
              >
                {communityGroups ? "Has Professional Networks" : "Seeking Networks"}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

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
