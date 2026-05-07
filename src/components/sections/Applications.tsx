import { Building2, Warehouse, Home, Construction } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'

const applications = [
  { icon: Home, title: 'Residential', desc: 'Asphalt shingle and concrete tile roofs on homes and townhouses.' },
  { icon: Building2, title: 'Commercial', desc: 'Flat and low-slope roofs on office buildings, retail, and warehouses.' },
  { icon: Warehouse, title: 'Industrial', desc: 'Large-scale roof systems on manufacturing and logistics facilities.' },
  { icon: Construction, title: 'Metal Buildings', desc: 'Corrugated metal roofs on pre-engineered metal structures.' },
]

export function Applications() {
  return (
    <Section id="applications" className="bg-secondary-bg/30">
      <Container>
        <SectionHeader
          eyebrow="Use Cases"
          headline="Versatile Roof Restoration"
          subtext="Works on multiple roof types across residential, commercial, and industrial applications."
          centered
        />

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {applications.map((app) => (
            <div
              key={app.title}
              className="bg-secondary-bg border border-border rounded-xl p-6 text-center hover:border-accent/40 transition-colors"
            >
              <div className="w-12 h-12 mx-auto rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <app.icon size={24} className="text-accent" />
              </div>
              <h3 className="font-bold text-text-primary mb-2">{app.title}</h3>
              <p className="text-sm text-text-secondary">{app.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
