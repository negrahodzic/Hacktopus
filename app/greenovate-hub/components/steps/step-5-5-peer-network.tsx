"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, MessageCircle, ExternalLink } from "lucide-react"
import { useWizard } from "../modal-wizard"

const peerGroups = [
  {
    id: "solar-engineers",
    name: "Solar Engineers",
    members: 234,
    description: "Technical discussions about solar panel design, installation, and optimization",
    icon: "☀️",
    recentActivity: "2 min ago",
  },
  {
    id: "sustainable-finance",
    name: "Sustainable Finance",
    members: 189,
    description: "Green investments, ESG strategies, and climate finance opportunities",
    icon: "💰",
    recentActivity: "5 min ago",
  },
  {
    id: "policy-advocates",
    name: "Climate Policy",
    members: 156,
    description: "Discussing climate legislation, advocacy strategies, and policy impact",
    icon: "🏛️",
    recentActivity: "12 min ago",
  },
  {
    id: "circular-economy",
    name: "Circular Economy",
    members: 143,
    description: "Waste reduction, recycling innovations, and sustainable business models",
    icon: "♻️",
    recentActivity: "18 min ago",
  },
]

export default function Step5PeerNetwork() {
  const { data, updateData, nextStep, prevStep } = useWizard()
  const [selectedGroups, setSelectedGroups] = useState<string[]>([])

  const handleGroupToggle = (groupId: string) => {
    setSelectedGroups((prev) => (prev.includes(groupId) ? prev.filter((id) => id !== groupId) : [...prev, groupId]))
  }

  const handleNext = () => {
    updateData({ peerGroups: selectedGroups })
    nextStep()
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-octopus-white mb-4">Join Your Peer Network</h1>
        <p className="text-lg text-octopus-white/80">Connect with like-minded professionals and share your journey!</p>
      </div>

      {/* Group Selection */}
      <div className="bg-octopus-dark p-6 rounded-xl border border-octopus-white/20">
        <div className="mb-6">
          <h2 className="flex items-center space-x-2 text-xl font-semibold text-octopus-white mb-2">
            <Users className="w-5 h-5" />
            <span>Join Group Chats</span>
          </h2>
          <p className="text-sm text-octopus-white/70 mb-6">
            Select the communities that match your interests. You can join multiple groups!
          </p>
          
          <div className="mb-6">
            <h4 className="font-medium text-octopus-white mb-3">Choose your preferred platform:</h4>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" size="sm" className="bg-[#5865F2] text-white border-[#5865F2] hover:bg-[#4752C4]">
                <MessageCircle className="w-4 h-4 mr-2" />
                Discord
                <ExternalLink className="w-3 h-3 ml-1" />
              </Button>
              <Button variant="outline" size="sm" className="bg-[#4A154B] text-white border-[#4A154B] hover:bg-[#3a1139]">
                <MessageCircle className="w-4 h-4 mr-2" />
                Slack
                <ExternalLink className="w-3 h-3 ml-1" />
              </Button>
              <Button variant="outline" size="sm" className="bg-[#0077B5] text-white border-[#0077B5] hover:bg-[#005885]">
                <Users className="w-4 h-4 mr-2" />
                LinkedIn
                <ExternalLink className="w-3 h-3 ml-1" />
              </Button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {peerGroups.map((group) => (
              <div
                key={group.id}
                className={`
                  p-4 rounded-lg border-2 cursor-pointer transition-all
                  ${
                    selectedGroups.includes(group.id)
                      ? "border-octopus-green bg-octopus-green/10"
                      : "border-octopus-white/20 hover:border-octopus-green/50"
                  }
                `}
                onClick={() => handleGroupToggle(group.id)}
              >
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">{group.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-octopus-white">{group.name}</h3>
                      <Badge className="bg-octopus-pink text-octopus-white">
                        {group.members} members
                      </Badge>
                    </div>
                    <p className="text-sm text-octopus-white/70 mb-2">{group.description}</p>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-octopus-green rounded-full"></div>
                      <span className="text-xs text-octopus-white/60">{group.recentActivity}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>



      {selectedGroups.length > 0 && (
        <div className="bg-octopus-dark p-4 rounded-xl border border-octopus-green/20">
          <h3 className="font-semibold text-octopus-white mb-2">🎉 You're joining:</h3>
          <div className="flex flex-wrap gap-2">
            {selectedGroups.map((groupId) => {
              const group = peerGroups.find((g) => g.id === groupId)
              return (
                <Badge key={groupId} className="bg-octopus-green text-octopus-black">
                  {group?.icon} {group?.name}
                </Badge>
              )
            })}
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
