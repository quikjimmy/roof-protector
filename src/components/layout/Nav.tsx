import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight, Flame } from 'lucide-react'
import { Container } from './Container'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })
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
            ARMO<span className="text-accent">-</span>VEX
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-accent/10 border border-accent/20">
              <Flame size={12} className="text-accent" />
              <span className="text-[11px] font-semibold text-accent uppercase tracking-wider">E84 Class A</span>
            </div>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg bg-accent text-primary-bg hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,194,255,0.3)] active:scale-[0.98] transition-all duration-150"
            >
              Buy Now
              <ArrowRight size={14} />
            </button>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg border border-border text-text-primary hover:border-accent hover:text-accent active:scale-[0.98] transition-all duration-150"
            >
              Find Installer
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
              <div className="flex items-center gap-2 px-3 py-2 bg-accent/10 border border-accent/20 rounded-lg">
                <Flame size={14} className="text-accent" />
                <span className="text-sm font-semibold text-accent">ASTM E84 Class A Fire Rated</span>
              </div>
              <button
                onClick={scrollToForm}
                className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold px-5 py-3 rounded-lg bg-accent text-primary-bg"
              >
                Buy Now
                <ArrowRight size={14} />
              </button>
              <button
                onClick={scrollToForm}
                className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold px-5 py-3 rounded-lg border border-border text-text-primary"
              >
                Find Installer
              </button>
            </Container>
          </div>
        )}
      </nav>

      {/* Sticky CTA bar — mobile only */}
      <div
        className={`
          fixed bottom-0 left-0 right-0 z-40 bg-secondary-bg/95 backdrop-blur-xl border-t border-border
          md:hidden
        `}
      >
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="flex-1 min-w-0">
            <div className="text-xs text-text-secondary truncate">Roof Protector — 15-Year Warranty</div>
          </div>
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 text-sm font-bold px-4 py-2.5 rounded-lg bg-accent text-primary-bg flex-shrink-0"
          >
            Get Quote
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </>
  )
}
