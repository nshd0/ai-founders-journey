import React, { useEffect, useRef } from 'react'

export default function Hero() {
  const headingRef = useRef(null)

  useEffect(() => {
    const el = headingRef.current
    if (el) {
      setTimeout(() => el.classList.add('opacity-100', 'translate-y-0'), 400)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E3A5F] to-[#0F172A]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-innovator/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-creator/10 rounded-full blur-2xl" />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-innovator/60 to-transparent" />
      <div ref={headingRef}
        className="relative z-10 opacity-0 translate-y-8 transition-all duration-700 ease-out max-w-4xl">
        <span className="inline-block text-innovator text-sm font-semibold tracking-widest uppercase mb-4">
          School as a Service
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          From Learners to<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-innovator via-creator to-changemaker">
            Young Founders
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          A school-based journey from AI literacy to real-world, AI-backed solutions.
          Class 6–12 · Role-based · NEP/NCF aligned.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#journey"
            className="bg-innovator text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition-colors text-base">
            Enter the Journey
          </a>
          <a href="#stakeholders"
            className="border border-white/30 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors text-base">
            For Schools
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center pt-2">
          <div className="w-1 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  )
}
