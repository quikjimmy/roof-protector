import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Package, Users, ShieldCheck, Flame } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { Select } from '../ui/Select'
import { Textarea } from '../ui/Textarea'

const diySchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  roofSize: z.string().min(1, 'Please estimate your roof size'),
  notes: z.string().optional(),
})

const installerSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  propertyType: z.string().min(1, 'Please select a property type'),
  zipCode: z.string().min(5, 'ZIP code is required'),
  notes: z.string().optional(),
})

type DIYForm = z.infer<typeof diySchema>
type InstallerForm = z.infer<typeof installerSchema>

const propertyTypes = [
  { value: '', label: 'Select property type...' },
  { value: 'single-family', label: 'Single-family home' },
  { value: 'townhome', label: 'Townhome' },
  { value: 'multi-family', label: 'Multi-family / duplex' },
  { value: 'commercial', label: 'Light commercial' },
]

export function LeadForm() {
  const [track, setTrack] = useState<'diy' | 'installer'>('diy')
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const diyForm = useForm<DIYForm>({
    resolver: zodResolver(diySchema),
    defaultValues: { name: '', email: '', phone: '', roofSize: '', notes: '' },
  })

  const installerForm = useForm<InstallerForm>({
    resolver: zodResolver(installerSchema),
    defaultValues: { name: '', email: '', phone: '', propertyType: '', zipCode: '', notes: '' },
  })

  const onSubmit = async (data: DIYForm | InstallerForm) => {
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log('Form submitted:', { track, ...data })
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <Section id="lead-form" className="bg-gradient-to-b from-primary-bg to-secondary-bg/30">
      <Container>
        <SectionHeader
          eyebrow="Get Started"
          headline={track === 'diy' ? 'Buy Roof Protector' : 'Find a Certified Installer'}
          subtext={track === 'diy' 
            ? 'Want to DIY it? Tell us your roof size and we\'ll get you a quote.' 
            : 'Prefer a professional application? We\'ll connect you with a certified installer near you.'}
          centered
        />

        {/* Track selector */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="flex rounded-xl bg-secondary-bg border border-border p-1">
            <button
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-semibold transition-all ${
                track === 'diy'
                  ? 'bg-accent text-primary-bg'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
              onClick={() => { setTrack('diy'); setSubmitted(false) }}
            >
              <Package size={16} />
              DIY Purchase
            </button>
            <button
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-semibold transition-all ${
                track === 'installer'
                  ? 'bg-accent text-primary-bg'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
              onClick={() => { setTrack('installer'); setSubmitted(false) }}
            >
              <Users size={16} />
              Find Installer
            </button>
          </div>
        </div>

        {submitted ? (
          <div className="mt-10 max-w-lg mx-auto text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-success/10 border border-success/30 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-success" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-2">We've got your info.</h3>
            <p className="text-text-secondary">
              {track === 'diy' 
                ? 'We\'ll reach out with a quote based on your roof size. Usually within 24 hours.'
                : 'We\'ll match you with a certified installer in your area. Expect a call within 48 hours.'}
            </p>
          </div>
        ) : (
          <div className="mt-10 max-w-lg mx-auto">
            {track === 'diy' ? (
              <form onSubmit={diyForm.handleSubmit(onSubmit)} className="space-y-4">
                <Input
                  label="Full Name *"
                  placeholder="John Smith"
                  error={diyForm.formState.errors.name?.message}
                  {...diyForm.register('name')}
                />
                <Input
                  label="Email *"
                  type="email"
                  placeholder="john@example.com"
                  error={diyForm.formState.errors.email?.message}
                  {...diyForm.register('email')}
                />
                <Input
                  label="Phone (optional)"
                  type="tel"
                  placeholder="(801) 555-1234"
                  {...diyForm.register('phone')}
                />
                <Input
                  label="Approximate Roof Size (sq ft) *"
                  placeholder="e.g. 2000"
                  error={diyForm.formState.errors.roofSize?.message}
                  {...diyForm.register('roofSize')}
                />
                <Textarea
                  label="Anything else? (optional)"
                  placeholder="Roof age, known issues, previous coatings..."
                  rows={3}
                  {...diyForm.register('notes')}
                />
                <Button type="submit" loading={isSubmitting} className="w-full text-base py-4">
                  {!isSubmitting && <>Get a Quote <ArrowRight size={16} className="ml-2" /></>}
                </Button>
                <p className="text-center text-xs text-text-secondary">No spam. No obligations. Just a quote.</p>
              </form>
            ) : (
              <form onSubmit={installerForm.handleSubmit(onSubmit)} className="space-y-4">
                <Input
                  label="Full Name *"
                  placeholder="John Smith"
                  error={installerForm.formState.errors.name?.message}
                  {...installerForm.register('name')}
                />
                <Input
                  label="Email *"
                  type="email"
                  placeholder="john@example.com"
                  error={installerForm.formState.errors.email?.message}
                  {...installerForm.register('email')}
                />
                <Input
                  label="Phone (optional)"
                  type="tel"
                  placeholder="(801) 555-1234"
                  {...installerForm.register('phone')}
                />
                <Select
                  label="Property Type *"
                  options={propertyTypes}
                  error={installerForm.formState.errors.propertyType?.message}
                  {...installerForm.register('propertyType')}
                />
                <Input
                  label="ZIP Code *"
                  placeholder="84101"
                  error={installerForm.formState.errors.zipCode?.message}
                  {...installerForm.register('zipCode')}
                />
                <Textarea
                  label="Anything else? (optional)"
                  placeholder="Roof age, known issues, access concerns..."
                  rows={3}
                  {...installerForm.register('notes')}
                />
                <Button type="submit" loading={isSubmitting} className="w-full text-base py-4">
                  {!isSubmitting && <>Find My Installer <ArrowRight size={16} className="ml-2" /></>}
                </Button>
                <p className="text-center text-xs text-text-secondary">We'll match you with a certified installer near you.</p>
              </form>
            )}
          </div>
        )}

        {/* Trust badges below form */}
        <div className="mt-10 max-w-lg mx-auto">
          <div className="flex flex-wrap justify-center gap-6 pt-8 border-t border-border/50">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <Flame size={14} className="text-accent" />
                <div className="text-accent font-mono font-extrabold text-lg">Class A</div>
              </div>
              <div className="text-[10px] text-text-secondary mt-0.5">ASTM E84 Fire Rating</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <ShieldCheck size={14} className="text-success" />
                <div className="text-success font-mono font-extrabold text-lg">15-Year</div>
              </div>
              <div className="text-[10px] text-text-secondary mt-0.5">Limited Warranty</div>
            </div>
            <div className="text-center">
              <div className="text-accent font-mono font-extrabold text-lg">&lt;50 g/L</div>
              <div className="text-[10px] text-text-secondary mt-0.5">VOC Content</div>
            </div>
            <div className="text-center">
              <div className="text-text-primary font-mono font-extrabold text-lg">100–200</div>
              <div className="text-[10px] text-text-secondary mt-0.5">sq ft/gal Coverage</div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}