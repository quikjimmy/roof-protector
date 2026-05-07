import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`
        bg-secondary-bg border border-border rounded-xl p-6
        ${hover ? 'transition-all duration-150 hover:border-accent/40 hover:brightness-110' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
