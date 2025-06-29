"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ChevronDown, X } from "lucide-react"

interface GreenRole {
  title: string
  icon: React.ReactNode
  description: string
  averageSalary: string
  keySkills: string[]
}

interface GreenRolesGridProps {
  roles: GreenRole[]
}

export default function GreenRolesGrid({ roles }: GreenRolesGridProps) {
  const [selectedRole, setSelectedRole] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (index: number) => {
    setSelectedRole(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedRole(null)
  }

  return (
    <div>
      {/* Compact Grid View */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roles.map((role, index) => (
          <Card 
            key={index} 
            className="cursor-pointer transition-all duration-200 hover:shadow-lg border border-gray-100 hover:border-octopus-primary/30"
            onClick={() => openModal(index)}
          >
            <CardContent className="p-6 text-center">
              <div className="flex flex-col items-center space-y-4">
                <div className="p-3 bg-octopus-green rounded-xl text-octopus-black mb-2">
                  {role.icon}
                </div>
                <h3 className="text-lg font-semibold text-octopus-black">{role.title}</h3>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-octopus-pink hover:text-octopus-dark hover:bg-octopus-pink/10"
                >
                  See More <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal for Role Details */}
      <Dialog open={isModalOpen} onOpenChange={closeModal}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-octopus-dark border-octopus-darkLight p-0">
          <div className="absolute right-4 top-4 z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={closeModal}
              className="hover:bg-octopus-darkLight text-octopus-white transition-colors rounded-full"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          
          {selectedRole !== null && (
            <div className="p-8">
              <DialogHeader className="text-center pb-8">
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 p-4 bg-octopus-green rounded-xl flex items-center justify-center">
                    <div className="w-12 h-12">{roles[selectedRole].icon}</div>
                  </div>
                  <DialogTitle className="text-3xl font-bold text-octopus-white mb-3">
                    {roles[selectedRole].title}
                  </DialogTitle>
                  <p className="text-xl text-octopus-white mb-4">
                    {roles[selectedRole].averageSalary}
                  </p>
                </div>
              </DialogHeader>

              <div className="space-y-8">
                <div className="bg-octopus-darkLight p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-octopus-white mb-3">What You'll Do</h3>
                  <p className="text-octopus-white leading-relaxed">
                    {roles[selectedRole].description}
                  </p>
                </div>

                <div className="bg-octopus-darkLight p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-octopus-white mb-4">Essential Skills</h3>
                  <div className="flex flex-wrap gap-3">
                    {roles[selectedRole].keySkills.map((skill) => (
                      <Badge 
                        key={skill} 
                        className="bg-octopus-white text-octopus-dark hover:bg-octopus-white/90 font-medium px-4 py-2 text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-8 text-center pt-4">
                  <Button 
                    onClick={closeModal}
                    size="lg"
                    className="bg-octopus-pink hover:bg-octopus-pink/90 text-octopus-white font-semibold px-8"
                  >
                    Explore More Roles
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
} 