import { Sparkles, Paintbrush, ShieldCheck } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'

const steps = [
  {
    icon: Sparkles,
    number: '01',
    title: 'Prep',
    description: 'Remove debris with a leaf blower or garden hose. Soft-wash moss or mildew. Let the surface dry completely. No special equipment needed — just clean and dry.',
    detail: 'Apply above 40°F. Surface must be dry.',
  },
  {
    icon: Paintbrush,
    number: '02',
    title: 'Apply',
    description: 'Spray or roll on directly from the container. Single-component formula — no mixing, no measuring. Two coats: base coat first, then top coat. Coverage: 100–200 sq ft per gallon.',
    detail: 'Dry to touch in 1 hour. No rain for 2–4 hours.',
  },
  {
    icon: ShieldCheck,
    number: '03',
    title: 'Protect',
    description: 'Full cure in 24 hours. Your roof is now coated with a flexible, UV-stable, vapor-permeable membrane that bonds to shingles and bridges micro-cracks. Protected for 15 years.',
    detail: 'ASTM E84 Class A fire rated. UV resistant.',
  },
]

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <Container>
        <SectionHeader
          eyebrow="How It Works"
          headline="Prep. Apply. Protect."
          subtext="No special equipment. No mixing. One day. Done."
          centered
        />

        <div className="mt-12 grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+24px)] right-[calc(-50%+24px)] h-px bg-border" />
              )}

              <div className="bg-secondary-bg border border-border rounded-xl p-6 relative h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <step.icon size={24} className="text-accent" />
                  </div>
                  <span className="text-xs font-mono text-text-secondary tracking-wider">{step.number}</span>
                </div>

                <h3 className="text-xl font-bold text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-3">
                  {step.description}
                </p>
                <p className="text-xs text-accent font-mono bg-accent/5 border border-accent/10 rounded px-3 py-2">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* DIY callout */}
        <div className="mt-8 text-center">
          <p className="text-sm text-text-secondary">
            No contractor required — but <button onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })} className="text-accent hover:underline font-medium">certified installers are available</button> if you'd rather leave it to a pro.
          </p>
        </div>
      </Container>
    </Section>
  )
}
