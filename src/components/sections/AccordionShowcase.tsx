import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useState } from 'react'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { ArrowRight, CheckCircle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const accordionData = [
  {
    num: '01',
    title: 'The Problem',
    heading: 'Your Roof Is Failing',
    description: 'Leaks, cracks, and UV damage don\'t fix themselves. Every year you wait, the damage gets worse — and the bill gets bigger.',
    stat: '87%',
    statLabel: 'of roofs replaced too early',
    gradient: 'linear-gradient(135deg, #1a0a0a 0%, #2d1010 50%, #1a0505 100%)',
    accent: '#ef4444',
    panelBg: 'rgba(239,68,68,0.08)',
  },
  {
    num: '02',
    title: 'The Application',
    heading: 'One Coat. One Day.',
    description: 'Roof Protector sprays on in a single coat. Penetrates deep, seals completely. Your roof is done before sunset.',
    stat: '200',
    statLabel: 'sq ft covered per gallon',
    gradient: 'linear-gradient(135deg, #0a1a0a 0%, #102810 50%, #050f05 100%)',
    accent: '#22c55e',
    panelBg: 'rgba(34,197,94,0.08)',
  },
  {
    num: '03',
    title: 'The Result',
    heading: 'Brand New Roof',
    description: 'Sealed, protected, and backed by a 15-year warranty. Not a patch job — a full restoration. Looks new, performs new.',
    stat: '15',
    statLabel: 'year warranty',
    gradient: 'linear-gradient(135deg, #0a0a1a 0%, #0f1f35 50%, #050a14 100%)',
    accent: '#00C2FF',
    panelBg: 'rgba(0,194,255,0.08)',
  },
  {
    num: '04',
    title: 'The Proof',
    heading: 'Class A Fire Rated',
    description: 'ASTM E84 fire rating. 250% elongation. Zero VOC. This isn\'t cheap coating — it\'s aerospace-grade protection for your home.',
    stat: '0',
    statLabel: 'VOC emissions',
    gradient: 'linear-gradient(135deg, #0f0a1a 0%, #1a0f30 50%, #0a0514 100%)',
    accent: '#a855f7',
    panelBg: 'rgba(168,85,247,0.08)',
  },
  {
    num: '05',
    title: 'Get Started',
    heading: 'Free Roof Assessment',
    description: 'No obligation. A real person reviews your roof and gives you a honest quote — not a sales script. Most assessments within 24 hours.',
    stat: 'Free',
    statLabel: 'no obligation quote',
    gradient: 'linear-gradient(135deg, #0a1510 0%, #0f2520 50%, #050f0a 100%)',
    accent: '#00C2FF',
    panelBg: 'rgba(0,194,255,0.12)',
    isCTA: true,
  },
]

function AccordionPanel({
  item,
  isActive,
  onClick,
}: {
  item: (typeof accordionData)[0]
  isActive: boolean
  onClick: () => void
}) {
  return (
    <div
      className={`accordion-panel ${isActive ? 'active' : ''}`}
      onClick={onClick}
      style={{ '--panel-gradient': item.gradient, '--panel-accent': item.accent, '--panel-bg': item.panelBg } as React.CSSProperties}
    >
      {/* Panel background */}
      <div className="panel-bg" />
      
      {/* Number */}
      <div className="panel-num">{item.num}</div>
      
      {/* Vertical title (collapsed state) */}
      <div className="panel-title">{item.title}</div>
      
      {/* Expanded content */}
      <div className="panel-content">
        <h3 className="panel-h3">{item.heading}</h3>
        <p className="panel-desc">{item.description}</p>
        
        {/* Stat callout */}
        <div className="panel-stat">
          <span className="panel-stat-value" style={{ color: item.accent }}>{item.stat}</span>
          <span className="panel-stat-label">{item.statLabel}</span>
        </div>
        
        {item.isCTA && (
          <button className="panel-cta">
            Get Free Assessment
            <ArrowRight size={16} />
          </button>
        )}
      </div>
      
      {/* Subtle top border accent */}
      <div className="panel-accent-bar" style={{ background: item.accent }} />
    </div>
  )
}

export function AccordionShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? activeIndex : index)
  }

  return (
    <Section id="how-it-works" className="py-24 lg:py-32" ref={sectionRef}>
      <Container>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">The Process</p>
          <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-text-primary">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-xl mx-auto">
            Click any panel to explore how Roof Protector transforms your roof.
          </p>
        </div>

        {/* Accordion */}
        <div className="accordion">
          {accordionData.map((item, index) => (
            <AccordionPanel
              key={item.num}
              item={item}
              isActive={activeIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}