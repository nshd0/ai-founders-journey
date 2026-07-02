import React from 'react'
import { motion } from 'framer-motion'

export default function GlassPanel({
  children,
  className = '',
  glow,
  hover = true,
  onClick,
  delay = 0,
}) {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16,1,0.3,1], delay }}
      whileHover={hover ? { scale: 1.01, y: -2 } : undefined}
      className={`relative rounded-panel overflow-hidden ${className}`}
      style={{
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.07)',
        boxShadow: '0 4px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
        cursor: hover ? 'pointer' : 'default',
        transition: 'background 0.3s, border-color 0.3s',
      }}
    >
      {glow && (
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{ background: `radial-gradient(ellipse 60% 60% at 50% 0%, ${glow}, transparent)` }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
