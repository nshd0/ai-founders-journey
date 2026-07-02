import React from 'react'
import { motion } from 'framer-motion'

export default function SectionLabel({ children, color = '#2563EB', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16,1,0.3,1], delay }}
      className="flex items-center gap-3 mb-4"
    >
      {/* Static data stream bar — no dynamic class */}
      <div
        style={{
          width: 32,
          height: 2,
          borderRadius: 1,
          background: `linear-gradient(90deg, ${color}, transparent)`,
        }}
      />
      <span
        className="font-mono text-xs font-semibold tracking-widest uppercase"
        style={{ color }}
      >
        {children}
      </span>
    </motion.div>
  )
}
