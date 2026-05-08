import { useState } from 'react'
import { CheckCircle2, MapPin, Star, ArrowRight } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'

const schema = z.object({
  fullName: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  zipCode: z.string().min(5, 'Please enter a valid ZIP code'),
  propertyType: z.string().min(1, 'Please select a property type'),
  notes: z.string().optional(),
})

type FormData = z.infer<typeof schema>

const propertyTypes = [
  { value: '', label: 'Property type' },
  { value: 'single-family', label: 'Single Family Home' },
  { value: 'townhouse', label: 'Townhouse' },
  { value: 'condo', label: 'Condo' },
  { value: 'other', label: 'Other' },
]

export function InstallerForm() {
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
    console.log('Installer lead submitted:', data)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Section id="installer-form" className="bg-gradient-to-b from-accent/5 to-primary-bg">
        <Container>
          <div className="max-w-xl mx-auto text-center py-16">
            <div className="w-20 h-20 mx-auto rounded-full bg-success/10 flex items-center justify-center mb-8 border border-success/20">
              <CheckCircle2 size={40} className="text-success" />
            </div>
            <h3 className="text-3xl font-extrabold text-text-primary mb-3">
              You're on the List
            </h3>
            <p className="text-text-secondary text-lg mb-6">
              We've received your request and will match you with a certified installer in your area within 1–2 business days.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-text-secondary">
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-accent" /> Local certified pro
              </span>
              <span className="flex items-center gap-2">
                <Star size={14} className="text-accent" /> Trained on Roof Protector
              </span>
            </div>
          </div>
        </Container>
      </Section>
    )
  }

  return (
    <Section id="installer-form" className="bg-gradient-to-b from-secondary-bg to-primary-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,194,255,0.05),transparent_60%)]" />

      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-success/20 bg-success/5 mb-4">
              <span className="w-2 h-2 rounded-full bg-success" />
              <span className="text-sm text-success font-medium">Certified Installer Network</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
              Find a Certified Roof Protector Installer
            </h2>
            <p className="text-lg text-text-secondary mt-3">
              Our certified installers are trained specifically on Roof Protector application. They'll give you an honest assessment and a firm quote.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-3 bg-primary-bg/80 rounded-xl px-4 py-3 border border-border/50">
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                <Star size={18} className="text-success" />
              </div>
              <div>
                <div className="text-sm font-semibold text-text-primary">Certified Pros</div>
                <div className="text-xs text-text-secondary">Trained on Roof Protector</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-primary-bg/80 rounded-xl px-4 py-3 border border-border/50">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-accent" />
              </div>
              <div>
                <div className="text-sm font-semibold text-text-primary">Local to You</div>
                <div className="text-xs text-text-secondary">Matched by ZIP code</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-primary-bg/80 rounded-xl px-4 py-3 border border-border/50">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={18} className="text-accent" />
              </div>
              <div>
                <div className="text-sm font-semibold text-text-primary">Free Quotes</div>
                <div className="text-xs text-text-secondary">No obligation</div>
              </div>
            </div>
          </div>

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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="ZIP Code"
                  placeholder="e.g. 84003"
                  error={errors.zipCode?.message}
                  {...register('zipCode')}
                />
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-text-secondary">Property Type</label>
                  <select
                    className="bg-primary-bg border border-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(0,194,255,0.1)] transition-all duration-150 cursor-pointer"
                    {...register('propertyType')}
                  >
                    {propertyTypes.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.propertyType && (
                    <span className="text-sm text-red-500">{errors.propertyType.message}</span>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-text-secondary">Anything else we should know? (optional)</label>
                <textarea
                  className="bg-primary-bg border border-border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-secondary resize-none focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(0,194,255,0.1)] transition-all duration-150"
                  placeholder="Known issues, access concerns, questions..."
                  rows={3}
                  {...register('notes')}
                />
              </div>

              <div className="pt-2 space-y-3">
                <Button type="submit" loading={isSubmitting} className="w-full text-base py-4">
                  {isSubmitting ? (
                    'Submitting...'
                  ) : (
                    <>
                      Find My Certified Installer
                      <ArrowRight size={16} className="ml-2" />
                    </>
                  )}
                </Button>
                <p className="text-center text-xs text-text-secondary">
                  Your information is only used to match you with a local certified installer.
                </p>
              </div>
            </form>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-8 pt-8 border-t border-border/50">
            <div className="text-center">
              <div className="text-success font-extrabold text-xl">Trained</div>
              <div className="text-xs text-text-secondary mt-0.5">Roof Protector Certified</div>
            </div>
            <div className="text-center">
              <div className="text-success font-extrabold text-xl">Free</div>
              <div className="text-xs text-text-secondary mt-0.5">No-obligation quotes</div>
            </div>
            <div className="text-center">
              <div className="text-accent font-extrabold text-xl">Local</div>
              <div className="text-xs text-text-secondary mt-0.5">Matched by your ZIP</div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}