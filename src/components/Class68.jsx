import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GridBackground, SectionLabel, ScrollReveal, DataStream, SignalLine } from '../ui/founder-lab/index'

const years = [
  {
    grade: 'Class 6', theme: 'Explore', color: '#2563EB',
    phase: 'Foundation',
    desc: 'Students try all five Roles through short challenges and discovery games. No pressure — just finding what lights them up.',
    activities: [
      { label: 'AI Awareness Games', tag: 'Innovator' },
      { label: 'Block Coding Tasks', tag: 'Builder' },
      { label: 'School Problem Spotting', tag: 'Changemaker' },
      { label: 'My Strength Profile', tag: 'All Roles' },
    ],
    output: 'Role Discovery Portfolio',
    duration: '1 Academic Year',
  },
  {
    grade: 'Class 7', theme: 'Deepen', color: '#06B6D4',
    phase: 'Specialisation',
    desc: 'Students select one primary Role and one supporting Role. They work consistently within those identities across all activities.',
    activities: [
      { label: 'Data Sorting Exercises', tag: 'Innovator' },
      { label: 'User Interviews', tag: 'Changemaker' },
      { label: 'Solution Sketch Sprint', tag: 'Creator' },
      { label: 'Team Critique Sessions', tag: 'All Roles' },
    ],
    output: 'Primary Role Declaration',
    duration: '1 Academic Year',
  },
  {
    grade: 'Class 8', theme: 'Apply', color: '#8B5CF6',
    phase: 'Certification',
    desc: 'Students apply their Role identity through structured projects. They validate real problems and complete a mini-pitch.',
    activities: [
      { label: 'AI Project Cycle Challenge', tag: 'All Roles' },
      { label: 'School Improvement Prototype', tag: 'Builder + Creator' },
      { label: 'Impact Pitch (2–3 min)', tag: 'Strategist' },
    ],
    output: 'Role Certification + Portfolio',
    duration: '1 Academic Year',
  },
]

export default function Class68() {
  const [active, setActive] = useState(0)
  const y = years[active]

  return (
    <GridBackground id="class68" className="relative py-28 bg-lab-graphite overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 100% 50%,rgba(6,182,212,0.06),transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <ScrollReveal>
          <SectionLabel color="#06B6D4">Class 6 – 8</SectionLabel>
          <h2 className="text-display-lg font-display font-extrabold text-lab-white mb-4">
            Build Identity, Confidence
            <br /><span className="text-lab-dim">and Core Skills</span>
          </h2>
          <p className="text-lab-ghost text-lg max-w-2xl mb-14">
            Three years of progressive formation — from exploration to specialisation to certification.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-4 mb-8">
          {years.map((yr, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16,1,0.3,1] }}
              whileHover={{ y: -3 }}
              className="relative rounded-panel p-6 text-left overflow-hidden transition-all duration-300"
              style={{
                background: active === i ? `${yr.color}12` : 'rgba(22,29,44,0.7)',
                border: `1.5px solid ${active === i ? yr.color + '50' : 'rgba(255,255,255,0.07)'}`,
                boxShadow: active === i ? `0 0 40px ${yr.color}15` : 'none',
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg,transparent,${yr.color},transparent)`, opacity: active === i ? 1 : 0 }}
              />
              <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: yr.color }}>
                {yr.grade} · {yr.phase}
              </span>
              <h3 className="font-display font-bold text-xl text-lab-white mb-2">{yr.theme}</h3>
              <p className="text-lab-dim text-xs leading-relaxed">{yr.duration}</p>
              <div className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg,transparent,${yr.color}30,transparent)` }} />
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0,  filter: 'blur(0px)' }}
            exit={{   opacity: 0, y: -8,  filter: 'blur(4px)' }}
            transition={{ duration: 0.4, ease: [0.16,1,0.3,1] }}
            className="rounded-panel overflow-hidden"
            style={{
              background: 'rgba(22,29,44,0.8)',
              border: `1px solid ${y.color}25`,
              boxShadow: `0 0 60px ${y.color}08`,
            }}
          >
            <div className="relative grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-lab-border">
                <div className="absolute inset-0 pointer-events-none rounded-panel"
                  style={{ background: `radial-gradient(ellipse 60% 80% at 0% 0%,${y.color}10,transparent)` }} />
                <span className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: y.color }}>
                  {y.grade} · {y.theme}
                </span>
                <p className="text-lab-light text-base leading-relaxed mb-6">{y.desc}</p>
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
                  style={{ background: `${y.color}15`, border: `1px solid ${y.color}30` }}
                >
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: y.color }} />
                  <span className="font-mono text-xs" style={{ color: y.color }}>Output: {y.output}</span>
                </div>
              </div>
              <div className="p-8 md:p-10">
                <span className="font-mono text-xs tracking-widest uppercase text-lab-muted mb-4 block">Activities</span>
                <div className="flex flex-col gap-3">
                  {y.activities.map((a, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: y.color }} />
                        <span className="text-lab-light text-sm">{a.label}</span>
                      </div>
                      <span
                        className="font-mono text-xs px-2 py-0.5 rounded-full flex-shrink-0"
                        style={{ background: `${y.color}15`, color: y.color, border: `1px solid ${y.color}25` }}
                      >
                        {a.tag}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <DataStream color={y.color} height={1} />
          </motion.div>
        </AnimatePresence>
      </div>
    </GridBackground>
  )
}
