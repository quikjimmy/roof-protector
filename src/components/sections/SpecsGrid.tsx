import { Card } from '../ui/Card'
import { SectionHeader } from '../ui/SectionHeader'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'

const specs = [
  { label: 'Coverage', value: '200', suffix: 'sq ft/gal', highlight: true },
  { label: 'Shelf Life', value: '3', suffix: 'Years', highlight: false },
  { label: 'Fire Rating', value: 'Class A', suffix: '', highlight: true },
  { label: 'Warranty', value: '15', suffix: 'Years', highlight: true },
  { label: 'VOC', value: '0', suffix: 'g/L', highlight: true },
  { label: 'Elongation', value: '250', suffix: '%', highlight: false },
]

export function SpecsGrid() {
  return (
    <Section id="specs-grid" className="bg-secondary-bg/30">
      <Container>
        <SectionHeader
          eyebrow="Technical Specifications"
          headline="What the Numbers Actually Mean"
          subtext="Real specs from the TDS. Not marketing. Not estimates."
          centered
        />

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {specs.map((spec) => (
            <Card key={spec.label} hover className="text-center relative overflow-hidden">
              {spec.highlight && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/0 via-accent to-accent/0" />
              )}
              <span className="text-xs uppercase tracking-[0.15em] text-text-secondary font-medium">
                {spec.label}
              </span>
              <div className="mt-3 flex items-baseline justify-center gap-1">
                <span className="text-3xl md:text-4xl font-mono font-extrabold text-text-primary">
                  {spec.value}
                </span>
                {spec.suffix && (
                  <span className="text-base text-text-secondary">{spec.suffix}</span>
                )}
              </div>
              {spec.highlight && (
                <span className="inline-block mt-2 text-[10px] uppercase tracking-widest text-accent/60">
                  Key Spec
                </span>
              )}
            </Card>
          ))}
        </div>

        {/* Proof bar */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-12 text-center">
          <div>
            <div className="text-2xl font-extrabold text-accent">0</div>
            <div className="text-xs text-text-secondary mt-1 uppercase tracking-wider">Zero VOC</div>
          </div>
          <div className="w-px h-8 bg-border hidden md:block" />
          <div>
            <div className="text-2xl font-extrabold text-accent">15</div>
            <div className="text-xs text-text-secondary mt-1 uppercase tracking-wider">Year Warranty</div>
          </div>
          <div className="w-px h-8 bg-border hidden md:block" />
          <div>
            <div className="text-2xl font-extrabold text-accent">250%</div>
            <div className="text-xs text-text-secondary mt-1 uppercase tracking-wider">Elasticity</div>
          </div>
          <div className="w-px h-8 bg-border hidden md:block" />
          <div>
            <div className="text-2xl font-extrabold text-accent">Class A</div>
            <div className="text-xs text-text-secondary mt-1 uppercase tracking-wider">Fire Rated</div>
          </div>
        </div>
      </Container>
    </Section>
  )
}