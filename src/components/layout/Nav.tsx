import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '../ui/Button'
import { Container } from './Container'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center
        transition-all duration-200
        ${scrolled ? 'bg-primary-bg/80 backdrop-blur-xl shadow-lg' : 'bg-transparent'}
      `}
    >
      <Container className="flex items-center justify-between w-full">
        <a href="#" className="text-xl font-bold text-text-primary tracking-tight">
          ARMO<span className="text-accent">-</span>VEX
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <Button onClick={scrollToForm} className="text-sm">
            Get a Quote
          </Button>
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
          <Container className="py-4">
            <Button onClick={scrollToForm} className="w-full">
              Get a Quote
            </Button>
          </Container>
        </div>
      )}
    </nav>
  )
}
