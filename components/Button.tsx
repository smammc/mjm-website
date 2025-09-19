'use client'

import Link from 'next/link'

interface ButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'ghost' | 'solid'
  className?: string
}

export default function Button({ href, children, variant = 'solid', className = '' }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
  const solid = 'bg-[#137DC7] border-[#137DC7] text-white hover:opacity-90 focus-visible:outline-white'
  const ghost = 'bg-white border-slate-300 text-slate-900 hover:bg-slate-50 focus-visible:outline-[#137DC7]'

  const classes = [base, variant === 'ghost' ? ghost : solid, className].filter(Boolean).join(' ')

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  )
}
