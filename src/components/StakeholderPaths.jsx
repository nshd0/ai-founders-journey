import React, { useState, useRef } from 'react'
import { useInView } from '../hooks/useInView'

const stakeholders = [
  {
    id: 'schools', emoji: '🏫', label: 'For Schools',
    headline: 'A school-ready service, not a one-off programme',
    points: ['Annual subscription model', 'Curriculum and assessments included', 'Role tracking and portfolio tools', 'Showcase and Demo Day support', 'NEP/NCF reporting built in'],
    cta: 'Apply as a Pilot School',
    ctaHref: 'https://forms.gle/yourGoogleFormLink'
  },
  {
    id: 'parents', emoji: '👨‍👩‍👧', label: 'For Parents',
    headline: 'Confidence, creativity, and future readiness',
    points: ['Clear visibility of student progress', 'Skills that matter in the real world', 'Safe, guided, and structured experience', 'Portfolio evidence at every stage', 'Students graduate as capable builders'],
    cta: 'Learn More',
    ctaHref: 'https://wa.me/919999999999?text=Hi%2C%20I%27m%20a%20parent%20interested%20in%20AI%20Founders%20Journey'
  },
  {
    id: 'students', emoji: '🎒', label: 'For Students',
    headline: 'Discover your role. Build something real.',
    points: ['Find your identity as a founder', 'Work in a real team with purpose', 'Build an AI-backed prototype', 'Present at a real Demo Day', 'Earn a portfolio and certification'],
    cta: 'Join the Journey',
    ctaHref: 'https://forms.gle/yourGoogleFormLink'
  },
  {
    id: 'mentors', emoji: '🧑‍💼', label: 'For Mentors',
    headline: 'Shape the next generation of builders',
    points: ['Guide student teams by domain expertise', 'Review prototypes and give feedback', 'Participate in Demo Day judging', 'Flexible commitment — virtual or in-person', 'Make a visible impact on young founders'],
    cta: 'Become a Mentor',
    ctaHref: 'mailto:naushad@ioe.school?subject=Mentor%20Interest'
  },
  {
    id: 'investors', emoji: '💡', label: 'For Investors',
    headline: 'From school projects to seed-ready prototypes',
    points: ['Access early-stage student-built solutions', 'Co-brand the Demo Day experience', 'CSR and impact investment pathway', 'First-look rights on selected prototypes', 'Contribute to India\'s future-skills ecosystem'],
    cta: 'Partner With Us',
    ctaHref: 'mailto:naushad@ioe.school?subject=Investor%20Interest'
  }
]

export default function StakeholderPaths() {
  const [active, setActive] = useState('schools')
  const ref = useRef(null)
  const inView = useInView(ref)
  const current = stakeholders.find(s => s.id === active)

  return (
    <section id="stakeholders" ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-secondary text-sm font-semibold tracking-widest uppercase">Choose Your Path</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mt-3 mb-4">
            Every Stakeholder Has a Role
          </h2>
          <p className="text-secondary text-lg max-w-xl mx-auto">
            Schools, parents, students, mentors, and investors each experience a different layer of the same vision.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {stakeholders.map(s => (
            <button key={s.id}
              onClick={() => setActive(s.id)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${
                active === s.id
                  ? 'bg-innovator text-white shadow-md'
                  : 'bg-[#F7F5F0] text-secondary hover:bg-gray-200'
              }`}>
              {s.emoji} {s.label}
            </button>
          ))}
        </div>
        {current && (
          <div className="bg-[#F7F5F0] rounded-2xl p-10 transition-all duration-300">
            <h3 className="text-2xl font-bold text-primary mb-2">{current.headline}</h3>
            <ul className="mt-6 space-y-3">
              {current.points.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-secondary">
                  <span className="text-innovator mt-1">→</span>
                  <span className="text-sm">{p}</span>
                </li>
              ))}
            </ul>
            <a
              href={current.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-8 bg-innovator text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-blue-700 transition-colors">
              {current.cta} →
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
