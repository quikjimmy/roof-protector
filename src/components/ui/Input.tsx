import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label className="text-sm font-medium text-text-secondary">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`
            bg-primary-bg border border-border rounded-lg px-4 py-3 text-text-primary
            placeholder:text-text-secondary
            focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(0,194,255,0.1)]
            transition-all duration-150
            ${error ? 'border-red-500' : ''}
            ${className}
          `}
          {...props}
        />
        {error && (
          <span className="text-sm text-red-500">{error}</span>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'
