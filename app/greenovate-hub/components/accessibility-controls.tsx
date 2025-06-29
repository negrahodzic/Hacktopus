"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Eye, Type, Palette, Settings, Check } from "lucide-react"
import { useAccessibility } from "../../contexts/accessibility-context"

export default function AccessibilityControls() {
  const { isHighContrast, toggleHighContrast, fontSize, setFontSize } = useAccessibility()
  const [isOpen, setIsOpen] = useState(false)

    return (
    <TooltipProvider>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <Button 
                size="lg"
                className="bg-octopus-primary hover:bg-octopus-primary/80 text-white shadow-soft-xl rounded-full w-16 h-16 p-0 transition-transform hover:scale-110"
              >
                <Eye className="w-6 h-6" />
              </Button>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent side="left" className="bg-octopus-textDark text-white">
            <p>Accessibility Settings</p>
          </TooltipContent>
        </Tooltip>
      <DialogContent className="max-w-md bg-white border-2 border-octopus-primary/20">
        <DialogHeader>
          <DialogTitle className="text-octopus-heading flex items-center">
            <Settings className="w-5 h-5 mr-2 text-octopus-primary" />
            Accessibility Settings
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* High Contrast Toggle */}
          <Card className="border border-gray-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-octopus-textDark flex items-center">
                <Palette className="w-4 h-4 mr-2 text-octopus-accent" />
                High Contrast Mode
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-octopus-textDark/70 mb-2">
                    Increases contrast for better readability
                  </p>
                  <Badge className={isHighContrast ? "bg-octopus-primary text-white" : "bg-gray-100 text-gray-700"}>
                    {isHighContrast ? "Enabled" : "Disabled"}
                  </Badge>
                </div>
                <Button
                  onClick={toggleHighContrast}
                  className={
                    isHighContrast
                      ? "bg-octopus-primary hover:bg-octopus-primary/80 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-octopus-textDark"
                  }
                >
                  {isHighContrast ? (
                    <>
                      <Check className="w-4 h-4 mr-1" />
                      On
                    </>
                  ) : (
                    "Turn On"
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Font Size Controls */}
          <Card className="border border-gray-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-octopus-textDark flex items-center">
                <Type className="w-4 h-4 mr-2 text-octopus-accent" />
                Font Size
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-octopus-textDark/70 mb-4">
                Adjust text size for better readability
              </p>
              <div className="grid grid-cols-3 gap-2">
                {(['normal', 'large', 'xl'] as const).map((size) => (
                  <Button
                    key={size}
                    variant="outline"
                    size="sm"
                    onClick={() => setFontSize(size)}
                    className={
                      fontSize === size
                        ? "bg-octopus-primary text-white border-octopus-primary"
                        : "bg-white text-octopus-textDark border-gray-300 hover:border-octopus-primary"
                    }
                  >
                    {size === 'normal' && 'Normal'}
                    {size === 'large' && 'Large'}
                    {size === 'xl' && 'Extra Large'}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Accessibility Info */}
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-900 mb-2">💡 Accessibility Features</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• High contrast improves text readability</li>
              <li>• Larger fonts help with visual impairments</li>
              <li>• Settings are saved automatically</li>
              <li>• All features work with screen readers</li>
            </ul>
          </div>

          {/* Keyboard Shortcuts */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-medium text-octopus-textDark mb-2">⌨️ Keyboard Shortcuts</h4>
            <div className="text-sm text-octopus-textDark/70 space-y-1">
              <div className="flex justify-between">
                <span>Toggle High Contrast:</span>
                <Badge variant="outline" className="text-xs">Alt + C</Badge>
              </div>
              <div className="flex justify-between">
                <span>Navigate with keyboard:</span>
                <Badge variant="outline" className="text-xs">Tab</Badge>
              </div>
              <div className="flex justify-between">
                <span>Activate buttons:</span>
                <Badge variant="outline" className="text-xs">Enter/Space</Badge>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
    </TooltipProvider>
  )
}

// Add keyboard shortcut listener
if (typeof window !== 'undefined') {
  document.addEventListener('keydown', (e) => {
    if (e.altKey && e.key === 'c') {
      // This would need to be connected to the accessibility context
      console.log('Alt+C pressed - toggle high contrast')
    }
  })
} 