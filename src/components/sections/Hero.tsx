import { ArrowDown, Shield } from 'lucide-react'
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
    <section className="relative min-h-screen flex items-center pt-[72px]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-bg via-primary-bg to-secondary-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,194,255,0.08),transparent_50%)]" />

      <Container className="relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary-bg/50">
              <Shield size={14} className="text-accent" />
              <span className="text-sm text-text-secondary">15-Year Warranty</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.1] [-webkit-text-stroke:0.025em]">
              Roof Restoration{' '}
              <span className="text-accent">Without Replacement</span>
            </h1>

            <p className="text-lg lg:text-xl text-text-secondary max-w-xl leading-relaxed">
              Single-component, spray-applied roof coating that penetrates, seals, and extends the life of asphalt shingle and concrete roofs. Zero VOC. Minimal disruption.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToForm} className="text-base">
                Get a Quote
              </Button>
              <Button variant="secondary" onClick={scrollToSpecs} className="text-base">
                See Specs
              </Button>
            </div>
          </div>

          {/* Hero image placeholder */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary-bg border border-border">
            <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/60 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
                  <Shield size={32} className="text-accent" />
                </div>
                <p className="text-text-secondary text-sm">Roof surface coating application</p>
              </div>
            </div>
            {/* Placeholder overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzFBMjUzMzAiLz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzJEM0Y1MCIgb3BhY2l0eT0iMC4zIi8+PC9zdmc+')] opacity-50" />
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToSpecs}
          className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-text-secondary hover:text-accent transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={20} className="animate-bounce" />
        </button>
      </Container>
    </section>
  )
}
