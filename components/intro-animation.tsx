'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useEffect, useState } from 'react'

export function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'enter' | 'exit'>('enter')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('exit'), 1900)
    const t2 = setTimeout(() => onComplete(), 2900)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        key="intro"
        className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ scale: 1, x: 0, y: 0 }}
          animate={
            phase === 'exit'
              ? { scale: 0.34, x: 'calc(max(-50vw + 64px, -600px))', y: 'calc(-50vh + 40px)', opacity: 0 }
              : { scale: 1, x: 0, y: 0, opacity: 1 }
          }
          transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
          style={{ transformOrigin: 'center' }}
        >
          {/* Spinning red circular-arrow ring */}
          <motion.svg
            viewBox="0 0 120 120"
            className="absolute h-[320px] w-[320px] text-primary"
            initial={{ rotate: 0, opacity: 0 }}
            animate={{ rotate: 360, opacity: phase === 'exit' ? 0 : 1 }}
            transition={{
              rotate: { duration: 2.2, ease: 'easeInOut', repeat: Infinity },
              opacity: { duration: 0.6 },
            }}
            aria-hidden="true"
          >
            <path
              d="M98 34 A46 46 0 1 1 60 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path d="M58 2 L58 26 L80 14 Z" fill="currentColor" />
          </motion.svg>

          {/* Logo */}
          <motion.img
            src="/rota-mega-logo.png"
            alt="ROTA MEGA Kent Mobilyaları"
            className="relative w-44 select-none md:w-56"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
