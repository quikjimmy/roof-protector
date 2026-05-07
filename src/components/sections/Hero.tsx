import { ArrowRight, Shield, Clock, CheckCircle } from 'lucide-react'
import { Button } from '../ui/Button'
import { Container } from '../layout/Container'

export function Hero() {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToSpecs = () => {
    document.getElementById('specs-grid')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center pt-[72px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-bg via-primary-bg to-secondary-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,194,255,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(34,197,94,0.05),transparent_50%)]" />

      <Container className="relative z-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-sm text-accent font-medium">Accepting Summer 2026 Projects</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-text-primary leading-[1.05]">
              Stop Replacing{' '}
              <span className="text-accent">Good Roofs.</span>
              <br />
              Restore Them.
            </h1>

            <p className="text-lg lg:text-xl text-text-secondary max-w-xl leading-relaxed">
              One coat. 15-year warranty. Class A fire rated. Roof Protector penetrates and seals aging asphalt and concrete — no tear-off, no disruption, no markup.
            </p>

            {/* Proof points inline */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Shield, text: '15-Year Warranty' },
                { icon: CheckCircle, text: 'Zero VOC' },
                { icon: Clock, text: 'Day 1 Return to Service' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-text-secondary">
                  <Icon size={14} className="text-success" />
                  {text}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToForm} size="lg" className="text-base group">
                Get a Free Roof Assessment
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="secondary" onClick={scrollToSpecs} size="lg" className="text-base">
                View Specs
              </Button>
            </div>

            <p className="text-sm text-text-secondary">
              No obligation. Free site visit. Most quotes within 24 hours.
            </p>
          </div>

          {/* Hero image / proof panel */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-secondary-bg/80 backdrop-blur">
              {/* Tech proof overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-transparent to-transparent z-10" />
              <div className="p-8 space-y-6">
                <div className="text-xs uppercase tracking-widest text-accent mb-4">Proof from the TDS</div>

                {[
                  { label: 'Coverage Rate', value: '200 sq ft/gal' },
                  { label: 'Fire Rating', value: 'Class A (ASTM E84)' },
                  { label: 'Shelf Life', value: '3 Years' },
                  { label: 'Elongation', value: '250% (ASTM D2370)' },
                  { label: 'Tensile Strength', value: '1,800 psi (ASTM D412)' },
                  { label: 'Perm Rating', value: '15 perms (ASTM E96)' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center py-3 border-b border-border/30 last:border-0">
                    <span className="text-sm text-text-secondary">{label}</span>
                    <span className="text-sm font-mono font-semibold text-text-primary">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 z-20 px-5 py-3 rounded-xl bg-accent text-primary-bg font-black text-sm shadow-lg">
              Est. 60%+ Cost Savings vs. Replacement
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}