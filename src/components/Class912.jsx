import React from 'react'
import { motion } from 'framer-motion'
import { GridBackground, SectionLabel, ScrollReveal, DataStream, GlassPanel } from '../ui/founder-lab/index'

const stages = [
  {
    step: '01', grade: 'Class 9', label: 'Form Teams', icon: '🤝',
    color: '#7C3AED',
    desc: 'Cross-role founding teams assemble. Students choose a real-world problem domain and register their founding charter.',
    tags: ['Team Formation', 'Problem Selection', 'Founding Charter'],
  },
  {
    step: '02', grade: 'Class 10', label: 'Validate', icon: '🔍',
    color: '#2563EB',
    desc: 'Deep domain research, competitive landscape analysis, user interviews, and a validated solution blueprint document.',
    tags: ['User Research', 'Competitive Analysis', 'Solution Brief'],
  },
  {
    step: '03', grade: 'Class 11', label: 'Build MVP', icon: '🛠️',
    color: '#06B6D4',
    desc: 'Teams build a working prototype. Each role owns their domain. Monthly sprint reviews and an Alpha Demo mid-year.',
    tags: ['Sprint Cycles', 'Role Ownership', 'Alpha Demo'],
  },
  {
    step: '04', grade: 'Class 12', label: 'Launch', icon: '🚀',
    color: '#F97316',
    desc: 'Final polish, pitch deck, Demo Day, investor panel, and seed funding for selected winning teams.',
    tags: ['Demo Day', 'Investor Panel', 'Seed Funding'],
  },
]

export default function Class912() {
  return (
    <GridBackground
      id="class912"
      className="relative py-28 bg-lab-ink overflow-hidden"
      fine
    >
      {/* Diagonal glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 0% 100%,rgba(124,58,237,0.08),transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <ScrollReveal>
          <SectionLabel color="#7C3AED">Class 9 – 12</SectionLabel>
          <h2 className="text-display-lg font-display font-extrabold text-lab-white mb-4">
            Turn Skills Into
            <br /><span className="text-lab-dim">Real Solutions</span>
          </h2>
          <p className="text-lab-ghost text-lg max-w-2xl mb-16">
            Four years of venture-building. Real teams. Real problems. Real prototypes. Real Demo Day.
          </p>
        </ScrollReveal>

        {/* Stage cards — 2-col bento */}
        <div className="grid md:grid-cols-2 gap-5">
          {stages.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16,1,0.3,1] }}
              whileHover={{ y: -3, scale: 1.01 }}
              className="relative rounded-panel overflow-hidden p-8 group"
              style={{
                background: 'rgba(22,29,44,0.7)',
                border: `1px solid rgba(255,255,255,0.07)`,
              }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg,transparent,${s.color},transparent)` }} />

              {/* Ambient glow on hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(ellipse 60% 60% at 0% 0%,${s.color}10,transparent)` }} />

              <div className="relative flex items-start gap-5">
                <div
                  className="w-14 h-14 rounded-card flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: `${s.color}15`, border: `1px solid ${s.color}25` }}
                >
                  {s.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs text-lab-muted tracking-widest">{s.step}</span>
                    <div className="h-px flex-1" style={{ background: `${s.color}30` }} />
                    <span className="font-mono text-xs" style={{ color: s.color }}>{s.grade}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-lab-white mb-3">{s.label}</h3>
                  <p className="text-lab-ghost text-sm leading-relaxed mb-5">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map(t => (
                      <span key={t}
                        className="font-mono text-xs px-3 py-1 rounded-full"
                        style={{ background: `${s.color}12`, border: `1px solid ${s.color}25`, color: s.color }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <DataStream color={s.color} height={1} className="mt-6" delay={i * 0.2} />
            </motion.div>
          ))}
        </div>

        {/* Connector — the pipeline metaphor */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16,1,0.3,1], delay: 0.4 }}
          className="mt-12 h-px origin-left"
          style={{ background: 'linear-gradient(90deg,#7C3AED,#2563EB,#06B6D4,#F97316)' }}
        />
        <div className="flex justify-between mt-3">
          {stages.map(s => (
            <span key={s.step} className="font-mono text-xs" style={{ color: s.color }}>{s.label}</span>
          ))}
        </div>
      </div>
    </GridBackground>
  )
}
