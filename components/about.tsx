'use client'

import { Reveal } from '@/components/reveal'

export function About() {
  return (
    <section id="hakkimizda" className="bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-lg font-bold uppercase tracking-widest text-primary">
              Hakkımızda
            </span>
            <h2 className="mt-4 text-balance font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Güçlü üretim altyapısı, estetik çözümler
            </h2>
          </div>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:mt-8 sm:text-xl">
            ROTA MEGA olarak; plastik kaydıraklar ve uzun ömürlü çocuk oyun
            grubu ürünleri alanında modern üretim teknolojileriyle yenilikçi
            çözümler geliştiriyoruz. Çocukların neşeyle ve güvenle vakit
            geçirebilecekleri alanlar inşa etmek için her projeyi uluslararası
            güvenlik standartlarına ve estetik beklentilere uygun şekilde,
            titizlikle hayata geçiriyoruz.
          </p>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Tasarım ve üretim süreçlerini tek çatı altında yöneterek
            belediyeler, parklar, siteler ve eğitim kurumları için en yüksek
            kalitede, dayanıklı ve sürdürülebilir ürünler sunuyoruz. Rotasyon
            plastik teknolojisindeki uzmanlığımız sayesinde, dış mekan
            koşullarına karşı ekstra dirençli, rengini ve formunu yıllarca
            koruyan yapılar üretiyoruz.
          </p>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Geleceğimizin teminatı olan çocukların sağlığı bizim için her şeyden
            önemlidir. Bu bilinçle, imalat sürecimizde kullandığımız tüm
            hammaddeleri çevre dostu ve insan sağlığına tamamen zararsız
            materyallerden özenle seçiyoruz. Hayal gücünü besleyen, eğlenceli ve
            en önemlisi güvenli oyun alanlarıyla projenize değer katmaktan gurur
            duyuyoruz.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
