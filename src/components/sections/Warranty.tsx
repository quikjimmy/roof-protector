import { BadgeCheck, Award, Shield, RefreshCw } from 'lucide-react'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'

export function Warranty() {
  return (
    <Section id="warranty" className="bg-gradient-to-b from-secondary-bg to-primary-bg relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.08),transparent_50%)]" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            {/* Badge visualization */}
            <div className="relative max-w-[420px] mx-auto">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-success/20 scale-110" />
              <div className="absolute inset-0 rounded-full border border-success/10 scale-[1.15]" />

              {/* Main badge */}
              <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-success/10 to-accent/5 border-2 border-success/30 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-success/10 flex items-center justify-center border border-success/20">
                    <Shield size={40} className="text-success" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-6xl font-mono font-bold text-success leading-none">15</div>
                    <div className="text-xl font-bold text-text-primary uppercase tracking-wider">Year Warranty</div>
                  </div>
                </div>
              </div>

              {/* Corner badges */}
              <div className="absolute -top-3 -left-3 px-3 py-1.5 rounded-lg bg-success text-primary-bg text-xs font-bold flex items-center gap-1">
                <BadgeCheck size={12} /> Verified
              </div>
              <div className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-lg bg-accent text-primary-bg text-xs font-bold flex items-center gap-1">
                <Award size={12} /> Workmanship
              </div>
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <span className="text-xs uppercase tracking-[0.15em] text-success font-semibold">
                Our Guarantee
              </span>
              <h2 className="text-[40px] font-extrabold tracking-tight text-text-primary mt-2 leading-tight">
                The Longest Warranty in Roof Restoration
              </h2>
              <p className="text-lg text-text-secondary mt-4 leading-relaxed">
                Most roof coatings offer 5 years — if you're lucky. We back Roof Protector with a full 15-year workmanship warranty because we know it performs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: BadgeCheck, text: 'Covers materials and labor' },
                { icon: RefreshCw, text: 'Transferable to new owners' },
                { icon: Shield, text: 'Direct support from our team' },
                { icon: Award, text: 'Prorated after year 5' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 bg-primary-bg/50 rounded-xl px-4 py-3 border border-border/50">
                  <Icon size={18} className="text-success flex-shrink-0" />
                  <span className="text-sm text-text-secondary">{text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="px-5 py-3 rounded-xl bg-success/10 border border-success/20">
                <div className="text-success font-extrabold text-lg">15</div>
                <div className="text-xs text-text-secondary">Years Coverage</div>
              </div>
              <div className="px-5 py-3 rounded-xl bg-accent/10 border border-accent/20">
                <div className="text-accent font-extrabold text-lg">Class A</div>
                <div className="text-xs text-text-secondary">Fire Rating</div>
              </div>
              <div className="px-5 py-3 rounded-xl bg-secondary-bg border border-border">
                <div className="text-text-primary font-extrabold text-lg">0 g/L</div>
                <div className="text-xs text-text-secondary">Zero VOC</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}