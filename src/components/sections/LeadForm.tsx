import { useState } from 'react'
import { CheckCircle2, Zap, Clock, Shield, AlertCircle, ArrowRight, ShoppingCart } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { Select } from '../ui/Select'
import { Textarea } from '../ui/Textarea'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'

const propertyTypes = [
  { value: '', label: 'What type of property?' },
  { value: 'residential', label: 'Residential' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'industrial', label: 'Industrial' },
  { value: 'other', label: 'Other' },
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
      <Section id="lead-form" className="bg-gradient-to-b from-success/5 to-primary-bg">
        <Container>
          <div className="max-w-xl mx-auto text-center py-16">
            <div className="w-20 h-20 mx-auto rounded-full bg-success/10 flex items-center justify-center mb-8 border border-success/20">
              <CheckCircle2 size={40} className="text-success" />
            </div>
            <h3 className="text-3xl font-extrabold text-text-primary mb-3">
              Request Received. Check Your Email.
            </h3>
            <p className="text-text-secondary text-lg mb-6">
              We've sent confirmation to your inbox. A roof specialist will reach out within 2 business hours.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-text-secondary">
              <span className="flex items-center gap-2">
                <Zap size={14} className="text-accent" /> Free roof assessment
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} className="text-accent" /> 2-hour response time
              </span>
            </div>
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-text-secondary mb-3">Need to order now?</p>
              <a
                href="https://www.amazon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold transition-colors"
              >
                <ShoppingCart size={16} />
                Buy on Amazon — Prime shipping available
              </a>
            </div>
          </div>
        </Container>
      </Section>
    )
  }

  return (
    <Section id="lead-form" className="bg-gradient-to-b from-secondary-bg to-primary-bg relative overflow-hidden">
      {/* Dominant accent glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,194,255,0.06),transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-success to-accent" />

      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-4">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-sm text-accent font-medium">Accepting Summer 2026 Projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
              Get Your Free Roof Assessment
            </h2>
            <p className="text-lg text-text-secondary mt-3">
              Find out if your roof is a candidate for restoration — before you spend a dime.
            </p>
          </div>

          {/* Value props above the form */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-3 bg-primary-bg/80 rounded-xl px-4 py-3 border border-border/50">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Zap size={18} className="text-accent" />
              </div>
              <div>
                <div className="text-sm font-semibold text-text-primary">100% Free</div>
                <div className="text-xs text-text-secondary">No cost, no obligation</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-primary-bg/80 rounded-xl px-4 py-3 border border-border/50">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Clock size={18} className="text-accent" />
              </div>
              <div>
                <div className="text-sm font-semibold text-text-primary">2-Hour Response</div>
                <div className="text-xs text-text-secondary">During business hours</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-primary-bg/80 rounded-xl px-4 py-3 border border-border/50">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Shield size={18} className="text-accent" />
              </div>
              <div>
                <div className="text-sm font-semibold text-text-primary">Honest Answer</div>
                <div className="text-xs text-text-secondary">We'll tell you straight</div>
              </div>
            </div>
          </div>

          {/* The form — visually dominant */}
          <div className="bg-secondary-bg border-2 border-accent/20 rounded-2xl p-6 sm:p-8 shadow-[0_0_60px_rgba(0,194,255,0.08)]">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                placeholder="e.g. 2500 — we'll verify on the call"
                {...register('sqFt')}
              />

              <Textarea
                label="Anything else we should know? (optional)"
                placeholder="Roof age, known leaks, previous coatings, access concerns..."
                rows={3}
                {...register('notes')}
              />

              <div className="pt-2 space-y-3">
                <Button type="submit" loading={isSubmitting} className="w-full text-base py-4">
                  {isSubmitting ? (
                    'Submitting...'
                  ) : (
                    <>
                      Get My Free Assessment
                      <ArrowRight size={16} className="ml-2" />
                    </>
                  )}
                </Button>
                <p className="text-center text-xs text-text-secondary">
                  No spam. No obligations. Just a straight answer about your roof.
                </p>
              </div>
            </form>
          </div>

          {/* Trust badges below form */}
          <div className="flex flex-wrap justify-center gap-8 mt-8 pt-8 border-t border-border/50">
            <div className="text-center">
              <div className="text-accent font-extrabold text-xl">15-Year</div>
              <div className="text-xs text-text-secondary mt-0.5">Warranty</div>
            </div>
            <div className="text-center">
              <div className="text-accent font-extrabold text-xl">0 g/L</div>
              <div className="text-xs text-text-secondary mt-0.5">Zero VOC</div>
            </div>
            <div className="text-center">
              <div className="text-accent font-extrabold text-xl">Class A</div>
              <div className="text-xs text-text-secondary mt-0.5">Fire Rated</div>
            </div>
            <div className="text-center">
              <div className="text-accent font-extrabold text-xl">200</div>
              <div className="text-xs text-text-secondary mt-0.5">sq ft/gal coverage</div>
            </div>
          </div>

          {/* Urgency note */}
          <div className="text-center mt-6">
            <div className="inline-flex items-center gap-2 text-sm text-warning/80">
              <AlertCircle size={14} />
              Summer is peak season — availability is limited. Book early to secure your spot.
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}