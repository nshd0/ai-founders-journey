import React, { useRef } from 'react'
import { useInView } from '../hooks/useInView'

const points = [
  { icon: '🧩', title: 'AI literacy is now essential', desc: 'Every student needs to understand, use, and build with AI.' },
  { icon: '🌍', title: 'Schools need visible outcomes', desc: 'Parents and principals want proof of future-readiness.' },
  { icon: '🚀', title: 'Students need identity and purpose', desc: 'They need to know who they are and what they can build.' }
]

export default function WhyItMatters() {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <section ref={ref} className="py-24 px-6 bg-[#F7F5F0]">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-secondary text-sm font-semibold tracking-widest uppercase">The Problem</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mt-3 mb-6 max-w-3xl leading-tight">
            Schools teach subjects,<br />but not creation journeys.
          </h2>
          <p className="text-secondary text-lg max-w-2xl mb-14">
            Students learn concepts in isolation. They rarely experience how knowledge becomes a real solution.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {points.map((p, i) => (
            <div key={i}
              className={`bg-white rounded-2xl p-8 shadow-sm transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}>
              <span className="text-4xl mb-4 block">{p.icon}</span>
              <h3 className="font-bold text-lg text-primary mb-2">{p.title}</h3>
              <p className="text-secondary text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
