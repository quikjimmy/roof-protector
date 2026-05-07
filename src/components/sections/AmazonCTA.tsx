import { ShoppingCart } from 'lucide-react'
import { Button } from '../ui/Button'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'

export function AmazonCTA() {
  return (
    <Section id="buy-on-amazon" className="bg-primary-bg border-t border-border">
      <Container className="text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-[0.15em] text-accent font-semibold">
            Also Available On
          </span>

          <h2 className="text-3xl lg:text-4xl font-extrabold text-text-primary">
            Buy on Amazon
          </h2>

          <p className="text-text-secondary text-lg">
            Need to order now? Purchase Roof Protector directly through Amazon for quick delivery. Prime shipping available.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="https://www.amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-base font-semibold px-6 py-3 rounded-lg bg-accent text-primary-bg hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,194,255,0.3)] transition-all duration-150"
            >
              <ShoppingCart size={18} className="mr-2" />
              Shop on Amazon
            </a>

            <Button variant="secondary" onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })} className="text-base">
              Get Quote Instead
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
