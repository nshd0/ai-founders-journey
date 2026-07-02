import React from 'react'
import { motion } from 'framer-motion'

export default function OrbitNode({ label, grade, color, active = false, delay = 0, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.34,1.56,0.64,1], delay }}
      whileHover={{ scale: 1.1 }}
      className="relative flex flex-col items-center gap-2 group"
    >
      <div
        className={`relative w-14 h-14 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300`}
        style={{
          background: active ? color : 'rgba(255,255,255,0.04)',
          border: `1.5px solid ${active ? color : 'rgba(255,255,255,0.12)'}`,
          boxShadow: active ? `0 0 20px ${color}60, 0 0 40px ${color}20` : 'none',
          color: active ? '#fff' : '#94A3B8',
        }}
      >
        {grade}
        {active && (
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ border: `1px solid ${color}40` }}
            animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
          />
        )}
      </div>
      <span className="text-xs font-mono text-lab-ghost group-hover:text-lab-light transition-colors">{label}</span>
    </motion.button>
  )
}
