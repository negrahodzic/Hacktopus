"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, ExternalLink, Calendar, Users, BookOpen, Award, Coffee, Crown } from "lucide-react"
import { useWizard } from "../modal-wizard"
import Pyramid from "../pyramid"
import DonationPrompt from "../donation-prompt"
import { generateActionPlanPDF } from "../pdf-generator"
// `assert { type: "json" }` lets us import JSON in Next 15+/next-lite
import learningData from "../../../../data/learning.json" assert { type: "json" }

// Mock data - in a real app this would come from your config
const skillModules = [
  {
    id: 1,
    title: "Effective Communication in Green Teams",
    duration: "2 hours",
    level: "Beginner",
    skills: ["listening", "speaking"],
  },
  {
    id: 2,
    title: "Creative Problem-Solving for Sustainability",
    duration: "3 hours",
    level: "Intermediate",
    skills: ["creativity", "problemSolving"],
  },
  {
    id: 3,
    title: "Leadership in Environmental Projects",
    duration: "4 hours",
    level: "Advanced",
    skills: ["leadership", "teamwork"],
  },
  {
    id: 4,
    title: "Staying Resilient in Climate Work",
    duration: "1.5 hours",
    level: "Beginner",
    skills: ["stayingPositive"],
  },
  {
    id: 5,
    title: "Setting Ambitious Sustainability Goals",
    duration: "2.5 hours",
    level: "Intermediate",
    skills: ["aimingHigh"],
  },
]

const mentors = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Senior Solar Engineer",
    company: "Octopus Energy",
    expertise: ["renewables", "engineering"],
    background: "Former aerospace engineer who transitioned to renewable energy",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Sustainability Finance Director",
    company: "Green Investment Partners",
    expertise: ["finance", "policy"],
    background: "Investment banker turned green finance specialist",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Community Energy Lead",
    company: "Local Energy Co-op",
    expertise: ["community", "policy"],
    background: "Community organizer specializing in energy justice",
    image: "/placeholder.svg?height=60&width=60",
  },
]

const grants = [
  {
    id: 1,
    title: "Green Skills Micro-Grant",
    amount: "£500",
    description: "For training courses and certifications in green skills",
    deadline: "2024-03-15",
    eligibility: "Under-represented groups in green careers",
  },
  {
    id: 2,
    title: "Climate Leadership Scholarship",
    amount: "£2,000",
    description: "For advanced training and conference attendance",
    deadline: "2024-04-30",
    eligibility: "Emerging climate leaders from diverse backgrounds",
  },
]

const events = [
  {
    id: 1,
    title: "Green Careers Fair London",
    date: "2024-02-20",
    location: "ExCeL London",
    type: "Networking",
    description: "Meet employers and learn about opportunities",
  },
  {
    id: 2,
    title: "Renewable Energy Workshop",
    date: "2024-03-05",
    location: "Online",
    type: "Training",
    description: "Hands-on solar panel installation basics",
  },
  {
    id: 3,
    title: "Climate Policy Bootcamp",
    date: "2024-03-12",
    location: "Birmingham",
    type: "Education",
    description: "Understanding climate legislation and advocacy",
  },
]

const tierColors = {
  Explorer: "bg-emerald-300",
  Builder: "bg-emerald-400",
  Accelerator: "bg-emerald-500",
  Trailblazer: "bg-emerald-600",
}

