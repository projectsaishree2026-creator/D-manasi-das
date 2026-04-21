'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  /** Use a gentler fade-only animation (for sections with heavy internal motion) */
  fadeOnly?: boolean
}

/**
 * Scroll-triggered fade + slide wrapper.
 *
 * Uses the **isolation pattern** to prevent variant propagation:
 *  – `initial={false}` stops Framer Motion from pushing "hidden"/"visible"
 *    variant names down to child `motion.*` elements.
 *  – Initial visual state is set via `style` (CSS), NOT via `initial`.
 *  – `whileInView` drives the animation with inline targets.
 *
 * This means every child component keeps full control of its own
 * `initial` / `animate` / `whileInView` lifecycle.
 */
export default function AnimatedSection({
  children,
  className = '',
  fadeOnly = false,
}: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion()

  // If the user prefers reduced motion, render children without any wrapper animation
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      // 🚨 Prevent variant propagation to children
      initial={false}
      // Controlled inline animation — isolated from children
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: '-80px',
      }}
      // Initial visual state via CSS style, NOT via framer `initial`
      style={{
        opacity: 0,
        // Smaller movement on mobile to avoid jank on low-end devices
        transform: fadeOnly ? 'translateY(0px)' : 'translateY(30px)',
      }}
      transition={{
        duration: fadeOnly ? 0.3 : 0.45,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  )
}
