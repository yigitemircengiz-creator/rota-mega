'use client'

import { Reveal } from '@/components/reveal'

/**
 * Galeri görselleri — placeholder'ları gerçek proje ve fabrika
 * fotoğraflarıyla değiştirin. Farklı yükseklikler masonry görünümü sağlar.
 */
const images = [
  { src: '/placeholder.svg?height=900&width=720', alt: 'Proje görseli 1' },
  { src: '/placeholder.svg?height=600&width=720', alt: 'Proje görseli 2' },
  { src: '/placeholder.svg?height=760&width=720', alt: 'Proje görseli 3' },
  { src: '/placeholder.svg?height=560&width=720', alt: 'Proje görseli 4' },
  { src: '/placeholder.svg?height=860&width=720', alt: 'Proje görseli 5' },
  { src: '/placeholder.svg?height=640&width=720', alt: 'Proje görseli 6' },
  { src: '/placeholder.svg?height=720&width=720', alt: 'Proje görseli 7' },
  { src: '/placeholder.svg?height=900&width=720', alt: 'Proje görseli 8' },
]

export function Gallery() {
  return (
    <section id="galeri" className="bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-lg font-bold uppercase tracking-widest text-primary">
              Galeri
            </span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Projelerimizden kareler
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Tamamladığımız projeler ve üretim sürecimizden seçtiğimiz görseller.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {images.map((image, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08}>
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <img
                  src={image.src || '/placeholder.svg'}
                  alt={image.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/20" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
