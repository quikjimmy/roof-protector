import { AlertTriangle } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'

export function Problem() {
  return (
    <Section id="problem" className="bg-secondary-bg/30">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <SectionHeader
              eyebrow="The Problem"
              headline="A New Roof Costs $10,000–$30,000. You Shouldn't Have to Pay That."
              subtext="Most aging roofs aren't broken — they're just weathered. Roof Protector gives you a legitimate alternative."
            />

            <div className="space-y-4">
              {[
                'Roof replacement costs $10,000–$30,000+ for a typical single-family home',
                'Most asphalt roofs are replaced 5–10 years before they actually need to be',
                'Roof Protector extends roof life at a fraction of replacement cost',
                'One weekend of work — not weeks of construction disruption',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <AlertTriangle size={20} className="text-warning mt-0.5 flex-shrink-0" />
                  <p className="text-text-secondary">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Problem visualization — image placeholder */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-primary-bg border-2 border-dashed border-border flex items-center justify-center">
            <div className="text-center space-y-4 p-8">
              <div className="w-20 h-20 mx-auto rounded-full bg-warning/10 flex items-center justify-center">
                <AlertTriangle size={40} className="text-warning" />
              </div>
              <p className="text-text-secondary font-medium">[PROBLEM IMAGE PLACEHOLDER]</p>
              <p className="text-text-secondary/50 text-sm">Aging/failing roof photo<br />missing granules, cracks, moss</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}