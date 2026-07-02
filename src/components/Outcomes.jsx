import React from 'react'
import { motion } from 'framer-motion'
import { GridBackground, SectionLabel, ScrollReveal, BentoGrid, BentoCell, DataStream } from '../ui/founder-lab/index'

const outcomes = [
  { emoji: '🤝', label: 'Collaborators',   color: '#2563EB', desc: 'Work across disciplines and roles in real founding teams' },
  { emoji: '🔍', label: 'Problem Solvers', color: '#06B6D4', desc: 'Find real problems and validate them with users' },
  { emoji: '🎨', label: 'Creators',        color: '#8B5CF6', desc: 'Design experiences, visuals, and product interfaces' },
  { emoji: '📣', label: 'Communicators',   color: '#F59E0B', desc: 'Pitch ideas to panels, parents, and investors' },
  { emoji: '🚀', label: 'Young Founders',  color: '#F97316', desc: 'Graduate with a real prototype and a Demo Day' },
]

const schoolBenefits = [
  { icon: '🌟', label: 'Future-ready outcomes', desc: 'Measurable student progress aligned with NEP/NCF' },
  { icon: '📈', label: 'Parent engagement',      desc: 'Visible portfolio evidence at every stage' },
  { icon: '🏆', label: 'Innovation culture',     desc: 'Annual Demo Day as a flagship campus event' },
  { icon: '🎮', label: 'Brand differentiation',  desc: 'Position your school as a future-skills leader' },
]

export default function Outcomes() {
  return (
    <GridBackground id="outcomes" className="relative py-28 bg-lab-void overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 100%,rgba(245,158,11,0.06),transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <ScrollReveal>
          <SectionLabel color="#F59E0B">Outcomes</SectionLabel>
          <h2 className="text-display-lg font-display font-extrabold text-lab-white mb-4">
            What Students Become<br />
            <span className="text-lab-dim">by Class 12</span>
          </h2>
          <p className="text-lab-ghost text-lg max-w-xl mb-16">
            They graduate with skills, portfolios, and a real product journey that no exam can test.
          </p>
        </ScrollReveal>

        {/* Student outcome cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-14">
          {outcomes.map((o, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.34,1.56,0.64,1] }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="relative rounded-panel p-6 flex flex-col gap-3 overflow-hidden group"
              style={{
                background: 'rgba(22,29,44,0.7)',
                border: `1px solid rgba(255,255,255,0.07)`,
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg,transparent,${o.color},transparent)` }} />
              <div
                className="w-12 h-12 rounded-card flex items-center justify-center text-2xl"
                style={{ background: `${o.color}15`, border: `1px solid ${o.color}25` }}
              >
                {o.emoji}
              </div>
              <h3 className="font-display font-bold text-lab-white">{o.label}</h3>
              <p className="text-lab-dim text-xs leading-relaxed">{o.desc}</p>
              <div className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg,transparent,${o.color}40,transparent)` }} />
            </motion.div>
          ))}
        </div>

        {/* School benefits bento */}
        <ScrollReveal delay={0.2}>
          <div
            className="rounded-panel overflow-hidden"
            style={{ background: 'rgba(22,29,44,0.8)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div className="p-8 md:p-10 border-b border-lab-border">
              <span className="font-mono text-xs tracking-widest uppercase text-signal-amber">For Schools</span>
              <h3 className="font-display font-bold text-2xl text-lab-white mt-2">
                A High-Visibility Innovation Layer
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4">
              {schoolBenefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-6 flex flex-col gap-3 ${
                    i < 3 ? 'border-b sm:border-b-0 sm:border-r border-lab-border' : ''
                  }`}
                >
                  <span className="text-2xl">{b.icon}</span>
                  <h4 className="font-semibold text-lab-light text-sm">{b.label}</h4>
                  <p className="text-lab-dim text-xs leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
            <DataStream color="#F59E0B" height={1} />
          </div>
        </ScrollReveal>
      </div>
    </GridBackground>
  )
}
