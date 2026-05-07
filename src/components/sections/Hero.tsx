import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ArrowRight, Shield, CheckCircle, Droplets, Wind, Thermometer } from 'lucide-react'
import { Button } from '../ui/Button'
import { Container } from '../layout/Container'

export function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollY } = useScroll()

  const roofY = useTransform(scrollY, [0, 400], [0, -30])
  const houseY = useTransform(scrollY, [0, 400], [0, -15])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3])

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToSpecs = () => {
    document.getElementById('specs-grid')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-[72px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-bg via-primary-bg to-secondary-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,194,255,0.10),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(34,197,94,0.04),transparent_50%)]" />

      <Container className="relative z-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-sm text-accent font-medium">Accepting Summer 2026 Projects</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-text-primary leading-[1.05]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Your Roof Is{' '}
              <span className="relative">
                <span className="relative z-10 text-accent">Leaking</span>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-3 bg-accent/20 rounded"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.6, duration: 0.5 }}
                />
              </span>
              . You Don&apos;t Need to{' '}
              <span className="text-text-secondary/60">Replace It.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-lg lg:text-xl text-text-secondary max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              One coat seals leaks, stops aging, and gives you a brand-new roof — at{' '}
              <strong className="text-text-primary">60% less than replacement cost.</strong>{' '}
              Done in a day. Lasts 15 years.
            </motion.p>

            {/* Pain point icons */}
            <motion.div
              className="flex flex-wrap gap-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {[
                { icon: Droplets, text: 'Stops Leaks' },
                { icon: Wind, text: 'No More Aging' },
                { icon: Thermometer, text: 'UV Protection' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-text-secondary">
                  <div className="w-8 h-8 rounded-lg bg-secondary-bg border border-border flex items-center justify-center">
                    <Icon size={16} className="text-accent" />
                  </div>
                  {text}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button onClick={scrollToForm} size="lg" className="text-base group">
                Get a Free Assessment
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="secondary" onClick={scrollToSpecs} size="lg" className="text-base">
                See How It Works
              </Button>
            </motion.div>

            <motion.p
              className="text-sm text-text-secondary"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              No obligation. Free site visit. Same-day quotes available.
            </motion.p>
          </motion.div>

          {/* Animated house roof visual */}
          <motion.div
            className="relative"
            style={{ opacity }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="relative"
              style={{ y: roofY }}
            >
              {/* Glow behind */}
              <div className="absolute inset-0 bg-accent/10 blur-3xl rounded-full scale-75" />

              {/* House + roof SVG illustration */}
              <motion.div
                className="relative z-10 flex flex-col items-center"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <svg
                  viewBox="0 0 400 400"
                  className="w-full max-w-[400px] drop-shadow-2xl"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Roof - animated with shine */}
                  <motion.path
                    d="M200 80 L320 180 L80 180 Z"
                    fill="#1A2530"
                    stroke="#00C2FF"
                    strokeWidth="2"
                    animate={{
                      fill: ['#1A2530', '#243040', '#1A2530'],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  {/* Roof shine effect */}
                  <motion.path
                    d="M200 80 L320 180 L80 180 Z"
                    fill="url(#roofGradient)"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  {/* Roof granules/texture lines */}
                  <motion.g
                    stroke="#00C2FF"
                    strokeWidth="0.5"
                    strokeOpacity="0.3"
                    animate={{ strokeOpacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <line x1="140" y1="155" x2="260" y2="155" />
                    <line x1="150" y1="165" x2="250" y2="165" />
                    <line x1="160" y1="175" x2="240" y2="175" />
                  </motion.g>

                  {/* House body */}
                  <motion.rect
                    x="120"
                    y="180"
                    width="160"
                    height="140"
                    fill="#0F1923"
                    stroke="#2D3F50"
                    strokeWidth="2"
                    animate={{ strokeOpacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* Window */}
                  <motion.rect
                    x="170"
                    y="210"
                    width="60"
                    height="50"
                    fill="#00C2FF"
                    fillOpacity="0.1"
                    stroke="#00C2FF"
                    strokeWidth="1.5"
                    animate={{ fillOpacity: [0.05, 0.15, 0.05] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <line x1="200" y1="210" x2="200" y2="260" stroke="#00C2FF" strokeWidth="1" />
                  <line x1="170" y1="235" x2="230" y2="235" stroke="#00C2FF" strokeWidth="1" />

                  {/* Door */}
                  <rect x="185" y="270" width="30" height="50" fill="#0F1923" stroke="#2D3F50" strokeWidth="1.5" />

                  {/* Ground line */}
                  <line x1="50" y1="320" x2="350" y2="320" stroke="#2D3F50" strokeWidth="2" strokeLinecap="round" />

                  {/* Roof transform arrows - showing "restored" */}
                  <motion.g
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <path
                      d="M60 140 L40 120 L50 120 L50 110 L70 110 L70 120 L80 120 Z"
                      fill="#22C55E"
                      opacity="0.8"
                    />
                    <path
                      d="M340 140 L360 120 L350 120 L350 110 L330 110 L330 120 L320 120 Z"
                      fill="#22C55E"
                      opacity="0.8"
                    />
                  </motion.g>

                  {/* Gradient defs */}
                  <defs>
                    <linearGradient id="roofGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00C2FF" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="#00C2FF" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#00C2FF" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Labels */}
                <motion.div
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-success/10 border border-success/30 text-success text-xs font-semibold"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                >
                  Restored & Protected
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Floating badges */}
            <motion.div
              className="absolute -top-4 -left-4 px-4 py-2 rounded-xl bg-primary-bg border border-border shadow-xl"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <div className="text-xs text-text-secondary uppercase tracking-wider">Coverage</div>
              <div className="text-lg font-black text-accent">200 sq ft/gal</div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl bg-accent text-primary-bg shadow-xl"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.9 }}
            >
              <div className="text-xs opacity-70 uppercase tracking-wider">Warranty</div>
              <div className="text-lg font-black">15 Years</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToSpecs}
          className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-text-secondary hover:text-accent transition-colors"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          style={{ y: useTransform(scrollY, [0, 400], [0, 30]) }}
        >
          <span className="text-xs uppercase tracking-widest">See How It Works</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight size={20} className="rotate-90" />
          </motion.div>
        </motion.button>
      </Container>
    </section>
  )
}