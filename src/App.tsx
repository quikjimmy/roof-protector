import { Nav } from './components/layout/Nav'
import { Hero } from './components/sections/Hero'
import { SpecsGrid } from './components/sections/SpecsGrid'
import { HowItWorks } from './components/sections/HowItWorks'
import { Problem } from './components/sections/Problem'
import { Solution } from './components/sections/Solution'
import { Applications } from './components/sections/Applications'
import { Warranty } from './components/sections/Warranty'
import { LeadForm } from './components/sections/LeadForm'
import { AmazonCTA } from './components/sections/AmazonCTA'
import { Footer } from './components/sections/Footer'
import './styles/globals.css'

export default function App() {
  return (
    <div className="min-h-screen bg-primary-bg">
      <Nav />
      <main>
        <Hero />
        <SpecsGrid />
        <HowItWorks />
        <Problem />
        <Solution />
        <Applications />
        <Warranty />
        <LeadForm />
        <AmazonCTA />
      </main>
      <Footer />
    </div>
  )
}
