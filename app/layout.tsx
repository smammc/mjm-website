import './globals.css'
import { Poppins } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { LanguageProvider } from '@/components/LanguageProvider'
import { translations, locales } from '@/lib/translations'
import type { Metadata } from 'next'

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600'] })

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = locales.includes(params?.locale as any) ? params.locale : 'pt'
  const t = translations[locale as keyof typeof translations]
  const title = t.header.brand
  let description = t.home.hero.subtitle
  if (locale === 'pt') {
    description = description.replace('Lisboa', 'Lisboa')
  }
  const url = 'https://www.mariajoaomartins.com/'
  const image = '/public/file.svg'
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        'pt-PT': url,
        'en': url + 'en',
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: title,
      locale: locale === 'pt' ? 'pt_PT' : 'en_US',
      type: 'website',
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Default to pt-PT if not using i18n routing
  const lang = 'pt-PT'
  return (
    <html lang={lang}>
      <body className={`${poppins.className} bg-white text-slate-900`}>
        <LanguageProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
