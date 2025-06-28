# 🌱 Access to Green Careers Platform

**Expanding access to green careers for under-represented communities**

![Platform Preview](public/team-octopus-energy.jpg)

---

## 🎯 Mission Statement

Access to green careers and climate leadership is far from equal. Under-represented communities — particularly Black, Asian and minority ethnic groups — often face barriers to entering the sustainability and energy sectors.

This platform reimagines what "access" means by:
- Making opportunities more visible through personalized career pathways
- Connecting people with networks, mentors, and resources
- Creating tools that organizations can use to support diverse communities
- Providing targeted support for real-world barriers like cost, time, childcare, and digital access

## 🚀 Key Features

### 1. **Personalized Green Career Journey**
A comprehensive 9-step assessment tool that guides users through:
- **Welcome & Demographics** - Inclusive data collection respecting privacy
- **Skills Primer** - Introduction to green career opportunities
- **Self-Assessment** - Rating 8 core skills with personalized feedback
- **Ambition Mapping** - Exploring interests in 5 green domains
- **Barrier Identification** - Identifying and addressing real challenges
- **Network Building** - Connecting with communities and peer groups
- **Review & Validation** - Confirming assessment results
- **Action Plan Generation** - Personalized roadmap with concrete next steps

### 2. **Green Skills Pyramid**
Visual representation of career progression across 4 tiers:
- **Tier 1**: Green Mindset (Environmental awareness, solutions thinking)
- **Tier 2**: Core Skills (Data analysis, project management, materials knowledge)
- **Tier 3**: Upskilling (Carbon accounting, retrofit technology, sector knowledge)
- **Tier 4**: Specialist Expertise (Solar design, policy strategy, advanced technical skills)

### 3. **Barrier-Aware Support System**
Targeted resources for common barriers:
- **💰 Cost**: Free courses, government funding, employer sponsorship
- **⏰ Time**: Micro-learning, flexible scheduling, self-paced options
- **👶 Childcare**: Family-friendly programs, online learning, childcare support
- **💻 Digital Access**: Library resources, equipment loans, digital inclusion
- **🗣️ Language**: Multilingual training, language support programs

### 4. **Mentor Matching & Networks**
- AI-powered matching with industry professionals
- Community group connections
- Peer networking opportunities
- Diverse role models from similar backgrounds

### 5. **Comprehensive Resource Hub**
- **Learning Modules**: Targeted skill development courses
- **Funding Opportunities**: Grants and scholarships for under-represented groups
- **Events Calendar**: Networking events, career fairs, workshops
- **Career Pathways**: Detailed information on 6 top green roles

### 6. **Community Feedback & Co-Creation**
- User-driven feature suggestions
- Voting system for prioritizing improvements
- Transparent development roadmap
- Community-powered content recommendations

## 🎨 User Experience Design

