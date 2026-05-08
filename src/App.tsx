import { Nav } from './components/layout/Nav'
import { Hero } from './components/sections/Hero'
import { Problem } from './components/sections/Problem'
import { HowItWorks } from './components/sections/HowItWorks'
import { SpecsGrid } from './components/sections/SpecsGrid'
import { Exclusions } from './components/sections/Exclusions'
import { Pricing } from './components/sections/Pricing'
import { Warranty } from './components/sections/Warranty'
import { FAQ } from './components/sections/FAQ'
import { LeadForm } from './components/sections/LeadForm'
import { Footer } from './components/sections/Footer'
import './styles/globals.css'

export default function App() {
  return (
    <div className="min-h-screen bg-primary-bg">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <SpecsGrid />
        <Exclusions />
        <Pricing />
        <Warranty />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
    </div>
  )
}
