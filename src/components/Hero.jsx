import React, { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { GlitchText, DataStream, SectionLabel, ScrollReveal } from '../ui/founder-lab/index'

const WORDS = ['Innovators', 'Builders', 'Creators', 'Strategists', 'Founders']

function WordCycle() {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % WORDS.length), 2200)
    return () => clearInterval(t)
  }, [])
  return (
    <motion.span
      key={idx}
      initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.16,1,0.3,1] }}
      className="inline-block"
      style={{ background:'linear-gradient(135deg,#2563EB,#06B6D4)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}
    >
      {WORDS[idx]}
    </motion.span>
  )
}

export default function Hero() {
  const containerRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [4, -4]), { stiffness: 80, damping: 20 })
  const rotateY = useSpring(useTransform(mouseX, [-600, 600], [-4, 4]), { stiffness: 80, damping: 20 })

  const handleMouseMove = (e) => {
    const r = containerRef.current?.getBoundingClientRect()
    if (!r) return
    mouseX.set(e.clientX - r.left - r.width / 2)
    mouseY.set(e.clientY - r.top - r.height / 2)
  }
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0) }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor:'#080C14', backgroundImage:'linear-gradient(rgba(37,99,235,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(37,99,235,0.05) 1px,transparent 1px)', backgroundSize:'64px 64px' }}
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px]"
          style={{ background:'radial-gradient(ellipse 80% 60% at 50% 0%,rgba(37,99,235,0.22),transparent)' }} />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px]"
          style={{ background:'radial-gradient(circle,rgba(6,182,212,0.12),transparent)' }} />
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px]"
          style={{ background:'radial-gradient(circle,rgba(124,58,237,0.1),transparent)' }} />
      </div>

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: ['#2563EB','#06B6D4','#7C3AED','#F59E0B'][i % 4],
            opacity: 0.4,
            left: `${8 + (i * 7.5)}%`,
            top:  `${15 + ((i * 73) % 70)}%`,
          }}
          animate={{ y: [0, -24, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
        />
      ))}

      {/* Top data streams */}
      <div className="absolute top-0 left-0 right-0 flex flex-col gap-px pointer-events-none" aria-hidden>
        <DataStream color="#2563EB" height={1} delay={0} />
        <DataStream color="#06B6D4" height={1} delay={0.4} />
      </div>

      {/* Content */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto py-32"
      >
        <motion.div style={{ rotateX, rotateY, transformPerspective: 1200 }}>
          <SectionLabel color="#2563EB" delay={0.1}>
            School as a Service · NEP / NCF Aligned · Class 6–12
          </SectionLabel>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16,1,0.3,1], delay: 0.2 }}
            className="font-display font-extrabold leading-tight mb-2"
            style={{ fontSize:'clamp(3rem,8vw,7rem)', letterSpacing:'-0.03em', color:'#F1F5F9' }}
          >
            From Learners<br />to Young{' '}
            <GlitchText intensity="subtle"><WordCycle /></GlitchText>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16,1,0.3,1], delay: 0.45 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mt-6 mb-10 leading-relaxed"
            style={{ color:'#94A3B8' }}
          >
            A role-based journey that takes every student from AI literacy to
            a real-world, AI-backed prototype — with a founding team and a Demo Day.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16,1,0.3,1], delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#journey"
              whileHover={{ scale: 1.04, boxShadow: '0 0 32px rgba(37,99,235,0.5)' }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden font-semibold px-8 py-3.5 rounded-full text-sm"
              style={{ background:'linear-gradient(135deg,#2563EB,#1D4ED8)', color:'#fff' }}
            >
              Enter the Founder Lab →
            </motion.a>
            <motion.a
              href="#stakeholders"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="font-semibold px-8 py-3.5 rounded-full text-sm transition-colors"
              style={{ border:'1px solid rgba(255,255,255,0.1)', color:'#CBD5E1', background:'rgba(255,255,255,0.03)', backdropFilter:'blur(16px)' }}
            >
              Partner With Us
            </motion.a>
          </motion.div>

          {/* Role strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-16 flex flex-wrap justify-center gap-6"
          >
            {[
              { label:'Innovator',   color:'#2563EB' },
              { label:'Builder',     color:'#14B8A6' },
              { label:'Creator',     color:'#8B5CF6' },
              { label:'Strategist',  color:'#F59E0B' },
              { label:'Changemaker', color:'#F97316' },
            ].map((r, i) => (
              <motion.div key={r.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.08, duration: 0.4, ease: [0.34,1.56,0.64,1] }}
                className="flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full" style={{ background: r.color, boxShadow: `0 0 8px ${r.color}` }} />
                <span className="font-mono text-xs" style={{ color:'#64748B' }}>{r.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="font-mono text-xs tracking-widest" style={{ color:'#334155' }}>SCROLL</span>
        <div className="w-px h-10" style={{ background:'linear-gradient(180deg,rgba(37,99,235,0.6),transparent)' }} />
      </motion.div>
    </section>
  )
}
