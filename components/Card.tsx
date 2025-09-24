import React from 'react'
import { clsx } from 'clsx'

type CardProps = {
  title: string
  subtitle?: string
  children?: React.ReactNode
  className?: string
  icon?: React.ReactNode
}

export default function Card({ title, subtitle, children, className, icon }: CardProps) {
  return (
    <div
      className={clsx(
        'group bg-surface border-border relative overflow-hidden rounded-2xl border shadow-sm',
        'transition hover:-translate-y-[1px] hover:shadow-md',
        className,
      )}
    >
      <div className="p-5 sm:p-6">
        <div className="flex items-start gap-3">
          {icon && (
            <div className="bg-primary/5 text-primary mt-1 inline-flex h-9 w-9 items-center justify-center rounded-xl">
              {icon}
            </div>
          )}
          <div>
            <h3 className="text-base font-semibold text-slate-800">{title}</h3>
            {subtitle && <p className="mt-0.5 text-sm text-slate-500">{subtitle}</p>}
          </div>
        </div>
        {children && <div className="mt-4 text-slate-700">{children}</div>}
      </div>
      {/* subtle accent line on hover */}
      <div className="bg-accent/0 group-hover:bg-accent/70 absolute inset-x-0 bottom-0 h-[3px] transition" />
    </div>
  )
}
