import { Droplets, Crosshair, ShieldCheck } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'

const steps = [
  {
    icon: Droplets,
    number: '01',
    title: 'Clean',
    description: 'Pressure wash the roof surface to remove debris, moss, and loose material. Allow to dry completely before application.',
  },
  {
    icon: Crosshair,
    number: '02',
    title: 'Penetrate',
    description: 'Spray-apply Roof Protector directly onto the roof surface. The single-component formula penetrates porous substrates deeply.',
  },
  {
    icon: ShieldCheck,
    number: '03',
    title: 'Protect',
    description: 'The coating seals microscopic cracks, bonds to the surface, and creates a waterproof barrier that extends roof life by 15+ years.',
  },
]

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <Container>
        <SectionHeader
          eyebrow="Application Process"
          headline="Simple 3-Step System"
          subtext="No special equipment required. Spray apply like standard coating."
          centered
        />

        <div className="mt-12 grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+24px)] right-[calc(-50%+24px)] h-px bg-border" />
              )}

              <div className="bg-secondary-bg border border-border rounded-xl p-6 relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <step.icon size={24} className="text-accent" />
                  </div>
                  <span className="text-xs font-mono text-text-secondary">{step.number}</span>
                </div>

                <h3 className="text-xl font-bold text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
