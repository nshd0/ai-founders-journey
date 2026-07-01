import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyItMatters from './components/WhyItMatters'
import StudentJourney from './components/StudentJourney'
import RoleExplorer from './components/RoleExplorer'
import Class68 from './components/Class68'
import Class912 from './components/Class912'
import Outcomes from './components/Outcomes'
import StakeholderPaths from './components/StakeholderPaths'
import ClosingVision from './components/ClosingVision'

export default function App() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhyItMatters />
      <StudentJourney />
      <RoleExplorer />
      <Class68 />
      <Class912 />
      <Outcomes />
      <StakeholderPaths />
      <ClosingVision />
    </main>
  )
}
