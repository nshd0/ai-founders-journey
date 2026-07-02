import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GridBackground, SectionLabel, ScrollReveal, DataStream } from '../ui/founder-lab/index'

const stakeholders = [
  {
    id: 'schools', emoji: '🏫', label: 'Schools', color: '#2563EB',
    headline: 'A school-ready service, not a one-off programme',
    sub: 'Plug directly into your timetable. Full curriculum, tools, and support included.',
    points: [
      'Annual subscription model — low setup, immediate impact',
      'Curriculum, assessments, and rubrics included',
      'Role tracking, portfolio tools, and progress dashboards',
      'Demo Day infrastructure and showcase support',
      'NEP / NCF aligned reporting built in',
    ],
    cta: 'Apply as a Pilot School',
    ctaHref: 'https://forms.gle/yourGoogleFormLink',
  },
  {
    id: 'parents', emoji: '👨‍👩‍👧', label: 'Parents', color: '#06B6D4',
    headline: 'Confidence, creativity, and future readiness',
    sub: 'Watch your child discover who they are and what they can build — step by step.',
    points: [
      'Clear visibility of your child’s progress and role identity',
      'Skills that matter in the real world — not just marks',
      'Safe, guided, and structured experience throughout',
      'Portfolio evidence at every stage of the journey',
      'Students graduate as capable, confident builders',
    ],
    cta: 'Learn More',
    ctaHref: 'https://wa.me/919999999999?text=Hi%2C%20I%27m%20a%20parent%20interested%20in%20AI%20Founders%20Journey',
  },
  {
    id: 'students', emoji: '🎒', label: 'Students', color: '#8B5CF6',
    headline: 'Discover your role. Build something real.',
    sub: 'You’re not just a student anymore — you’re a founder in training.',
    points: [
      'Find your identity as a builder, creator, or innovator',
      'Work in a real cross-role founding team',
      'Build an AI-backed prototype that solves a real problem',
      'Present at a real Demo Day with an investor panel',
      'Earn a portfolio, certification, and recognition',
    ],
    cta: 'Join the Journey',
    ctaHref: 'https://forms.gle/yourGoogleFormLink',
  },
  {
    id: 'mentors', emoji: '🧑‍💼', label: 'Mentors', color: '#F59E0B',
    headline: 'Shape the next generation of builders',
    sub: 'Bring your domain expertise to student founding teams at a critical moment.',
    points: [
      'Guide student teams through their primary domain',
      'Review prototypes and give structured feedback',
      'Participate in Demo Day judging and coaching',
      'Flexible commitment — virtual or in-person',
      'Make a visible, lasting impact on young founders',
    ],
    cta: 'Become a Mentor',
    ctaHref: 'mailto:naushad@ioe.school?subject=Mentor%20Interest',
  },
  {
    id: 'investors', emoji: '💡', label: 'Investors', color: '#F97316',
    headline: 'From school projects to seed-ready prototypes',
    sub: 'Access India’s earliest-stage innovation pipeline — nurtured over 7 years.',
    points: [
      'Access early-stage student-built solutions from Class 12',
      'Co-brand the Demo Day experience across partner schools',
      'CSR and impact investment pathway with measurable output',
      'First-look rights on selected high-potential prototypes',
      'Contribute to India’s future-skills and EdTech ecosystem',
    ],
    cta: 'Partner With Us',
    ctaHref: 'mailto:naushad@ioe.school?subject=Investor%20Interest',
  },
]

export default function StakeholderPaths() {
  const [active, setActive] = useState('schools')
  const current = stakeholders.find(s => s.id === active)

  return (
    <GridBackground id="stakeholders" className="relative py-28 bg-lab-graphite overflow-hidden" fine>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 0%,rgba(37,99,235,0.07),transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <ScrollReveal>
          <SectionLabel color="#2563EB">Choose Your Path</SectionLabel>
          <h2 className="text-display-lg font-display font-extrabold text-lab-white mb-4">
            Every Stakeholder<br />
            <span className="text-lab-dim">Has a Role Here</span>
          </h2>
          <p className="text-lab-ghost text-lg max-w-xl mb-12">
            Schools, parents, students, mentors, and investors each have their own layer in this vision.
          </p>
        </ScrollReveal>

        {/* Tab strip */}
        <div className="flex flex-wrap gap-2 mb-8">
          {stakeholders.map((s, i) => (
            <motion.button
              key={s.id}
              onClick={() => setActive(s.id)}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -2 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-semibold transition-all duration-200"
              style={{
                background: active === s.id ? `${s.color}20` : 'rgba(255,255,255,0.04)',
                border: `1px solid ${active === s.id ? s.color + '60' : 'rgba(255,255,255,0.08)'}`,
                color: active === s.id ? s.color : '#64748B',
                boxShadow: active === s.id ? `0 0 20px ${s.color}15` : 'none',
              }}
            >
              <span>{s.emoji}</span>
              <span className="tracking-widest uppercase">{s.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Panel */}
        <AnimatePresence mode="wait">
          {current && (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
              transition={{ duration: 0.4, ease: [0.16,1,0.3,1] }}
              className="rounded-panel overflow-hidden"
              style={{
                background: 'rgba(22,29,44,0.85)',
                border: `1px solid ${current.color}25`,
                boxShadow: `0 0 60px ${current.color}08`,
              }}
            >
              <div className="relative grid md:grid-cols-2 gap-0">
                <div className="relative p-8 md:p-10 border-b md:border-b-0 md:border-r border-lab-border overflow-hidden">
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse 80% 80% at 0% 0%,${current.color}10,transparent)` }} />
                  <div className="relative">
                    <span className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: current.color }}>
                      {current.emoji} {current.label}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-lab-white mb-3">{current.headline}</h3>
                    <p className="text-lab-ghost text-sm leading-relaxed mb-8">{current.sub}</p>
                    <motion.a
                      href={current.ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04, boxShadow: `0 0 32px ${current.color}50` }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300"
                      style={{ background: current.color, color: '#fff' }}
                    >
                      {current.cta} →
                    </motion.a>
                  </div>
                </div>
                <div className="p-8 md:p-10">
                  <span className="font-mono text-xs tracking-widest uppercase text-lab-muted mb-5 block">What you get</span>
                  <ul className="flex flex-col gap-3">
                    {current.points.map((p, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 }}
                        className="flex items-start gap-3"
                      >
                        <span className="font-mono text-xs mt-0.5 flex-shrink-0" style={{ color: current.color }}>→</span>
                        <span className="text-lab-ghost text-sm leading-relaxed">{p}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
              <DataStream color={current.color} height={1} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </GridBackground>
  )
}
