'use client'

interface SectionProps {
  id?: string
  title?: string
  children: React.ReactNode
  className?: string
  titleClassName?: string
}

export default function Section({
  id,
  title,
  children,
  className = '',
  titleClassName = '',
}: SectionProps) {
  const sectionClass = ['mx-auto max-w-6xl px-4 py-12 sm:px-6 md:px-8 lg:py-20', className]
    .filter(Boolean)
    .join(' ')
  const headingClass = ['mb-8 text-3xl font-semibold sm:text-4xl', titleClassName]
    .filter(Boolean)
    .join(' ')

  return (
    <section id={id} className={sectionClass}>
      {title && <h2 className={headingClass}>{title}</h2>}
      {children}
    </section>
  )
}
