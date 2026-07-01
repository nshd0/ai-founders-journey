import React, { useRef } from 'react'
import { useInView } from '../hooks/useInView'

const milestones = [
  { grade: 'Class 6', label: 'Explore', desc: 'Try all five Roles through short challenges', color: 'bg-innovator' },
  { grade: 'Class 7', label: 'Deepen', desc: 'Specialise in a primary Role', color: 'bg-builder' },
  { grade: 'Class 8', label: 'Declare', desc: 'Earn Role Certification, team project', color: 'bg-creator' },
  { grade: 'Class 9', label: 'Form Teams', desc: 'Cross-role teams, choose real problem', color: 'bg-strategist' },
  { grade: 'Class 10', label: 'Validate', desc: 'Research, user interviews, solution brief', color: 'bg-changemaker' },
  { grade: 'Class 11', label: 'Build MVP', desc: 'Design, develop, test the prototype', color: 'bg-innovator' },
  { grade: 'Class 12', label: 'Launch', desc: 'Demo Day, pitch, seed funding', color: 'bg-creator' }
]

export default function StudentJourney() {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <section id="journey" ref={ref} className="py-24 px-6 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-innovator text-sm font-semibold tracking-widest uppercase">The Journey</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">
            A 7-Year Journey from Discovery to Demo Day
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From exploration in middle school to prototype creation in senior school.
          </p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-innovator via-creator to-changemaker opacity-40" />
          <div className="grid grid-cols-2 md:grid-cols-7 gap-6">
            {milestones.map((m, i) => (
              <div key={i}
                className={`flex flex-col items-center text-center transition-all duration-500 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}>
                <div className={`w-16 h-16 ${m.color} rounded-full flex items-center justify-center text-white font-bold text-xs mb-3 shadow-lg`}>
                  {m.grade.replace('Class ', 'C')}
                </div>
                <span className="text-white font-semibold text-sm mb-1">{m.label}</span>
                <span className="text-gray-400 text-xs leading-tight">{m.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
