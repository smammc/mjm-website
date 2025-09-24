import './globals.css'
import { Poppins } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const lang = 'pt-PT'
  return (
    <html lang={lang}>
      <body className={`${poppins.className} bg-surface text-foreground`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
