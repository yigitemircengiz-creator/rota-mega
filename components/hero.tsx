'use client'

import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Background image — replace /hero-playground.png with a real photo later */}
      <div className="absolute inset-0">
        <img
          src="/hero-playground.png"
          alt="Modern çocuk oyun parkı ve kaydırak"
          className="h-full w-full object-cover object-center"
        />
        {/* Stronger vertical overlay on mobile for legibility, horizontal on desktop */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/75 via-foreground/55 to-foreground/65 sm:bg-gradient-to-r sm:from-foreground/80 sm:via-foreground/55 sm:to-foreground/20" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center rounded-full border border-background/25 bg-background/10 px-3.5 py-1.5 text-xs font-medium text-background backdrop-blur-sm sm:px-4 sm:text-sm"
          >
            Kent Mobilyaları &amp; Oyun Grupları Üreticisi
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="mt-5 text-balance font-heading text-[2rem] font-extrabold leading-[1.08] tracking-tight text-background sm:mt-6 sm:text-5xl sm:leading-[1.05] lg:text-6xl"
          >
            Kent Mobilyalarında Güvenilir Üretim
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease }}
            className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-background/85 sm:mt-6 sm:text-lg"
          >
            Plastik kaydıraklar, çocuk oyun grupları ve kent mobilyalarında
            kaliteli, dayanıklı ve estetik üretim çözümleri sunuyoruz.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34, ease }}
            className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4"
          >
            <a
              href="#urunler"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40 sm:w-auto"
            >
              Kategorileri İncele
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#iletisim"
              className="inline-flex w-full items-center justify-center rounded-full border border-background/30 bg-background/10 px-7 py-3.5 text-base font-semibold text-background backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-background/20 sm:w-auto"
            >
              İletişime Geç
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
