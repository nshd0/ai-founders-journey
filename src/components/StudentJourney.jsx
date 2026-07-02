import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GridBackground, SectionLabel, DataStream, ScrollReveal } from '../ui/founder-lab/index'

const milestones = [
  { grade: 'C6', year: 'Class 6', label: 'Explore',    color: '#2563EB', desc: 'Try all five Roles through mini-challenges. No pressure — just discovery.', output: 'Role Discovery Portfolio' },
  { grade: 'C7', year: 'Class 7', label: 'Deepen',     color: '#06B6D4', desc: 'Select your primary Role and supporting Role. Work consistently in those areas.', output: 'Primary Role Declaration' },
  { grade: 'C8', year: 'Class 8', label: 'Declare',    color: '#14B8A6', desc: 'Earn Role Certification. Complete a structured project using your declared strength.', output: 'Role Certification + Portfolio' },
  { grade: 'C9', year: 'Class 9', label: 'Form Teams', color: '#7C3AED', desc: 'Cross-role founding teams assemble. Choose a real-world problem to solve.', output: 'Founding Charter' },
  { grade: 'C10',year: 'Class 10',label: 'Validate',   color: '#8B5CF6', desc: 'Deep research, user interviews, competitive analysis, solution blueprint.', output: 'Validated Problem Brief' },
  { grade: 'C11',year: 'Class 11',label: 'Build MVP',  color: '#F59E0B', desc: 'Each role owns their domain. Monthly sprints. Alpha Demo mid-year.', output: 'Working Prototype' },
  { grade: 'C12',year: 'Class 12',label: 'Launch',     color: '#F97316', desc: 'Final polish, Demo Day, investor panel, seed funding for selected teams.', output: 'Demo Day + Seed Funding' },
]

export default function StudentJourney() {
  const [active, setActive] = useState(0)
  const m = milestones[active]

  return (
    <GridBackground
      id="journey"
      className="relative py-28 bg-lab-ink overflow-hidden"
      fine
    >
      {/* Background radial */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%,rgba(37,99,235,0.07),transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <ScrollReveal>
          <SectionLabel color="#2563EB">The 7-Year Founder Pathway</SectionLabel>
          <h2 className="text-display-lg font-display font-extrabold text-lab-white mb-4">
            Discovery to Demo Day
          </h2>
          <p className="text-lab-ghost text-lg max-w-2xl mb-16">
            A continuous journey — from curiosity in middle school to prototype creation in senior school.
          </p>
        </ScrollReveal>

        {/* Node row */}
        <div className="relative mb-12">
          {/* Connector line */}
          <div className="absolute top-7 left-0 right-0 h-px pointer-events-none"
            style={{ background: 'linear-gradient(90deg,transparent,rgba(37,99,235,0.2),rgba(37,99,235,0.4),rgba(37,99,235,0.2),transparent)' }} />
          <DataStream color="#2563EB" height={1} className="absolute top-7 left-0 right-0" />

          <div className="grid grid-cols-4 md:grid-cols-7 gap-4 relative">
            {milestones.map((m, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: [0.34,1.56,0.64,1] }}
                className="flex flex-col items-center gap-2 group"
              >
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-14 h-14 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300"
                  style={{
                    background: active === i ? m.color : 'rgba(255,255,255,0.04)',
                    border: `1.5px solid ${active === i ? m.color : 'rgba(255,255,255,0.1)'}`,
                    boxShadow: active === i ? `0 0 24px ${m.color}60, 0 0 48px ${m.color}20` : 'none',
                    color: active === i ? '#fff' : '#64748B',
                  }}
                >
                  {m.grade}
                  {active === i && (
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ border: `1px solid ${m.color}50` }}
                      animate={{ scale: [1, 1.8], opacity: [0.8, 0] }}
                      transition={{ duration: 1.6, repeat: Infinity }}
                    />
                  )}
                </motion.div>
                <span className={`font-mono text-xs transition-colors ${
                  active === i ? 'text-lab-white' : 'text-lab-muted group-hover:text-lab-ghost'
                }`}>{m.label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
            transition={{ duration: 0.4, ease: [0.16,1,0.3,1] }}
            className="relative rounded-panel overflow-hidden p-8 md:p-12"
            style={{
              background: 'rgba(22,29,44,0.8)',
              border: `1px solid ${m.color}30`,
              boxShadow: `0 0 60px ${m.color}10`,
            }}
          >
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: `radial-gradient(ellipse 60% 80% at 0% 50%,${m.color}10,transparent)` }} />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: m.color }}>
                  {m.year} · {m.label}
                </span>
                <h3 className="text-display-md font-display font-bold text-lab-white mb-4">{m.label}</h3>
                <p className="text-lab-ghost text-base leading-relaxed">{m.desc}</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="rounded-card p-4" style={{ background: `${m.color}12`, border: `1px solid ${m.color}25` }}>
                  <span className="font-mono text-xs uppercase tracking-widest mb-2 block" style={{ color: m.color }}>Output</span>
                  <span className="text-lab-white font-semibold">{m.output}</span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {milestones.map((_, i) => (
                    <div key={i} className="h-1 flex-1 rounded-full transition-all duration-300"
                      style={{ background: i <= active ? m.color : 'rgba(255,255,255,0.08)' }} />
                  ))}
                </div>
                <span className="font-mono text-xs text-lab-muted">{active + 1} of {milestones.length} stages</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </GridBackground>
  )
}
