import { CheckCircle2 } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'

const benefits = [
  { title: 'Single-Component', desc: 'No mixing required. Spray straight from the container.' },
  { title: 'Penetrating Seal', desc: 'Penetrates deep intoporous surfaces to seal from within.' },
  { title: 'Zero VOC', desc: 'Meets strict environmental regulations. Safe for occupied buildings.' },
  { title: '15-Year Warranty', desc: 'Backed by our industry-leading craftsmanship guarantee.' },
]

export function Solution() {
  return (
    <Section id="solution">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Solution visualization */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary-bg border border-border order-2 lg:order-1">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <div className="w-20 h-20 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
                  <CheckCircle2 size={40} className="text-accent" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-accent/30 rounded w-3/4 mx-auto" />
                  <div className="h-3 bg-accent/20 rounded w-1/2 mx-auto" />
                  <div className="h-3 bg-accent/10 rounded w-2/3 mx-auto" />
                </div>
                <p className="text-text-secondary text-sm">Sealed, protected roof surface</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <SectionHeader
              eyebrow="The Solution"
              headline="Roof Protector Restores Without Replacing"
              subtext="A spray-applied coating that penetrates, seals, and extends roof life by 15+ years."
            />

            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-text-primary">{benefit.title}</p>
                    <p className="text-text-secondary text-sm">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
