'use client'

import { Reveal } from '@/components/reveal'
import { PencilRuler, Cog, SearchCheck, PackageCheck } from 'lucide-react'

const steps = [
  {
    icon: PencilRuler,
    number: '01',
    title: 'Tasarım',
    description:
      'İhtiyaçlarınıza özel konsept ve teknik tasarımların hazırlanması.',
  },
  {
    icon: Cog,
    number: '02',
    title: 'Üretim',
    description:
      'Modern makine parkuru ile dayanıklı malzemelerden hassas üretim.',
  },
  {
    icon: SearchCheck,
    number: '03',
    title: 'Kalite Kontrol',
    description:
      'Güvenlik ve dayanıklılık testleriyle her ürünün titizlikle denetimi.',
  },
  {
    icon: PackageCheck,
    number: '04',
    title: 'Teslimat',
    description:
      'Zamanında, güvenli paketleme ve kurulum desteğiyle teslimat.',
  },
]

export function Process() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-lg font-bold uppercase tracking-widest text-primary">
              Üretim Süreci
            </span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Fikirden teslimata 4 adım
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Her projeyi şeffaf ve planlı bir süreçle hayata geçiriyoruz.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-16">
          {/* Connecting line (desktop) */}
          <div
            className="absolute left-0 right-0 top-7 hidden h-px bg-border lg:block"
            aria-hidden="true"
          />
          <div className="grid gap-8 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.1}>
                <div className="relative flex flex-col items-start">
                  <div className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/25">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="font-mono text-sm font-semibold text-primary">
                      {step.number}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
