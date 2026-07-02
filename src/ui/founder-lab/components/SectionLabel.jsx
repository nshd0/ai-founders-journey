import React from 'react'
import { motion } from 'framer-motion'
import DataStream from './DataStream'

export default function SectionLabel({ children, color = '#2563EB', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16,1,0.3,1], delay }}
      className="flex items-center gap-3 mb-4"
    >
      <DataStream color={color} width="32px" height={2} />
      <span
        className="font-mono text-xs font-semibold tracking-[0.2em] uppercase"
        style={{ color }}
      >
        {children}
      </span>
    </motion.div>
  )
}
