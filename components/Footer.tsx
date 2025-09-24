import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-200 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="py-10">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Consultas</h4>
              <p className="mt-2 text-sm text-slate-600">
                Presenciais em Lisboa e online. Ambiente seguro, confidencial e empático.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Contactos</h4>
              <ul className="mt-2 space-y-1 text-sm text-slate-600">
                <li>
                  <a
                    href="mailto:maria.gouveia.martins@psicologia.pt"
                    className="hover:underline hover:text-primary"
                  >
                    maria.gouveia.martins@psicologia.pt
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Navegação</h4>
              <ul className="mt-2 space-y-1 text-sm text-slate-600">
                <li>
                  <a href="#sobre" className="hover:underline hover:text-primary">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#areas" className="hover:underline hover:text-primary">
                    Áreas
                  </a>
                </li>
                <li>
                  <a href="#processo" className="hover:underline hover:text-primary">
                    Como Funciona
                  </a>
                </li>
                <li>
                  <a href="#contactos" className="hover:underline hover:text-primary">
                    Contactos
                  </a>
                </li>
                <li>
                  <Link href="/blog" className="hover:underline hover:text-primary">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col items-center justify-between gap-3 text-xs text-slate-500 sm:flex-row">
            <p>
              © {new Date().getFullYear()} Maria João Martins | Psicóloga — Todos os direitos reservados
            </p>
            <p>
              Cédula Profissional n.º 9990 ·{' '}
              <Link href="/privacidade" className="hover:underline hover:text-primary">
                Política de Privacidade
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}