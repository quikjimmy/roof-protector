import { Card } from '../ui/Card'
import { SectionHeader } from '../ui/SectionHeader'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { ShieldCheck, Flame, Droplets, Wind, Ruler, Clock } from 'lucide-react'

const specs = [
  {
    label: 'Coverage',
    value: '200',
    suffix: 'sq ft/gal',
    icon: Ruler,
    color: 'accent',
    badge: 'High Coverage',
  },
  {
    label: 'Warranty',
    value: '15',
    suffix: 'Years',
    icon: ShieldCheck,
    color: 'success',
    badge: 'Best in Class',
  },
  {
    label: 'Fire Rating',
    value: 'Class A',
    suffix: '',
    icon: Flame,
    color: 'accent',
    badge: 'ASTM E84',
  },
  {
    label: 'VOC',
    value: '0',
    suffix: 'g/L',
    icon: Wind,
    color: 'success',
    badge: 'Zero VOC',
  },
  {
    label: 'Perm Rating',
    value: '15',
    suffix: 'perms',
    icon: Droplets,
    color: 'accent',
    badge: 'ASTM E96',
  },
  {
    label: 'Elongation',
    value: '250',
    suffix: '%',
    icon: Clock,
    color: 'accent',
    badge: 'ASTM D2370',
  },
  {
    label: 'Tensile Strength',
    value: '1,800',
    suffix: 'psi',
    icon: ShieldCheck,
    color: 'accent',
    badge: 'ASTM D412',
  },
  {
    label: 'Shelf Life',
    value: '3',
    suffix: 'Years',
    icon: Clock,
    color: 'text-secondary',
    badge: null,
  },
]

export function SpecsGrid() {
  return (
    <Section id="specs-grid" className="bg-secondary-bg/30">
      <Container>
        <SectionHeader
          eyebrow="Technical Specifications"
          headline="Real Numbers. Real Protection."
          subtext="Every spec below comes directly from the TDS. No marketing rounding."
          centered
        />

        {/* Main specs grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {specs.slice(0, 4).map((spec) => (
            <Card key={spec.label} hover className="text-center relative overflow-hidden">
              {spec.badge && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/0 via-accent to-accent/0" />
              )}
              <div className="w-10 h-10 mx-auto rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                <spec.icon size={20} className={spec.color === 'success' ? 'text-success' : 'text-accent'} />
              </div>
              <span className="text-xs uppercase tracking-[0.15em] text-text-secondary font-medium">
                {spec.label}
              </span>
              <div className="mt-2 flex items-baseline justify-center gap-1">
                <span className={`text-3xl md:text-4xl font-mono font-extrabold ${spec.color === 'success' ? 'text-success' : 'text-text-primary'}`}>
                  {spec.value}
                </span>
                {spec.suffix && (
                  <span className="text-sm text-text-secondary">{spec.suffix}</span>
                )}
              </div>
              {spec.badge && (
                <span className="inline-block mt-2 text-[10px] uppercase tracking-widest text-accent/60">
                  {spec.badge}
                </span>
              )}
            </Card>
          ))}
        </div>

        {/* Secondary specs row */}
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {specs.slice(4).map((spec) => (
            <Card key={spec.label} hover className="text-center relative overflow-hidden border-border/30">
              <div className="w-8 h-8 mx-auto rounded-lg bg-secondary-bg flex items-center justify-center mb-2">
                <spec.icon size={16} className="text-text-secondary" />
              </div>
              <span className="text-[11px] uppercase tracking-[0.1em] text-text-secondary font-medium">
                {spec.label}
              </span>
              <div className="mt-1 flex items-baseline justify-center gap-1">
                <span className="text-2xl font-mono font-extrabold text-text-primary">
                  {spec.value}
                </span>
                {spec.suffix && (
                  <span className="text-xs text-text-secondary">{spec.suffix}</span>
                )}
              </div>
              {spec.badge && (
                <span className="inline-block mt-1 text-[9px] uppercase tracking-widest text-text-secondary/50">
                  {spec.badge}
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

        {/* TDS source note */}
        <p className="text-center text-xs text-text-secondary/50 mt-8">
          All specifications from the Technical Data Sheet (TDS). Tested to ASTM standards.
        </p>
      </Container>
    </Section>
  )
}