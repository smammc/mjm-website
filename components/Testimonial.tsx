'use client'

type Testimonial = {
  quote: string
  author?: string
}

export default function Testimonial({ items }: { items: Testimonial[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {items.map((t, index) => (
        <blockquote key={index} className="rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-base leading-relaxed italic sm:text-lg">“{t.quote}”</p>
          {t.author && (
            <footer className="mt-3 text-sm text-slate-600">— {t.author}</footer>
          )}
        </blockquote>
      ))}
    </div>
  )
}
