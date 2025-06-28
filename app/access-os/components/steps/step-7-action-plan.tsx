"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, ExternalLink, Calendar, Users, BookOpen, Award } from "lucide-react"
import { useWizard } from "../modal-wizard"
import Pyramid from "../pyramid"
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
        <h1 className="text-3xl font-bold text-octopus-heading mb-4">Your Personalized Action Plan</h1>
        <p className="text-lg text-octopus-textDark">Your roadmap to green career success</p>
      </div>

      {/* Tier Display */}
      <Card className="bg-octopus-card">
        <CardContent className="p-8">
          <div className="text-center">
            <div className="mb-6">
              <div
                className={`inline-flex items-center px-8 py-4 rounded-full ${tierColor} text-white text-2xl font-bold mb-4`}
              >
                🏆 {data.tier}
              </div>
              <p className="text-lg text-gray-700 mb-2">Your Green Career Tier</p>
              <p className="text-sm text-gray-600">Score: {data.score}/100 based on skills and readiness factors</p>
            </div>

            {/* Simplified Pyramid */}
            <Pyramid currentTier={data.tier} size="lg" />
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Skill-Up Modules */}
        <Card className="bg-octopus-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-octopus-textDark">
              <BookOpen className="w-5 h-5" />
              <span>Recommended Learning</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {recommendedModules.length > 0 ? (
              <div className="space-y-4">
                {recommendedModules.map((module) => (
                  <div key={module.id} className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-sm text-octopus-textDark">{module.title}</h4>
                      <Badge variant="outline" className="text-xs">
                        {module.level}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">Duration: {module.duration}</p>
                    <div className="flex flex-wrap gap-1">
                      {module.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs bg-blue-100 text-blue-800">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-600">
                Great job! Your skills are well-developed. We'll recommend advanced modules based on your interests.
              </p>
            )}
          </CardContent>
        </Card>

        {/* Mentors */}
        <Card className="bg-octopus-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-octopus-textDark">
              <Users className="w-5 h-5" />
              <span>Mentor Matches</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {matchedMentors.map((mentor) => (
                <div key={mentor.id} className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                  <img
                    src={mentor.image || "/placeholder.svg"}
                    alt={mentor.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm text-octopus-textDark">{mentor.name}</h4>
                    <p className="text-xs text-gray-600">
                      {mentor.role} at {mentor.company}
                    </p>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">{mentor.background}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {mentor.expertise.map((exp) => (
                        <Badge key={exp} variant="secondary" className="text-xs">
                          {exp}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Grants */}
        <Card className="bg-octopus-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-octopus-textDark">
              <Award className="w-5 h-5" />
              <span>Funding Opportunities</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {grants.map((grant) => (
                <div key={grant.id} className="border rounded-lg p-4 hover:bg-gray-50">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-sm text-octopus-textDark">{grant.title}</h4>
                    <Badge className="bg-green-100 text-green-800 text-xs">{grant.amount}</Badge>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">{grant.description}</p>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500">Deadline: {grant.deadline}</span>
                    <Button size="sm" variant="outline" className="h-6 text-xs bg-transparent">
                      Apply <ExternalLink className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Events */}
        <Card className="bg-octopus-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-octopus-textDark">
              <Calendar className="w-5 h-5" />
              <span>Upcoming Events</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {events.map((event) => (
                <div key={event.id} className="border rounded-lg p-4 hover:bg-gray-50">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-sm text-octopus-textDark">{event.title}</h4>
                    <Badge variant="outline" className="text-xs">
                      {event.type}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-600 mb-1">{event.description}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>
                      {event.date} • {event.location}
                    </span>
                    <Button size="sm" variant="outline" className="h-6 text-xs bg-transparent">
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
      <Card className="lg:col-span-2 bg-octopus-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-octopus-text">
            <BookOpen className="w-5 h-5" />
            <span>From Our Learning Hub</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {learningData.courses.slice(0, 6).map((course) => (
              <div key={course.id} className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                <img
                  src={course.thumbnail || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-24 object-cover rounded mb-3"
                />
                <h4 className="font-medium text-sm text-octopus-text mb-1">{course.title}</h4>
                <p className="text-xs text-octopus-text/60 mb-2">
                  {course.provider} • {course.duration}
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {course.level}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <span className="text-xs text-octopus-text/60">⭐ {course.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Download Section */}
      <Card className="bg-octopus-card">
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-bold text-octopus-text mb-4">Take Your Action Plan With You</h3>
          <p className="text-octopus-text mb-6">
            Download a personalized PDF with all your recommendations, contacts, and next steps.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Download className="w-4 h-4 mr-2" />
            Download PDF Action Plan
          </Button>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="bg-octopus-card">
        <CardHeader>
          <CardTitle className="text-octopus-textDark">🚀 Your Next Steps</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl mb-2">📚</div>
              <h4 className="font-medium mb-1 text-octopus-textDark">Start Learning</h4>
              <p className="text-sm text-gray-600">Begin with your recommended skill modules</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-2xl mb-2">🤝</div>
              <h4 className="font-medium mb-1 text-octopus-textDark">Connect</h4>
              <p className="text-sm text-gray-600">Reach out to matched mentors and join events</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl mb-2">💰</div>
              <h4 className="font-medium mb-1 text-octopus-textDark">Apply</h4>
              <p className="text-sm text-gray-600">Submit applications for relevant grants</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
