import React from 'react'
import { motion } from 'framer-motion'
import { GridBackground, SectionLabel, ScrollReveal, GlassPanel, DataStream, SignalLine } from '../ui/founder-lab/index'

const points = [
  {
    icon: '🧩',
    title: 'AI literacy is now essential',
    desc: 'Every student needs to understand, use, and build with AI — not just consume it.',
    color: '#2563EB',
    stat: '85%',
    statLabel: 'of future jobs require AI skills',
  },
  {
    icon: '🌍',
    title: 'Schools need visible outcomes',
    desc: 'Parents and principals want measurable proof of future-readiness, not just grades.',
    color: '#06B6D4',
    stat: '3×',
    statLabel: 'higher engagement in project-led learning',
  },
  {
    icon: '🚀',
    title: 'Students need identity and purpose',
    desc: 'They need to know who they are and what they can build — before they graduate.',
    color: '#8B5CF6',
    stat: '92%',
    statLabel: 'of students lack a clear career identity',
  },
]

export default function WhyItMatters() {
  return (
    <GridBackground className="relative py-28 bg-lab-void overflow-hidden" fine>
      {/* Ambient top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%,rgba(37,99,235,0.08),transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <ScrollReveal direction="left">
            <SectionLabel color="#EF4444">The Problem</SectionLabel>
            <h2 className="text-display-lg font-display font-extrabold text-lab-white leading-tight mb-6">
              Schools teach subjects.<br />
              <span className="text-lab-dim">Not creation journeys.</span>
            </h2>
            <p className="text-lab-ghost text-lg leading-relaxed mb-8 max-w-lg">
              Students learn in isolation. They rarely experience how knowledge becomes a real solution.
              AI Founders Journey bridges that gap — systematically, from Class 6.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-signal-red animate-pulse" />
              <span className="font-mono text-xs text-lab-muted tracking-widest uppercase">
                Three gaps we close
              </span>
            </div>
            <SignalLine color="#EF4444" className="mt-4 w-32" />
          </ScrollReveal>

          {/* Right — cards */}
          <div className="flex flex-col gap-4">
            {points.map((p, i) => (
              <GlassPanel
                key={i}
                delay={i * 0.12}
                glow={p.color}
                className="p-6"
              >
                <div className="flex items-start gap-5">
                  <div
                    className="w-12 h-12 rounded-card flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: `${p.color}15`, border: `1px solid ${p.color}25` }}
                  >
                    {p.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-lab-white mb-1">{p.title}</h3>
                    <p className="text-lab-ghost text-sm leading-relaxed mb-3">{p.desc}</p>
                    <div className="flex items-center gap-3">
                      <span className="font-display font-extrabold text-2xl" style={{ color: p.color }}>{p.stat}</span>
                      <span className="font-mono text-xs text-lab-dim">{p.statLabel}</span>
                    </div>
                  </div>
                </div>
                <DataStream color={p.color} height={1} className="mt-5" delay={i * 0.3} />
              </GlassPanel>
            ))}
          </div>
        </div>
      </div>
    </GridBackground>
  )
}
