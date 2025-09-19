'use client'

export default function Card({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="text-base font-semibold sm:text-lg">{title}</h3>
      {children && <div className="mt-2 text-sm text-slate-700">{children}</div>}
    </div>
  )
}
