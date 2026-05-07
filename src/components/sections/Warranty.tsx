import { BadgeCheck } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'

export function Warranty() {
  return (
    <Section id="warranty" className="bg-gradient-to-b from-accent/5 to-transparent">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            {/* Badge visualization */}
            <div className="relative aspect-square max-w-[400px] mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-success/10 border-2 border-success/20 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <BadgeCheck size={80} className="text-success mx-auto" />
                  <div className="space-y-1">
                    <p className="text-5xl font-mono font-bold text-success">15</p>
                    <p className="text-xl font-bold text-text-primary uppercase tracking-wider">Year Warranty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <SectionHeader
              eyebrow="Our Guarantee"
              headline="15-Year Workmanship Warranty"
              subtext="We stand behind our roof restoration with one of the strongest warranties in the industry."
            />

            <div className="space-y-4">
              {[
                'Covers materials and labor for the warranty period',
                'Transferable to new property owners',
                'Prorated coverage after year 5',
                'Direct response from our technical team if issues arise',
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-success text-xs font-bold">{i + 1}</span>
                  </div>
                  <p className="text-text-secondary">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
