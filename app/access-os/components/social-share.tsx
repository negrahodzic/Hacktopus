"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Share2, Linkedin } from "lucide-react"

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
  const message = stepMessages[step as keyof typeof stepMessages] || "Making progress on my green career journey!"

  const shareToLinkedIn = () => {
    const text = encodeURIComponent(
      `${message}\n\n${achievement ? `Achievement: ${achievement}\n\n` : ""}Discover your green career path with @OctopusEnergy's Access OS tool! 🐙\n\n#GreenJobs #Sustainability #ClimateAction #OctopusEnergy`,
    )
    const url = encodeURIComponent(window.location.origin + "/access-os")

    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}&text=${text}`,
      "_blank",
      "width=600,height=400",
    )
  }

  return (
    <Card className="bg-octopus-accent/10 border-octopus-accent/20">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Share2 className="w-5 h-5 text-octopus-accent" />
            <div>
              <h4 className="font-semibold text-octopus-text">Share Your Progress!</h4>
              <p className="text-sm text-octopus-text/70">Let your network know about your green career journey</p>
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
