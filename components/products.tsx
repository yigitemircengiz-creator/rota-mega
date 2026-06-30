'use client'

import { Reveal } from '@/components/reveal'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

/**
 * Ürün kategorileri.
 * Her ürünün `image` alanını gerçek ürün fotoğrafıyla değiştirmeniz yeterlidir.
 * Görselleri /public klasörüne ekleyip yolunu güncelleyebilirsiniz.
 */
const products = [
  {
    title: 'Tüm Ürünler',
    description:
      'Rotasyon plastik teknolojisiyle ürettiğimiz tüm standart oyun gruplarını ve özel üretim projelerimizi inceleyin.',
    image: '/placeholder.svg?height=640&width=720',
  },
  {
    title: 'Plastik Kaydıraklar',
    description:
      'Dayanıklı, güvenli ve renkli plastik kaydırak modelleriyle her yaş grubuna uygun eğlenceli çözümler.',
    image: '/placeholder.svg?height=640&width=720',
  },
  {
    title: 'Çatılar',
    description:
      'Çocuk oyun grupları için tasarlanmış, güneş ve yağmur gibi dış mekan koşullarına tam dayanıklı plastik çatı sistemleri.',
    image: '/placeholder.svg?height=640&width=720',
  },
  {
    title: 'Panolar',
    description:
      'Oyun alanlarına renk katan, çocukların güvenliği ve etkileşimi için özel olarak tasarlanmış yüksek kaliteli plastik panolar.',
    image: '/placeholder.svg?height=640&width=720',
  },
]

export function Products() {
  return (
    <section id="urunler" className="bg-secondary/40 py-16 sm:py-20 lg:py-28 mb-16 sm:mb-20 lg:mb-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-lg font-bold uppercase tracking-widest text-primary">
              Ürünler
            </span>
            <h2 className="mt-4 text-balance font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Üretim kategorilerimiz
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              İhtiyacınıza uygun, dayanıklı ve estetik ürün gruplarımızı keşfedin.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {products.map((product, i) => (
            <Reveal key={product.title} delay={i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-foreground/5">
                <div className="overflow-hidden">
                  <img
                    src={product.image || '/placeholder.svg'}
                    alt={product.title}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {product.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>
                  <Link
                    href="/urunler"
                    className="group/btn mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                  >
                    Ürünleri İncele
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
