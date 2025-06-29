"use client"

import { WizardData } from "./modal-wizard"

interface PDFGeneratorProps {
  data: WizardData
  recommendedModules: any[]
  matchedMentors: any[]
  grants: any[]
  events: any[]
}

export const generateActionPlanPDF = (props: PDFGeneratorProps) => {
  const { data, recommendedModules, matchedMentors, grants, events } = props
  
  // Create a blob with HTML content and trigger download
  const createDownloadablePDF = (htmlContent: string) => {
    const blob = new Blob([htmlContent], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `green-career-action-plan-${data.tier.toLowerCase()}-${new Date().toISOString().split('T')[0]}.html`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }
  
  // Generate HTML content with inline styles
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Green Career Action Plan - ${data.tier}</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Arial', sans-serif;
          line-height: 1.6;
          color: #1F2937;
          background: white;
          padding: 20px;
        }
        
        .header {
          text-align: center;
          margin-bottom: 30px;
          border-bottom: 3px solid #E50BA6;
          padding-bottom: 20px;
        }
        
        .logo {
          background: linear-gradient(135deg, #E50BA6, #00D4AA);
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 15px;
        }
        
        h1 {
          color: #E50BA6;
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 10px;
        }
        
        h2 {
          color: #E50BA6;
          font-size: 20px;
          font-weight: 700;
          margin: 25px 0 15px 0;
          border-left: 4px solid #00D4AA;
          padding-left: 15px;
        }
        
        h3 {
          color: #1F2937;
          font-size: 16px;
          font-weight: 600;
          margin: 15px 0 10px 0;
        }
        
        .tier-badge {
          background: linear-gradient(135deg, #10B981, #059669);
          color: white;
          padding: 12px 24px;
          border-radius: 25px;
          font-size: 18px;
          font-weight: bold;
          display: inline-block;
          margin: 20px 0;
        }
        
        .section {
          margin-bottom: 30px;
          padding: 20px;
          border-radius: 12px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
        }
        
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-top: 15px;
        }
        
        .card {
          background: white;
          padding: 15px;
          border-radius: 8px;
          border: 1px solid #E2E8F0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .card h4 {
          color: #1F2937;
          font-weight: 600;
          margin-bottom: 8px;
        }
        
        .badge {
          background: #E0F2FE;
          color: #0369A1;
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 500;
          display: inline-block;
          margin: 2px;
        }
        
        .mentor-card {
          border-left: 4px solid #00D4AA;
        }
        
        .module-card {
          border-left: 4px solid #3B82F6;
        }
        
        .grant-card {
          border-left: 4px solid #10B981;
        }
        
        .event-card {
          border-left: 4px solid #F59E0B;
        }
        
        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-top: 10px;
        }
        
        .skill-tag {
          background: #FEF3C7;
          color: #92400E;
          padding: 3px 8px;
          border-radius: 4px;
          font-size: 11px;
        }
        
        .footer {
          margin-top: 40px;
          text-align: center;
          color: #6B7280;
          font-size: 14px;
          border-top: 1px solid #E5E7EB;
          padding-top: 20px;
        }
        
        .contact-info {
          background: linear-gradient(135deg, #E50BA6, #00D4AA);
          color: white;
          padding: 20px;
          border-radius: 12px;
          text-align: center;
          margin: 20px 0;
        }
        
        .next-steps {
          background: #F0FDF4;
          border: 1px solid #BBF7D0;
          padding: 20px;
          border-radius: 12px;
          margin: 20px 0;
        }
        
        .next-steps h3 {
          color: #166534;
          margin-bottom: 15px;
        }
        
        .next-steps ul {
          list-style: none;
          padding: 0;
        }
        
        .next-steps li {
          padding: 8px 0;
          color: #166534;
          position: relative;
          padding-left: 25px;
        }
        
        .next-steps li:before {
          content: '🚀';
          position: absolute;
          left: 0;
          top: 8px;
        }
        
        @media print {
          body { print-color-adjust: exact; }
          .section { break-inside: avoid; }
          .card { break-inside: avoid; }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="logo">🚀</div>
        <h1>Your Green Career Action Plan</h1>
        <p>Personalized roadmap to sustainable career success</p>
        <div class="tier-badge">🏆 ${data.tier} Tier</div>
        <p><strong>Assessment Score:</strong> ${data.score}/100</p>
      </div>

      <div class="section">
        <h2>📍 Your Current Position</h2>
        <p><strong>Location:</strong> ${data.location || 'Not specified'}</p>
        <p><strong>Career Interests:</strong> ${data.domains.join(', ') || 'Exploring options'}</p>
        <p><strong>Preferred Role Type:</strong> ${data.roleType || 'Open to opportunities'}</p>
        ${data.barriers.length > 0 ? `
          <h3>Identified Challenges</h3>
          <div class="skills-list">
            ${data.barriers.map(barrier => `<span class="skill-tag">${barrier}</span>`).join('')}
          </div>
        ` : ''}
      </div>

      <div class="section">
        <h2>📚 Recommended Learning Path</h2>
        ${recommendedModules.length > 0 ? `
          <div class="grid">
            ${recommendedModules.map(module => `
              <div class="card module-card">
                <h4>${module.title}</h4>
                <p><strong>Duration:</strong> ${module.duration}</p>
                <p><strong>Level:</strong> ${module.level}</p>
                <div class="skills-list">
                  ${module.skills.map((skill: string) => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        ` : `
          <p>Great job! Your skills are well-developed. Focus on advanced modules in your areas of interest.</p>
        `}
      </div>

      <div class="section">
        <h2>🤝 Mentor Connections</h2>
        <div class="grid">
          ${matchedMentors.map(mentor => `
            <div class="card mentor-card">
              <h4>${mentor.name}</h4>
              <p><strong>${mentor.role}</strong> at ${mentor.company}</p>
              <p style="font-size: 14px; color: #6B7280; margin: 8px 0;">${mentor.background}</p>
              <div class="skills-list">
                ${mentor.expertise.map((exp: string) => `<span class="badge">${exp}</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="section">
        <h2>💰 Funding Opportunities</h2>
        <div class="grid">
          ${grants.map(grant => `
            <div class="card grant-card">
              <h4>${grant.title}</h4>
              <p><strong>Amount:</strong> ${grant.amount}</p>
              <p>${grant.description}</p>
              <p><strong>Deadline:</strong> ${grant.deadline}</p>
              <p style="font-size: 12px; color: #6B7280; margin-top: 8px;">${grant.eligibility}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="section">
        <h2>📅 Upcoming Events</h2>
        <div class="grid">
          ${events.map(event => `
            <div class="card event-card">
              <h4>${event.title}</h4>
              <p><strong>Date:</strong> ${event.date}</p>
              <p><strong>Location:</strong> ${event.location}</p>
              <p><strong>Type:</strong> ${event.type}</p>
              <p>${event.description}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="next-steps">
        <h3>🎯 Your Next Steps (30-60-90 Days)</h3>
        <ul>
          <li><strong>Week 1-2:</strong> Start your highest-priority learning module</li>
          <li><strong>Week 3-4:</strong> Reach out to your matched mentors</li>
          <li><strong>Month 2:</strong> Apply for relevant funding opportunities</li>
          <li><strong>Month 3:</strong> Attend networking events and workshops</li>
          <li><strong>Ongoing:</strong> Track progress and reassess every 30 days</li>
        </ul>
      </div>

      <div class="contact-info">
        <h3>💚 Continue Your Journey</h3>
        <p>Access your full dashboard and connect with our community</p>
        <p><strong>Platform:</strong> Access to Green Careers by Octopus Energy</p>
        <p><strong>Support:</strong> Our team is here to help you succeed</p>
      </div>

      <div class="footer">
        <p>Generated on ${new Date().toLocaleDateString()} • Octopus Energy Green Careers Platform</p>
        <p>Breaking barriers to green careers and building a more diverse, sustainable future for everyone.</p>
      </div>
    </body>
    </html>
  `
  
  // Trigger download
  createDownloadablePDF(htmlContent)
} 