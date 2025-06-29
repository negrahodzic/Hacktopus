"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar, TrendingUp, Award, Target, BookOpen, Users } from "lucide-react"
import ProgressGauge from "./progress-gauge"

interface CheckpointData {
  month: string
  completedModules: number
  totalModules: number
  skillProgress: { [key: string]: number }
  mentorMeetings: number
  networkConnections: number
  appliedOpportunities: number
}

const mockCheckpointData: CheckpointData = {
  month: "January 2024",
  completedModules: 3,
  totalModules: 8,
  skillProgress: {
    "Communication": 85,
    "Problem Solving": 70,
    "Leadership": 60,
    "Technical Skills": 45
  },
  mentorMeetings: 2,
  networkConnections: 12,
  appliedOpportunities: 4
}

const achievements = [
  { icon: "🎓", title: "First Course Completed", description: "Finished Solar Energy Fundamentals" },
  { icon: "🤝", title: "Mentor Connected", description: "Met with Sarah from Octopus Energy" },
  { icon: "🌱", title: "Network Builder", description: "Joined 3 professional groups" },
  { icon: "📝", title: "Opportunity Seeker", description: "Applied to 4 green career positions" }
]

export default function MonthlyCheckpoint() {
  const [isOpen, setIsOpen] = useState(false)
  const data = mockCheckpointData

  const overallProgress = Math.round((data.completedModules / data.totalModules) * 100)

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-octopus-heading mb-4">Your Monthly Green Career Checkpoint</h1>
        <p className="text-lg text-octopus-textDark">Here's where you are on your journey - {data.month}</p>
      </div>

      {/* Overall Progress */}
      <Card className="bg-gradient-to-r from-octopus-primary/10 to-octopus-accent/10 border-octopus-primary/20">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-octopus-textDark mb-2">Journey Progress</h2>
              <p className="text-octopus-textDark/70">You've completed {data.completedModules} of {data.totalModules} recommended modules</p>
            </div>
            <ProgressGauge 
              percentage={overallProgress} 
              title="Overall Progress"
              subtitle="Keep it up!"
              color="primary"
            />
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-octopus-card">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-octopus-textDark">
              <BookOpen className="w-5 h-5 text-octopus-primary" />
              <span>Learning</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-octopus-textDark/70">Modules Completed</span>
                <Badge className="bg-octopus-primary/20 text-octopus-primary">{data.completedModules}</Badge>
              </div>
              <Progress value={(data.completedModules / data.totalModules) * 100} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-octopus-card">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-octopus-textDark">
              <Users className="w-5 h-5 text-octopus-accent" />
              <span>Networking</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-octopus-textDark/70">Mentor Meetings</span>
                <Badge className="bg-octopus-accent/20 text-octopus-accent">{data.mentorMeetings}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-octopus-textDark/70">New Connections</span>
                <Badge className="bg-octopus-accent/20 text-octopus-accent">{data.networkConnections}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-octopus-card">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-octopus-textDark">
              <Target className="w-5 h-5 text-emerald-600" />
              <span>Opportunities</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-octopus-textDark/70">Applications Sent</span>
                <Badge className="bg-emerald-100 text-emerald-800">{data.appliedOpportunities}</Badge>
              </div>
              <div className="text-xs text-octopus-textDark/60">
                📈 Great progress! Keep applying.
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Skill Progress */}
      <Card className="bg-octopus-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-octopus-textDark">
            <TrendingUp className="w-5 h-5" />
            <span>Skill Development Progress</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(data.skillProgress).map(([skill, progress]) => (
              <div key={skill} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-octopus-textDark">{skill}</span>
                  <span className="text-sm text-octopus-textDark/70">{progress}%</span>
                </div>
                <Progress value={progress} className="h-3" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card className="bg-octopus-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-octopus-textDark">
            <Award className="w-5 h-5 text-amber-500" />
            <span>This Month's Achievements</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-amber-50 rounded-lg">
                <span className="text-2xl">{achievement.icon}</span>
                <div>
                  <h4 className="font-medium text-octopus-textDark">{achievement.title}</h4>
                  <p className="text-sm text-octopus-textDark/70">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Next Month Goals */}
      <Card className="bg-gradient-to-r from-octopus-accent/10 to-octopus-primary/10 border-octopus-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-octopus-textDark">
            <Calendar className="w-5 h-5 text-octopus-accent" />
            <span>Next Month's Goals</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-octopus-textDark">Learning Targets:</h4>
              <ul className="text-sm text-octopus-textDark/70 space-y-1">
                <li>• Complete 2 more skill modules</li>
                <li>• Attend virtual green careers workshop</li>
                <li>• Get certified in Carbon Accounting</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-octopus-textDark">Networking Goals:</h4>
              <ul className="text-sm text-octopus-textDark/70 space-y-1">
                <li>• Schedule mentor meeting</li>
                <li>• Join local sustainability meetup</li>
                <li>• Apply to 5 new opportunities</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 