import type { Metadata } from 'next'
import './globals.css'
import { AccessibilityProvider } from './contexts/accessibility-context'

export const metadata: Metadata = {
  title: 'Access to Green Careers | Octopus Energy',
  description: 'Breaking barriers to green careers for underrepresented communities',
  generator: 'Octopus Energy',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <AccessibilityProvider>
          {children}
        </AccessibilityProvider>
      </body>
    </html>
  )
}
