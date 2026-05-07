import { SelectHTMLAttributes, forwardRef } from 'react'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  options: { value: string; label: string }[]
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label className="text-sm font-medium text-text-secondary">
            {label}
          </label>
        )}
        <select
          ref={ref}
          className={`
            bg-primary-bg border border-border rounded-lg px-4 py-3 text-text-primary
            focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(0,194,255,0.1)]
            transition-all duration-150 cursor-pointer
            ${error ? 'border-red-500' : ''}
            ${className}
          `}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && (
          <span className="text-sm text-red-500">{error}</span>
        )}
      </div>
    )
  }
)
Select.displayName = 'Select'