export default function Step7ActionPlan() {
  const { data } = useWizard()
  const [showDonationPrompt, setShowDonationPrompt] = useState(false)
  const [selectedGrant, setSelectedGrant] = useState<any>(null)

  // Filter modules based on low-scoring skills
  const lowSkills = Object.entries(data.skills)
    .filter(([_, value]) => value <= 2)
    .map(([key, _]) => key)

  const recommendedModules = skillModules
    .filter((module) => module.skills.some((skill) => lowSkills.includes(skill)))
    .slice(0, 3)

  // Filter mentors based on user interests
  const matchedMentors = mentors
    .filter((mentor) => mentor.expertise.some((exp) => data.domains.includes(exp)))
    .slice(0, 3)

  const tierColor = tierColors[data.tier as keyof typeof tierColors] || "bg-emerald-400"

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-octopus-white mb-4">Your Personalized Action Plan</h1>
        <p className="text-lg text-octopus-white/80">Your roadmap to green career success</p>
      </div>

      {/* Tier Display */}
      <Card className="bg-octopus-darkLight border-octopus-white/20">
        <CardContent className="p-8">
          <div className="text-center">
            <div className="mb-6">
              <div
                className={`inline-flex items-center px-8 py-4 rounded-full ${tierColor} text-white text-2xl font-bold mb-4`}
              >
                🏆 {data.tier}
              </div>
              <p className="text-lg text-octopus-white mb-2">Your Green Career Tier</p>
              <p className="text-sm text-octopus-white/70">Score: {data.score}/100 based on skills and readiness factors</p>
            </div>

            {/* Simplified Pyramid */}
            <Pyramid currentTier={data.tier} size="lg" />
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Skill-Up Modules */}
        <Card className="bg-octopus-darkLight border-octopus-white/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-octopus-white">
              <BookOpen className="w-5 h-5" />
              <span>Recommended Learning</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {recommendedModules.length > 0 ? (
              <div className="space-y-4">
                {recommendedModules.map((module) => (
                  <div key={module.id} className="border border-octopus-white/20 rounded-lg p-4 hover:bg-octopus-white/10">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-sm text-octopus-white">{module.title}</h4>
                      <Badge variant="outline" className="text-xs border-octopus-white/40 text-octopus-white/80">
                        {module.level}
                      </Badge>
                    </div>
                    <p className="text-xs text-octopus-white/70 mb-2">Duration: {module.duration}</p>
                    <div className="flex flex-wrap gap-1">
                      {module.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs bg-octopus-green text-octopus-black">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-octopus-white/70">
                Great job! Your skills are well-developed. We'll recommend advanced modules based on your interests.
              </p>
            )}
          </CardContent>
        </Card>

        {/* Mentors */}
        <Card className="bg-octopus-darkLight border-octopus-white/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-octopus-white">
              <Users className="w-5 h-5" />
              <span>Mentor Matches</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {matchedMentors.map((mentor) => (
                <div key={mentor.id} className="flex items-start space-x-3 p-3 border border-octopus-white/20 rounded-lg hover:bg-octopus-white/10">
                  <img
                    src={mentor.image || "/placeholder.svg"}
                    alt={mentor.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm text-octopus-white">{mentor.name}</h4>
                    <p className="text-xs text-octopus-white/70">
                      {mentor.role} at {mentor.company}
                    </p>
                    <p className="text-xs text-octopus-white/60 mt-1 line-clamp-2">{mentor.background}</p>
                    <div className="flex flex-wrap gap-1 mt-2 mb-2">
                      {mentor.expertise.map((exp) => (
                        <Badge key={exp} variant="secondary" className="text-xs bg-octopus-accent text-octopus-white">
                          {exp}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-2 mt-2">
                      <Button size="sm" variant="outline" className="h-6 text-xs flex-1 border-octopus-white/40 text-octopus-white hover:bg-octopus-white/10">
                        Connect
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="h-6 text-xs bg-octopus-pink text-octopus-white hover:bg-octopus-pink/80"
                      >
                        <Coffee className="w-3 h-3 mr-1" />
                        £3
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Grants */}
        <Card className="bg-octopus-darkLight border-octopus-white/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-octopus-white">
              <Award className="w-5 h-5" />
              <span>Funding Opportunities</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {grants.map((grant) => (
                <div key={grant.id} className="border border-octopus-white/20 rounded-lg p-4 hover:bg-octopus-white/10">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-sm text-octopus-white">{grant.title}</h4>
                    <Badge className="bg-octopus-green text-octopus-black text-xs">{grant.amount}</Badge>
                  </div>
                  <p className="text-xs text-octopus-white/70 mb-2">{grant.description}</p>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-octopus-white/60">Deadline: {grant.deadline}</span>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="h-6 text-xs bg-transparent border-octopus-white/40 text-octopus-white hover:bg-octopus-white/10"
                      onClick={() => {
                        setSelectedGrant(grant)
                        setShowDonationPrompt(true)
                      }}
                    >
                      Apply <ExternalLink className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Events */}
        <Card className="bg-octopus-darkLight border-octopus-white/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-octopus-white">
              <Calendar className="w-5 h-5" />
              <span>Upcoming Events</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {events.map((event) => (
                <div key={event.id} className="border border-octopus-white/20 rounded-lg p-4 hover:bg-octopus-white/10">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-sm text-octopus-white">{event.title}</h4>
                    <Badge variant="outline" className="text-xs border-octopus-white/40 text-octopus-white/80">
                      {event.type}
                    </Badge>
                  </div>
                  <p className="text-xs text-octopus-white/70 mb-1">{event.description}</p>
                  <div className="flex justify-between items-center text-xs text-octopus-white/60">
                    <span>
                      {event.date} • {event.location}
                    </span>
                    <Button size="sm" variant="outline" className="h-6 text-xs bg-transparent border-octopus-white/40 text-octopus-white hover:bg-octopus-white/10">
                      Register
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Learning Hub */}
      <Card className="lg:col-span-2 bg-octopus-darkLight border-octopus-white/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-octopus-white">
            <BookOpen className="w-5 h-5" />
            <span>From Our Learning Hub</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {learningData.courses.slice(0, 6).map((course) => (
              <div key={course.id} className="bg-octopus-dark rounded-lg p-4 hover:shadow-md transition-shadow border border-octopus-white/10">
                <img
                  src={course.thumbnail || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-24 object-cover rounded mb-3"
                />
                <h4 className="font-medium text-sm text-octopus-white mb-1">{course.title}</h4>
                <p className="text-xs text-octopus-white/70 mb-2">
                  {course.provider} • {course.duration}
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs border-octopus-white/40 text-octopus-white/80">
                    {course.level}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <span className="text-xs text-octopus-white/70">⭐ {course.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Download Section */}
      <Card className="bg-octopus-darkLight border-octopus-white/20">
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-bold text-octopus-white mb-4">Take Your Action Plan With You</h3>
          <p className="text-octopus-white/80 mb-6">
            Download a personalized PDF with all your recommendations, contacts, and next steps.
          </p>
          <Button 
            className="bg-octopus-pink hover:bg-octopus-pink/90 text-octopus-white"
            onClick={() => generateActionPlanPDF({
              data,
              recommendedModules,
              matchedMentors,
              grants,
              events
            })}
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF Action Plan
          </Button>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="bg-octopus-darkLight border-octopus-white/20">
        <CardHeader>
          <CardTitle className="text-octopus-white">🚀 Your Next Steps</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-octopus-dark/50 rounded-lg border border-octopus-white/10">
              <div className="text-2xl mb-2">📚</div>
              <h4 className="font-medium mb-1 text-octopus-white">Start Learning</h4>
              <p className="text-sm text-octopus-white/70">Begin with your recommended skill modules</p>
            </div>
            <div className="p-4 bg-octopus-dark/50 rounded-lg border border-octopus-white/10">
              <div className="text-2xl mb-2">🤝</div>
              <h4 className="font-medium mb-1 text-octopus-white">Connect</h4>
              <p className="text-sm text-octopus-white/70">Reach out to matched mentors and join events</p>
            </div>
            <div className="p-4 bg-octopus-dark/50 rounded-lg border border-octopus-white/10">
              <div className="text-2xl mb-2">💰</div>
              <h4 className="font-medium mb-1 text-octopus-white">Apply</h4>
              <p className="text-sm text-octopus-white/70">Submit applications for relevant grants</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sponsor Tiers */}
      <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-octopus-textDark">
            <Crown className="w-5 h-5 text-amber-500" />
            <span>Support Our Mission</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg border border-gray-200">
              <h4 className="font-semibold text-octopus-textDark mb-2">🌱 Supporter</h4>
              <p className="text-2xl font-bold text-octopus-primary mb-2">£10/month</p>
              <ul className="text-sm text-octopus-textDark/70 space-y-1">
                <li>• Support 20 users monthly</li>
                <li>• Monthly impact updates</li>
                <li>• Community recognition</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg border-2 border-octopus-accent">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-octopus-textDark">🚀 Champion</h4>
                <Badge className="bg-octopus-accent text-white">Popular</Badge>
              </div>
              <p className="text-2xl font-bold text-octopus-accent mb-2">£50/month</p>
              <ul className="text-sm text-octopus-textDark/70 space-y-1">
                <li>• Everything in Supporter</li>
                <li>• Sponsor a mentor program</li>
                <li>• Quarterly progress calls</li>
                <li>• Logo in our partner network</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-200">
              <h4 className="font-semibold text-octopus-textDark mb-2">🌟 Transformer</h4>
              <p className="text-2xl font-bold text-amber-600 mb-2">£200/month</p>
              <ul className="text-sm text-octopus-textDark/70 space-y-1">
                <li>• Everything in Champion</li>
                <li>• Featured in success stories</li>
                <li>• Direct advisory access</li>
                <li>• Custom partnership opportunities</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Donation Prompt Modal */}
      {showDonationPrompt && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="max-w-md w-full">
            <DonationPrompt 
              grantAmount={selectedGrant?.amount}
              context="grant"
              onClose={() => setShowDonationPrompt(false)}
            />
          </div>
        </div>
      )}
    </div>
  )
}
