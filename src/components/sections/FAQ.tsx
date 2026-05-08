import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'

const faqs = [
  {
    question: 'Will it fix my leak?',
    answer: 'No. Roof Protector is a surface coating, not a leak repair product. If you have an active leak from structural damage, a missing shingle, or a hole in your roof, that needs proper repair before coating. We will not sell you a coating for a roof that needs replacement — and we\'ll tell you that upfront.',
    honest: true,
  },
  {
    question: 'How long does it last?',
    answer: 'The warranty covers 15 years. Real-world longevity depends on your roof condition, local climate, and maintenance. The coating is UV-stable, flexible, and vapor-permeable — designed to handle thermal cycling and weather exposure. Annual inspection and debris removal are required to maintain warranty coverage.',
    honest: false,
  },
  {
    question: 'Can I apply it myself?',
    answer: 'Yes. It\'s a single-component formula — no mixing, no special equipment. You can apply it with a sprayer or roller. Two coats are required (base coat, then top coat). Apply above 40°F on a dry surface with no rain in the forecast for 2–4 hours. Full cure in 24 hours. If you\'d rather have a pro do it, we can connect you with a certified installer.',
    honest: false,
  },
  {
    question: 'What prep is required?',
    answer: 'Remove all debris (leaf blower or garden hose). For moss or mildew, use a soft-wash solution. The surface must be completely dry before application. Any loose or damaged shingles should be repaired first. If your roof has active structural issues, coating won\'t help — and we\'ll tell you that before you buy.',
    honest: false,
  },
  {
    question: 'Is it safe for asphalt shingles?',
    answer: 'Yes. Roof Protector is specifically formulated for asphalt shingle roofing systems. It\'s vapor-permeable (5–15 perms), so it won\'t trap moisture under the coating. It bonds to shingles and stabilizes granule loss. ASTM D7234 adhesion testing shows >450 psi bond strength.',
    honest: false,
  },
  {
    question: 'What\'s the coverage?',
    answer: '100–200 square feet per gallon, depending on the condition and porosity of your roof surface. Rough or heavily weathered shingles will be at the lower end (100 sq ft/gal). Smoother surfaces will be closer to 200 sq ft/gal. The two-coat system requires minimum 1.5–2.5 gallons per 100 sq ft total.',
    honest: false,
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <Section id="faq">
      <Container>
        <SectionHeader
          eyebrow="FAQ"
          headline="Honest Answers to Hard Questions"
          subtext="We'd rather you know the truth than buy something that won't work for you."
          centered
        />

        <div className="mt-12 max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-secondary-bg border border-border rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary-bg/80 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-base font-semibold text-text-primary pr-4">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-text-secondary flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-text-secondary leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Objection handling callout */}
        <div className="mt-10 max-w-3xl mx-auto p-5 rounded-xl bg-primary-bg border border-border">
          <p className="text-sm text-text-secondary text-center">
            Still skeptical? Good. <strong className="text-text-primary">We don't want your money if Roof Protector isn't right for your roof.</strong> Reach out and we'll give you a straight answer — no sales pressure, no vague promises.
          </p>
        </div>
      </Container>
    </Section>
  )
}