'use client'

import { Phone, Mail } from 'lucide-react'
import type { SVGProps } from 'react'

const navItems = [
  { label: 'Ana Sayfa', href: '#hero' },
  { label: 'Hakkımızda', href: '#hakkimizda' },
  { label: 'Ürünler', href: '#urunler' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'İletişim', href: '#iletisim' },
]

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}


export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <img
              src="/rota-mega-logo.png"
              alt="ROTA MEGA Kent Mobilyaları"
              className="h-12 w-auto"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Plastik kaydıraklar ve çocuk oyun gruplarında kaliteli, dayanıklı
              ve estetik üretim çözümleri sunan güvenilir üretim firması.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <InstagramIcon className="h-5 w-5 text-muted-foreground" />
              <a
                href="https://instagram.com/roto.mega"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                roto.mega
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground">
              Hızlı Menü
            </h4>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground">
              İletişim
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-primary" />
                0 542 549 98 15
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-primary" />
                0 532 647 57 53
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-primary" />
                info@rotamega.com.tr
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ROTA MEGA Kent Mobilyaları. Tüm hakları
            saklıdır.
          </p>
          <p className="text-sm text-muted-foreground">
            Kalite &amp; Güven ile üretim.
          </p>
        </div>
      </div>
    </footer>
  )
}
