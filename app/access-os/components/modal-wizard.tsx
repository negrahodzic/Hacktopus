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
import SocialShare from "./social-share"

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

export default function ModalWizard({ isOpen, onClose }: ModalWizardProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [data, setData] = useState<WizardData>(initialData)

  const updateData = (updates: Partial<WizardData>) => {
    setData((prev) => ({ ...prev, ...updates }))
  }

  const nextStep = () => {
    if (currentStep < 8) {
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
    <Step6Review key="step6" />,
    <Step7ActionPlan key="step7" />,
  ]

  const progress = ((currentStep + 1) / 9) * 100

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
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
          <div className="relative">
            <DialogHeader className="sr-only">
              <DialogTitle>Green Career Journey</DialogTitle>
            </DialogHeader>
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b bg-white sticky top-0 z-10">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">O</span>
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Green Career Journey</h2>
                  <p className="text-sm text-gray-500">Step {currentStep + 1} of 9</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={handleClose}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Progress Bar */}
            <div className="px-6 py-4 bg-gray-50">
              <Progress value={progress} className="h-2" />
            </div>

            {/* Step Content */}
            <div className="p-6">
              {steps[currentStep]}
              {currentStep > 0 && (
                <div className="mt-6">
                  <SocialShare step={currentStep} stepName={`Step ${currentStep + 1}`} />
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </WizardContext.Provider>
  )
}
