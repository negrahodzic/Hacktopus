"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Heart, Gift, Users, Sparkles, X } from "lucide-react"

interface DonationPromptProps {
  grantAmount?: string
  context: "grant" | "funding" | "general"
  onClose?: () => void
}

export default function DonationPrompt({ grantAmount, context, onClose }: DonationPromptProps) {
  const [selectedAmount, setSelectedAmount] = useState<string>("")
  const [customAmount, setCustomAmount] = useState<string>("")
  const [isRecurring, setIsRecurring] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  const suggestedAmounts = grantAmount 
    ? [
        { value: `${Math.round(parseFloat(grantAmount.replace(/[£$,]/g, '')) * 0.01)}`, label: "1% of grant" },
        { value: `${Math.round(parseFloat(grantAmount.replace(/[£$,]/g, '')) * 0.02)}`, label: "2% of grant" },
        { value: `${Math.round(parseFloat(grantAmount.replace(/[£$,]/g, '')) * 0.05)}`, label: "5% of grant" },
      ]
    : [
        { value: "5", label: "£5 - Coffee for a mentor" },
        { value: "15", label: "£15 - Support 3 users" },
        { value: "25", label: "£25 - Fund a workshop" },
      ]

  const handleDonate = () => {
    // In a real app, this would integrate with payment processing
    setShowThankYou(true)
    setTimeout(() => {
      onClose?.()
    }, 3000)
  }

  if (showThankYou) {
    return (
      <Card className="bg-gradient-to-r from-octopus-primary/10 to-octopus-accent/10 border-octopus-primary/20">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-octopus-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-octopus-textDark mb-2">Thank You! 💚</h3>
          <p className="text-octopus-textDark/70 mb-4">
            Your contribution helps keep green career opportunities accessible for everyone.
          </p>
          <Badge className="bg-octopus-accent/20 text-octopus-accent">
            Your donation is making a difference!
          </Badge>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-gradient-to-br from-octopus-primary/5 to-octopus-accent/5 border-octopus-primary/20">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Gift className="w-5 h-5 text-octopus-accent" />
            <CardTitle className="text-octopus-textDark">Keep This Tool Free for Everyone</CardTitle>
          </div>
          {onClose && (
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-octopus-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Users className="w-6 h-6 text-octopus-primary" />
              </div>
              <p className="text-sm text-octopus-textDark/70">5,000+ users</p>
              <p className="text-xs text-octopus-textDark/60">helped so far</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-octopus-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Sparkles className="w-6 h-6 text-octopus-accent" />
              </div>
              <p className="text-sm text-octopus-textDark/70">100% free</p>
              <p className="text-xs text-octopus-textDark/60">always will be</p>
            </div>
          </div>
          
          <p className="text-sm text-octopus-textDark/70 leading-relaxed">
            {context === "grant" 
              ? "Congratulations on your funding opportunity! Consider contributing a small percentage to help others access the same opportunities."
              : "Your contribution helps us maintain this platform and expand access to green careers for underrepresented communities."
            }
          </p>
        </div>

        <div className="space-y-4">
          <Label className="text-base font-medium text-octopus-textDark">Choose an amount (optional):</Label>
          <RadioGroup value={selectedAmount} onValueChange={setSelectedAmount}>
            {suggestedAmounts.map((amount) => (
              <div key={amount.value} className="flex items-center space-x-2">
                <RadioGroupItem value={amount.value} id={amount.value} />
                <Label htmlFor={amount.value} className="cursor-pointer text-octopus-textDark">
                  £{amount.value} - {amount.label}
                </Label>
              </div>
            ))}
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="custom" id="custom" />
              <Label htmlFor="custom" className="cursor-pointer text-octopus-textDark">
                Custom amount: £
              </Label>
              <input
                type="number"
                placeholder="0"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value)
                  setSelectedAmount("custom")
                }}
                className="w-20 px-2 py-1 border rounded text-center text-sm"
                min="1"
              />
            </div>
          </RadioGroup>
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox
            id="recurring"
            checked={isRecurring}
            onCheckedChange={(checked) => setIsRecurring(checked as boolean)}
            className="mt-1"
          />
          <Label htmlFor="recurring" className="text-sm text-octopus-textDark cursor-pointer">
            Make this a monthly donation to provide ongoing support
          </Label>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-2">💡 How Your Donation Helps:</h4>
          <ul className="text-blue-800 text-sm space-y-1">
            <li>• Keeps the platform free for everyone</li>
            <li>• Funds mentor matching and support programs</li>
            <li>• Supports outreach to underrepresented communities</li>
            <li>• Enables new features and improvements</li>
          </ul>
        </div>

        <div className="flex space-x-3">
          <Button 
            onClick={handleDonate} 
            disabled={!selectedAmount && !customAmount}
            className="flex-1 bg-octopus-primary hover:bg-octopus-primary/80"
          >
            <Heart className="w-4 h-4 mr-2" />
            Donate £{selectedAmount === "custom" ? customAmount : selectedAmount}
          </Button>
          <Button variant="outline" onClick={onClose} className="px-6">
            Maybe Later
          </Button>
        </div>

        <p className="text-xs text-octopus-textDark/60 text-center">
          Donations are voluntary and don't affect your access to any features. 
          Tax receipts available upon request.
        </p>
      </CardContent>
    </Card>
  )
} 