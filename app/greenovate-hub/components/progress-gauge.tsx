"use client"

import { Progress } from "@/components/ui/progress"

interface ProgressGaugeProps {
  percentage: number
  title: string
  subtitle?: string
  color?: "primary" | "accent" | "success"
}

export default function ProgressGauge({ percentage, title, subtitle, color = "primary" }: ProgressGaugeProps) {
  const colorClasses = {
    primary: "text-octopus-primary",
    accent: "text-octopus-accent", 
    success: "text-emerald-600"
  }

  const bgColorClasses = {
    primary: "bg-octopus-primary",
    accent: "bg-octopus-accent",
    success: "bg-emerald-600"
  }

  return (
    <div className="relative">
      {/* Circular Progress Gauge */}
      <div className="flex items-center justify-center">
        <div className="relative w-24 h-24">
          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-gray-200"
            />
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={`${percentage * 2.51} 251.2`}
              className={colorClasses[color]}
              strokeLinecap="round"
            />
          </svg>
          {/* Percentage text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-lg font-bold ${colorClasses[color]}`}>
              {Math.round(percentage)}%
            </span>
          </div>
        </div>
      </div>
      
      {/* Title and subtitle */}
      <div className="text-center mt-2">
        <h3 className="font-medium text-octopus-textDark text-sm">{title}</h3>
        {subtitle && (
          <p className="text-xs text-octopus-textDark/60 mt-1">{subtitle}</p>
        )}
      </div>
    </div>
  )
} 