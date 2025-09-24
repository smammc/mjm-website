import React from 'react'
import { clsx } from 'clsx'

type SectionProps = {
  id?: string
  title?: string
  kicker?: string
  children: React.ReactNode
  className?: string
  density?: 'compact' | 'normal' | 'comfortable'
  divider?: boolean
}

const densityMap = {
  compact: 'py-8 sm:py-10',
  normal: 'py-12 sm:py-16',
  comfortable: 'py-16 sm:py-20',
}

export default function Section({
  id,
  title,
  kicker,
  children,
  className,
  density = 'normal',
  divider = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        'mx-auto max-w-6xl px-4 sm:px-6 md:px-8',
        densityMap[density],
        divider && 'border-b border-slate-200',
        className,
      )}
    >
      {title && (
        <header className="mb-6">
          {kicker && (
            <div className="text-primary/80 text-xs font-semibold tracking-wide uppercase">
              {kicker}
            </div>
          )}
          <h2 className="text-xl font-semibold text-primary-600 sm:text-2xl">{title}</h2>
          <div className="bg-primary/20 mt-2 h-[3px] w-16 rounded-full" />
        </header>
      )}
      <div className="text-slate-700">{children}</div>
    </section>
  )
}
