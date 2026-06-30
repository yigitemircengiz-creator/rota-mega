import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ProductsPage } from '@/components/products-page'

export const metadata = {
  title: 'Ürünlerimiz | ROTA MEGA Kent Mobilyaları',
  description: 'Kaliteli, dayanıklı ve estetik oyun grupları ile kent mobilyalarını keşfedin. Geniş ürün yelpazemizle hizmetinizdeyiz.',
}

export default function Urunler() {
  return (
    <main>
      <Navbar />
      <ProductsPage />
      <Footer />
    </main>
  )
}
