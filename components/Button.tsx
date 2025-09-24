import Link from 'next/link'
import { clsx } from 'clsx'
import React from 'react'

interface ButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'ghost' | 'solid' | 'surface'
  className?: string
}

export default function Button({ href, children, variant = 'solid', className = '' }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
  const solid = 'bg-primary text-primary-foreground border-primary hover:bg-primary-700'
  const ghost = 'border border-primary text-primary bg-transparent hover:bg-primary/10'
  const surface = 'button-surface'

  const classes = [
    base,
    variant === 'ghost' ? ghost : variant === 'surface' ? surface : solid,
    className
  ].filter(Boolean).join(' ')

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  )
}
