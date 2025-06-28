"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Zap, Building2, Calculator, Users, Briefcase, ArrowRight, Target, BookOpen, Award } from "lucide-react"
import ModalWizard from "./components/modal-wizard"
import Pyramid from "./components/pyramid"
import CommunityFeedback from "./components/community-feedback"

const greenRoles = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Solar Engineer",
    description: "Design and install renewable energy systems for homes and businesses",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Sustainability Analyst",
    description: "Measure and improve environmental impact across organizations",
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "Carbon Accountant",
    description: "Track, report and reduce greenhouse gas emissions",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community Energy Lead",
    description: "Engage communities in local renewable energy projects",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Green Finance Advisor",
    description: "Structure funding for sustainable infrastructure projects",
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Circular Economy Specialist",
    description: "Design waste-free systems and sustainable business models",
  },
]

const skillTiers = [
  {
    level: "Tier 4",
    title: "Specialist Expertise",
    description: "Solar design, policy strategy, advanced technical skills",
    color: "bg-emerald-600",
  },
  {
    level: "Tier 3",
    title: "Upskilling",
    description: "Carbon accounting, retrofit tech, sector knowledge",
    color: "bg-emerald-500",
  },
  {
    level: "Tier 2",
    title: "Core Skills",
    description: "Data analysis, materials knowledge, project management",
    color: "bg-emerald-400",
  },
  {
    level: "Tier 1",
    title: "Green Mindset",
    description: "Positivity, solutions thinking, environmental awareness",
    color: "bg-emerald-300",
  },
]

export default function AccessOSPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-octopus-background text-octopus-textLight">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-octopus-primary rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-octopus-textDark">Octopus Energy</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-octopus-textDark hover:text-octopus-primary">
                About
              </a>
              <a href="#" className="text-octopus-textDark hover:text-octopus-primary">
                Careers
              </a>
              <a href="#" className="text-octopus-textDark hover:text-octopus-primary">
                Support
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-octopus-accent mb-6">
            Let's supercharge your green career & climate leadership!
          </h1>
          <p className="text-xl text-octopus-textLight max-w-4xl mx-auto mb-8 leading-relaxed">
            Green careers—from solar engineering to eco-finance—are growing 50% faster than other sectors. But only 5–7%
            of this workforce comes from Black, Asian & minority ethnic backgrounds. We built this tool to expand access
            to education, funding, mentorship and career pathways for under-represented communities.
          </p>
        </div>
        <div className="mt-8 mb-8">
          <img
            src="/team-octopus-energy.jpg"
            alt="Diverse group of young professionals at Octopus Energy"
            className="mx-auto rounded-xl shadow-lg max-w-4xl w-full h-auto"
          />
        </div>
      </section>

      {/* Green Skills Pyramid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-octopus-heading mb-4">Green Skills Pyramid</h2>
          <p className="text-lg text-octopus-textLight">Build your expertise from the ground up</p>
        </div>

        <Pyramid size="lg" />
      </section>

      {/* Top Green Roles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-octopus-heading mb-4">Top 6 Green Roles</h2>
          <p className="text-lg text-octopus-textDark">Explore career opportunities in the green economy</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {greenRoles.map((role, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-octopus-card">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">{role.icon}</div>
                  <CardTitle className="text-lg text-octopus-textDark">{role.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{role.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How the Tool Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-octopus-heading mb-4">How the Tool Works</h2>
          <p className="text-lg text-octopus-textLight">Your personalized journey to green careers</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-octopus-textLight">Rate Your Skills</h3>
            <p className="text-octopus-textLight text-sm">Rate your green skills and see where you stand</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-octopus-textLight">Share Ambitions</h3>
            <p className="text-octopus-textLight text-sm">Tell us your ambitions and barriers</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-octopus-textLight">Learn & Grow</h3>
            <p className="text-octopus-textLight text-sm">Get bite-size micro-lessons & tips in-flight</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-octopus-textLight">Action Plan</h3>
            <p className="text-octopus-textLight text-sm">
              Receive personalized skill-up modules, mentor matches & opportunities
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-gradient-to-r from-octopus-primary to-octopus-accent rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">Discover your path to a meaningful green career in just 10 minutes</p>
          <Button
            size="lg"
            className="bg-octopus-primary hover:bg-octopus-primary/80 text-white"
            onClick={() => setIsModalOpen(true)}
          >
            Start Your Green-Career Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <CommunityFeedback />
      </section>

      {/* Footer */}
      <footer className="bg-octopus-heading text-octopus-textLight py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Octopus Energy</span>
              </div>
              <p className="text-gray-400 text-sm">Powering a greener future for everyone</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Octopus Energy. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Modal Wizard */}
      <ModalWizard isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
