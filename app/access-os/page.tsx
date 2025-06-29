"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Leaf, Zap, Building2, Calculator, Users, Briefcase, ArrowRight, Target, BookOpen, Award, Lightbulb, Send } from "lucide-react"
import ModalWizard from "./components/modal-wizard"
import Pyramid from "./components/pyramid"
import CommunityFeedback from "./components/community-feedback"
import AccessibilityControls from "./components/accessibility-controls"
import GreenRolesGrid from "./components/green-roles-grid"

const greenRoles = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Solar Engineer",
    description: "Design, develop, and install solar energy systems for residential, commercial, and utility-scale projects",
    whatItMeans: "You'll be at the forefront of the renewable energy revolution, creating clean power solutions that reduce carbon emissions and energy costs.",
    keySkills: ["Problem-Solving", "Creativity", "Aiming High"],
    averageSalary: "£35,000 - £65,000",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Sustainability Analyst",
    description: "Analyze environmental data and develop strategies to reduce organizational carbon footprint and improve sustainability performance",
    whatItMeans: "You'll help companies become more environmentally responsible by measuring their impact and creating actionable improvement plans.",
    keySkills: ["Problem-Solving", "Speaking", "Listening"],
    averageSalary: "£28,000 - £55,000",
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "Carbon Accountant",
    description: "Measure, track, and report on greenhouse gas emissions to help organizations meet net-zero targets",
    whatItMeans: "You'll be the numbers expert helping companies understand and reduce their climate impact through precise measurement and reporting.",
    keySkills: ["Problem-Solving", "Aiming High", "Listening"],
    averageSalary: "£32,000 - £58,000",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community Energy Lead",
    description: "Develop and manage local renewable energy projects that benefit entire communities",
    whatItMeans: "You'll empower communities to take control of their energy future, creating local jobs and reducing energy poverty.",
    keySkills: ["Leadership", "Speaking", "Teamwork"],
    averageSalary: "£30,000 - £50,000",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Green Finance Advisor",
    description: "Structure and advise on funding for sustainable infrastructure, renewable energy, and climate adaptation projects",
    whatItMeans: "You'll be the bridge between environmental goals and financial reality, making green projects economically viable.",
    keySkills: ["Speaking", "Aiming High", "Problem-Solving"],
    averageSalary: "£40,000 - £80,000",
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Circular Economy Specialist",
    description: "Design and implement waste-free business models that keep resources in use for as long as possible",
    whatItMeans: "You'll reimagine how we make and use things, creating systems where waste becomes input for something else.",
    keySkills: ["Creativity", "Problem-Solving", "Teamwork"],
    averageSalary: "£33,000 - £60,000",
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
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false)
  const [isCommunityModalOpen, setIsCommunityModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('all')
  const [newTitle, setNewTitle] = useState("")
  const [newDescription, setNewDescription] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    if (!newTitle.trim() || !newDescription.trim()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Here you would normally send the data to your backend
    console.log('New idea submitted:', { title: newTitle, description: newDescription })

    setNewTitle("")
    setNewDescription("")
    setIsSubmitting(false)
    
    // Show success message or close modal
    alert('Thank you! Your idea has been submitted successfully.')
  }

  return (
    <div className="min-h-screen bg-octopus-white text-octopus-black">
      {/* Skip Link for Screen Readers */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      {/* Header */}
      <header className="bg-octopus-dark shadow-sm border-b border-octopus-darkLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-octopus-pink rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-octopus-white" />
              </div>
              <span className="text-xl font-bold text-octopus-white">Octopus Energy</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-octopus-white hover:text-octopus-pink">
                About
              </a>
              <a href="#" className="text-octopus-white hover:text-octopus-pink">
                Careers
              </a>
              <a href="#" className="text-octopus-white hover:text-octopus-pink">
                Support
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-octopus-dark mb-8">
            Breaking Barriers to <span className="text-octopus-green">Green Careers</span>
          </h1>
          <p className="text-lg text-octopus-black max-w-3xl mx-auto mb-12">
            The green economy is booming. We're making it accessible with personalized pathways and mentorship.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <Button
              size="lg"
              className="bg-octopus-pink hover:bg-octopus-darkLight text-octopus-white font-semibold px-8 py-4"
              onClick={() => setIsModalOpen(true)}
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg" 
              variant="outline"
              className="border-2 border-octopus-dark text-octopus-white bg-octopus-dark hover:bg-octopus-pink hover:border-octopus-pink font-semibold px-8 py-4"
              onClick={() => document.getElementById('problem-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See How It Works
            </Button>
          </div>
        </div>
        <div className="mt-12 mb-8">
          <img
            src="/team-octopus-energy.jpg"
            alt="Diverse group of young professionals at Octopus Energy"
            className="mx-auto rounded-xl shadow-soft-xl max-w-5xl w-full h-auto"
          />
        </div>
      </section>

      {/* Problem Statement */}
      <section id="problem-section" className="bg-octopus-darkLight py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-octopus-pink mb-6">The Problem: Access Isn't Equal</h2>
            <p className="text-lg text-octopus-white max-w-2xl mx-auto">
              Incredible opportunities exist, but barriers prevent many from accessing them.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-octopus-white rounded-xl border border-octopus-dark">
              <div className="w-20 h-20 bg-octopus-pink rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-octopus-black mb-4">Representation Gap</h3>
              <p className="text-octopus-black">
                Only <strong className="text-octopus-pink">5-7%</strong> of green workers are from minority backgrounds, despite being most affected by climate change.
              </p>
            </div>
            
            <div className="text-center p-8 bg-octopus-white rounded-xl border border-octopus-dark">
              <div className="w-20 h-20 bg-octopus-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🚧</span>
              </div>
              <h3 className="text-xl font-semibold text-octopus-black mb-4">Hidden Barriers</h3>
              <p className="text-octopus-black">
                Cost, time, networks, childcare, and confidence gaps block talented individuals from green careers.
              </p>
            </div>
            
            <div className="text-center p-8 bg-octopus-white rounded-xl border border-octopus-dark">
              <div className="w-20 h-20 bg-octopus-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-octopus-black mb-4">Growing Opportunity</h3>
              <p className="text-octopus-black">
                Green careers grow <strong className="text-octopus-green">50% faster</strong> than other sectors, creating millions of new jobs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-16 bg-octopus-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-octopus-dark mb-4">Our Solution: Personalized Pathways</h2>
            <p className="text-lg text-octopus-black max-w-3xl mx-auto">
              We've reimagined access to green careers through intelligent matching, barrier-aware support, 
              and community-driven resources that meet people where they are.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-octopus-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-octopus-black mb-2">Smart Assessment</h3>
                  <p className="text-octopus-black">
                    Our 9-step journey maps your skills, ambitions, and challenges to create a personalized roadmap.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-octopus-green rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-octopus-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-octopus-black mb-2">Mentor Matching</h3>
                  <p className="text-octopus-black">
                    Connect with professionals from similar backgrounds who understand your journey and can guide your growth.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-octopus-pink rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-octopus-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-octopus-black mb-2">Barrier-Aware Resources</h3>
                  <p className="text-octopus-black">
                    Targeted support for real challenges like cost, time, childcare, confidence, and digital access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Green Skills Pyramid */}
      <section className="bg-octopus-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-octopus-white mb-4">The <span className="text-octopus-green">Green</span> Skills Pyramid</h2>
            <p className="text-lg text-octopus-white max-w-3xl mx-auto mb-6">
              Your pathway to green career success. Every role in the green economy builds on these four foundational tiers. 
              Discover where you are now and plan your next steps up the pyramid.
            </p>
            <div className="bg-octopus-darkLight p-4 rounded-lg max-w-2xl mx-auto">
              <p className="text-octopus-white text-sm">
                💡 <strong>How it works:</strong> Click or hover over each tier to learn more about the skills and opportunities at that level.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div title="Click on each tier to learn more">
              <Pyramid size="lg" />
            </div>
            
                          <div className="space-y-6">
              <div className="p-6 bg-octopus-white rounded-xl">
                <h3 className="text-xl font-semibold text-octopus-black mb-3">Why the Pyramid Matters</h3>
                <div className="space-y-3 text-sm text-octopus-black">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-octopus-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-octopus-black text-xs font-bold">1</span>
                    </div>
                    <div>
                      <strong>Clear Progression:</strong> Shows exactly what skills to develop next for your green career goals
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-octopus-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-octopus-black text-xs font-bold">2</span>
                    </div>
                    <div>
                      <strong>Realistic Expectations:</strong> Understand where you are now and what's achievable in your timeframe
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-octopus-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-octopus-black text-xs font-bold">3</span>
                    </div>
                    <div>
                      <strong>Targeted Learning:</strong> Focus your energy on the most impactful skills for your current level
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Green Roles */}
      <section className="bg-white py-20 m-16 rounded-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-heading-lg text-octopus-primary mb-6">Explore <span className="text-green-600">Green</span> Career Opportunities</h2>
            <p className="text-body-lg text-octopus-textDark/80">Discover what's possible in the growing green economy</p>
          </div>

          <GreenRolesGrid roles={greenRoles} />
        </div>
      </section>

      {/* Spacer Section */}
      <div className="bg-white py-12"></div>

            {/* How Our Tools Work */}
      <section className="bg-octopus-darkLight py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-octopus-white mb-4">What Our Tools Actually Do</h2>
            <p className="text-lg text-octopus-white">Four simple steps to your green career</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-octopus-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-octopus-white font-bold text-lg">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-octopus-white mb-2">Assess Your Skills & Background</h3>
                  <p className="text-octopus-white/80">
                    Take our 10-minute assessment to map your existing strengths across 8 core competencies and identify where you fit in the Green Skills Pyramid.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-octopus-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-octopus-white font-bold text-lg">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-octopus-white mb-2">Identify & Address Barriers</h3>
                  <p className="text-octopus-white/80">
                    We detect specific challenges you might face (cost, time, confidence, childcare) and provide targeted solutions and resources for each one.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-octopus-green rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-octopus-black font-bold text-lg">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-octopus-white mb-2">Connect with Matching Mentors</h3>
                  <p className="text-octopus-white/80">
                    Get matched with professionals who share similar backgrounds and have walked your path. Real people who understand your journey.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-octopus-pink rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-octopus-white font-bold text-lg">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-octopus-white mb-2">Get Your Personalized Action Plan</h3>
                  <p className="text-octopus-white/80">
                    Receive a step-by-step roadmap with specific courses, funding opportunities, and connections tailored to your goals and timeline.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button
                size="lg"
                className="bg-octopus-pink hover:bg-octopus-pink/90 text-octopus-white font-semibold px-8"
                onClick={() => setIsModalOpen(true)}
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Results */}
      <section className="bg-octopus-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-octopus-dark mb-4">Real Impact, Real Results</h2>
            <p className="text-lg text-octopus-black max-w-3xl mx-auto">
              Join thousands who've used our platform to break into green careers and create positive change.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-octopus-white p-6 rounded-xl border border-octopus-dark">
              <div className="w-12 h-12 bg-octopus-pink rounded-full flex items-center justify-center text-octopus-white font-semibold mb-4 mx-auto">
                A
              </div>
              <blockquote className="text-sm text-octopus-black mb-3 text-center italic">
                "Finally, a platform that gets it. They understood my barriers and matched me with someone who looked like me."
              </blockquote>
              <cite className="text-octopus-dark font-medium text-xs text-center block">Amara, London</cite>
            </div>
            
            <div className="bg-octopus-white p-6 rounded-xl border border-octopus-dark">
              <div className="w-12 h-12 bg-octopus-green rounded-full flex items-center justify-center text-octopus-black font-semibold mb-4 mx-auto">
                M
              </div>
              <blockquote className="text-sm text-octopus-black mb-3 text-center italic">
                "As a single mother, I thought green careers were out of reach. This platform proved me wrong."
              </blockquote>
              <cite className="text-octopus-dark font-medium text-xs text-center block">Mehreen, Birmingham</cite>
            </div>
            
            <div className="bg-octopus-white p-6 rounded-xl border border-octopus-dark">
              <div className="w-12 h-12 bg-octopus-dark rounded-full flex items-center justify-center text-octopus-white font-semibold mb-4 mx-auto">
                J
              </div>
              <blockquote className="text-sm text-octopus-black mb-3 text-center italic">
                "From feeling invisible to landing my dream role. This platform saw my potential when others didn't."
              </blockquote>
              <cite className="text-octopus-dark font-medium text-xs text-center block">Jamal, Manchester</cite>
            </div>
            
            <div className="bg-octopus-white p-6 rounded-xl border border-octopus-dark">
              <div className="w-12 h-12 bg-octopus-darkLight rounded-full flex items-center justify-center text-octopus-white font-semibold mb-4 mx-auto">
                P
              </div>
              <blockquote className="text-sm text-octopus-black mb-3 text-center italic">
                "They didn't just help me find a job - they helped me belong in an industry that needed my voice."
              </blockquote>
              <cite className="text-octopus-dark font-medium text-xs text-center block">Priya, Leeds</cite>
            </div>
          </div>


        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-octopus-dark rounded-2xl p-12 text-octopus-white">
          <h2 className="text-3xl font-bold text-octopus-white mb-4">Your <span className="text-octopus-green">Green Career</span> Starts Here</h2>
          <p className="text-xl mb-2">Take our 10-minute assessment and get your personalized roadmap</p>
          <p className="text-lg mb-8">Join thousands building diverse, sustainable careers</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-octopus-pink hover:bg-octopus-darkLight text-octopus-white font-semibold"
              onClick={() => setIsModalOpen(true)}
            >
              Start Your Assessment Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-octopus-white text-octopus-white hover:bg-octopus-white hover:text-octopus-dark"
            >
              Watch 2-Min Demo
            </Button>
          </div>
          <div className="mt-6 bg-octopus-darkLight p-4 rounded-lg">
            <div className="text-lg font-semibold mb-2">
              ✅ Completely free  ✅ No account required*  ✅ Results in 10 minutes
            </div>
            <div className="text-sm">
              *Account optional for saving results and community features
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-octopus-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-octopus-white mb-6">Our Partners</h2>
            <p className="text-lg text-octopus-white max-w-2xl mx-auto">
              Working together to expand access to green careers through mentorship and community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center p-8 bg-octopus-white rounded-xl border border-octopus-darkLight">
              <div className="w-20 h-20 bg-octopus-pink rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-octopus-white">R</span>
              </div>
              <h3 className="text-xl font-semibold text-octopus-black mb-4">RCT</h3>
              <h4 className="font-semibold text-octopus-pink mb-3">Rewriting the Code</h4>
              <p className="text-octopus-black mb-4">
                Empowering women and non-binary individuals in tech and sustainability careers through mentorship, community, and professional development.
              </p>
              <div className="flex justify-center">
                <Badge className="bg-octopus-pink text-octopus-white font-medium">Mentorship Partner</Badge>
              </div>
            </div>
            
            <div className="text-center p-8 bg-octopus-white rounded-xl border border-octopus-darkLight">
              <div className="w-20 h-20 bg-octopus-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-octopus-black">B</span>
              </div>
              <h3 className="text-xl font-semibold text-octopus-black mb-4">BCS</h3>
              <h4 className="font-semibold text-octopus-green mb-3">British Computer Society</h4>
              <p className="text-octopus-black mb-4">
                Professional network for technologists working on climate solutions, providing expertise and career pathways in green technology.
              </p>
              <div className="flex justify-center">
                <Badge className="bg-octopus-green text-octopus-black font-medium">Tech Network Partner</Badge>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-sm text-octopus-white">
              Interested in partnering with us? <a href="#" className="text-octopus-pink underline hover:text-octopus-green">Get in touch</a>
            </p>
          </div>
        </div>
      </section>

      {/* Community Ideas Section */}
      <section className="bg-octopus-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-octopus-dark mb-4">Help Us Build a Better Platform</h2>
            <p className="text-lg text-octopus-black max-w-3xl mx-auto mb-6">
              Your voice matters in creating tools that truly serve underrepresented communities. 
              Share what's missing, what's working, and what could work better.
            </p>
            
            <div className="bg-octopus-dark p-6 rounded-lg max-w-3xl mx-auto mb-8">
              <h3 className="font-semibold text-octopus-white mb-3">🌍 Why Your Voice Matters</h3>
              <p className="text-sm text-octopus-white leading-relaxed">
                This platform was built <strong>for</strong> underrepresented communities, not just <strong>about</strong> them. 
                We need your insights to ensure we're addressing real barriers, not assumed ones. 
                Every suggestion helps us better serve people who look like you, face similar challenges, 
                or come from similar backgrounds.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-octopus-pink hover:bg-octopus-pink/90 text-octopus-white font-semibold px-8"
                onClick={() => setIsFeedbackModalOpen(true)}
              >
                Share Your Ideas
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-octopus-dark text-octopus-dark hover:bg-octopus-dark hover:text-octopus-white font-semibold px-8"
                onClick={() => setIsCommunityModalOpen(true)}
              >
                Community Ideas & Suggestions
              </Button>
            </div>
            
            <div className="mt-6 text-sm text-octopus-black">
              💚 Together we're building the most inclusive green careers platform in the world
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-octopus-dark text-octopus-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-octopus-pink rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-octopus-white" />
                </div>
                <span className="text-xl font-bold text-octopus-white">Octopus Energy</span>
              </div>
              <p className="text-octopus-white text-sm leading-relaxed">
                Breaking barriers to green careers and building a more diverse, sustainable future for everyone.
              </p>
              <div className="mt-4 flex space-x-3">
                <div className="w-8 h-8 bg-octopus-darkLight rounded-full flex items-center justify-center hover:bg-octopus-pink transition-colors cursor-pointer">
                  <span className="text-sm font-bold">X</span>
                </div>
                <div className="w-8 h-8 bg-octopus-darkLight rounded-full flex items-center justify-center hover:bg-octopus-pink transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-octopus-white">About</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-octopus-white hover:text-octopus-pink transition-colors">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#" className="text-octopus-white hover:text-octopus-pink transition-colors">
                    Green Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-octopus-white hover:text-octopus-pink transition-colors">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="text-octopus-white hover:text-octopus-pink transition-colors">
                    Press & Media
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-octopus-white">Resources</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-octopus-white hover:text-octopus-green transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-octopus-white hover:text-octopus-green transition-colors">
                    Mentor Network
                  </a>
                </li>
                <li>
                  <a href="#" className="text-octopus-white hover:text-octopus-green transition-colors">
                    Learning Hub
                  </a>
                </li>
                <li>
                  <a href="#" className="text-octopus-white hover:text-octopus-green transition-colors">
                    Community Forum
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-octopus-white">Connect</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-octopus-white hover:text-octopus-pink transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-octopus-white hover:text-octopus-pink transition-colors">
                    Partner With Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-octopus-white hover:text-octopus-pink transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-octopus-white hover:text-octopus-pink transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-octopus-darkLight mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-octopus-white">
                &copy; 2024 Octopus Energy. All rights reserved. Building diverse green careers.
              </p>
              <div className="flex items-center space-x-4 text-sm text-octopus-white">
                <span>Made with 💚 for climate action</span>
                <span>•</span>
                <span>Thousands of careers launched</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Accessibility Controls */}
      <div className="fixed bottom-6 right-6 z-50">
        <AccessibilityControls />
      </div>

      {/* Modal Wizard */}
      <ModalWizard isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Submit Ideas Modal */}
      {isFeedbackModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-octopus-dark rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-octopus-darkLight">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-octopus-white">Submit Your Ideas</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsFeedbackModalOpen(false)}
                className="hover:bg-octopus-darkLight text-octopus-white rounded-full"
              >
                ✕
              </Button>
            </div>
            
            <div className="bg-octopus-darkLight p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-octopus-white mb-3">💡 Help Us Build Better Tools</h3>
              <p className="text-sm text-octopus-white/80 mb-4">
                Your insights help us create tools that truly serve underrepresented communities. 
                We want to hear about:
              </p>
              <ul className="text-sm text-octopus-white/80 space-y-2">
                <li>• Features that would help you overcome barriers</li>
                <li>• What's working well and should be expanded</li>
                <li>• Missing resources or support you need</li>
                <li>• Ways to make the platform more inclusive</li>
              </ul>
            </div>

            {/* Idea Submission Form */}
            <div className="space-y-4">
              <Input
                placeholder="What's your idea? (e.g., 'Add video testimonials from green career professionals')"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="bg-octopus-darkLight border-octopus-white/20 text-octopus-white placeholder:text-octopus-white/60 focus:border-octopus-green"
              />
              <Textarea
                placeholder="Describe your idea in detail. How would it help users on their green career journey?"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                rows={4}
                className="bg-octopus-darkLight border-octopus-white/20 text-octopus-white placeholder:text-octopus-white/60 focus:border-octopus-green resize-none"
              />
              <div className="flex justify-between items-center">
                <span className="text-sm text-octopus-white/60">
                  Ideas with 20+ votes are automatically reviewed by our team
                </span>
                <Button
                  onClick={handleSubmit}
                  disabled={!newTitle.trim() || !newDescription.trim() || isSubmitting}
                  className="bg-octopus-green hover:bg-octopus-green/90 text-octopus-black font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-octopus-black mr-2"></div>
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
            </div>
            
            <div className="mt-6 flex justify-center space-x-4">
              <Button
                variant="outline"
                className="border-octopus-white text-octopus-white hover:bg-octopus-white hover:text-octopus-dark"
                onClick={() => {
                  setIsFeedbackModalOpen(false)
                  setIsCommunityModalOpen(true)
                }}
              >
                View Past Ideas
              </Button>
              <Button
                variant="outline"
                className="border-octopus-white/40 text-octopus-white/60 hover:bg-octopus-white/10"
                onClick={() => setIsFeedbackModalOpen(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Community Ideas Modal */}
      {isCommunityModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-octopus-dark rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-octopus-darkLight">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-octopus-white">Community Ideas & Suggestions</h2>
                <p className="text-sm text-octopus-white/60 mt-1">Vote on ideas to help us prioritize development</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsCommunityModalOpen(false)}
                className="hover:bg-octopus-darkLight text-octopus-white rounded-full"
              >
                ✕
              </Button>
            </div>

            {/* Tabs */}
            <div className="flex space-x-1 mb-6 bg-octopus-darkLight p-1 rounded-lg">
              <Button
                variant={activeTab === 'all' ? 'default' : 'ghost'}
                size="sm"
                className={`flex-1 ${activeTab === 'all' 
                  ? 'bg-octopus-white text-octopus-dark' 
                  : 'text-octopus-white hover:bg-octopus-white/10'
                }`}
                onClick={() => setActiveTab('all')}
              >
                All Ideas
              </Button>
              <Button
                variant={activeTab === 'inprogress' ? 'default' : 'ghost'}
                size="sm"
                className={`flex-1 ${activeTab === 'inprogress' 
                  ? 'bg-octopus-accent text-octopus-white' 
                  : 'text-octopus-white hover:bg-octopus-white/10'
                }`}
                onClick={() => setActiveTab('inprogress')}
              >
                In Progress
              </Button>
              <Button
                variant={activeTab === 'approved' ? 'default' : 'ghost'}
                size="sm"
                className={`flex-1 ${activeTab === 'approved' 
                  ? 'bg-octopus-green text-octopus-black' 
                  : 'text-octopus-white hover:bg-octopus-white/10'
                }`}
                onClick={() => setActiveTab('approved')}
              >
                Approved
              </Button>
              <Button
                variant={activeTab === 'rejected' ? 'default' : 'ghost'}
                size="sm"
                className={`flex-1 ${activeTab === 'rejected' 
                  ? 'bg-octopus-pink text-octopus-white' 
                  : 'text-octopus-white hover:bg-octopus-white/10'
                }`}
                onClick={() => setActiveTab('rejected')}
              >
                Rejected
              </Button>
            </div>
            
            <div className="space-y-4">
              {/* All Ideas - Show all */}
              {activeTab === 'all' && (
                <>
                  <div className="bg-octopus-darkLight p-6 rounded-lg border border-octopus-white/10">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-octopus-green rounded-full flex items-center justify-center text-octopus-black font-semibold">
                        A
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="font-semibold text-octopus-white">Amara K.</span>
                          <span className="text-xs bg-octopus-green text-octopus-black px-2 py-1 rounded-full">
                            ✅ Approved
                          </span>
                          <span className="text-xs text-octopus-white/60">2 days ago</span>
                        </div>
                        <p className="text-octopus-white/90 mb-4 leading-relaxed">
                          "Could we add more childcare-friendly training options? Many single parents like me struggle to attend evening workshops."
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="hover:bg-octopus-green/20 text-octopus-white px-3 py-1"
                            >
                              👍 15
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="hover:bg-octopus-white/10 text-octopus-white/60 px-3 py-1"
                            >
                              💬 Reply
                            </Button>
                          </div>
                          <div className="text-xs text-octopus-green font-medium">
                            High Priority
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-octopus-darkLight p-6 rounded-lg border border-octopus-white/10">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-octopus-pink rounded-full flex items-center justify-center text-octopus-white font-semibold">
                        J
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="font-semibold text-octopus-white">Jamal R.</span>
                          <span className="text-xs bg-octopus-accent text-octopus-white px-2 py-1 rounded-full">
                            🔄 In Progress
                          </span>
                          <span className="text-xs text-octopus-white/60">1 week ago</span>
                        </div>
                        <p className="text-octopus-white/90 mb-4 leading-relaxed">
                          "The mentor matching is brilliant! Maybe add filters for industry experience and company size?"
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="hover:bg-octopus-green/20 text-octopus-white px-3 py-1"
                            >
                              👍 23
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="hover:bg-octopus-white/10 text-octopus-white/60 px-3 py-1"
                            >
                              💬 Reply
                            </Button>
                          </div>
                          <div className="text-xs text-octopus-accent font-medium">
                            Medium Priority
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-octopus-darkLight p-6 rounded-lg border border-octopus-white/10">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-octopus-accent rounded-full flex items-center justify-center text-octopus-white font-semibold">
                        M
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="font-semibold text-octopus-white">Maria S.</span>
                          <span className="text-xs bg-octopus-green text-octopus-black px-2 py-1 rounded-full">
                            ✅ Approved
                          </span>
                          <span className="text-xs text-octopus-white/60">2 weeks ago</span>
                        </div>
                        <p className="text-octopus-white/90 mb-4 leading-relaxed">
                          "Love the platform! Could we have resources in Spanish and other languages for non-English speakers?"
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="hover:bg-octopus-green/20 text-octopus-white px-3 py-1"
                            >
                              👍 31
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="hover:bg-octopus-white/10 text-octopus-white/60 px-3 py-1"
                            >
                              💬 Reply
                            </Button>
                          </div>
                          <div className="text-xs text-octopus-green font-medium">
                            High Priority
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-octopus-darkLight p-6 rounded-lg border border-octopus-white/10">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-octopus-primary rounded-full flex items-center justify-center text-octopus-white font-semibold">
                        D
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="font-semibold text-octopus-white">David L.</span>
                          <span className="text-xs bg-octopus-pink text-octopus-white px-2 py-1 rounded-full">
                            ❌ Rejected
                          </span>
                          <span className="text-xs text-octopus-white/60">3 weeks ago</span>
                        </div>
                        <p className="text-octopus-white/90 mb-4 leading-relaxed">
                          "The skills assessment is spot on. Would be great to have progress tracking over time to see improvement."
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="hover:bg-octopus-green/20 text-octopus-white px-3 py-1"
                            >
                              👍 18
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="hover:bg-octopus-white/10 text-octopus-white/60 px-3 py-1"
                            >
                              💬 Reply
                            </Button>
                          </div>
                          <div className="text-xs text-octopus-white/60 font-medium">
                            Not feasible currently
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-octopus-darkLight p-6 rounded-lg border border-octopus-white/10">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-octopus-green rounded-full flex items-center justify-center text-octopus-black font-semibold">
                        K
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="font-semibold text-octopus-white">Kira T.</span>
                          <span className="text-xs bg-octopus-accent text-octopus-white px-2 py-1 rounded-full">
                            🔄 In Progress
                          </span>
                          <span className="text-xs text-octopus-white/60">5 hours ago</span>
                        </div>
                        <p className="text-octopus-white/90 mb-4 leading-relaxed">
                          "What about a mobile app? I'm always on my phone and would love to access mentorship chats and resources on the go."
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="hover:bg-octopus-green/20 text-octopus-white px-3 py-1"
                            >
                              👍 7
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="hover:bg-octopus-white/10 text-octopus-white/60 px-3 py-1"
                            >
                              💬 Reply
                            </Button>
                          </div>
                          <div className="text-xs text-octopus-white/60 font-medium">
                            Research phase
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* In Progress Tab */}
              {activeTab === 'inprogress' && (
                <>
                  <div className="bg-octopus-darkLight p-6 rounded-lg border border-octopus-white/10">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-octopus-pink rounded-full flex items-center justify-center text-octopus-white font-semibold">
                        J
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="font-semibold text-octopus-white">Jamal R.</span>
                          <span className="text-xs bg-octopus-accent text-octopus-white px-2 py-1 rounded-full">
                            🔄 In Progress
                          </span>
                          <span className="text-xs text-octopus-white/60">1 week ago</span>
                        </div>
                        <p className="text-octopus-white/90 mb-4 leading-relaxed">
                          "The mentor matching is brilliant! Maybe add filters for industry experience and company size?"
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="hover:bg-octopus-green/20 text-octopus-white px-3 py-1"
                            >
                              👍 23
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="hover:bg-octopus-white/10 text-octopus-white/60 px-3 py-1"
                            >
                              💬 Reply
                            </Button>
                          </div>
                          <div className="text-xs text-octopus-accent font-medium">
                            Development started
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-octopus-darkLight p-6 rounded-lg border border-octopus-white/10">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-octopus-green rounded-full flex items-center justify-center text-octopus-black font-semibold">
                        K
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="font-semibold text-octopus-white">Kira T.</span>
                          <span className="text-xs bg-octopus-accent text-octopus-white px-2 py-1 rounded-full">
                            🔄 In Progress
                          </span>
                          <span className="text-xs text-octopus-white/60">5 hours ago</span>
                        </div>
                        <p className="text-octopus-white/90 mb-4 leading-relaxed">
                          "What about a mobile app? I'm always on my phone and would love to access mentorship chats and resources on the go."
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="hover:bg-octopus-green/20 text-octopus-white px-3 py-1"
                            >
                              👍 7
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="hover:bg-octopus-white/10 text-octopus-white/60 px-3 py-1"
                            >
                              💬 Reply
                            </Button>
                          </div>
                          <div className="text-xs text-octopus-white/60 font-medium">
                            Research phase
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Approved Tab */}
              {activeTab === 'approved' && (
                <>
                  <div className="bg-octopus-darkLight p-6 rounded-lg border border-octopus-white/10">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-octopus-green rounded-full flex items-center justify-center text-octopus-black font-semibold">
                        A
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="font-semibold text-octopus-white">Amara K.</span>
                          <span className="text-xs bg-octopus-green text-octopus-black px-2 py-1 rounded-full">
                            ✅ Approved
                          </span>
                          <span className="text-xs text-octopus-white/60">2 days ago</span>
                        </div>
                        <p className="text-octopus-white/90 mb-4 leading-relaxed">
                          "Could we add more childcare-friendly training options? Many single parents like me struggle to attend evening workshops."
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="hover:bg-octopus-green/20 text-octopus-white px-3 py-1"
                            >
                              👍 15
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="hover:bg-octopus-white/10 text-octopus-white/60 px-3 py-1"
                            >
                              💬 Reply
                            </Button>
                          </div>
                          <div className="text-xs text-octopus-green font-medium">
                            Implementation planned
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-octopus-darkLight p-6 rounded-lg border border-octopus-white/10">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-octopus-accent rounded-full flex items-center justify-center text-octopus-white font-semibold">
                        M
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="font-semibold text-octopus-white">Maria S.</span>
                          <span className="text-xs bg-octopus-green text-octopus-black px-2 py-1 rounded-full">
                            ✅ Approved
                          </span>
                          <span className="text-xs text-octopus-white/60">2 weeks ago</span>
                        </div>
                        <p className="text-octopus-white/90 mb-4 leading-relaxed">
                          "Love the platform! Could we have resources in Spanish and other languages for non-English speakers?"
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="hover:bg-octopus-green/20 text-octopus-white px-3 py-1"
                            >
                              👍 31
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="hover:bg-octopus-white/10 text-octopus-white/60 px-3 py-1"
                            >
                              💬 Reply
                            </Button>
                          </div>
                          <div className="text-xs text-octopus-green font-medium">
                            Coming Q2 2024
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Rejected Tab */}
              {activeTab === 'rejected' && (
                <>
                  <div className="bg-octopus-darkLight p-6 rounded-lg border border-octopus-white/10">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-octopus-primary rounded-full flex items-center justify-center text-octopus-white font-semibold">
                        D
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="font-semibold text-octopus-white">David L.</span>
                          <span className="text-xs bg-octopus-pink text-octopus-white px-2 py-1 rounded-full">
                            ❌ Rejected
                          </span>
                          <span className="text-xs text-octopus-white/60">3 weeks ago</span>
                        </div>
                        <p className="text-octopus-white/90 mb-4 leading-relaxed">
                          "The skills assessment is spot on. Would be great to have progress tracking over time to see improvement."
                        </p>
                        <div className="bg-octopus-pink/10 border border-octopus-pink/20 p-3 rounded-lg mb-4">
                          <p className="text-octopus-white/80 text-sm">
                            <strong>Admin response:</strong> While we love this idea, our current focus is on core platform stability. We may revisit this in future updates.
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="hover:bg-octopus-green/20 text-octopus-white px-3 py-1"
                            >
                              👍 18
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="hover:bg-octopus-white/10 text-octopus-white/60 px-3 py-1"
                            >
                              💬 Reply
                            </Button>
                          </div>
                          <div className="text-xs text-octopus-pink font-medium">
                            Not feasible currently
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
                             )}
            </div>

            <div className="mt-8 flex justify-center space-x-4">
              <Button
                size="lg"
                className="bg-octopus-pink hover:bg-octopus-pink/90 text-octopus-white font-semibold px-8"
                onClick={() => {
                  setIsCommunityModalOpen(false)
                  setIsFeedbackModalOpen(true)
                }}
              >
                Share Idea
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-octopus-white/40 text-octopus-white/60 hover:bg-octopus-white/10 font-semibold px-8"
                onClick={() => setIsCommunityModalOpen(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
