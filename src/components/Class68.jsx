import React, { useRef } from 'react'
import { useInView } from '../hooks/useInView'

const years = [
  {
    grade: 'Class 6', theme: 'Explore', color: 'border-innovator text-innovator',
    desc: 'Students try all five Roles through mini-challenges and games. No pressure — just discovery.',
    activities: ['AI awareness games', 'Block coding tasks', 'School problem spotting', 'My Strength Profile'],
    output: 'Role Discovery Portfolio'
  },
  {
    grade: 'Class 7', theme: 'Deepen', color: 'border-builder text-builder',
    desc: 'Students select one primary Role and one supporting Role and work consistently within those areas.',
    activities: ['Data sorting exercises', 'User interviews', 'Solution sketch sprint', 'Team critique sessions'],
    output: 'Primary Role Declaration'
  },
  {
    grade: 'Class 8', theme: 'Apply', color: 'border-creator text-creator',
    desc: 'Students apply their Role identity through structured projects and validate real-world problems.',
    activities: ['AI Project Cycle Challenge', 'School Improvement Prototype', 'Impact Pitch (2–3 min)'],
    output: 'Role Certification + Project Portfolio'
  }
]

export default function Class68() {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <section id="class68" ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className={`mb-14 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-secondary text-sm font-semibold tracking-widest uppercase">Class 6–8</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mt-3 mb-4">
            Build Identity, Confidence, and Core Skills
          </h2>
          <p className="text-secondary text-lg max-w-2xl">
            Three years of progressive skill formation — from exploration to specialisation to application.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {years.map((y, i) => (
            <div key={i}
              className={`border-l-4 ${y.color.split(' ')[0]} bg-[#F7F5F0] rounded-xl p-8 transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}>
              <span className={`text-sm font-bold uppercase tracking-wider ${y.color.split(' ')[1]}`}>{y.grade}</span>
              <h3 className="text-2xl font-extrabold text-primary mt-1 mb-3">{y.theme}</h3>
              <p className="text-secondary text-sm mb-5">{y.desc}</p>
              <ul className="space-y-1 mb-5">
                {y.activities.map(a => (
                  <li key={a} className="text-sm text-primary flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>{a}
                  </li>
                ))}
              </ul>
              <div className="bg-white rounded-lg px-4 py-2 text-xs font-semibold text-secondary">
                Output: {y.output}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
