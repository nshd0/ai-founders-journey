import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GlassPanel, SectionLabel, DataStream, ScrollReveal, GridBackground } from '../ui/founder-lab/index'

const roles = [
  {
    id: 'innovator', label: 'Innovator', emoji: '🧠', color: '#2563EB', glow: 'rgba(37,99,235,0.3)',
    identity: 'The AI & data specialist on every founding team.',
    contribution: 'Builds AI models, works with data pipelines, designs intelligent product features.',
    skills: ['Pattern recognition', 'Data literacy', 'Responsible AI', 'AI feature design'],
    accent: 'signal-blue',
  },
  {
    id: 'builder', label: 'Builder', emoji: '⚙️', color: '#14B8A6', glow: 'rgba(20,184,166,0.3)',
    identity: 'The technology & code specialist.',
    contribution: 'Develops the product — app, web platform, automation, integrations.',
    skills: ['Logic and sequencing', 'Prototyping', 'Tool selection', 'Debugging mindset'],
    accent: 'signal-teal',
  },
  {
    id: 'creator', label: 'Creator', emoji: '🎨', color: '#8B5CF6', glow: 'rgba(139,92,246,0.3)',
    identity: 'The design & UX specialist.',
    contribution: 'Designs experience, interface, visuals, and storytelling across the product.',
    skills: ['Visual communication', 'User empathy', 'Storytelling', 'Iteration'],
    accent: 'signal-violet',
  },
  {
    id: 'strategist', label: 'Strategist', emoji: '📊', color: '#F59E0B', glow: 'rgba(245,158,11,0.3)',
    identity: 'The business & market specialist.',
    contribution: 'Owns the business model, market research, financials, and investor pitch.',
    skills: ['Value proposition', 'Audience thinking', 'Pitching', 'Planning'],
    accent: 'signal-amber',
  },
  {
    id: 'changemaker', label: 'Changemaker', emoji: '🌍', color: '#F97316', glow: 'rgba(249,115,22,0.3)',
    identity: 'The domain & impact specialist.',
    contribution: 'Grounds the team in real problems, user research, and SDG alignment.',
    skills: ['Problem observation', 'Empathy', 'Validation', 'Impact thinking'],
    accent: 'signal-coral',
  },
]

export default function RoleExplorer() {
  const [active, setActive] = useState(null)

  return (
    <GridBackground
      id="roles"
      className="relative py-28 bg-lab-graphite overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 100%,rgba(37,99,235,0.06),transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <ScrollReveal>
          <SectionLabel color="#8B5CF6">Five Roles</SectionLabel>
          <h2 className="text-display-lg font-display font-extrabold text-lab-white mb-4">
            One Founding Team.<br />Five Distinct Worlds.
          </h2>
          <p className="text-lab-ghost text-lg max-w-xl mb-14">
            Every student discovers a role. Every prototype team needs all five.
          </p>
        </ScrollReveal>

        {/* Role cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {roles.map((r, i) => (
            <motion.button
              key={r.id}
              onClick={() => setActive(active === r.id ? null : r.id)}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16,1,0.3,1] }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative rounded-panel p-6 text-left overflow-hidden group transition-all duration-300"
              style={{
                background: active === r.id ? `${r.color}15` : 'rgba(22,29,44,0.8)',
                border: `1.5px solid ${active === r.id ? r.color + '60' : 'rgba(255,255,255,0.07)'}`,
                boxShadow: active === r.id ? `0 0 40px ${r.color}20` : 'none',
              }}
            >
              {/* Glow top edge */}
              <div
                className="absolute top-0 left-0 right-0 h-px transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg,transparent,${r.color},transparent)`,
                  opacity: active === r.id ? 1 : 0,
                }}
              />
              <span className="text-4xl mb-4 block">{r.emoji}</span>
              <h3 className="font-display font-bold text-lg mb-1 transition-colors duration-200"
                style={{ color: active === r.id ? r.color : '#CBD5E1' }}>
                {r.label}
              </h3>
              <p className="text-lab-dim text-xs leading-relaxed">{r.identity}</p>
              <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg,transparent,${r.color}40,transparent)` }}
              />
            </motion.button>
          ))}
        </div>

        {/* Expanded detail */}
        <AnimatePresence mode="wait">
          {active && (() => {
            const r = roles.find(x => x.id === active)
            return (
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                transition={{ duration: 0.4, ease: [0.16,1,0.3,1] }}
                className="overflow-hidden"
              >
                <div
                  className="rounded-panel p-8 md:p-12 relative overflow-hidden"
                  style={{
                    background: `${r.color}08`,
                    border: `1px solid ${r.color}25`,
                  }}
                >
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse 70% 100% at 0% 50%,${r.color}12,transparent)` }} />
                  <div className="relative grid md:grid-cols-2 gap-8">
                    <div>
                      <span className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: r.color }}>
                        {r.label} Role
                      </span>
                      <p className="text-lab-light text-base mb-6 leading-relaxed">{r.contribution}</p>
                      <div className="flex flex-wrap gap-2">
                        {r.skills.map(s => (
                          <span key={s}
                            className="font-mono text-xs px-3 py-1 rounded-full"
                            style={{ background: `${r.color}18`, border: `1px solid ${r.color}35`, color: r.color }}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4, ease: [0.34,1.56,0.64,1] }}
                        className="relative w-32 h-32 rounded-full flex items-center justify-center text-6xl"
                        style={{ background: `${r.color}15`, border: `2px solid ${r.color}30`, boxShadow: `0 0 60px ${r.color}20` }}
                      >
                        {r.emoji}
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          style={{ border: `1px solid ${r.color}30` }}
                          animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.div>
                    </div>
                  </div>
                  <DataStream color={r.color} height={1} className="mt-8" />
                </div>
              </motion.div>
            )
          })()}
        </AnimatePresence>

        <p className="text-center font-mono text-xs text-lab-muted mt-8 tracking-widest">
          SELECT A ROLE TO EXPLORE ITS WORLD →
        </p>
      </div>
    </GridBackground>
  )
}
