import { Nav } from './components/layout/Nav'
import { Hero } from './components/sections/Hero'
import { Problem } from './components/sections/Problem'
import { HowItWorks } from './components/sections/HowItWorks'
import { SpecsGrid } from './components/sections/SpecsGrid'
import { Exclusions } from './components/sections/Exclusions'
import { Warranty } from './components/sections/Warranty'
import { LeadForm } from './components/sections/LeadForm'
import { InstallerForm } from './components/sections/InstallerForm'
import { FAQ } from './components/sections/FAQ'
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
        <Warranty />
        <LeadForm />
        <InstallerForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}