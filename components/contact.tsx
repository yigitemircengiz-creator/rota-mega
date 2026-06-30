'use client'

import { Reveal } from '@/components/reveal'
import { MapPin, Phone, Mail } from 'lucide-react'

const info = [
  {
    icon: MapPin,
    label: 'Adres',
    value: 'Saray, 1. Cd. Keresteciler Sanayi Sitesi no:2, 06980 Kahramankazan/Ankara',
  },
  { icon: Phone, label: 'Telefon', value: <>0 542 549 98 15<br />0 532 647 57 53</> },
  { icon: Mail, label: 'E-posta', value: 'info@rotamega.com.tr' },
]

export function Contact() {
  return (
    <section id="iletisim" className="bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-lg font-bold uppercase tracking-widest text-primary">
              İletişim
            </span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Projeniz için bize ulaşın
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Sorularınız ve talepleriniz için aşağıdaki iletişim bilgilerimizden bize ulaşabilir veya harita üzerinden konumumuzu inceleyebilirsiniz.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Left: Firma Bilgileri */}
          <Reveal>
            <div className="flex h-full flex-col justify-center rounded-2xl border border-border bg-card p-8 lg:p-12">
              <h3 className="font-heading text-2xl font-bold text-foreground">
                Firma Bilgileri
              </h3>
              <ul className="mt-8 space-y-6">
                {info.map((item) => (
                  <li key={item.label} className="flex gap-5">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-base font-semibold text-foreground">
                        {item.label}
                      </div>
                      <div className="mt-1 text-base leading-relaxed text-muted-foreground">
                        {item.value}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Right: Google Maps */}
          <Reveal delay={0.1}>
            <div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-2xl border border-border bg-muted">
              <iframe
                title="Google Haritalar"
                src="https://maps.google.com/maps?q=ROTOMEGA%20KENT%20MOB%C4%B0LYALARI%20ROTASYON%20PLAST%C4%B0K%20%C4%B0MALAT%20LTD.%20%C5%9ET%C4%B0.&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="absolute"
                style={{
                  top: '-200px',
                  left: '0',
                  width: '100%',
                  height: 'calc(100% + 200px)',
                  border: 0,
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
