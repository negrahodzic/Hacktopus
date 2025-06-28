"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ThumbsUp, Clock, CheckCircle, XCircle, Lightbulb, Send } from "lucide-react"

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

const mockSuggestions: Suggestion[] = [
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

export default function CommunityFeedback() {
  const [suggestions, setSuggestions] = useState<Suggestion[]>(mockSuggestions)
  const [newTitle, setNewTitle] = useState("")
  const [newDescription, setNewDescription] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [filter, setFilter] = useState<"all" | "pending" | "approved" | "rejected">("all")

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
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-octopus-accent hover:bg-octopus-accent/80 text-white">
          <Lightbulb className="w-4 h-4 mr-2" />
          Your Ideas, Our Future
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-octopus-card">
        <DialogHeader>
          <DialogTitle className="text-octopus-textDark">Community Ideas & Suggestions</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Submit New Idea */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-octopus-textDark flex items-center space-x-2">
                <Lightbulb className="w-5 h-5" />
                <span>Share Your Idea</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="What's your idea? (e.g., 'Add video testimonials from green career professionals')"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="bg-white"
              />
              <Textarea
                placeholder="Describe your idea in detail. How would it help users on their green career journey?"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                rows={3}
                className="bg-white"
              />
              <div className="flex justify-between items-center">
                <span className="text-sm text-octopus-text/60">
                  Ideas with 20+ votes are automatically reviewed by our team
                </span>
                <Button
                  onClick={handleSubmit}
                  disabled={!newTitle.trim() || !newDescription.trim() || isSubmitting}
                  className="bg-octopus-primary hover:bg-octopus-primary/80"
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
          <div className="flex space-x-2">
            {(["all", "pending", "approved", "rejected"] as const).map((status) => (
              <Button
                key={status}
                variant={filter === status ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(status)}
                className={filter === status ? "bg-octopus-primary text-white" : "text-octopus-text"}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
                {status !== "all" && (
                  <Badge variant="secondary" className="ml-2">
                    {suggestions.filter((s) => s.status === status).length}
                  </Badge>
                )}
              </Button>
            ))}
          </div>

          {/* Suggestions List */}
          <div className="space-y-4">
            {filteredSuggestions.map((suggestion) => (
              <Card key={suggestion.id} className="bg-white">
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
                      <p className="text-sm text-octopus-text/70 mb-2">{suggestion.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-octopus-text/60">
                        <span>By {suggestion.author}</span>
                        <span>{new Date(suggestion.timestamp).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <Button
                        variant={suggestion.hasVoted ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleVote(suggestion.id)}
                        className={suggestion.hasVoted ? "bg-octopus-accent text-white" : "text-octopus-text"}
                        disabled={suggestion.status === "approved" || suggestion.status === "rejected"}
                      >
                        <ThumbsUp className="w-4 h-4" />
                      </Button>
                      <span className="text-sm font-semibold text-octopus-text">{suggestion.votes}</span>
                    </div>
                  </div>

                  {/* Voting Rules Info */}
                  {suggestion.status === "pending" && (
                    <div className="mt-3 p-2 bg-blue-50 rounded text-xs text-blue-800">
                      {suggestion.votes >= 20
                        ? "🎉 This idea has enough votes for review!"
                        : suggestion.votes >= 5
                          ? `${20 - suggestion.votes} more votes needed for automatic review`
                          : `${5 - suggestion.votes} more votes needed to stay active`}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredSuggestions.length === 0 && (
            <Card className="bg-white">
              <CardContent className="p-8 text-center">
                <Lightbulb className="w-12 h-12 text-octopus-text/30 mx-auto mb-4" />
                <h3 className="font-semibold text-octopus-text mb-2">No ideas yet</h3>
                <p className="text-octopus-text/60">Be the first to share an idea for improving the platform!</p>
              </CardContent>
            </Card>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
