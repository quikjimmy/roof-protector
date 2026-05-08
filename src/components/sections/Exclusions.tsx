import { XCircle, AlertTriangle } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'

const exclusions = [
  {
    title: 'Will not fix structural failure or deck movement',
    description: 'If your roof deck is sagging, rotting, or shifting, a coating won\'t help. It needs replacement.',
  },
  {
    title: 'Will not seal pre-existing leaks',
    description: 'Active leaks from structural damage must be repaired before application. This is a coating, not a patch.',
  },
  {
    title: 'Ponding water and drainage issues are not covered',
    description: 'Standing water indicates a slope or drainage problem. Coating over it won\'t fix it.',
  },
  {
    title: 'Storm damage, hail, and natural disasters are excluded',
    description: 'Acts of God aren\'t covered by any coating warranty. Check your homeowners insurance.',
  },
  {
    title: 'Labor, tear-off, disposal, and interior damage are not covered',
    description: 'If something goes wrong, we replace the coating material — not your drywall, not your contractor\'s bill.',
  },
  {
    title: 'Mold, mildew, and biological growth are excluded',
    description: 'Coating prevents granule loss, not biological colonization. Keep your roof clean.',
  },
  {
    title: 'Foot traffic and mechanical abuse are excluded',
    description: 'Don\'t walk on your coated roof more than necessary. It\'s a coating, not armor plating.',
  },
]

export function Exclusions() {
  return (
    <Section id="exclusions" className="bg-primary-bg">
      <Container>
        <SectionHeader
          eyebrow="What It Doesn't Do"
          headline="Honest Exclusions — Because Trust Matters"
          subtext="We'd rather lose a sale than mislead you. Here's what Roof Protector will not do."
          centered
        />

        <div className="mt-12 grid md:grid-cols-2 gap-4">
          {exclusions.map((item) => (
            <div key={item.title} className="bg-secondary-bg border border-warning/20 rounded-xl p-5 flex items-start gap-3">
              <XCircle size={18} className="text-warning mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-text-primary mb-1">{item.title}</h4>
                <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Liability callout */}
        <div className="mt-8 p-5 rounded-xl bg-warning/5 border border-warning/20">
          <div className="flex items-start gap-3">
            <AlertTriangle size={20} className="text-warning mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-text-primary mb-1">Limitation of Liability</p>
              <p className="text-sm text-text-secondary">
                ARMOVEX™ liability is limited to <strong className="text-text-primary">replacement material sufficient to repair affected areas only</strong>. 
                We are not responsible for labor, tear-off, disposal, interior damage, or consequential damages. Read the full warranty before purchasing.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-6 text-center">
          <p className="text-sm text-text-secondary">
            If your roof is structurally sound with no active leaks, Roof Protector can extend its life significantly. 
            If it's not, we'll tell you — <strong className="text-text-primary">before you spend a dollar.</strong>
          </p>
        </div>
      </Container>
    </Section>
  )
}