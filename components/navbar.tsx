'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Ana Sayfa', href: '#hero' },
  { label: 'Hakkımızda', href: '#hakkimizda' },
  { label: 'Ürünler', href: '#urunler' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'İletişim', href: '#iletisim' },
]

const languages = [
  { code: 'tr', label: 'TR', flagCode: 'tr' },
  { code: 'en', label: 'EN', flagCode: 'gb' },
  { code: 'de', label: 'DE', flagCode: 'de' },
  { code: 'ru', label: 'RU', flagCode: 'ru' },
  { code: 'ar', label: 'AR', flagCode: 'sa' },
]

function LanguageSwitcher() {
  const [activeLang, setActiveLang] = useState('tr')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const match = document.cookie.match(/googtrans=\/tr\/([a-z]{2})/)
    if (match) {
      setActiveLang(match[1])
    }
  }, [])

  const changeLanguage = (langCode: string) => {
    setActiveLang(langCode)
    document.cookie = `googtrans=/tr/${langCode}; path=/`
    document.cookie = `googtrans=/tr/${langCode}; path=/; domain=${window.location.hostname}`
    window.location.reload()
  }

  const current = languages.find((l) => l.code === activeLang) || languages[0]

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
      >
        <img 
          src={`https://flagcdn.com/w20/${current.flagCode}.png`} 
          srcSet={`https://flagcdn.com/w40/${current.flagCode}.png 2x`} 
          width="20" 
          alt={current.label} 
          className="block rounded-sm" 
        />
        <span className="notranslate">{current.label}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 top-full mt-2 flex w-24 flex-col overflow-hidden rounded-xl border border-border bg-background shadow-lg z-50"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  changeLanguage(lang.code)
                  setOpen(false)
                }}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 text-sm transition-colors hover:bg-secondary",
                  activeLang === lang.code ? "bg-secondary text-primary font-bold" : "text-foreground font-medium"
                )}
              >
                <img 
                  src={`https://flagcdn.com/w20/${lang.flagCode}.png`} 
                  srcSet={`https://flagcdn.com/w40/${lang.flagCode}.png 2x`} 
                  width="20" 
                  alt={lang.label} 
                  className="block rounded-sm" 
                />
                <span className="flex-1 text-right notranslate">{lang.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        'border-b border-border/60 bg-background/80 backdrop-blur-xl'
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 md:h-20 lg:px-8">
        <div className="flex items-center gap-4">
          <a href="#hero" className="flex items-center" aria-label="ROTA MEGA">
            <img
              src="/rota-mega-logo.png"
              alt="ROTA MEGA Kent Mobilyaları"
              className="h-9 w-auto sm:h-10 md:h-11"
            />
          </a>
          <LanguageSwitcher />
        </div>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>



        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-1 inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary md:hidden"
          aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={open}
        >
          <span className="relative block h-4 w-5">
            <motion.span
              className="absolute left-0 block h-0.5 w-5 rounded-full bg-current"
              animate={open ? { rotate: 45, top: '7px' } : { rotate: 0, top: '0px' }}
              transition={{ duration: 0.25 }}
              style={{ top: 0 }}
            />
            <motion.span
              className="absolute left-0 top-[7px] block h-0.5 w-5 rounded-full bg-current"
              animate={{ opacity: open ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute left-0 block h-0.5 w-5 rounded-full bg-current"
              animate={open ? { rotate: -45, top: '7px' } : { rotate: 0, top: '14px' }}
              transition={{ duration: 0.25 }}
              style={{ top: '14px' }}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4 sm:px-6">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}

            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