### Visual Identity
- **Octopus Pink** (#F050F7) for headlines and key calls-to-action
- **Octopus Green** (#13C395) for positive actions and progress
- **Accessible contrast** ratios throughout
- **Inclusive imagery** showcasing diversity in green careers

### User Journey
1. **Discovery**: Eye-catching landing page with clear value proposition
2. **Engagement**: Interactive skills assessment with immediate feedback
3. **Personalization**: Tailored recommendations based on individual needs
4. **Connection**: Mentor and peer matching for ongoing support
5. **Action**: Concrete next steps with resources and timelines
6. **Community**: Ongoing engagement through feedback and social sharing

## 🛠 Technical Architecture

### Frontend Stack
- **Next.js 15** - React framework for production
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon system

### Key Components
```
app/access-os/
├── components/
│   ├── modal-wizard.tsx          # Main assessment flow
│   ├── pyramid.tsx              # Skills visualization
│   ├── community-feedback.tsx   # User suggestions system
│   ├── social-share.tsx         # Social media integration
│   └── steps/                   # Individual assessment steps
├── page.tsx                     # Landing page
└── globals.css                  # Brand styling

data/
├── config.json                  # Skills, barriers, domains
└── learning.json               # Courses and resources
```

### Accessibility Features
- **Screen reader support** with proper ARIA labels
- **Keyboard navigation** throughout the interface
- **High contrast mode** compatibility
- **Responsive design** for all device types
- **Progressive enhancement** for low-bandwidth users

## 📊 Data Structure

### User Assessment Data
```typescript
interface WizardData {
  consent: boolean
  ethnicity: string[]           // Demographic data (optional)
  location: string             // Geographic data for local opportunities
  skills: { [key: string]: number }  // 1-5 rating scale
  domains: string[]            // Areas of interest
  roleType: string            // Career focus
  barriers: string[]          // Identified challenges
  hasMentor: boolean         // Current mentorship status
  requestMentor: boolean     // Mentorship needs
  communityGroups: string    // Network preferences
  tier: string              // Calculated skill tier
  score: number            // Overall readiness score
}
```

### Content Configuration
- **Skills taxonomy**: 8 transferable skills with descriptions
- **Domain mapping**: 5 green economy sectors with career paths
- **Barrier definitions**: Common challenges with targeted solutions
- **Resource database**: Courses, mentors, grants, events

## 🌍 Addressing Systemic Barriers

### Making Opportunities Visible
- **Career pathway mapping** shows clear progression routes
- **Role model profiles** from similar backgrounds
- **Success stories** demonstrating achievable career transitions
- **Local opportunity alerts** based on user location

### Connecting People with Networks
- **Mentor matching algorithm** based on background and interests
- **Community group recommendations** for ongoing support
- **Peer connections** with others on similar journeys
- **Industry event recommendations** for networking

### Creating Organizational Tools
- **Assessment framework** that other organizations can adopt
- **Barrier identification toolkit** for understanding user needs
- **Resource recommendation engine** for personalized support
- **Impact measurement** tools for tracking diversity outcomes

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18.0 or higher
- npm or pnpm package manager

### Installation
```bash
# Clone the repository
git clone https://github.com/octopus-energy/access-os.git
cd access-os

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev
```

### Environment Setup
The platform runs entirely client-side for privacy, but can be extended with:
- User authentication system
- Database for storing assessment results
- API integrations for real-time job/course data
- Analytics for measuring impact

## 📈 Measuring Impact

### Key Metrics
- **Diversity in green careers**: Tracking representation improvements
- **Barrier reduction**: Measuring effectiveness of targeted support
- **Career progression**: Following user journey outcomes
- **Network growth**: Expanding mentorship and peer connections

### Success Indicators
- Increased application rates for green jobs from target demographics
- Higher completion rates for relevant training programs
- Expanded mentor networks within the green economy
- Improved career confidence and readiness scores

## 🤝 Contributing

We welcome contributions that further our mission of expanding access to green careers:

### Priority Areas
- **Accessibility improvements**: Making the platform more inclusive
- **Content expansion**: Adding resources for more career paths
- **Language support**: Internationalization for broader reach
- **Mobile optimization**: Improving mobile user experience

### Development Guidelines
1. **Inclusive design**: Consider diverse user needs in all features
2. **Accessibility first**: Test with screen readers and keyboard navigation
3. **Performance optimization**: Ensure fast loading for all users
4. **Privacy protection**: Minimize data collection, maximize user control

## 📞 Support & Contact

### For Users
- **Help Center**: Comprehensive guides and FAQs
- **Community Forum**: Peer support and networking
- **Mentorship Program**: Direct connection with industry professionals

### For Organizations
- **Partnership Opportunities**: Integrate with existing diversity programs
- **Customization Services**: Adapt the platform for specific sectors
- **Training & Workshops**: Implement barrier-aware hiring practices

## 🌟 Why This Matters

The green economy is projected to create millions of new jobs, but current representation rates mean these opportunities may not reach the communities that need them most. This platform directly addresses the systemic barriers that prevent equal access to green careers:

- **Visibility**: Many don't know green careers exist or how to access them
- **Networks**: Traditional hiring relies on connections that exclude many communities
- **Resources**: Training and funding aren't reaching those who need them most
- **Support**: Career transitions require ongoing guidance and encouragement

By reimagining access through digital tools, personalized pathways, and community connections, we're not just creating a career platform – we're building a more equitable green economy for everyone.

---

**Built with 💚 by Octopus Energy**  
*Powering a greener, more inclusive future for all* 