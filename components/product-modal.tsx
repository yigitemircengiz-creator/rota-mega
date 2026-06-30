'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X } from 'lucide-react'
import Link from 'next/link'

export interface ProductData {
  id: string
  name: string
  category: string
  description?: string
  image: string
  gallery?: string[]
}

interface ProductModalProps {
  product: ProductData | null
  onClose: () => void
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [product])

  return (
    <AnimatePresence>
      {product && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 z-50 max-h-[90vh] w-[95vw] max-w-4xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-full bg-background/50 p-2 text-foreground backdrop-blur-md transition-colors hover:bg-background"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 relative bg-secondary/20">
                <img
                  src={product.image || '/placeholder.svg'}
                  alt={product.name}
                  className="w-full h-[300px] md:h-[500px] object-cover"
                />
              </div>
              <div className="flex w-full flex-col justify-between p-6 sm:p-8 md:w-1/2 lg:p-10">
                <div>
                  <span className="text-sm font-bold uppercase tracking-wider text-primary">
                    {product.category}
                  </span>
                  <h2 className="mt-2 font-heading text-2xl font-bold text-foreground sm:text-3xl">
                    {product.name}
                  </h2>
                  <div className="mt-6 space-y-4">
                    {product.description ? (
                      <p className="text-base leading-relaxed text-muted-foreground">
                        {product.description}
                      </p>
                    ) : (
                      <p className="text-base leading-relaxed text-muted-foreground">
                        Bu ürünün dayanıklılığı, güvenliği ve estetik yapısıyla oyun gruplarına veya kent mobilyası alanlarına değer katar. Yüksek kalite standartlarında üretilmiştir.
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-10">
                  <Link
                    href="/#iletisim"
                    onClick={onClose}
                    className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
                  >
                    Teklif Al
                  </Link>
                  <p className="mt-4 text-center text-xs text-muted-foreground">
                    Ürünle ilgili detaylı bilgi ve fiyatlandırma için bizimle iletişime geçin.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
