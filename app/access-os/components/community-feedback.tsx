"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ThumbsUp, Clock, CheckCircle, XCircle, Lightbulb, Send, TrendingUp, Users, Award, Lock, X } from "lucide-react"

interface Suggestion {
  id: string
  title: string
  description: string
  author: string
  timestamp: string
  votes: number
  status: "pending" | "approved" | "rejected" | "under-review"
  hasVoted?: boolean
}

const initialSuggestions: Suggestion[] = [
  {
    id: "1",
    title: "Add AI-powered career matching",
    description:
      "Use machine learning to match users with the most suitable green career paths based on their skills and interests.",
    author: "Sarah M.",
    timestamp: "2024-01-15T10:30:00Z",
    votes: 23,
    status: "approved",
  },
  {
    id: "2",
    title: "Virtual reality training modules",
    description:
      "Create VR experiences for hands-on training in solar panel installation and wind turbine maintenance.",
    author: "Marcus J.",
    timestamp: "2024-01-14T15:45:00Z",
    votes: 18,
    status: "under-review",
  },
  {
    id: "3",
    title: "Regional job board integration",
    description: "Connect with local job boards to show available green jobs in the user's area.",
    author: "Priya K.",
    timestamp: "2024-01-13T09:20:00Z",
    votes: 12,
    status: "pending",
  },
  {
    id: "4",
    title: "Gamification badges system",
    description: "Add achievement badges for completing courses, attending events, and reaching milestones.",
    author: "Alex T.",
    timestamp: "2024-01-12T14:10:00Z",
    votes: 8,
    status: "pending",
  },
  {
    id: "5",
    title: "Mobile app version",
    description: "Create a mobile app for easier access to resources and community features on the go.",
    author: "Jordan L.",
    timestamp: "2024-01-11T11:55:00Z",
    votes: 3,
    status: "rejected",
  },
]

const platformStats = {
  totalSuggestions: 147,
  implemented: 23,
  underReview: 12,
  communityVotes: 2834,
  avgTimeToImplement: "6 weeks"
}

