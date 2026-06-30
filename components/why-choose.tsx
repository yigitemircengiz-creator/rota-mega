'use client'

import { Reveal } from '@/components/reveal'
import {
  ShieldCheck,
  SearchCheck,
  Timer,
  HeartHandshake,
} from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Dayanıklı Malzeme',
    description:
      'UV dayanımlı, darbeye ve hava koşullarına dirençli birinci sınıf hammadde.',
  },
  {
    icon: SearchCheck,
    title: 'Kalite Kontrol',
    description:
      'Her ürün, sevkiyat öncesi titiz güvenlik ve kalite testlerinden geçer.',
  },
  {
    icon: Timer,
    title: 'Uzun Ömürlü Ürünler',
    description:
      'Yıllarca sorunsuz kullanım sunan, düşük bakım maliyetli çözümler.',
  },
  {
    icon: HeartHandshake,
    title: 'Müşteri Memnuniyeti',
    description:
      'Satış öncesi ve sonrası kesintisiz destek ile yanınızdayız.',
  },
]

export function WhyChoose() {
  return (
    <section 
      className="relative py-16 sm:py-20 lg:py-28 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/Gemini_Generated_Image_3x3ws73x3ws73x3w.png')" }}
    >
      <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-lg font-bold uppercase tracking-widest text-primary">
              Neden Biz?
            </span>
            <h2 className="mt-4 text-balance font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Bizi farklı kılan değerler
            </h2>
            <p className="mt-4 text-pretty text-base font-medium leading-relaxed text-black sm:text-lg">
              Kalite, güven ve estetiği bir araya getiren üretim anlayışımız.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:gap-8">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.06}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-foreground/5 sm:p-8 lg:p-10">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
