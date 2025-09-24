import React from 'react'

export default function Testimonial({ items }: { items: { quote: string; author?: string }[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {items.map((t, idx) => (
        <blockquote
          key={t.quote + (t.author || idx)}
          className="bg-surface rounded-lg border p-6 shadow-sm"
        >
          <p className="text-base leading-relaxed text-[color:var(--color-foreground-on-surface)] italic sm:text-lg">
            “{t.quote}”
          </p>
          {t.author && <footer className="text-muted mt-3 text-sm">{t.author}</footer>}
        </blockquote>
      ))}
    </div>
  )
}