export default function CommunityFeedback() {
  const [suggestions, setSuggestions] = useState<Suggestion[]>(initialSuggestions)
  const [newTitle, setNewTitle] = useState("")
  const [newDescription, setNewDescription] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [filter, setFilter] = useState<"all" | "pending" | "approved" | "rejected">("all")
  const [isOpen, setIsOpen] = useState(false)

  const handleVote = (id: string) => {
    setSuggestions((prev) =>
      prev.map((suggestion) =>
        suggestion.id === id
          ? {
              ...suggestion,
              votes: suggestion.hasVoted ? suggestion.votes - 1 : suggestion.votes + 1,
              hasVoted: !suggestion.hasVoted,
              status: !suggestion.hasVoted && suggestion.votes + 1 >= 20 ? "under-review" : suggestion.status,
            }
          : suggestion,
      ),
    )
  }

  const handleSubmit = async () => {
    if (!newTitle.trim() || !newDescription.trim()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newSuggestion: Suggestion = {
      id: Date.now().toString(),
      title: newTitle,
      description: newDescription,
      author: "You",
      timestamp: new Date().toISOString(),
      votes: 0,
      status: "pending",
    }

    setSuggestions((prev) => [newSuggestion, ...prev])
    setNewTitle("")
    setNewDescription("")
    setIsSubmitting(false)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case "rejected":
        return <XCircle className="w-4 h-4 text-red-600" />
      case "under-review":
        return <Clock className="w-4 h-4 text-orange-600" />
      default:
        return <Clock className="w-4 h-4 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      case "under-review":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredSuggestions = filter === "all" ? suggestions : suggestions.filter((s) => s.status === filter)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          size="lg"
          className="bg-octopus-pink hover:bg-octopus-darkLight text-octopus-white font-semibold px-8 py-4 transform hover:scale-105 transition-all duration-200"
        >
          <Lightbulb className="w-5 h-5 mr-3" />
          Your Ideas, Our Future
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto bg-white">
        <div className="absolute right-4 top-4 z-10">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="hover:bg-red-50 hover:text-red-600 transition-colors rounded-full"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
        <DialogHeader className="pb-6">
          <DialogTitle className="text-2xl text-octopus-dark">Community Ideas & Suggestions</DialogTitle>
          <p className="text-octopus-black mt-2">
            Help shape the future of green careers! Share your ideas and vote on suggestions to improve our platform.
          </p>
        </DialogHeader>

        {/* Stats and Intro */}
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-octopus-primary/10 to-octopus-accent/10 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-octopus-textDark mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-octopus-primary" />
              Platform Impact
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-octopus-primary">{platformStats.totalSuggestions}</div>
                <div className="text-sm text-octopus-textDark/60">Ideas Submitted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">{platformStats.implemented}</div>
                <div className="text-sm text-octopus-textDark/60">Implemented</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">{platformStats.underReview}</div>
                <div className="text-sm text-octopus-textDark/60">Under Review</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-octopus-accent">{platformStats.communityVotes}</div>
                <div className="text-sm text-octopus-textDark/60">Community Votes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{platformStats.avgTimeToImplement}</div>
                <div className="text-sm text-octopus-textDark/60">Avg Implementation</div>
              </div>
            </div>
          </div>

          {/* How it Works */}
          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-octopus-textDark mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2 text-blue-600" />
              How Community Suggestions Work
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs">1</div>
                <div>
                  <div className="font-medium text-octopus-textDark">Submit Ideas</div>
                  <div className="text-octopus-textDark/60">Share your suggestions for improving the platform</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xs">2</div>
                <div>
                  <div className="font-medium text-octopus-textDark">Community Votes</div>
                  <div className="text-octopus-textDark/60">Vote on ideas you'd like to see implemented</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xs">3</div>
                <div>
                  <div className="font-medium text-octopus-textDark">Implementation</div>
                  <div className="text-octopus-textDark/60">Top voted ideas get reviewed and built into the platform</div>
                </div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-blue-100 rounded-lg">
              <p className="text-blue-800 text-sm">
                <strong>💡 Voting Rules:</strong> Only "Pending" suggestions can be voted on. Ideas with 20+ votes automatically get reviewed by our team!
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Submit New Idea */}
          <Card className="bg-white border-2 border-octopus-primary/20">
            <CardHeader>
              <CardTitle className="text-octopus-textDark flex items-center space-x-2">
                <Lightbulb className="w-5 h-5 text-octopus-accent" />
                <span>Share Your Idea</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="What's your idea? (e.g., 'Add video testimonials from green career professionals')"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="bg-white border-gray-300 focus:border-octopus-primary"
              />
              <Textarea
                placeholder="Describe your idea in detail. How would it help users on their green career journey?"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                rows={3}
                className="bg-white border-gray-300 focus:border-octopus-primary"
              />
              <div className="flex justify-between items-center">
                <span className="text-sm text-octopus-textDark/60">
                  Ideas with 20+ votes are automatically reviewed by our team
                </span>
                <Button
                  onClick={handleSubmit}
                  disabled={!newTitle.trim() || !newDescription.trim() || isSubmitting}
                  className="bg-octopus-pink hover:bg-octopus-darkLight text-octopus-white"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Submit Idea
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {(["all", "pending", "approved", "rejected"] as const).map((status) => (
              <Button
                key={status}
                variant={filter === status ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(status)}
                className={filter === status ? "bg-octopus-primary text-white" : "text-octopus-textDark border-gray-300 hover:border-octopus-primary"}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
                {status !== "all" && (
                  <Badge variant="secondary" className="ml-2 bg-gray-100 text-gray-700">
                    {suggestions.filter((s) => s.status === status).length}
                  </Badge>
                )}
              </Button>
            ))}
          </div>

          {/* Suggestions List */}
          <div className="space-y-4">
            {filteredSuggestions.map((suggestion) => (
              <Card key={suggestion.id} className="bg-white border border-gray-200 hover:border-octopus-primary/30 hover:shadow-md transition-all">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-octopus-textDark">{suggestion.title}</h3>
                        <Badge className={getStatusColor(suggestion.status)}>
                          {getStatusIcon(suggestion.status)}
                          <span className="ml-1">{suggestion.status.replace("-", " ")}</span>
                        </Badge>
                      </div>
                      <p className="text-sm text-octopus-textDark/70 mb-2 leading-relaxed">{suggestion.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-octopus-textDark/60">
                        <span>By {suggestion.author}</span>
                        <span>{new Date(suggestion.timestamp).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      {suggestion.status === "pending" ? (
                        <Button
                          variant={suggestion.hasVoted ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleVote(suggestion.id)}
                          className={suggestion.hasVoted ? "bg-octopus-accent text-white" : "text-octopus-textDark border-gray-300 hover:border-octopus-accent"}
                        >
                          <ThumbsUp className="w-4 h-4" />
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          size="sm"
                          disabled
                          className="text-gray-400 border-gray-200 cursor-not-allowed"
                        >
                          <Lock className="w-4 h-4" />
                        </Button>
                      )}
                      <span className="text-sm font-semibold text-octopus-textDark">{suggestion.votes}</span>
                    </div>
                  </div>

                  {/* Voting Rules Info */}
                  {suggestion.status === "pending" && (
                    <div className="mt-3 p-3 bg-blue-50 rounded-lg text-xs text-blue-800 border border-blue-200">
                      {suggestion.votes >= 20
                        ? "🎉 This idea has enough votes for review!"
                        : suggestion.votes >= 15
                          ? `${20 - suggestion.votes} more votes needed for automatic review!`
                          : suggestion.votes >= 5
                            ? `${20 - suggestion.votes} more votes needed for automatic review`
                            : `${5 - suggestion.votes} more votes needed to stay active`}
                    </div>
                  )}
                  
                  {suggestion.status === "approved" && (
                    <div className="mt-3 p-3 bg-emerald-50 rounded-lg text-xs text-emerald-800 border border-emerald-200">
                      ✅ <strong>Approved!</strong> This feature is being developed and will be available soon.
                    </div>
                  )}
                  
                  {suggestion.status === "under-review" && (
                    <div className="mt-3 p-3 bg-amber-50 rounded-lg text-xs text-amber-800 border border-amber-200">
                      ⏳ <strong>Under Review:</strong> Our team is evaluating this suggestion's feasibility and impact.
                    </div>
                  )}
                  
                  {suggestion.status === "rejected" && (
                    <div className="mt-3 p-3 bg-red-50 rounded-lg text-xs text-red-800 border border-red-200">
                      ❌ <strong>Not Feasible:</strong> This suggestion doesn't align with our current platform goals.
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredSuggestions.length === 0 && (
            <Card className="bg-white border-2 border-dashed border-gray-300">
              <CardContent className="p-8 text-center">
                <Lightbulb className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="font-semibold text-octopus-textDark mb-2">No ideas in this category yet</h3>
                <p className="text-octopus-textDark/60 mb-4">
                  {filter === "all" 
                    ? "Be the first to share an idea for improving the platform!"
                    : `No ${filter} suggestions yet. Try switching categories or submit a new idea!`
                  }
                </p>
                <Button 
                  size="sm" 
                  onClick={() => setFilter("all")}
                  className="bg-octopus-primary text-white"
                >
                  View All Ideas
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
