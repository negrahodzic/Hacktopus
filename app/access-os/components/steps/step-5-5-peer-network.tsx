"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Users, MessageCircle, Heart, Send, Zap } from "lucide-react"
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

const recentPosts = [
  {
    id: 1,
    author: "Sarah M.",
    role: "Solar Engineer",
    content:
      "Just completed my first commercial solar installation! The learning curve was steep but so rewarding. Any tips for optimizing panel efficiency in cloudy conditions?",
    timestamp: "3 min ago",
    likes: 12,
    replies: 4,
    group: "Solar Engineers",
  },
  {
    id: 2,
    author: "Marcus J.",
    role: "Finance Analyst",
    content:
      "Excited to share that our green bond fund just hit £50M! The appetite for sustainable investments is incredible. What sectors are you most bullish on?",
    timestamp: "15 min ago",
    likes: 8,
    replies: 7,
    group: "Sustainable Finance",
  },
  {
    id: 3,
    author: "Priya K.",
    role: "Policy Researcher",
    content:
      "The new Net Zero Strategy has some interesting implications for community energy projects. Anyone else diving into the details?",
    timestamp: "1 hour ago",
    likes: 15,
    replies: 9,
    group: "Climate Policy",
  },
]

export default function Step5PeerNetwork() {
  const { data, updateData, nextStep, prevStep } = useWizard()
  const [selectedGroups, setSelectedGroups] = useState<string[]>([])
  const [newPost, setNewPost] = useState("")
  const [showFeed, setShowFeed] = useState(false)

  const handleGroupToggle = (groupId: string) => {
    setSelectedGroups((prev) => (prev.includes(groupId) ? prev.filter((id) => id !== groupId) : [...prev, groupId]))
  }

  const handleNext = () => {
    updateData({ peerGroups: selectedGroups })
    nextStep()
  }

  const handlePostShare = () => {
    if (newPost.trim()) {
      // In a real app, this would post to the feed
      setNewPost("")
      setShowFeed(true)
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-octopus-heading mb-4">Join Your Peer Network</h1>
        <p className="text-lg text-octopus-textDark">Connect with like-minded professionals and share your journey!</p>
      </div>

      {/* Group Selection */}
      <Card className="bg-octopus-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-octopus-textDark">
            <Users className="w-5 h-5" />
            <span>Join Group Chats</span>
          </CardTitle>
          <p className="text-sm text-octopus-text/70">
            Select the communities that match your interests. You can join multiple groups!
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {peerGroups.map((group) => (
              <div
                key={group.id}
                className={`
                  p-4 rounded-lg border-2 cursor-pointer transition-all
                  ${
                    selectedGroups.includes(group.id)
                      ? "border-octopus-primary bg-octopus-primary/10"
                      : "border-gray-200 hover:border-octopus-primary/50"
                  }
                `}
                onClick={() => handleGroupToggle(group.id)}
              >
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">{group.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-octopus-textDark">{group.name}</h3>
                      <Badge variant="secondary" className="bg-octopus-accent/20 text-octopus-accent">
                        {group.members} members
                      </Badge>
                    </div>
                    <p className="text-sm text-octopus-text/70 mb-2">{group.description}</p>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-octopus-primary rounded-full"></div>
                      <span className="text-xs text-octopus-text/60">{group.recentActivity}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Share Experience */}
      <Card className="bg-octopus-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-octopus-textDark">
            <MessageCircle className="w-5 h-5" />
            <span>Share Your Experience</span>
          </CardTitle>
          <p className="text-sm text-octopus-text/70">
            Tell the community about your green career journey, challenges, or wins!
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <Textarea
              placeholder="What's happening in your green career journey? Share a win, ask for advice, or just say hello! 🌱"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              rows={3}
              className="bg-white border-gray-200"
            />
            <div className="flex justify-between items-center">
              <span className="text-xs text-octopus-text/60">{280 - newPost.length} characters remaining</span>
              <Button
                onClick={handlePostShare}
                disabled={!newPost.trim()}
                className="bg-octopus-primary hover:bg-octopus-primary/80"
                size="sm"
              >
                <Send className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Community Posts */}
      <Card className="bg-octopus-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-octopus-text">
            <Zap className="w-5 h-5" />
            <span>Community Feed</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <div key={post.id} className="p-4 bg-white rounded-lg border">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-octopus-primary rounded-full flex items-center justify-center text-white font-semibold">
                    {post.author.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-semibold text-octopus-textDark">{post.author}</span>
                      <Badge variant="outline" className="text-xs">
                        {post.role}
                      </Badge>
                      <span className="text-xs text-octopus-text/60">{post.timestamp}</span>
                    </div>
                    <p className="text-sm text-octopus-textDark mb-3">{post.content}</p>
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 text-octopus-text/60 hover:text-octopus-accent">
                        <Heart className="w-4 h-4" />
                        <span className="text-xs">{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-octopus-text/60 hover:text-octopus-primary">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-xs">{post.replies} replies</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {selectedGroups.length > 0 && (
        <Card className="bg-octopus-primary/10 border-octopus-primary/20">
          <CardContent className="p-4">
            <h3 className="font-semibold text-octopus-text mb-2">🎉 You're joining:</h3>
            <div className="flex flex-wrap gap-2">
              {selectedGroups.map((groupId) => {
                const group = peerGroups.find((g) => g.id === groupId)
                return (
                  <Badge key={groupId} className="bg-octopus-primary text-white">
                    {group?.icon} {group?.name}
                  </Badge>
                )
              })}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={prevStep} className="border-octopus-text text-octopus-text bg-transparent">
          Back
        </Button>
        <Button onClick={handleNext} className="bg-octopus-primary hover:bg-octopus-primary/80 text-white">
          Continue to Review
        </Button>
      </div>
    </div>
  )
}
