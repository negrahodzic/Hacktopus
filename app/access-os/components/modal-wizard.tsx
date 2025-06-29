"use client"

import { createContext, useContext, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

// Import step components
import Step0Welcome from "./steps/step-0-welcome"
import Step1Primer from "./steps/step-1-primer"
import Step2Assessment from "./steps/step-2-assessment"
import Step3Ambition from "./steps/step-3-ambition"
import Step4Barriers from "./steps/step-4-barriers"
import Step5Networks from "./steps/step-5-networks"
import Step5PeerNetwork from "./steps/step-5-5-peer-network"
import Step6Review from "./steps/step-6-review"
import Step7ActionPlan from "./steps/step-7-action-plan"
import Step8ShareExperience from "./steps/step-8-share-experience"
import SocialShare from "./social-share"
import ProgressGauge from "./progress-gauge"

// Types
export interface WizardData {
  consent: boolean
  ethnicity: string[]
  location: string
  skills: { [key: string]: number }
  domains: string[]
  roleType: string
  barriers: string[]
  hasMentor: boolean
  requestMentor: boolean
  communityGroups: string
  peerGroups?: string[]
  tier: string
  score: number
}

interface WizardContextType {
  currentStep: number
  data: WizardData
  setCurrentStep: (step: number) => void
  updateData: (updates: Partial<WizardData>) => void
  nextStep: () => void
  prevStep: () => void
}

const WizardContext = createContext<WizardContextType | undefined>(undefined)

export const useWizard = () => {
  const context = useContext(WizardContext)
  if (!context) {
    throw new Error("useWizard must be used within WizardProvider")
  }
  return context
}

interface ModalWizardProps {
  isOpen: boolean
  onClose: () => void
}

const initialData: WizardData = {
  consent: false,
  ethnicity: [],
  location: "",
  skills: {},
  domains: [],
  roleType: "",
  barriers: [],
  hasMentor: false,
  requestMentor: false,
  communityGroups: "",
  tier: "",
  score: 0,
}

const stepProgress = [
  { completed: "Started your journey", next: "explore green career opportunities" },
  { completed: "learned about green careers", next: "assess your current skills" },
  { completed: "rated your skills", next: "share your career ambitions" },
  { completed: "shared your ambitions", next: "identify any barriers" },
  { completed: "identified potential barriers", next: "explore networking options" },
  { completed: "explored networks", next: "connect with peer groups" },  
  { completed: "connected with peers", next: "share your experience" },
  { completed: "shared your experience", next: "review your responses" },
  { completed: "reviewed everything", next: "get your personalized action plan" },
  { completed: "completed your assessment", next: "start your green career journey!" }
]

export default function ModalWizard({ isOpen, onClose }: ModalWizardProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [data, setData] = useState<WizardData>(initialData)

  const updateData = (updates: Partial<WizardData>) => {
    setData((prev) => ({ ...prev, ...updates }))
  }

  const nextStep = () => {
    if (currentStep < 9) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleClose = () => {
    setCurrentStep(0)
    setData(initialData)
    onClose()
  }

  const steps = [
    <Step0Welcome key="step0" />,
    <Step1Primer key="step1" />,
    <Step2Assessment key="step2" />,
    <Step3Ambition key="step3" />,
    <Step4Barriers key="step4" />,
    <Step5Networks key="step5" />,
    <Step5PeerNetwork key="step5-5" />,
    <Step8ShareExperience key="step8" />,
    <Step6Review key="step6" />,
    <Step7ActionPlan key="step7" />,
  ]

  const progress = ((currentStep + 1) / 10) * 100

  return (
    <WizardContext.Provider
      value={{
        currentStep,
        data,
        setCurrentStep,
        updateData,
        nextStep,
        prevStep,
      }}
    >
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto p-0 bg-octopus-dark border-octopus-darkLight rounded-2xl">
          <div className="relative">
            <DialogHeader className="sr-only">
              <DialogTitle>Green Career Journey Assessment</DialogTitle>
            </DialogHeader>
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-octopus-darkLight sticky top-0 z-10 bg-octopus-dark">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-octopus-green rounded-full flex items-center justify-center">
                  <span className="text-octopus-black font-bold text-sm">🚀</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-octopus-white">Your <span className="text-octopus-green">Green Career</span> Journey</h2>
                  <p className="text-sm text-octopus-white/70">Step {currentStep + 1} of 10 • Personalized for you</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-octopus-white/70 text-sm">
                  <span className="text-octopus-green font-bold">{Math.round(progress)}%</span> Complete
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={handleClose}
                  className="hover:bg-octopus-darkLight text-octopus-white transition-colors rounded-full"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Progress Info */}
            {currentStep > 0 && (
              <div className="px-6 py-4 bg-octopus-dark">
                <div className="p-4 bg-octopus-darkLight rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-octopus-green rounded-full flex items-center justify-center">
                          <span className="text-octopus-black text-sm font-bold">✓</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-octopus-white">
                            You {stepProgress[currentStep - 1]?.completed}
                          </p>
                        </div>
                      </div>
                    </div>
                    {currentStep < 9 && (
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-2">
                          <span className="text-octopus-pink">→</span>
                          <div>
                            <p className="text-sm font-medium text-octopus-white/70">
                              Next: <span className="text-octopus-pink">{stepProgress[currentStep]?.next}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step Content */}
            <div className="p-6 bg-octopus-dark">
              <div className="bg-octopus-darkLight rounded-lg p-6">
                {steps[currentStep]}
              </div>
              {currentStep === 9 && (
                <div className="mt-6 p-4 bg-octopus-darkLight rounded-lg">
                  <SocialShare step={currentStep} stepName="Green Career Journey Complete!" achievement="Completed my personalized green career assessment" />
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </WizardContext.Provider>
  )
}
