import React from 'react'
import { motion } from 'framer-motion'

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  distance = 32,
  className = '',
  id,
}) {
  const axes = {
    up:    { y: distance },
    down:  { y: -distance },
    left:  { x: distance },
    right: { x: -distance },
  }
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, ...axes[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16,1,0.3,1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
