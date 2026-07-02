import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function GlitchText({ children, className = '', intensity = 'subtle' }) {
  const [glitching, setGlitching] = useState(false)

  const trigger = () => {
    setGlitching(true)
    setTimeout(() => setGlitching(false), 300)
  }

  const offsets = intensity === 'strong' ? 3 : 1.5

  return (
    <motion.span
      onHoverStart={trigger}
      className={`relative inline-block select-none ${className}`}
    >
      {glitching && (
        <>
          <span
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              color: '#06B6D4',
              clipPath: 'polygon(0 20%, 100% 20%, 100% 40%, 0 40%)',
              transform: `translateX(${offsets}px)`,
              opacity: 0.7,
            }}
          >
            {children}
          </span>
          <span
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              color: '#EF4444',
              clipPath: 'polygon(0 60%, 100% 60%, 100% 80%, 0 80%)',
              transform: `translateX(-${offsets}px)`,
              opacity: 0.7,
            }}
          >
            {children}
          </span>
        </>
      )}
      <span className="relative">{children}</span>
    </motion.span>
  )
}
