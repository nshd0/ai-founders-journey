import React from 'react'
import { motion } from 'framer-motion'

export default function GlassPanel({
  children,
  className = '',
  glow,
  hover = true,
  onClick,
  delay = 0,
  as = 'div',
}) {
  const Tag = motion[as] || motion.div
  return (
    <Tag
      onClick={onClick}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16,1,0.3,1], delay }}
      whileHover={hover ? { scale: 1.01, y: -2 } : undefined}
      className={[
        'relative rounded-panel overflow-hidden',
        'bg-white/[0.04] backdrop-blur-glass',
        'border border-white/[0.07] shadow-glass',
        hover ? 'hover:bg-white/[0.07] hover:border-white/[0.12] transition-all duration-300 cursor-pointer' : '',
        className,
      ].join(' ')}
    >
      {glow && (
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{ background: `radial-gradient(ellipse 60% 60% at 50% 0%, ${glow}, transparent)` }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </Tag>
  )
}
