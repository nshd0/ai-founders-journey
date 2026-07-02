import React from 'react'
import { motion } from 'framer-motion'

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
      className={[
        `col-span-${colSpan} row-span-${rowSpan}`,
        'relative rounded-card overflow-hidden p-6 flex flex-col justify-between',
        'bg-lab-surface border border-lab-border shadow-panel',
        'hover:border-lab-muted transition-colors duration-300',
        className,
      ].join(' ')}
      style={accent ? { borderTop: `2px solid ${accent}` } : {}}
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
