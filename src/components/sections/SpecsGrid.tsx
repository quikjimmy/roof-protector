import { Card } from '../ui/Card'
import { SectionHeader } from '../ui/SectionHeader'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { Ruler, Shield, Flame, Wind, Droplets, Clock, CheckCircle, Thermometer } from 'lucide-react'

const specs = [
  {
    label: 'Coverage per Gallon',
    value: '100–200',
    suffix: 'sq ft',
    icon: Ruler,
    color: 'accent',
    note: 'Varies by surface condition',
  },
  {
    label: 'Warranty',
    value: '15',
    suffix: 'years',
    icon: Shield,
    color: 'success',
    note: 'Limited system warranty',
  },
  {
    label: 'Fire Rating',
    value: 'Class A',
    suffix: '',
    icon: Flame,
    color: 'accent',
    note: 'ASTM E84',
  },
  {
    label: 'VOC',
    value: '<50',
    suffix: 'g/L',
    icon: Wind,
    color: 'success',
    note: 'Low VOC',
  },
  {
    label: 'Perm Rating',
    value: '5–15',
    suffix: 'perms',
    icon: Droplets,
    color: 'accent',
    note: 'Breathable membrane',
  },
  {
    label: 'Elongation',
    value: '150–300',
    suffix: '%',
    icon: Clock,
    color: 'accent',
    note: 'Flexible & crack-bridging',
  },
  {
    label: 'Tensile Strength',
    value: '400–800',
    suffix: 'psi',
    icon: CheckCircle,
    color: 'accent',
    note: 'ASTM D412',
  },
  {
    label: 'Application Temp',
    value: '>40',
    suffix: '°F',
    icon: Thermometer,
    color: 'accent',
    note: 'Dry surface, no rain within 2–4 hrs',
  },
]

export function SpecsGrid() {
  return (
    <Section id="specs-grid" className="bg-secondary-bg/30">
      <Container>
        <SectionHeader
          eyebrow="Technical Specifications"
          headline="Real Numbers. From the TDS."
          subtext="Every specification below comes directly from the Roof Protector Technical Data Sheet (TDS v2). No marketing rounding, no vague claims."
          centered
        />

        {/* Specs grid — 2 rows of 4 */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {specs.map((spec) => (
            <Card key={spec.label} hover className="text-center relative overflow-hidden">
              <div className="w-10 h-10 mx-auto rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                <spec.icon size={20} className="text-accent" />
              </div>
              <span className="text-xs uppercase tracking-[0.12em] text-text-secondary font-medium block">
                {spec.label}
              </span>
              <div className="mt-2 flex items-baseline justify-center gap-1">
                <span className="text-3xl md:text-4xl font-mono font-extrabold text-text-primary">
                  {spec.value}
                </span>
                {spec.suffix && (
                  <span className="text-sm text-text-secondary">{spec.suffix}</span>
                )}
              </div>
              {spec.note && (
                <span className="inline-block mt-2 text-[10px] text-text-secondary/60 uppercase tracking-wider">
                  {spec.note}
                </span>
              )}
            </Card>
          ))}
        </div>

        {/* Additional performance specs — table-style */}
        <div className="mt-10 max-w-3xl mx-auto">
          <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider text-center mb-6">Additional Performance Data</h3>
          <div className="bg-secondary-bg border border-border rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left px-5 py-3 text-xs uppercase tracking-wider text-text-secondary font-semibold">Property</th>
                  <th className="text-right px-5 py-3 text-xs uppercase tracking-wider text-text-secondary font-semibold">Value</th>
                  <th className="text-left px-5 py-3 text-xs uppercase tracking-wider text-text-secondary font-semibold">Test Method</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {[
                  ['Solids by Volume', '85–92%', 'ASTM D2369'],
                  ['Elongation', '150–300%', 'ASTM D2370'],
                  ['Tensile Strength', '400–800 psi', 'ASTM D412'],
                  ['Permeance', '5–15 perms', 'ASTM E96'],
                  ['Adhesion', '>450 psi', 'ASTM D7234'],
                  ['Taper Abrasion', 'Pass', 'ASTM D4060'],
                  ['Shore D Hardness', 'Pass', 'ASTM D2240'],
                ].map(([prop, val, test]) => (
                  <tr key={prop} className="hover:bg-primary-bg/30 transition-colors">
                    <td className="px-5 py-3 text-text-primary font-medium">{prop}</td>
                    <td className="px-5 py-3 text-accent font-bold text-right font-mono">{val}</td>
                    <td className="px-5 py-3 text-text-secondary">{test}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Two-coat system callout */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 md:gap-12 text-center">
          <div>
            <div className="w-12 h-12 mx-auto rounded-xl bg-accent/10 flex items-center justify-center mb-2">
              <span className="text-accent font-extrabold text-lg">2</span>
            </div>
            <div className="text-sm font-semibold text-text-primary">Two-Coat System</div>
            <div className="text-xs text-text-secondary mt-0.5">Base + top coat</div>
          </div>
          <div className="w-px h-12 bg-border hidden md:block self-center" />
          <div>
            <div className="w-12 h-12 mx-auto rounded-xl bg-accent/10 flex items-center justify-center mb-2">
              <span className="text-accent font-extrabold text-lg">1</span>
            </div>
            <div className="text-sm font-semibold text-text-primary">Single Component</div>
            <div className="text-xs text-text-secondary mt-0.5">No mixing required</div>
          </div>
          <div className="w-px h-12 bg-border hidden md:block self-center" />
          <div>
            <div className="w-12 h-12 mx-auto rounded-xl bg-accent/10 flex items-center justify-center mb-2">
              <span className="text-accent font-extrabold text-lg">24h</span>
            </div>
            <div className="text-sm font-semibold text-text-primary">Full Cure</div>
            <div className="text-xs text-text-secondary mt-0.5">Ready in 24 hours</div>
          </div>
          <div className="w-px h-12 bg-border hidden md:block self-center" />
          <div>
            <div className="w-12 h-12 mx-auto rounded-xl bg-success/10 flex items-center justify-center mb-2">
              <CheckCircle size={20} className="text-success" />
            </div>
            <div className="text-sm font-semibold text-text-primary">UV Resistant</div>
            <div className="text-xs text-text-secondary mt-0.5">Stable in sunlight</div>
          </div>
        </div>

        <p className="text-center text-xs text-text-secondary/50 mt-8">
          All specifications from Technical Data Sheet v2. Tested to ASTM standards.
        </p>
      </Container>
    </Section>
  )
}