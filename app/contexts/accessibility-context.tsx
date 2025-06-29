"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface AccessibilityContextType {
  isHighContrast: boolean
  toggleHighContrast: () => void
  fontSize: 'normal' | 'large' | 'xl'
  setFontSize: (size: 'normal' | 'large' | 'xl') => void
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined)

export function useAccessibility() {
  const context = useContext(AccessibilityContext)
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider')
  }
  return context
}

interface AccessibilityProviderProps {
  children: ReactNode
}

export function AccessibilityProvider({ children }: AccessibilityProviderProps) {
  const [isHighContrast, setIsHighContrast] = useState(false)
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xl'>('large')

  // Load preferences from localStorage on mount
  useEffect(() => {
    const savedContrast = localStorage.getItem('highContrast')
    const savedFontSize = localStorage.getItem('fontSize') as 'normal' | 'large' | 'xl'
    
    if (savedContrast === 'true') {
      setIsHighContrast(true)
    }
    if (savedFontSize) {
      setFontSize(savedFontSize)
    } else {
      // Set default to large if no saved preference
      setFontSize('large')
      localStorage.setItem('fontSize', 'large')
    }
  }, [])

  // Apply high contrast class to document body
  useEffect(() => {
    if (isHighContrast) {
      document.body.classList.add('high-contrast')
    } else {
      document.body.classList.remove('high-contrast')
    }
  }, [isHighContrast])

  // Apply font size class to document
  useEffect(() => {
    document.documentElement.classList.remove('font-large', 'font-xl')
    if (fontSize === 'large') {
      document.documentElement.classList.add('font-large')
    } else if (fontSize === 'xl') {
      document.documentElement.classList.add('font-xl')
    }
  }, [fontSize])

  const toggleHighContrast = () => {
    const newValue = !isHighContrast
    setIsHighContrast(newValue)
    localStorage.setItem('highContrast', newValue.toString())
  }

  const handleSetFontSize = (size: 'normal' | 'large' | 'xl') => {
    setFontSize(size)
    localStorage.setItem('fontSize', size)
  }

  return (
    <AccessibilityContext.Provider
      value={{
        isHighContrast,
        toggleHighContrast,
        fontSize,
        setFontSize: handleSetFontSize,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  )
} 