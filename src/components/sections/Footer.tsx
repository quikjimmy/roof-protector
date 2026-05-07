import { MapPin, Phone, Mail } from 'lucide-react'
import { Container } from '../layout/Container'

export function Footer() {
  return (
    <footer className="bg-[#0A1017] border-t border-border py-12 md:py-16">
      <Container>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+15551234567" className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors">
                <Phone size={16} />
                (555) 123-4567
              </a>
              <a href="mailto:info@armovex.com" className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors">
                <Mail size={16} />
                info@armovex.com
              </a>
              <div className="flex items-start gap-2 text-text-secondary">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>ARMO-VEX HQ<br />123 Industrial Parkway<br />Houston, TX 77001</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="space-y-3">
              <a href="#specs-grid" className="block text-text-secondary hover:text-accent transition-colors">Specifications</a>
              <a href="#how-it-works" className="block text-text-secondary hover:text-accent transition-colors">How It Works</a>
              <a href="#applications" className="block text-text-secondary hover:text-accent transition-colors">Applications</a>
              <a href="#warranty" className="block text-text-secondary hover:text-accent transition-colors">Warranty</a>
              <a href="#lead-form" className="block text-text-secondary hover:text-accent transition-colors">Get a Quote</a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4">Legal</h4>
            <div className="space-y-3">
              <a href="#" className="block text-text-secondary hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="block text-text-secondary hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="block text-text-secondary hover:text-accent transition-colors">Warranty Terms</a>
            </div>
            <p className="mt-6 text-xs text-text-secondary">
              © {new Date().getFullYear()} ARMO-VEX. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
