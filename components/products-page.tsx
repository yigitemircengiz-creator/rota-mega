'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Search } from 'lucide-react'
import { ProductModal, ProductData } from '@/components/product-modal'
import { Reveal } from '@/components/reveal'

import { PRODUCTS } from '@/data/products'

const CATEGORIES = ['Tümü', 'Plastik Kaydıraklar', 'Oyun Grupları', 'Kent Mobilyaları', 'Diğer Ürünler']

export function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('Tümü')
  const [selectedProduct, setSelectedProduct] = useState<ProductData | null>(null)

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = activeCategory === 'Tümü' || product.category === activeCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, activeCategory])

  return (
    <>
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-secondary/20" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Ürünlerimiz
            </h1>
            <p className="mt-6 text-lg max-w-2xl mx-auto text-muted-foreground sm:text-xl">
              Kaliteli, dayanıklı ve estetik oyun grupları ile kent mobilyalarını keşfedin.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'bg-secondary/50 text-foreground hover:bg-secondary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-full text-sm text-foreground focus:ring-primary focus:border-primary transition-colors"
                placeholder="Ürün ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 min-h-[500px]">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl hover:shadow-foreground/5 cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="overflow-hidden bg-secondary/10">
                    <img
                      src={product.image || '/placeholder.svg'}
                      alt={product.name}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      {product.category}
                    </span>
                    <h3 className="mt-2 font-heading text-lg font-bold text-foreground">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2 flex-1">
                      {product.description || 'Bu ürün, projelerinize estetik ve dayanıklılık katar.'}
                    </p>
                    <div className="mt-5 inline-flex items-center text-sm font-semibold text-primary transition-colors group-hover:text-primary/80">
                      Detayları Gör
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {filteredProducts.length === 0 && (
              <div className="col-span-full py-20 text-center">
                <p className="text-lg text-muted-foreground">Aradığınız kriterlere uygun ürün bulunamadı.</p>
                <button 
                  onClick={() => {
                    setSearchQuery('')
                    setActiveCategory('Tümü')
                  }}
                  className="mt-4 text-primary font-medium hover:underline"
                >
                  Filtreleri Temizle
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </>
  )
}
