import { SectionHeader } from '../ui/SectionHeader'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'

const specs = [
  {
    label: 'Coverage',
    value: '100–200',
    unit: 'sq ft/gal',
    note: 'Depending on surface condition',
  },
  {
    label: 'Solids by Volume',
    value: '85–92%',
    unit: '',
    note: 'High solids = more film per coat',
  },
  {
    label: 'VOC Content',
    value: '<50',
    unit: 'g/L',
    note: 'Compliant nationwide. Safe to apply outdoors.',
  },
  {
    label: 'Perm Rating',
    value: '5–15',
    unit: 'perms',
    note: 'Vapor permeable — lets the roof breathe',
  },
  {
    label: 'Elongation',
    value: '150–300%',
    unit: '',
    note: 'Flexes with thermal expansion. Bridges micro-cracks.',
  },
  {
    label: 'Tensile Strength',
    value: '400–800',
    unit: 'psi',
    note: 'ASTM D412. Holds up under stress.',
  },
  {
    label: 'Fire Rating',
    value: 'Class A',
    unit: '',
    note: 'ASTM E84. Highest fire rating.',
  },
  {
    label: 'Cure Time',
    value: '24',
    unit: 'hours',
    note: 'Full cure. Dry to touch in 1 hour.',
  },
  {
    label: 'Application Temp',
    value: '40°F+',
    unit: '',
    note: 'Apply on dry surface. No rain for 2–4 hours.',
  },
]

const astmSpecs = [
  { test: 'ASTM E84', result: 'Class A Fire Rating' },
  { test: 'ASTM D7234', result: 'Adhesion >450 psi' },
  { test: 'ASTM D4060', result: 'Taber Abrasion' },
  { test: 'ASTM D2240', result: 'Shore D Hardness' },
  { test: 'ASTM D412', result: '150–300% Elongation' },
]

export function SpecsGrid() {
  return (
    <Section id="specs-grid" className="bg-secondary-bg/30">
      <Container>
        <SectionHeader
          eyebrow="What It Does"
          headline="Every Number. No Vague Claims."
          subtext="Here's exactly what Roof Protector does — backed by test data, not marketing language."
          centered
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="bg-secondary-bg border border-border rounded-xl p-6 hover:border-accent/40 transition-colors duration-150"
            >
              <div className="text-[10px] uppercase tracking-[0.15em] text-text-secondary font-semibold mb-2">
                {spec.label}
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-mono font-black text-text-primary">{spec.value}</span>
                {spec.unit && (
                  <span className="text-sm font-mono text-text-secondary">{spec.unit}</span>
                )}
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">{spec.note}</p>
            </div>
          ))}
        </div>

        {/* ASTM test reference table */}
        <div className="mt-8 p-5 rounded-xl bg-primary-bg border border-border">
          <h4 className="text-xs uppercase tracking-[0.15em] text-accent font-semibold mb-3">Test Standards</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {astmSpecs.map(({ test, result }) => (
              <div key={test} className="flex flex-col gap-1">
                <span className="text-xs font-mono text-accent">{test}</span>
                <span className="text-xs text-text-secondary">{result}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key features */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            'UV Resistant',
            'Vapor Permeable',
            'Flexible / Crack-Bridging',
            'Single Component — No Mixing',
          ].map((feature) => (
            <div key={feature} className="flex items-center gap-2 px-4 py-3 rounded-lg bg-secondary-bg border border-border">
              <svg className="w-4 h-4 text-success flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-text-primary font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
