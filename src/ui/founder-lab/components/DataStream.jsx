import React from 'react'
import { motion } from 'framer-motion'

export default function DataStream({ color = '#2563EB', width = '100%', height = 1, delay = 0, className = '' }) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height: height + 'px' }}>
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: '200%' }}
        transition={{ duration: 2.5, ease: 'linear', repeat: Infinity, delay }}
        className="absolute inset-y-0"
        style={{
          width: '40%',
          background: `linear-gradient(90deg, transparent, ${color}CC, ${color}, ${color}CC, transparent)`,
        }}
      />
      <div className="absolute inset-0" style={{ background: `${color}18` }} />
    </div>
  )
}
