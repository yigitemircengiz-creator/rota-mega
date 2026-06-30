'use client'

import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { IntroAnimation } from '@/components/intro-animation'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Products } from '@/components/products'
import { WhyChoose } from '@/components/why-choose'
import { Gallery } from '@/components/gallery'

import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  const [introDone, setIntroDone] = useState(false)

  // Prevent scrolling during the intro animation.
  useEffect(() => {
    document.body.style.overflow = introDone ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [introDone])

  return (
    <>
      {!introDone && <IntroAnimation onComplete={() => setIntroDone(true)} />}

      {introDone && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Navbar />
          <Hero />
          <About />
          <Products />
          <WhyChoose />
          <Gallery />

          <Contact />
          <Footer />
        </motion.main>
      )}
    </>
  )
}
