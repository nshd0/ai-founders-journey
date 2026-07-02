import React from 'react'
import { motion } from 'framer-motion'

const colSpanMap = { 1:'col-span-1', 2:'col-span-2', 3:'col-span-3', 4:'col-span-4' }
const rowSpanMap = { 1:'row-span-1', 2:'row-span-2', 3:'row-span-3' }

export default function BentoCell({
  children,
  colSpan = 1,
  rowSpan = 1,
  glow,
  accent,
  className = '',
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.16,1,0.3,1], delay }}
      className={`${colSpanMap[colSpan] || 'col-span-1'} ${rowSpanMap[rowSpan] || 'row-span-1'} relative overflow-hidden flex flex-col justify-between ${className}`}
      style={{
        borderRadius: 12,
        padding: '1.5rem',
        background: '#161D2C',
        border: accent ? `1px solid ${accent}40` : '1px solid #1F2D42',
        borderTop: accent ? `2px solid ${accent}` : undefined,
        boxShadow: '0 1px 0 rgba(255,255,255,0.05), 0 24px 48px rgba(0,0,0,0.5)',
      }}
    >
      {glow && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${glow}, transparent)` }}
        />
      )}
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  )
}
