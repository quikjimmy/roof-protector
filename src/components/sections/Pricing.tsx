import { ArrowRight, Phone, Mail } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { Button } from '../ui/Button'

export function Pricing() {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Section id="pricing" className="bg-secondary-bg/30">
      <Container>
        <SectionHeader
          eyebrow="Pricing"
          headline="Contact for Quote"
          subtext="Roof Protector is sold as a two-coat system (base + top coat). Coverage and pricing depend on your roof size and condition."
          centered
        />

        <div className="mt-12 max-w-lg mx-auto">
          <div className="bg-secondary-bg border border-border rounded-xl p-8 text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-text-primary mb-2">
              Roof Protector Kit
            </h3>
            <p className="text-text-secondary mb-4">
              Two-coat system — base coat + top coat. Everything you need in one shipment.
            </p>

            <div className="space-y-3 text-left mb-6">
              {[
                'Coverage: 100–200 sq ft per gallon',
                'Two-coat system (base + top coat)',
                'Single component — no mixing required',
                '15-year limited warranty included',
                'ASTM E84 Class A fire rated',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-success flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-text-secondary">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-3xl font-mono font-black text-accent mb-1">
              Contact for Quote
            </div>
            <p className="text-xs text-text-secondary mb-6">
              Pricing varies by roof size and condition. No obligation.
            </p>

            <Button onClick={scrollToForm} size="lg" className="w-full group">
              Get a Quote
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="mt-4 flex items-center justify-center gap-6 text-xs text-text-secondary">
              <span className="flex items-center gap-1">
                <Phone size={12} />
                Phone support available
              </span>
              <span className="flex items-center gap-1">
                <Mail size={12} />
                Same-day response
              </span>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <div className="px-4 py-2 rounded-lg bg-primary-bg border border-border text-center">
              <div className="text-accent font-mono font-bold text-sm">E84 Class A</div>
              <div className="text-[10px] text-text-secondary uppercase tracking-wider">Fire Rating</div>
            </div>
            <div className="px-4 py-2 rounded-lg bg-primary-bg border border-border text-center">
              <div className="text-success font-mono font-bold text-sm">15-Year</div>
              <div className="text-[10px] text-text-secondary uppercase tracking-wider">Warranty</div>
            </div>
            <div className="px-4 py-2 rounded-lg bg-primary-bg border border-border text-center">
              <div className="text-accent font-mono font-bold text-sm">&lt;50 g/L</div>
              <div className="text-[10px] text-text-secondary uppercase tracking-wider">VOC</div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
