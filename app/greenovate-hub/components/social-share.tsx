"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Share2, Linkedin } from "lucide-react"
import { useWizard } from "./modal-wizard"

interface SocialShareProps {
  step: number
  stepName: string
  achievement?: string
}

const stepMessages = {
  0: "Just started my green career journey with Octopus Energy! 🌱 Ready to unlock opportunities in sustainability.",
  1: "Learning about the Green Skills Pyramid - from mindset to specialist expertise! 📈 #GreenCareers",
  2: "Completed my skills assessment and identified areas for growth! 💪 #SustainabilityJobs",
  3: "Defined my green career ambitions - excited about renewable energy and climate policy! ⚡ #ClimateAction",
  4: "Identified barriers and got targeted support tips. Nothing can stop me now! 🚀 #GreenTransition",
  5: "Connected with mentors and community networks in the green sector! 🤝 #Networking",
  6: "Got my personalized green career tier assessment! Ready for the next level! 🎯 #CareerGrowth",
  7: "Received my complete action plan for green career success! Let's make it happen! 🌟 #SustainableFuture",
}

export default function SocialShare({ step, stepName, achievement }: SocialShareProps) {
  const { data } = useWizard()
  
  // Generate dynamic content based on user's assessment
  const generateDynamicMessage = () => {
    const tier = data.tier || "Explorer"
    const score = data.score || 0
    const domains = data.domains || []
    const topSkills = Object.entries(data.skills || {})
      .filter(([_, value]) => value >= 4)
      .map(([skill, _]) => skill)
      .slice(0, 3)
    
    const improvementSkills = Object.entries(data.skills || {})
      .filter(([_, value]) => value <= 2)
      .map(([skill, _]) => skill)
      .slice(0, 2)

    let message = `🌱 Just completed my Green Career Assessment with @OctopusEnergy!\n\n`
    message += `🎯 My Green Career Tier: ${tier} (${score}/100)\n`
    
    if (domains.length > 0) {
      message += `🔍 Interested in: ${domains.join(", ")}\n`
    }
    
    if (topSkills.length > 0) {
      message += `💪 Strong skills: ${topSkills.join(", ")}\n`
    }
    
    if (improvementSkills.length > 0) {
      message += `📈 Growing in: ${improvementSkills.join(", ")}\n`
    }
    
    message += `\n🚀 Ready to break barriers and build a sustainable career!\n`
    message += `\nDiscover your green career path with Octopus Energy's Access OS! 🐙`
    
    return message
  }

  const shareToLinkedIn = () => {
    const dynamicMessage = generateDynamicMessage()
    const text = encodeURIComponent(
      `${dynamicMessage}\n\n#GreenJobs #Sustainability #ClimateAction #GreenCareers #OctopusEnergy #NetZero #SustainableFuture`
    )
    const url = encodeURIComponent(window.location.origin + "/access-os")

    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}&text=${text}`,
      "_blank",
      "width=600,height=400",
    )
  }

  return (
    <Card className="bg-octopus-darkLight border-octopus-white/20">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Share2 className="w-5 h-5 text-octopus-green" />
            <div>
              <h4 className="font-semibold text-octopus-white">Share Your Progress!</h4>
              <p className="text-sm text-octopus-white/70">Let your network know about your green career journey</p>
            </div>
          </div>
          <Button onClick={shareToLinkedIn} className="bg-[#0077B5] hover:bg-[#005885] text-white" size="sm">
            <Linkedin className="w-4 h-4 mr-2" />
            Share on LinkedIn
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
