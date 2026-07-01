import React, { useState, useRef } from 'react'
import { useInView } from '../hooks/useInView'

const roles = [
  {
    id: 'innovator', label: 'Innovator', emoji: '🧠', color: 'bg-innovator', border: 'border-innovator', text: 'text-innovator',
    identity: 'The AI and data specialist on every team.',
    contribution: 'Builds and trains AI models, works with data pipelines, designs intelligent features.',
    skills: ['Pattern recognition', 'Data literacy', 'Responsible AI', 'AI feature design']
  },
  {
    id: 'builder', label: 'Builder', emoji: '⚙️', color: 'bg-builder', border: 'border-builder', text: 'text-builder',
    identity: 'The technology and code specialist.',
    contribution: 'Develops the product — app, web, automation, integrations.',
    skills: ['Logic and sequencing', 'Prototyping', 'Tool selection', 'Debugging mindset']
  },
  {
    id: 'creator', label: 'Creator', emoji: '🎨', color: 'bg-creator', border: 'border-creator', text: 'text-creator',
    identity: 'The design and UX specialist.',
    contribution: 'Designs user experience, visuals, interface, and storytelling.',
    skills: ['Visual communication', 'User empathy', 'Storytelling', 'Iteration']
  },
  {
    id: 'strategist', label: 'Strategist', emoji: '📊', color: 'bg-strategist', border: 'border-strategist', text: 'text-strategist',
    identity: 'The business and market specialist.',
    contribution: 'Owns the business model, market research, financials, and pitch.',
    skills: ['Value proposition', 'Audience thinking', 'Pitching', 'Planning']
  },
  {
    id: 'changemaker', label: 'Changemaker', emoji: '🌍', color: 'bg-changemaker', border: 'border-changemaker', text: 'text-changemaker',
    identity: 'The domain and impact specialist.',
    contribution: 'Grounds the team in the real problem, user research, SDG alignment.',
    skills: ['Problem observation', 'Empathy', 'Validation', 'Impact thinking']
  }
]

export default function RoleExplorer() {
  const [active, setActive] = useState(null)
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <section id="roles" ref={ref} className="py-24 px-6 bg-[#F7F5F0]">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-secondary text-sm font-semibold tracking-widest uppercase">Roles</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mt-3 mb-4">
            Five Roles, One Founding Team
          </h2>
          <p className="text-secondary text-lg max-w-xl mx-auto">
            Every student discovers a role. Every prototype team needs all five.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {roles.map((r, i) => (
            <button key={r.id}
              onClick={() => setActive(active === r.id ? null : r.id)}
              className={`rounded-2xl p-6 text-left border-2 transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${
                active === r.id
                  ? `${r.border} bg-white shadow-lg`
                  : 'border-transparent bg-white hover:shadow-md'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="text-3xl mb-3 block">{r.emoji}</span>
              <h3 className={`font-bold text-lg mb-1 ${active === r.id ? r.text : 'text-primary'}`}>
                {r.label}
              </h3>
              <p className="text-secondary text-xs mb-3">{r.identity}</p>
              {active === r.id && (
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <p className="text-sm text-primary mb-3">{r.contribution}</p>
                  <div className="flex flex-wrap gap-1">
                    {r.skills.map(s => (
                      <span key={s} className={`text-xs px-2 py-0.5 rounded-full ${r.color} text-white`}>{s}</span>
                    ))}
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
        <p className="text-center text-secondary text-sm mt-8">Tap a role to explore it →</p>
      </div>
    </section>
  )
}
