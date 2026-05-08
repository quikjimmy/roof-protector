import { MapPin, Phone, Mail } from 'lucide-react'
import { Container } from '../layout/Container'

export function Footer() {
  return (
    <footer className="bg-[#0A1017] border-t border-border py-12 md:py-16">
      <Container>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Product info */}
          <div>
            <div className="text-xl font-bold text-text-primary mb-3">
              Roof<span className="text-accent">Protector</span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              DIY roof coating for asphalt shingle roofs. Extend roof life at a fraction of replacement cost.
            </p>
            <div className="text-xs text-text-secondary/60">
              Coverage: 100–200 sq ft/gal · VOC &lt;50 g/L · Class A Fire Rated
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="space-y-3">
              <a href="#specs-grid" className="block text-text-secondary hover:text-accent transition-colors">Technical Specifications</a>
              <a href="#how-it-works" className="block text-text-secondary hover:text-accent transition-colors">How It Works</a>
              <a href="#exclusions" className="block text-text-secondary hover:text-accent transition-colors">What It Does & Doesn't Do</a>
              <a href="#warranty" className="block text-text-secondary hover:text-accent transition-colors">15-Year Warranty</a>
              <a href="#faq" className="block text-text-secondary hover:text-accent transition-colors">FAQ</a>
              <a href="#lead-form" className="block text-text-secondary hover:text-accent transition-colors">Buy — Contact for Quote</a>
            </div>
          </div>

          {/* Legal + contact */}
          <div>
            <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4">Legal & Contact</h4>
            <div className="space-y-3 mb-6">
              <a href="mailto:info@armovex.com" className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors">
                <Mail size={14} />
                info@armovex.com
              </a>
            </div>
            <div className="space-y-2">
              <a href="#" className="block text-text-secondary hover:text-accent transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="block text-text-secondary hover:text-accent transition-colors text-sm">Terms of Service</a>
              <a href="#warranty" className="block text-text-secondary hover:text-accent transition-colors text-sm">Warranty Terms</a>
            </div>
            <p className="mt-6 text-xs text-text-secondary">
              © {new Date().getFullYear()} Armovex. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}