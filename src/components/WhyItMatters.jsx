import React from 'react'
import { motion } from 'framer-motion'
import { SectionLabel, ScrollReveal, GlassPanel, DataStream } from '../ui/founder-lab/index'

const points = [
  { icon:'🧩', title:'AI literacy is now essential',    color:'#2563EB', stat:'85%', statLabel:'of future jobs require AI skills',            desc:'Every student needs to understand, use, and build with AI — not just consume it.' },
  { icon:'🌍', title:'Schools need visible outcomes',   color:'#06B6D4', stat:'3×',  statLabel:'higher engagement in project-led learning',   desc:'Parents and principals want measurable proof of future-readiness, not just grades.' },
  { icon:'🚀', title:'Students need identity and purpose', color:'#8B5CF6', stat:'92%', statLabel:'of students lack a clear career identity', desc:'They need to know who they are and what they can build — before they graduate.' },
]

export default function WhyItMatters() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{ backgroundColor:'#080C14', backgroundImage:'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize:'32px 32px' }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{ background:'radial-gradient(ellipse 80% 60% at 50% 0%,rgba(239,68,68,0.06),transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <SectionLabel color="#EF4444">The Problem</SectionLabel>
            <h2 className="font-display font-extrabold leading-tight mb-6" style={{ fontSize:'clamp(2rem,5vw,4.5rem)', letterSpacing:'-0.025em', color:'#F1F5F9' }}>
              Schools teach subjects.<br />
              <span style={{ color:'#334155' }}>Not creation journeys.</span>
            </h2>
            <p className="text-lg leading-relaxed mb-8 max-w-lg" style={{ color:'#94A3B8' }}>
              Students learn in isolation. They rarely experience how knowledge becomes a real solution.
              AI Founders Journey bridges that gap — systematically, from Class 6.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full" style={{ background:'#EF4444', boxShadow:'0 0 8px #EF4444' }} />
              <span className="font-mono text-xs tracking-widest uppercase" style={{ color:'#334155' }}>Three gaps we close</span>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-4">
            {points.map((p, i) => (
              <GlassPanel key={i} delay={i * 0.12} glow={p.color} className="p-6" hover={false}>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background:`${p.color}15`, border:`1px solid ${p.color}25` }}>
                    {p.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold mb-1" style={{ color:'#F1F5F9' }}>{p.title}</h3>
                    <p className="text-sm leading-relaxed mb-3" style={{ color:'#94A3B8' }}>{p.desc}</p>
                    <div className="flex items-center gap-3">
                      <span className="font-display font-extrabold text-2xl" style={{ color: p.color }}>{p.stat}</span>
                      <span className="font-mono text-xs" style={{ color:'#64748B' }}>{p.statLabel}</span>
                    </div>
                  </div>
                </div>
                <DataStream color={p.color} height={1} className="mt-5" delay={i * 0.3} />
              </GlassPanel>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
