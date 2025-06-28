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
                      I'd like to be matched with an Octopus in Colour mentor
                    </Label>
                    <p className="text-emerald-800 text-sm mt-1">
                      Our mentors are experienced professionals from diverse backgrounds working in green careers. They
                      provide guidance, career advice, and industry insights.
                    </p>
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
            <span>Community Connections</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <Label htmlFor="community-groups" className="text-base font-medium text-octopus-textDark">
              Which community groups, networks, or organizations are you part of?
            </Label>
            <p className="text-sm text-gray-600">
              This could include professional networks, cultural organizations, local community groups, online
              communities, or any groups that are important to you.
            </p>
            <Textarea
              id="community-groups"
              placeholder="e.g., Local environmental group, Professional women's network, Cultural association, Online sustainability community..."
              value={communityGroups}
              onChange={(e) => setCommunityGroups(e.target.value)}
              rows={4}
            />
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
            {communityGroups && (
              <p className="text-blue-800 text-sm">
                <strong>Community connections:</strong> Active in community networks
              </p>
            )}
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
