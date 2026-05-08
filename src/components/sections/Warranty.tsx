import { Shield, BadgeCheck, RefreshCw, AlertTriangle } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'

const coveredItems = [
  { icon: '🛡️', text: 'Water Resistance', desc: 'Resists liquid water penetration under normal conditions' },
  { icon: '🔒', text: 'Adhesion Integrity', desc: 'Maintains bond without widespread peeling or delamination' },
  { icon: '☀️', text: 'Weathering & UV Stability', desc: 'Resists premature degradation from sun and weather exposure' },
  { icon: '🧱', text: 'Granule Stabilization', desc: 'Reduces ongoing granule loss from shingle surfaces' },
  { icon: '✨', text: 'Film Integrity', desc: 'Remains continuous without excessive cracking or breakdown' },
]

const exclusions = [
  'Structural failure or deck movement',
  'Improper roof design or installation',
  'Lack of ventilation or moisture entrapment',
  'Ponding water or drainage issues',
  'Storm damage, hail, or natural disasters',
  'Fire or external damage',
  'Foot traffic or mechanical abuse',
  'Pre-existing leaks not addressed',
  'Mold, mildew, or biological growth',
  'Color fading or aesthetic changes',
  'Labor, tear-off, disposal, or interior damage',
  'Consequential or incidental damages',
]

export function Warranty() {
  return (
    <Section id="warranty" className="bg-gradient-to-b from-secondary-bg to-primary-bg relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.06),transparent_50%)]" />

      <Container className="relative z-10">
        <SectionHeader
          eyebrow="15-Year Limited Warranty"
          headline="We Stand Behind It. With Paperwork."
          subtext="A warranty is only as good as what it actually covers. Here's the full picture — no fine print hiding."
          centered
        />

        <div className="mt-12 grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: What's covered */}
          <div className="space-y-6">
            {/* Big badge */}
            <div className="relative aspect-square max-w-[280px] mx-auto lg:mx-0 rounded-3xl bg-gradient-to-br from-success/10 to-accent/5 border-2 border-success/30 flex items-center justify-center">
              <div className="text-center">
                <Shield size={48} className="text-success mx-auto mb-3" />
                <div className="text-5xl font-mono font-black text-success leading-none">15</div>
                <div className="text-lg font-bold text-text-primary uppercase tracking-wider mt-1">Year Warranty</div>
                <div className="text-xs text-text-secondary mt-2">Limited System Warranty</div>
              </div>
              <div className="absolute -top-2 -right-2 px-3 py-1 rounded-lg bg-success text-primary-bg text-xs font-bold flex items-center gap-1">
                <BadgeCheck size={12} /> Verified
              </div>
            </div>

            {/* Coverage list */}
            <div className="space-y-3">
              {coveredItems.map((item) => (
                <div key={item.text} className="flex items-start gap-3 p-3 rounded-lg bg-primary-bg/50 border border-border/50">
                  <span className="text-lg">{item.icon}</span>
                  <div>
                    <div className="text-sm font-semibold text-text-primary">{item.text}</div>
                    <div className="text-xs text-text-secondary">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Transferability */}
            <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
              <div className="flex items-center gap-2 mb-1">
                <RefreshCw size={16} className="text-accent" />
                <span className="text-sm font-semibold text-text-primary">Transferable Once</span>
              </div>
              <p className="text-xs text-text-secondary">
                Warranty may be transferred once to a new property owner if registered within 30 days of transfer. Documentation required.
              </p>
            </div>

            {/* Maintenance */}
            <div className="p-4 rounded-lg bg-primary-bg border border-border">
              <p className="text-xs font-semibold text-text-primary mb-2 uppercase tracking-wider">Maintenance Requirements</p>
              <ul className="space-y-1 text-xs text-text-secondary">
                <li>• Annual roof inspection recommended</li>
                <li>• Remove debris regularly</li>
                <li>• Maintain drainage systems</li>
                <li>• Repair damage promptly</li>
              </ul>
            </div>
          </div>

          {/* Right: Exclusions (prominent, not buried) */}
          <div>
            <div className="p-6 rounded-xl bg-warning/5 border border-warning/20">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle size={20} className="text-warning" />
                <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider">Warranty Exclusions</h4>
              </div>
              <p className="text-sm text-text-secondary mb-4">
                These are <strong className="text-text-primary">not covered</strong>. We list them prominently because you deserve to know exactly what you're getting.
              </p>
              <ul className="space-y-2">
                {exclusions.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                    <XMark />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Claim process */}
            <div className="mt-6 p-5 rounded-xl bg-primary-bg border border-border">
              <p className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-3">Claim Process</p>
              <ol className="space-y-2 text-xs text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-mono font-bold">1.</span>
                  <span>Notify ARMOVEX™ within 30 days of issue detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-mono font-bold">2.</span>
                  <span>Provide proof of purchase and installation documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-mono font-bold">3.</span>
                  <span>Submit photos of affected areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-mono font-bold">4.</span>
                  <span>Allow inspection by ARMOVEX™</span>
                </li>
              </ol>
              <p className="mt-3 text-xs text-warning/80">
                Liability limited to replacement material sufficient to repair affected areas only.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

function XMark() {
  return (
    <svg className="w-4 h-4 text-warning/70 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  )
}