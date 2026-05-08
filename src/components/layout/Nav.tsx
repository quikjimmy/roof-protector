import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Container } from './Container'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [showSticky, setShowSticky] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      setShowSticky(window.scrollY > 600)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  const scrollToInstallerForm = () => {
    document.getElementById('installer-form')?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center
          transition-all duration-200
          ${scrolled ? 'bg-primary-bg/90 backdrop-blur-xl shadow-lg' : 'bg-transparent'}
        `}
      >
        <Container className="flex items-center justify-between w-full">
          <a href="#" className="text-xl font-bold text-text-primary tracking-tight">
            Roof<span className="text-accent">Protector</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={scrollToInstallerForm}
              className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-lg text-text-secondary hover:text-text-primary transition-colors"
            >
              Find Installer
            </button>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg bg-accent text-primary-bg hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,194,255,0.3)] active:scale-[0.98] transition-all duration-150"
            >
              Buy Now — Contact for Quote
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </Container>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="absolute top-[72px] left-0 right-0 bg-secondary-bg border-b border-border md:hidden">
            <Container className="py-4 space-y-3">
              <button
                onClick={scrollToInstallerForm}
                className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold px-5 py-3 rounded-lg border border-border text-text-primary"
              >
                Find a Certified Installer
              </button>
              <button
                onClick={scrollToForm}
                className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold px-5 py-3 rounded-lg bg-accent text-primary-bg"
              >
                Buy Now — Contact for Quote
                <ArrowRight size={14} />
              </button>
            </Container>
          </div>
        )}
      </nav>

      {/* Sticky CTA bar */}
      <div
        className={`
          fixed bottom-0 left-0 right-0 z-40 bg-secondary-bg/95 backdrop-blur-xl border-t border-border
          transform transition-transform duration-300
          ${showSticky ? 'translate-y-0' : 'translate-y-full'}
          md:hidden
        `}
      >
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="flex-1">
            <div className="text-xs text-text-secondary">Extend your roof — don't replace it</div>
            <div className="text-sm font-semibold text-text-primary">15-year warranty · DIY-friendly</div>
          </div>
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 text-sm font-bold px-5 py-3 rounded-lg bg-accent text-primary-bg flex-shrink-0"
          >
            Buy Now
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </>
  )
}