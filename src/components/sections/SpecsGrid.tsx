import { Card } from '../ui/Card'
import { SectionHeader } from '../ui/SectionHeader'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'

const specs = [
  { label: 'Warranty', value: '15', suffix: 'Years', badge: 'success' },
  { label: 'VOC Content', value: '0', suffix: 'g/L', badge: 'accent' },
  { label: 'Coverage', value: '100', suffix: 'sq ft/gal', badge: null },
  { label: 'Dry Time', value: '2-4', suffix: 'hrs', badge: null },
  { label: 'Shelf Life', value: '24', suffix: 'Months', badge: null },
  { label: 'Temp Range', value: '50-100', suffix: '°F', badge: null },
]

export function SpecsGrid() {
  return (
    <Section id="specs-grid" className="bg-secondary-bg/30">
      <Container>
        <SectionHeader
          eyebrow="Technical Specifications"
          headline="Built for Performance"
          subtext="Engineered for commercial-grade roof restoration with proven results."
          centered
        />

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {specs.map((spec) => (
            <Card key={spec.label} hover className="text-center">
              <span className="text-xs uppercase tracking-[0.1em] text-text-secondary">
                {spec.label}
              </span>
              <div className="mt-3 flex items-baseline justify-center gap-1">
                <span className="text-3xl md:text-4xl font-mono font-bold text-text-primary">
                  {spec.value}
                </span>
                <span className="text-lg text-text-secondary">{spec.suffix}</span>
              </div>
              {spec.badge && (
                <span
                  className={`
                    inline-block mt-3 px-2 py-0.5 text-xs font-semibold rounded
                    ${spec.badge === 'success' ? 'bg-success/10 text-success' : 'bg-accent/10 text-accent'}
                  `}
                >
                  {spec.badge === 'success' ? '✓ Zero VOC' : '✓ Low VOC'}
                </span>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
