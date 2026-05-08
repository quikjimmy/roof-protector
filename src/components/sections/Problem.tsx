import { AlertTriangle, DollarSign, Clock, Wrench } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'

export function Problem() {
  return (
    <Section id="problem" className="bg-secondary-bg/30">
      <Container>
        <SectionHeader
          eyebrow="The Problem"
          headline="Replacing Your Roof Costs More Than You Think"
          subtext="The average roof replacement is $10,000–$30,000+. And waiting makes it worse."
          centered
        />

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: DollarSign,
              title: '$10,000–$30,000+',
              description: 'The average cost to replace an asphalt shingle roof. That\'s a second car — for something you hope you never have to think about.',
            },
            {
              icon: Clock,
              title: 'Waiting Makes It Worse',
              description: 'Every year you wait, UV damage, granule loss, and weathering compound. A roof that could be restored today may need full replacement in 2–3 years.',
            },
            {
              icon: Wrench,
              title: 'Tear-Off Is Disruptive',
              description: 'Full replacement means days of construction noise, dumpsters in your driveway, and the risk of interior damage from exposed decking.',
            },
          ].map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-secondary-bg border border-border rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-warning/10 flex items-center justify-center mb-4">
                <Icon size={24} className="text-warning" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2 font-mono">{title}</h3>
              <p className="text-text-secondary leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* Honesty callout */}
        <div className="mt-8 p-5 rounded-xl bg-primary-bg border border-warning/20">
          <div className="flex items-start gap-3">
            <AlertTriangle size={20} className="text-warning mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-text-primary mb-1">Important: Your roof must be structurally sound</p>
              <p className="text-sm text-text-secondary">
                Roof Protector is a coating, not a structural repair. If your roof has active leaks, rotted decking, or structural movement, 
                it needs replacement — not a coating. We'll tell you straight either way.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
