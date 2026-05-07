import { useState } from 'react'
import { CheckCircle2, Zap, Clock } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { Select } from '../ui/Select'
import { Textarea } from '../ui/Textarea'
import { SectionHeader } from '../ui/SectionHeader'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'

const propertyTypes = [
  { value: '', label: 'What type of property?' },
  { value: 'residential', label: '🏠 Residential' },
  { value: 'commercial', label: '🏢 Commercial' },
  { value: 'industrial', label: '🏭 Industrial' },
  { value: 'other', label: '📋 Other' },
]

const schema = z.object({
  fullName: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  propertyType: z.string().min(1, 'Please select a property type'),
  sqFt: z.string().optional(),
  notes: z.string().optional(),
})

type FormData = z.infer<typeof schema>

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1200))
    console.log('Form submitted:', data)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Section id="lead-form" className="bg-gradient-to-b from-primary-bg to-secondary-bg/50">
        <Container>
          <div className="max-w-xl mx-auto text-center py-16">
            <div className="w-20 h-20 mx-auto rounded-full bg-success/10 flex items-center justify-center mb-8 border border-success/20">
              <CheckCircle2 size={40} className="text-success" />
            </div>
            <h3 className="text-3xl font-extrabold text-text-primary mb-3">
              You're in the queue.
            </h3>
            <p className="text-text-secondary text-lg mb-6">
              We'll reach out within 2 hours during business hours. Check your email — confirmation sent to <strong className="text-text-primary">{data?.email || 'you'}</strong>.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-text-secondary">
              <span className="flex items-center gap-2">
                <Zap size={14} className="text-accent" /> Free roof assessment
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} className="text-accent" /> 2-hour response time
              </span>
            </div>
          </div>
        </Container>
      </Section>
    )
  }

  return (
    <Section id="lead-form" className="bg-gradient-to-b from-primary-bg to-secondary-bg/50">
      <Container>
        <div className="max-w-xl mx-auto">
          <SectionHeader
            eyebrow="Free Roof Assessment"
            headline="Find Out If Your Roof Is a Candidate"
            subtext="No cost, no obligation. Tell us about your property and we'll tell you exactly what's possible."
            centered
          />

          {/* Urgency / trust signals */}
          <div className="flex flex-wrap justify-center gap-4 mt-6 mb-10">
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Accepting new projects for Summer 2026
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Your Name"
                placeholder="Mike Johnson"
                error={errors.fullName?.message}
                {...register('fullName')}
              />
              <Input
                label="Phone"
                type="tel"
                placeholder="(801) 555-1234"
                error={errors.phone?.message}
                {...register('phone')}
              />
            </div>

            <Input
              label="Email"
              type="email"
              placeholder="mike@company.com"
              error={errors.email?.message}
              {...register('email')}
            />

            <Select
              label="Property Type"
              options={propertyTypes}
              error={errors.propertyType?.message}
              {...register('propertyType')}
            />

            <Input
              label="Approximate Roof Size (sq ft)"
              type="number"
              placeholder="e.g. 2500 — we'll verify in the call"
              {...register('sqFt')}
            />

            <Textarea
              label="Anything else we should know? (optional)"
              placeholder="Roof age, known leaks, previous coatings, access concerns..."
              rows={3}
              {...register('notes')}
            />

            <div className="pt-2">
              <Button type="submit" loading={isSubmitting} className="w-full text-base py-4">
                {isSubmitting ? 'Submitting...' : 'Get My Free Assessment'}
              </Button>
              <p className="text-center text-xs text-text-secondary mt-3">
                No spam. No obligations. Just a straight answer about your roof.
              </p>
            </div>
          </form>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-10 pt-8 border-t border-border/50">
            <div className="text-center">
              <div className="text-accent font-extrabold text-lg">15-Year</div>
              <div className="text-xs text-text-secondary">Warranty</div>
            </div>
            <div className="text-center">
              <div className="text-accent font-extrabold text-lg">0 g/L</div>
              <div className="text-xs text-text-secondary">Zero VOC</div>
            </div>
            <div className="text-center">
              <div className="text-accent font-extrabold text-lg">Class A</div>
              <div className="text-xs text-text-secondary">Fire Rated</div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}