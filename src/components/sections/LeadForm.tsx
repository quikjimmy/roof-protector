import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
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
  { value: '', label: 'Select property type' },
  { value: 'residential', label: 'Residential' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'industrial', label: 'Industrial' },
  { value: 'other', label: 'Other' },
]

const schema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
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
    // Simulate submission - in production this would POST to an endpoint
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log('Form submitted:', data)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Section id="lead-form" className="bg-secondary-bg/50">
        <Container>
          <div className="max-w-xl mx-auto text-center py-12">
            <div className="w-16 h-16 mx-auto rounded-full bg-success/10 flex items-center justify-center mb-6">
              <CheckCircle2 size={32} className="text-success" />
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-2">Quote Request Received</h3>
            <p className="text-text-secondary">
              Thanks for your interest in Roof Protector. Our team will reach out within 1 business day to discuss your project.
            </p>
          </div>
        </Container>
      </Section>
    )
  }

  return (
    <Section id="lead-form" className="bg-secondary-bg/50">
      <Container>
        <div className="max-w-xl mx-auto">
          <SectionHeader
            eyebrow="Get a Quote"
            headline="Request a Roof Assessment"
            subtext="Fill out the form below and we'll get back to you within 1 business day."
            centered
          />

          <form onSubmit={handleSubmit(onSubmit)} className="mt-12 space-y-6">
            <Input
              label="Full Name"
              placeholder="John Smith"
              error={errors.fullName?.message}
              {...register('fullName')}
            />

            <Input
              label="Email"
              type="email"
              placeholder="john@example.com"
              error={errors.email?.message}
              {...register('email')}
            />

            <Input
              label="Phone (Optional)"
              type="tel"
              placeholder="(555) 123-4567"
              {...register('phone')}
            />

            <Select
              label="Property Type"
              options={propertyTypes}
              error={errors.propertyType?.message}
              {...register('propertyType')}
            />

            <Input
              label="Estimated Sq Ft (Optional)"
              type="number"
              placeholder="2000"
              {...register('sqFt')}
            />

            <Textarea
              label="Notes (Optional)"
              placeholder="Tell us about your roof: age, condition, any specific concerns..."
              rows={4}
              {...register('notes')}
            />

            <Button type="submit" loading={isSubmitting} className="w-full text-base">
              {isSubmitting ? 'Submitting...' : 'Request Quote'}
            </Button>
          </form>
        </div>
      </Container>
    </Section>
  )
}
