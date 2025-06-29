"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Send } from "lucide-react"
import { useWizard } from "../modal-wizard"

export default function Step8ShareExperience() {
  const { nextStep, prevStep } = useWizard()
  const [newPost, setNewPost] = useState("")
  const [hasShared, setHasShared] = useState(false)

  const handlePostShare = () => {
    if (newPost.trim()) {
      // In a real app, this would post to the feed
      setNewPost("")
      setHasShared(true)
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-octopus-white mb-4">Share Your Experience</h1>
        <p className="text-lg text-octopus-white/80">
          Tell the community about your green career journey, challenges, or wins!
        </p>
      </div>

      {/* Share Experience */}
      <div className="bg-octopus-dark p-6 rounded-xl border border-octopus-white/20">
        <div className="mb-6">
          <h2 className="flex items-center space-x-2 text-xl font-semibold text-octopus-white mb-2">
            <MessageCircle className="w-5 h-5" />
            <span>Share Your Story</span>
          </h2>
          <p className="text-sm text-octopus-white/70">
            Your journey can inspire others! Share a win, ask for advice, or just say hello to the community.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="space-y-3">
            <Textarea
              placeholder="What's happening in your green career journey? Share a win, ask for advice, or just say hello! 🌱"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              rows={4}
              className="bg-octopus-darkLight border-octopus-white/20 text-octopus-white placeholder:text-octopus-white/50"
            />
            <div className="flex justify-between items-center">
              <span className="text-xs text-octopus-white/60">{280 - newPost.length} characters remaining</span>
              <Button
                onClick={handlePostShare}
                disabled={!newPost.trim()}
                className="bg-octopus-green hover:bg-octopus-green/90 text-octopus-black font-semibold"
                size="sm"
              >
                <Send className="w-4 h-4 mr-2" />
                Share with Community
              </Button>
            </div>
          </div>

          {hasShared && (
            <div className="bg-octopus-green/10 p-4 rounded-lg border border-octopus-green/20">
              <div className="flex items-center space-x-2">
                <span className="text-octopus-green">🎉</span>
                <p className="text-octopus-white font-medium">Thank you for sharing!</p>
              </div>
              <p className="text-octopus-white/80 text-sm mt-1">
                Your post will be visible to the community and help inspire others on their green career journey.
              </p>
            </div>
          )}
        </div>
      </div>



      <div className="flex justify-between pt-4">
        <Button 
          variant="outline" 
          onClick={prevStep}
          className="border-octopus-white/20 text-octopus-white hover:bg-octopus-white/10"
        >
          Back
        </Button>
        <Button 
          onClick={nextStep} 
          className="bg-octopus-pink hover:bg-octopus-pink/90 text-octopus-white font-semibold"
        >
          Continue to Review
        </Button>
      </div>
    </div>
  )
} 