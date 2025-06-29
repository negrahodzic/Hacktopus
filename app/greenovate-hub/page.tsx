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
    whatItMeans: "Access Solar Engineer work by developing technical skills in system design and installation, then building experience through apprenticeships and green energy companies.",
    keySkills: ["Problem-Solving", "Creativity", "Aiming High"],
    averageSalary: "£35,000 - £65,000",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Sustainability Analyst",
    description: "Analyze environmental data and develop strategies to reduce organizational carbon footprint and improve sustainability performance",
    whatItMeans: "Access Sustainability Analyst work by combining data analysis skills with environmental knowledge, then gaining experience through graduate programs and consultancy roles.",
    keySkills: ["Problem-Solving", "Speaking", "Listening"],
    averageSalary: "£28,000 - £55,000",
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "Carbon Accountant",
    description: "Measure, track, and report on greenhouse gas emissions to help organizations meet net-zero targets",
    whatItMeans: "Access Carbon Accountant work by building accounting and environmental expertise, then specializing through carbon management certifications and finance sector experience.",
    keySkills: ["Problem-Solving", "Aiming High", "Listening"],
    averageSalary: "£32,000 - £58,000",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community Energy Lead",
    description: "Develop and manage local renewable energy projects that benefit entire communities",
    whatItMeans: "Access Community Energy Lead work by developing project management and community engagement skills, then building experience through local energy cooperatives and social enterprises.",
    keySkills: ["Leadership", "Speaking", "Teamwork"],
    averageSalary: "£30,000 - £50,000",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Green Finance Advisor",
    description: "Structure and advise on funding for sustainable infrastructure, renewable energy, and climate adaptation projects",
    whatItMeans: "Access Green Finance Advisor work by combining financial expertise with sustainability knowledge, then gaining experience through green investment firms and sustainable banking.",
    keySkills: ["Speaking", "Aiming High", "Problem-Solving"],
    averageSalary: "£40,000 - £80,000",
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Circular Economy Specialist",
    description: "Design and implement waste-free business models that keep resources in use for as long as possible",
    whatItMeans: "Access Circular Economy Specialist work by developing systems thinking and sustainability expertise, then gaining experience through waste management companies and circular design consultancies.",
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
    <div className="min-h-screen bg-octopus-white text-octopus-black overflow-x-hidden">
      {/* Skip Link for Screen Readers */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      {/* Header */}
      <header className="bg-octopus-dark shadow-sm border-b border-octopus-darkLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
                        <div className="flex items-center space-x-2">
              <img 
                src="/logo-octopus-energy.png" 
                alt="Octopus Energy" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-octopus-white">Octopus Energy</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-octopus-pink font-semibold">
                Greenovate Hub
              </a>
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
            
            {/* Mobile menu indicator */}
            <div className="md:hidden">
              <Button
                size="sm"
                className="bg-octopus-pink hover:bg-octopus-pink/90 text-octopus-white font-semibold"
                onClick={() => setIsModalOpen(true)}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="main-content" className="bg-octopus-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-octopus-dark mb-8 leading-tight">
            Reimagining access to<br></br> <span className="text-octopus-green">Green Careers</span> & <span className="text-octopus-green">Climate Leadership</span>
          </h1>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <p className="text-lg text-octopus-black mb-4">
              Imagine a world where every passionate changemaker - no matter their background - can launch a green career.
            </p>
            <p className="text-lg text-octopus-black">
              Greenovate Hub breaks down the barriers that have kept under-represented communities on the sidelines of sustainability and energy.
            </p>
          </div>
          <div className="mb-2">
          <img
            src="/team-octopus-energy.png"
            alt="Diverse group of young professionals at Octopus Energy"
            className="mx-auto rounded-full shadow-soft-xl max-w-[200px] w-full h-auto"
          />
          </div>
        </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section id="story-problem" className="py-16 bg-octopus-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-octopus-white text-center mb-4">
            What's Standing Between You and a Green Career?
          </h2>
          <p className="text-lg text-octopus-white max-w-3xl mx-auto mb-8 text-center">
            Systemic barriers have left huge talent pools untapped - just when we need every voice to tackle climate change. Here's what that looks like in three snapshots:
          </p>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center p-8 bg-octopus-darkLight rounded-xl border border-octopus-dark">
              <div className="w-20 h-20 bg-octopus-pink rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-octopus-white mb-4">Barrier: Under-representation</h3>
              <p className="text-octopus-white/80">
                Only <strong className="text-octopus-pink">5–7%</strong> of clean-energy workers are from ethnic-minority backgrounds, despite these communities being disproportionately affected by climate change.
              </p>
            </div>
            
            <div className="text-center p-8 bg-octopus-darkLight rounded-xl border border-octopus-dark">
              <div className="w-20 h-20 bg-octopus-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-octopus-white mb-4">Barrier: Lack of education & guidance</h3>
              <p className="text-octopus-white/80">
                <strong className="text-octopus-green">70%</strong> of young people have never received green-career guidance, leaving them unaware of opportunities in sustainability and energy sectors.
              </p>
            </div>
            
            <div className="text-center p-8 bg-octopus-darkLight rounded-xl border border-octopus-dark">
              <div className="w-20 h-20 bg-octopus-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-octopus-white mb-4">Barrier: Limited career pathways</h3>
              <p className="text-octopus-white/80">
                Demand for green talent must <strong className="text-octopus-primary">double by 2050</strong> to meet net-zero goals - we can't afford to exclude anyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personas Section */}
      <section className="py-20 bg-octopus-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-octopus-dark mb-4">
              Who's Locked Out of Green Careers?
            </h2>
            <p className="text-lg text-octopus-black max-w-3xl mx-auto mb-12">
              Meet the real people whose struggles inspired Greenovate Hub's four-pillar solution.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 space-y-6 lg:space-y-0 items-start">
            {/* Aisha - Supporting Persona */}
            <div>
              <div className="bg-octopus-darkLight p-8 rounded-xl border border-octopus-dark">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-4">
                    <img 
                      src="/aisha.png" 
                      alt="Aisha Rahman" 
                      className="w-24 h-24 rounded-full object-cover border-2 border-octopus-pink"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-octopus-white mb-2">Aisha Rahman</h3>
                  <p className="text-octopus-white/70 text-sm">Policy Analyst, 26</p>
                </div>
                <div className="space-y-6 text-sm">
                  <div>
                    <span className="text-octopus-green font-medium">Goals:</span>
                    <ul className="text-octopus-white/80 mt-2 space-y-1">
                      <li>• Transition to climate policy specialization</li>
                      <li>• Build energy regulation expertise</li>
                    </ul>
                  </div>
                  <div>
                    <span className="text-octopus-pink/90 font-medium">Barriers:</span>
                    <ul className="text-octopus-white/80 mt-2 space-y-1">
                      <li>• Limited sector knowledge</li>
                      <li>• Needs flexible learning around full-time work</li>
                    </ul>
                  </div>
                  <div className="bg-octopus-green/10 p-3 rounded-lg border border-octopus-green/50">
                    <span className="text-octopus-green font-medium text-xs">Access:</span>
                    <p className="text-octopus-white/90 text-xs mt-1">Flexible learning modules and evening mentorship sessions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Jamal - Main Persona */}
            <div>
              <div className="bg-octopus-dark p-8 rounded-xl border-2 border-octopus-green transform lg:scale-105 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-octopus-green text-octopus-black px-3 py-1 rounded-full text-sm font-medium">
                    Primary Focus
                  </span>
                </div>
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-4">
                    <img 
                      src="/jamal.png" 
                      alt="Jamal Patel" 
                      className="w-24 h-24 rounded-full object-cover border-2 border-octopus-green"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-octopus-white mb-2">Jamal Patel</h3>
                  <p className="text-octopus-white/80">23, First-gen Environmental Science Graduate</p>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-octopus-darkLight p-4 rounded-lg">
                    <span className="text-octopus-green font-semibold text-sm">🎯 Goals:</span>
                    <ul className="text-octopus-white/90 text-sm mt-2 space-y-1">
                      <li>• Land a junior sustainability role</li>
                      <li>• Grow a professional network</li>
                    </ul>
                  </div>
                  
                  <div className="bg-octopus-darkLight p-4 rounded-lg">
                    <span className="text-octopus-pink/90 font-semibold text-sm">🚧 Barriers:</span>
                    <ul className="text-octopus-white/90 text-sm mt-2 space-y-1">
                      <li>• Invisible opportunities in green sector</li>
                      <li>• Lack of mentorship and industry connections</li>
                      <li>• Financial & decision-making constraints</li>
                    </ul>
                  </div>
                  
                  <div className="bg-octopus-green/10 p-4 rounded-lg border border-octopus-green/50">
                    <span className="text-octopus-green font-medium text-xs">Access:</span>
                    <p className="text-octopus-white/90 text-xs mt-1">
                      Tailored assessment, mentorship, and funding - your barrier-free path in one click.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rohan - Supporting Persona */}
            <div>
              <div className="bg-octopus-darkLight p-8 rounded-xl border border-octopus-dark">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-4">
                    <img 
                      src="/rohan.png" 
                      alt="Rohan Singh" 
                      className="w-24 h-24 rounded-full object-cover border-2 border-octopus-accent"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-octopus-white mb-2">Rohan Singh</h3>
                  <p className="text-octopus-white/70 text-sm">Solar Installer, 29</p>
                </div>
                <div className="space-y-6 text-sm">
                  <div>
                    <span className="text-octopus-green font-medium">Goals:</span>
                    <ul className="text-octopus-white/80 mt-2 space-y-1">
                      <li>• Advance to solar project management</li>
                      <li>• Gain business skills for own company</li>
                    </ul>
                  </div>
                  <div>
                    <span className="text-octopus-pink/90 font-medium">Barriers:</span>
                    <ul className="text-octopus-white/80 mt-2 space-y-1">
                      <li>• Time constraints around shift work</li>
                      <li>• Needs practical, flexible learning</li>
                    </ul>
                  </div>
                  <div className="bg-octopus-green/10 p-3 rounded-lg border border-octopus-green/50">
                    <span className="text-octopus-green font-medium text-xs">Access:</span>
                    <p className="text-octopus-white/90 text-xs mt-1">Bite-sized practical modules and weekend networking events</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-octopus-black/70 text-sm max-w-2xl mx-auto mb-6">
              Our platform addresses the unique challenges faced by each persona through tailored assessments, 
              flexible learning paths, and barrier-specific support resources.
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                className="bg-octopus-primary hover:bg-octopus-darkLight text-octopus-white font-semibold px-4 sm:px-8"
                onClick={() => setIsModalOpen(true)}
              >
                <span className="hidden sm:inline">Ready to break these barriers? Start your Access Journey</span>
                <span className="sm:hidden">Start Your Access Journey</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-16 bg-octopus-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-octopus-white mb-4">
              How Greenovate Hub Unlocks Access
            </h2>
            <p className="text-lg text-octopus-white max-w-3xl mx-auto mb-8">
              Four pillars - assessment, pathways, mentorship, funding - work together to break down each barrier you saw above.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-octopus-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-octopus-white mb-2">Discover Where You Stand</h3>
                  <p className="text-octopus-white">
                    Our 9-step assessment maps your skills, passions, and obstacles. We pinpoint exactly which tier of the Green Skills Pyramid you occupy - so you stop guessing and start progressing.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-octopus-green rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-octopus-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-octopus-white mb-2">Connect with Your Champions</h3>
                  <p className="text-octopus-white">
                    Get paired with pros who've walked your path. From first-gen grads to career pivoters, they've been where you are and know how to guide you forward.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-octopus-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-octopus-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-octopus-white mb-2">Choose Your Path</h3>
                  <p className="text-octopus-white">
                    Tailored roadmaps translate your assessment into bite-sized actions: courses, events, and projects carefully curated for your level.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-octopus-pink rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-octopus-white text-lg font-bold">£</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-octopus-white mb-2">Unlock the Resources You Need</h3>
                  <p className="text-octopus-white">
                    Grants, scholarships, micro-certificates - you'll see only the low-cost or free options you qualify for, so money never stands between you and progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Green Skills Pyramid */}
      <section className="bg-octopus-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-octopus-dark mb-4">Access Pyramid: Your Pathway to <span className="text-octopus-green">Green</span> Careers</h2>
            <p className="text-lg text-octopus-black max-w-3xl mx-auto mb-6">
              Discover your access level and plan your ascent through the green-careers pyramid. Every role in the green economy builds on these four foundational tiers.
            </p>
            <div className="bg-octopus-darkLight p-4 rounded-lg max-w-2xl mx-auto">
              <p className="text-octopus-white text-sm">
                💡 <strong>Click each tier to see the skills and pathways you unlock.</strong>
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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
      <section className="bg-octopus-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-octopus-white mb-6">Explore <span className="text-octopus-green">Green</span> Careers</h2>
            <p className="text-lg text-octopus-white">Discover what's possible in the growing green economy</p>
          </div>

          <GreenRolesGrid roles={greenRoles} />
        </div>
      </section>

            {/* How Our Tools Work */}
      <section className="bg-octopus-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-octopus-dark mb-4">What Our Tools Actually Do</h2>
            <p className="text-lg text-octopus-black">Four simple steps to your green career</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-octopus-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-octopus-white font-bold text-lg">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-octopus-dark mb-2">Access Your Skills & Background</h3>
                  <p className="text-octopus-black">
                    Take our 10-minute assessment to map your existing strengths across 8 core competencies and identify where you fit in the Green Skills Pyramid. Links to education pillar.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-octopus-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-octopus-white font-bold text-lg">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-octopus-dark mb-2">Access Tailored Solutions</h3>
                  <p className="text-octopus-black">
                    We detect specific challenges you might face (cost, time, confidence, childcare) and provide targeted pathways and funding solutions. Links to funding pillar.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-octopus-green rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-octopus-black font-bold text-lg">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-octopus-dark mb-2">Access Mentorship</h3>
                  <p className="text-octopus-black">
                    Get matched with professionals who share similar backgrounds and have walked your path. Real people who understand your journey. Links to mentorship pillar.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-octopus-pink rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-octopus-white font-bold text-lg">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-octopus-dark mb-2">Access Your Action Plan</h3>
                  <p className="text-octopus-black">
                    Receive a step-by-step roadmap with specific courses, funding opportunities, and connections tailored to your goals. Links to pathways pillar.
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

      {/* CTA Section */}
      <section className="bg-octopus-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-octopus-darkLight rounded-2xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-octopus-white text-center mb-4">
              Where Do You Go Next?
            </h2>
            <p className="text-lg text-octopus-white max-w-2xl mx-auto mb-8">
              Take just 10 minutes to start your assessment - then watch the doors to green careers swing wide open.
            </p>
            <div className="text-center mx-auto max-w-md">
              <Button
                size="lg"
                className="bg-octopus-primary hover:bg-octopus-darkLight text-octopus-white font-semibold mb-6 px-4 sm:px-8"
                onClick={() => setIsModalOpen(true)}
              >
                <span className="hidden sm:inline">Begin My Assessment</span>
                <span className="sm:hidden">Start Assessment</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="mt-6 bg-octopus-darkLight p-4 rounded-lg">
              <div className="text-lg font-semibold mb-2 text-octopus-white">
                ✅ Completely free  ✅ No account required*  ✅ Results in 10 minutes
              </div>
              <div className="text-sm text-octopus-white">
                *Account optional for saving results and community features
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Ideas Section */}
      <section className="bg-octopus-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-octopus-dark mb-4">Help Shape Access for Diverse Communities</h2>
            <p className="text-lg text-octopus-black max-w-3xl mx-auto mb-6">
              Your ideas unlock better access to education, funding & mentorship. 
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
                className="bg-octopus-pink hover:bg-octopus-pink/90 text-octopus-white font-semibold px-4 sm:px-8"
                onClick={() => setIsFeedbackModalOpen(true)}
              >
                <span className="hidden sm:inline">Share Your Idea</span>
                <span className="sm:hidden">Share Idea</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-octopus-dark text-octopus-dark bg-transparent hover:bg-octopus-pink hover:border-octopus-pink hover:text-octopus-white font-semibold px-4 sm:px-8"
                onClick={() => setIsCommunityModalOpen(true)}
              >
                <span className="hidden sm:inline">View Community Suggestions</span>
                <span className="sm:hidden">View Suggestions</span>
              </Button>
            </div>
            
            <div className="mt-6 text-sm text-octopus-black">
              💚 Together we're building the most inclusive green careers platform in the world
            </div>
          </div>
        </div>
      </section>

      {/* Real Impact, Real Results */}
      <section className="bg-octopus-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-octopus-white mb-4">Real Impact, Real Results</h2>
            <p className="text-lg text-octopus-white max-w-3xl mx-auto">
              Join thousands who've used our platform to break into green careers and create positive change.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-octopus-white p-6 rounded-xl border border-octopus-darkLight">
              <div className="w-12 h-12 bg-octopus-pink rounded-full flex items-center justify-center text-octopus-white font-semibold mb-4 mx-auto">
                A
              </div>
              <blockquote className="text-sm text-octopus-black mb-3 text-center italic">
                "Finally, a platform that gets it. They understood my barriers and matched me with someone who looked like me."
              </blockquote>
              <cite className="text-octopus-black font-medium text-xs text-center block">Amara, London</cite>
            </div>
            
            <div className="bg-octopus-white p-6 rounded-xl border border-octopus-darkLight">
              <div className="w-12 h-12 bg-octopus-green rounded-full flex items-center justify-center text-octopus-black font-semibold mb-4 mx-auto">
                M
              </div>
              <blockquote className="text-sm text-octopus-black mb-3 text-center italic">
                "As a single mother, I thought green careers were out of reach. This platform proved me wrong."
              </blockquote>
              <cite className="text-octopus-black font-medium text-xs text-center block">Mehreen, Birmingham</cite>
            </div>
            
            <div className="bg-octopus-white p-6 rounded-xl border border-octopus-darkLight">
              <div className="w-12 h-12 bg-octopus-dark rounded-full flex items-center justify-center text-octopus-white font-semibold mb-4 mx-auto">
                J
              </div>
              <blockquote className="text-sm text-octopus-black mb-3 text-center italic">
                "From feeling invisible to landing my dream role. This platform saw my potential when others didn't."
              </blockquote>
              <cite className="text-octopus-black font-medium text-xs text-center block">Jamal, Manchester</cite>
            </div>
            
            <div className="bg-octopus-white p-6 rounded-xl border border-octopus-darkLight">
              <div className="w-12 h-12 bg-octopus-darkLight rounded-full flex items-center justify-center text-octopus-white font-semibold mb-4 mx-auto">
                P
              </div>
              <blockquote className="text-sm text-octopus-black mb-3 text-center italic">
                "They didn't just help me find a job - they helped me belong in an industry that needed my voice."
              </blockquote>
              <cite className="text-octopus-black font-medium text-xs text-center block">Priya, Leeds</cite>
            </div>
          </div>
          
          <div className="text-center text-lg my-12">
            <p className="text-octopus-white max-w-3xl mx-auto">
              Thousands of under-represented changemakers have already used Greenovate Hub to land internships, launch startups, and secure full-time roles. You could be next.
            </p>
          </div>

        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-octopus-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-octopus-dark mb-6">Our Partners</h2>
            <p className="text-lg text-octopus-black max-w-2xl mx-auto">
              Working together to expand access to green careers through mentorship and community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            <div className="text-center p-8 bg-octopus-dark rounded-xl border border-octopus-darkLight">
              <div className="w-20 h-20 bg-octopus-pink rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-octopus-white">R</span>
              </div>
              <h3 className="text-xl font-semibold text-octopus-white mb-4">RCT</h3>
              <h4 className="font-semibold text-octopus-pink mb-3">Rewriting the Code</h4>
              <p className="text-octopus-white mb-4">
                Empowering women and non-binary individuals in tech and sustainability careers through mentorship, community, and professional development.
              </p>
              <div className="flex justify-center">
                <Badge className="bg-octopus-pink text-octopus-white font-medium">Mentorship Partner</Badge>
              </div>
            </div>
            
            <div className="text-center p-8 bg-octopus-dark rounded-xl border border-octopus-darkLight">
              <div className="w-20 h-20 bg-octopus-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-octopus-black">B</span>
              </div>
              <h3 className="text-xl font-semibold text-octopus-white mb-4">BCS</h3>
              <h4 className="font-semibold text-octopus-green mb-3">British Computer Society</h4>
              <p className="text-octopus-white mb-4">
                Professional network for technologists working on climate solutions, providing expertise and career pathways in green technology.
              </p>
              <div className="flex justify-center">
                <Badge className="bg-octopus-green text-octopus-black font-medium">Tech Network Partner</Badge>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-sm text-octopus-black">
              Interested in partnering with us? <a href="#" className="text-octopus-pink underline hover:text-octopus-green">Get in touch</a>
            </p>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-octopus-dark text-octopus-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/logo-octopus-energy.png" 
                  alt="Octopus Energy" 
                  className="h-8 w-auto"
                />
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
            <div className="text-center mb-6">
              <p className="text-octopus-white text-lg">
                Greenovate Hub is an Octopus Energy initiative to democratize access to green careers. Join our movement.
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-octopus-white">
                &copy; 2024 Team Hacktopus. All rights reserved. Building diverse green careers.
              </p>
              <div className="flex items-center space-x-4 text-sm text-octopus-white">
                <span>Made with 💚 for climate action</span>
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
          <div className="bg-octopus-dark rounded-2xl p-4 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-octopus-darkLight">
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
          <div className="bg-octopus-dark rounded-2xl p-4 sm:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-octopus-darkLight">
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
