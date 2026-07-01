import React, { useRef } from 'react'
import { useInView } from '../hooks/useInView'

const stages = [
  { step: '01', grade: 'Class 9', label: 'Form Teams', icon: '🤝', desc: 'Cross-role teams assemble. Students choose a real-world problem domain and register their founding charter.' },
  { step: '02', grade: 'Class 10', label: 'Validate', icon: '🔍', desc: 'Deep domain research, competitive landscape analysis, user interviews, and a solution blueprint document.' },
  { step: '03', grade: 'Class 11', label: 'Build MVP', icon: '🛠️', desc: 'Teams build a working prototype. Each role owns their domain. Monthly sprint reviews and an Alpha Demo mid-year.' },
  { step: '04', grade: 'Class 12', label: 'Launch', icon: '🚀', desc: 'Final polish, pitch deck, Demo Day, investor panel, and seed funding for selected winning teams.' }
]

export default function Class912() {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <section id="class912" ref={ref} className="py-24 px-6 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <div className={`mb-16 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-innovator text-sm font-semibold tracking-widest uppercase">Class 9–12</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">
            Turn Skills Into Real Solutions
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Four years of venture-building. Real teams. Real problems. Real prototypes. Real Demo Day.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {stages.map((s, i) => (
            <div key={i}
              className={`bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:bg-white/10 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="flex items-start gap-4">
                <div className="text-4xl">{s.icon}</div>
                <div>
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">{s.step} · {s.grade}</span>
                  <h3 className="text-white text-xl font-bold mt-1 mb-3">{s.label}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
