import React, { useRef } from 'react'
import { useInView } from '../hooks/useInView'

const outcomes = [
  { emoji: '🤝', label: 'Collaborators' },
  { emoji: '🔍', label: 'Problem Solvers' },
  { emoji: '🎨', label: 'Creators' },
  { emoji: '📣', label: 'Communicators' },
  { emoji: '🚀', label: 'Young Founders' }
]

const schoolBenefits = [
  'Future-ready student outcomes',
  'Strong parent engagement',
  'Measurable project portfolios',
  'Innovation culture on campus',
  'Brand differentiation for the school'
]

export default function Outcomes() {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <section id="outcomes" ref={ref} className="py-24 px-6 bg-[#F7F5F0]">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-secondary text-sm font-semibold tracking-widest uppercase">Outcomes</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mt-3 mb-4">
            What Students Become by Class 12
          </h2>
          <p className="text-secondary text-lg max-w-xl mx-auto">
            They graduate with skills, portfolios, and a real product journey.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {outcomes.map((o, i) => (
            <div key={i}
              className={`bg-white rounded-2xl px-8 py-6 shadow-sm text-center w-40 transition-all duration-500 ${
                inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}>
              <span className="text-4xl block mb-2">{o.emoji}</span>
              <span className="font-semibold text-primary text-sm">{o.label}</span>
            </div>
          ))}
        </div>
        <div className={`bg-white rounded-2xl p-10 shadow-sm transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-2xl font-bold text-primary mb-6">A High-Visibility Innovation Layer for Schools</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {schoolBenefits.map((b, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-innovator flex-shrink-0" />
                <span className="text-secondary text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
