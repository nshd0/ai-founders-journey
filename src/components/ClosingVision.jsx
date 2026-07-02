import React from 'react'
import { motion } from 'framer-motion'
import { GridBackground, DataStream, SignalLine, SectionLabel } from '../ui/founder-lab/index'

const stats = [
  { value: '7', unit: 'Years', label: 'of guided founder formation' },
  { value: '5', unit: 'Roles', label: 'in every founding team' },
  { value: '1', unit: 'Demo Day', label: 'every Class 12 graduation' },
]

export default function ClosingVision() {
  return (
    <GridBackground
      id="closing"
      className="relative py-32 bg-lab-void overflow-hidden"
    >
      {/* Large ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px]"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%,rgba(37,99,235,0.12),transparent)' }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-20"
          style={{ background: 'radial-gradient(circle,rgba(124,58,237,0.2),transparent)' }} />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] opacity-15"
          style={{ background: 'radial-gradient(circle,rgba(249,115,22,0.2),transparent)' }} />
      </div>

      {/* Top data stream */}
      <DataStream color="#2563EB" height={1} className="absolute top-0 left-0 right-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center">

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
          className="flex flex-wrap justify-center gap-12 mb-20"
        >
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="font-display font-extrabold text-5xl text-lab-white">
                {s.value}
                <span className="text-signal-blue text-3xl ml-1">{s.unit}</span>
              </span>
              <span className="font-mono text-xs text-lab-muted tracking-widest uppercase">{s.label}</span>
            </div>
          ))}
        </motion.div>

        <SectionLabel color="#2563EB" delay={0.1}>
          Join the Mission
        </SectionLabel>

        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16,1,0.3,1], delay: 0.15 }}
          className="text-display-xl font-display font-extrabold text-lab-white leading-tight mb-6"
        >
          Let’s Build the<br />
          <span className="text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(135deg,#2563EB,#06B6D4,#8B5CF6)' }}>
            Next Generation
          </span><br />
          of Young Founders
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16,1,0.3,1], delay: 0.3 }}
          className="text-lab-ghost text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Partner with us to turn classrooms into launchpads —
          where every student discovers a role, builds a team, and ships something real.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <motion.a
            href="https://forms.gle/yourGoogleFormLink"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(37,99,235,0.5)' }}
            whileTap={{ scale: 0.97 }}
            className="relative overflow-hidden font-semibold px-8 py-4 rounded-full text-white text-sm"
            style={{ background: 'linear-gradient(135deg,#2563EB,#06B6D4)' }}
          >
            Apply as a Pilot School
          </motion.a>
          <motion.a
            href="https://wa.me/919999999999?text=Hi%2C%20I%27m%20interested%20in%20AI%20Founders%20Journey"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, borderColor: 'rgba(255,255,255,0.3)' }}
            whileTap={{ scale: 0.97 }}
            className="font-semibold px-8 py-4 rounded-full text-lab-light text-sm transition-colors"
            style={{ border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(16px)' }}
          >
            WhatsApp Us
          </motion.a>
        </motion.div>

        <p className="text-lab-muted text-sm font-mono">
          Or email 
          <a href="mailto:naushad@ioe.school" className="text-signal-blue hover:underline">
            naushad@ioe.school
          </a>
        </p>

        <SignalLine color="#2563EB" className="mt-16 max-w-xs mx-auto" />

        <p className="font-mono text-xs text-lab-muted tracking-[0.2em] uppercase mt-4">
          AI Founders Journey · IOE · India
        </p>
      </div>

      {/* Bottom data stream */}
      <DataStream color="#06B6D4" height={1} className="absolute bottom-0 left-0 right-0" delay={0.5} />
    </GridBackground>
  )
}
