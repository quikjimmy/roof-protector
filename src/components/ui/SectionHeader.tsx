interface SectionHeaderProps {
  eyebrow?: string
  headline: string
  subtext?: string
  centered?: boolean
}

export function SectionHeader({ eyebrow, headline, subtext, centered = false }: SectionHeaderProps) {
  return (
    <div className={`max-w-[600px] ${centered ? 'text-center mx-auto' : ''}`}>
      {eyebrow && (
        <span className="text-xs uppercase tracking-[0.15em] text-accent font-semibold">
          {eyebrow}
        </span>
      )}
      <h2 className="text-[40px] font-extrabold tracking-tight text-text-primary mt-2 leading-tight [-webkit-text-stroke:0.025em]">
        {headline}
      </h2>
      {subtext && (
        <p className="text-lg text-text-secondary mt-4 leading-relaxed">
          {subtext}
        </p>
      )}
    </div>
  )
}
