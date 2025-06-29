"use client"

import { Button } from "@/components/ui/button"
import { useWizard } from "../modal-wizard"
import Pyramid from "../pyramid"

export default function Step1Primer() {
  const { nextStep, prevStep } = useWizard()

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-octopus-white mb-4">
          <span className="text-octopus-green">Green Skills</span> Pyramid
        </h1>
        <p className="text-lg text-octopus-white/80">Understanding the building blocks of green careers</p>
      </div>

      <div className="bg-octopus-dark p-6 rounded-xl border border-octopus-green/20">
        <p className="text-sm text-octopus-white/80 mb-6 text-center">
          Your assessment will help determine where you currently sit in the green skills hierarchy. 
          Explore the pyramid below to see the career progression pathway! Click on each tier to learn more.
        </p>
        <Pyramid size="md" />
      </div>

      <div className="bg-octopus-dark p-6 rounded-lg border border-octopus-pink/20">
        <h3 className="font-semibold text-octopus-white mb-2">💡 Remember</h3>
        <p className="text-octopus-white/80 text-sm">
          Every green career journey starts with the right mindset. You don't need to be at Tier 4 to make an impact -
          there are meaningful opportunities at every level!
        </p>
      </div>

      <div className="flex justify-between pt-4">
        <Button 
          variant="outline" 
          onClick={prevStep}
          className="border-octopus-white/20 text-octopus-white hover:bg-octopus-white/10"
        >
          Back
        </Button>
        <Button 
          onClick={nextStep} 
          className="bg-octopus-pink hover:bg-octopus-pink/90 text-octopus-white font-semibold"
        >
          Continue to Assessment
        </Button>
      </div>
    </div>
  )
}
