import { ArrowRight, ShieldCheck, Flame, Droplets } from 'lucide-react'
import { Button } from '../ui/Button'
import { Container } from '../layout/Container'

export function Hero() {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center pt-[72px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-bg via-primary-bg to-secondary-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,194,255,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(34,197,94,0.04),transparent_50%)]" />

      <Container className="relative z-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="space-y-8">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5">
              <Flame size={14} className="text-accent" />
              <span className="text-sm text-accent font-medium">ASTM E84 Class A Fire Rated</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-text-primary leading-[1.05]">
              Your Roof Is Showing Its Age.{' '}
              <span className="text-accent">You Don't Need to Replace It.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-text-secondary max-w-xl leading-relaxed">
              Roof Protector restores, protects, and extends the life of your asphalt shingle roof — at a fraction of the replacement cost. Spray it on. Done in a day.
            </p>

            {/* Key spec pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: ShieldCheck, label: '15-Year Warranty', color: 'text-success' },
                { icon: Flame, label: 'Class A Fire Rating', color: 'text-accent' },
                { icon: Droplets, label: '<50 g/L VOC', color: 'text-accent' },
              ].map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary-bg border border-border text-sm">
                  <Icon size={14} className={color} />
                  <span className="text-text-primary font-medium">{label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToForm} size="lg" className="text-base group">
                Buy Now
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="secondary" onClick={scrollToForm} size="lg" className="text-base">
                Find a Certified Installer
              </Button>
            </div>

            <p className="text-sm text-text-secondary">
              Single-component formula. No mixing. Two-coat system. Full cure in 24 hours.
            </p>
          </div>

          {/* Placeholder hero image area */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-secondary-bg border border-border flex items-center justify-center overflow-hidden">
              <div className="text-center p-8 space-y-4">
                <div className="w-24 h-24 mx-auto rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M24 6L44 22H36V40H30V30H18V40H12V22H4L24 6Z" className="text-accent" />
                    <path d="M24 6L44 22" className="text-accent/40" />
                  </svg>
                </div>
                <p className="text-text-secondary text-sm">Roof surface rendering</p>
                <p className="text-text-secondary/50 text-xs">Image placeholder — before/after shingle application</p>
              </div>
            </div>

            {/* Floating spec badges */}
            <div className="absolute -top-4 -left-4 px-4 py-2 rounded-xl bg-primary-bg border border-border shadow-xl">
              <div className="text-[10px] text-text-secondary uppercase tracking-wider">Coverage</div>
              <div className="text-lg font-mono font-black text-accent">100–200 <span className="text-xs text-text-secondary">sq ft/gal</span></div>
            </div>
            <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl bg-success/10 border border-success/30 shadow-xl">
              <div className="text-[10px] text-text-secondary uppercase tracking-wider">Warranty</div>
              <div className="text-lg font-mono font-black text-success">15 Years</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
