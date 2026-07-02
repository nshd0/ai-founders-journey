import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionLabel, DataStream, ScrollReveal } from '../ui/founder-lab/index'

const milestones = [
  { grade:'C6',  year:'Class 6',  label:'Explore',    color:'#2563EB', desc:'Try all five Roles through mini-challenges. No pressure — just discovery.',                          output:'Role Discovery Portfolio' },
  { grade:'C7',  year:'Class 7',  label:'Deepen',     color:'#06B6D4', desc:'Select your primary Role and supporting Role. Work consistently in those areas.',                   output:'Primary Role Declaration' },
  { grade:'C8',  year:'Class 8',  label:'Declare',    color:'#14B8A6', desc:'Earn Role Certification. Complete a structured project using your declared strength.',              output:'Role Certification + Portfolio' },
  { grade:'C9',  year:'Class 9',  label:'Form Teams', color:'#7C3AED', desc:'Cross-role founding teams assemble. Choose a real-world problem to solve.',                         output:'Founding Charter' },
  { grade:'C10', year:'Class 10', label:'Validate',   color:'#8B5CF6', desc:'Deep research, user interviews, competitive analysis, solution blueprint.',                          output:'Validated Problem Brief' },
  { grade:'C11', year:'Class 11', label:'Build MVP',  color:'#F59E0B', desc:'Each role owns their domain. Monthly sprints. Alpha Demo mid-year.',                                output:'Working Prototype' },
  { grade:'C12', year:'Class 12', label:'Launch',     color:'#F97316', desc:'Final polish, Demo Day, investor panel, seed funding for selected teams.',                          output:'Demo Day + Seed Funding' },
]

export default function StudentJourney() {
  const [active, setActive] = useState(0)
  const m = milestones[active]

  return (
    <section
      id="journey"
      className="relative py-28 overflow-hidden"
      style={{ backgroundColor:'#0D1117', backgroundImage:'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize:'32px 32px' }}
    >
      <div className="absolute inset-0 pointer-events-none"
        style={{ background:'radial-gradient(ellipse 70% 60% at 50% 50%,rgba(37,99,235,0.06),transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <ScrollReveal>
          <SectionLabel color="#2563EB">The 7-Year Founder Pathway</SectionLabel>
          <h2 className="font-display font-extrabold leading-tight mb-4" style={{ fontSize:'clamp(2rem,5vw,4.5rem)', letterSpacing:'-0.025em', color:'#F1F5F9' }}>
            Discovery to Demo Day
          </h2>
          <p className="text-lg max-w-2xl mb-16" style={{ color:'#94A3B8' }}>
            A continuous journey — from curiosity in middle school to prototype creation in senior school.
          </p>
        </ScrollReveal>

        {/* Node row */}
        <div className="relative mb-10">
          <div className="absolute top-7 left-0 right-0 h-px pointer-events-none"
            style={{ background:'linear-gradient(90deg,transparent,rgba(37,99,235,0.3),rgba(37,99,235,0.5),rgba(37,99,235,0.3),transparent)' }} />
          <div className="grid grid-cols-4 md:grid-cols-7 gap-4 relative">
            {milestones.map((node, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                initial={{ opacity:0, y:20 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ duration:0.4, delay:i*0.08, ease:[0.34,1.56,0.64,1] }}
                whileHover={{ scale:1.1 }}
                whileTap={{ scale:0.95 }}
                className="flex flex-col items-center gap-2 group"
              >
                <div
                  className="relative w-14 h-14 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300"
                  style={{
                    background: active === i ? node.color : 'rgba(255,255,255,0.04)',
                    border: `1.5px solid ${active === i ? node.color : 'rgba(255,255,255,0.1)'}`,
                    boxShadow: active === i ? `0 0 24px ${node.color}60, 0 0 48px ${node.color}20` : 'none',
                    color: active === i ? '#fff' : '#64748B',
                  }}
                >
                  {node.grade}
                  {active === i && (
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ border:`1px solid ${node.color}50` }}
                      animate={{ scale:[1,1.8], opacity:[0.8,0] }}
                      transition={{ duration:1.6, repeat:Infinity }}
                    />
                  )}
                </div>
                <span className="font-mono text-xs transition-colors duration-200"
                  style={{ color: active === i ? '#F1F5F9' : '#334155' }}>
                  {node.label}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity:0, y:16, filter:'blur(4px)' }}
            animate={{ opacity:1, y:0,  filter:'blur(0px)' }}
            exit={{   opacity:0, y:-8,  filter:'blur(4px)' }}
            transition={{ duration:0.4, ease:[0.16,1,0.3,1] }}
            className="relative overflow-hidden"
            style={{ borderRadius:16, background:'rgba(22,29,44,0.85)', border:`1px solid ${m.color}30`, boxShadow:`0 0 60px ${m.color}10`, backdropFilter:'blur(16px)' }}
          >
            <div className="absolute inset-0 pointer-events-none"
              style={{ background:`radial-gradient(ellipse 60% 80% at 0% 50%,${m.color}10,transparent)` }} />
            <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12">
              <div>
                <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color:m.color }}>
                  {m.year} · {m.label}
                </span>
                <h3 className="font-display font-bold mb-4" style={{ fontSize:'clamp(1.5rem,3vw,2.5rem)', color:'#F1F5F9' }}>{m.label}</h3>
                <p className="text-base leading-relaxed" style={{ color:'#94A3B8' }}>{m.desc}</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="rounded-xl p-4" style={{ background:`${m.color}12`, border:`1px solid ${m.color}25` }}>
                  <span className="font-mono text-xs uppercase tracking-widest mb-2 block" style={{ color:m.color }}>Output</span>
                  <span className="font-semibold" style={{ color:'#F1F5F9' }}>{m.output}</span>
                </div>
                <div className="flex gap-2">
                  {milestones.map((_,i) => (
                    <div key={i} className="h-1 flex-1 rounded-full transition-all duration-500"
                      style={{ background: i <= active ? m.color : 'rgba(255,255,255,0.08)' }} />
                  ))}
                </div>
                <span className="font-mono text-xs" style={{ color:'#334155' }}>{active + 1} of {milestones.length} stages</span>
              </div>
            </div>
            <DataStream color={m.color} height={1} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
