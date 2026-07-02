import React from 'react'
import { motion } from 'framer-motion'

export default function SignalLine({ color = '#2563EB', vertical = false, delay = 0, className = '' }) {
  const axis = vertical ? { scaleY: [0, 1] } : { scaleX: [0, 1] }
  const origin = vertical ? 'top' : 'left'

  return (
    <motion.div
      initial={{ scaleX: 0, scaleY: 0, opacity: 0 }}
      whileInView={{ ...axis, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.16,1,0.3,1], delay }}
      style={{
        transformOrigin: origin,
        background: `linear-gradient(${vertical ? '180deg' : '90deg'}, transparent, ${color}CC, transparent)`,
        height: vertical ? '100%' : '1px',
        width:  vertical ? '1px'   : '100%',
      }}
      className={className}
    />
  )
}
