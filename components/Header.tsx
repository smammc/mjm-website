'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Button from '@/components/Button'
import { clsx } from 'clsx'

const nav = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#areas', label: 'Áreas' },
  { href: '#processo', label: 'Como Funciona' },
  { href: '#grupo', label: 'Grupo' },
  { href: '#contactos', label: 'Contactos' },
  { href: '/blog', label: 'Blog' }, // Added Blog link
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="w-full bg-white">
       <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="flex h-16 items-center border-b border-slate-200 w-full justify-between">
          {/* Left: Logo/Brand */}
          <div className="flex-1 flex items-center min-w-0">
            <Link href="/" className="font-semibold whitespace-pre-line leading-tight truncate">
              Maria João Martins
              {'\n'}<span className="opacity-70">| Psicóloga</span>
            </Link>
          </div>

          {/* Center: Navigation */}
          <nav className="flex-1 hidden md:flex justify-center gap-6">
            {nav.map((n) => (
              <div key={n.href} className="flex items-center justify-center text-center">
                <a
                  href={n.href}
                  className={clsx(
                    'text-sm transition hover:text-white',
                    'hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-accent duration-200',
                    'text-[color:var(--color-primary)]',
                    pathname === n.href && 'text-white',
                  )}
                  style={{ width: '100%' }}
                >
                  {n.label}
                </a>
              </div>
            ))}
          </nav>

          {/* Right: Button */}
          <div className="flex-1 flex justify-end items-center min-w-0">
            <Button href="/marcar" variant="ghost">
              Marcar Consulta
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
