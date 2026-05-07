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
              headline="Aging Roofs Are a Costly Headache"
              subtext="Traditional roof replacement is disruptive, expensive, and unnecessary for roofs that can be restored."
            />

            <div className="space-y-4">
              {[
                'Roof replacement averages $10,000–$30,000+ per project',
                'Tear-off creates debris, noise, and property disruption',
                'Building codes may require permits and engineering reviews',
                'Most asphalt roofs are replaced 5-10 years too early',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <AlertTriangle size={20} className="text-warning mt-0.5 flex-shrink-0" />
                  <p className="text-text-secondary">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Problem visualization */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-primary-bg border border-border">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <div className="w-20 h-20 mx-auto rounded-full bg-warning/10 flex items-center justify-center">
                  <AlertTriangle size={40} className="text-warning" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-warning/30 rounded w-3/4 mx-auto" />
                  <div className="h-3 bg-warning/20 rounded w-1/2 mx-auto" />
                  <div className="h-3 bg-warning/10 rounded w-2/3 mx-auto" />
                </div>
                <p className="text-text-secondary text-sm">Cracked, aging roof surface</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
