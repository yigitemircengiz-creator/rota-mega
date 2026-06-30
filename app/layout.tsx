import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { LenisProvider } from '@/components/lenis-provider'

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'ROTA MEGA Kent Mobilyaları | Güvenilir Üretim',
  description:
    'Plastik kaydıraklar, çocuk oyun grupları ve kent mobilyalarında kaliteli, dayanıklı ve estetik üretim çözümleri. ROTA MEGA Kent Mobilyaları.',
  generator: 'v0.app',
  icons: {
    icon: '/rota-mega-logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="tr"
      className={`${manrope.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <div id="google_translate_element" style={{ display: 'none' }}></div>
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'tr',
                autoDisplay: false
              }, 'google_translate_element');
            }
          `}
        </Script>
        <LenisProvider>
          {children}
        </LenisProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
