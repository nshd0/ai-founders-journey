import React, { useRef } from 'react'
import { useInView } from '../hooks/useInView'

export default function ClosingVision() {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <section id="closing" ref={ref}
      className="relative py-32 px-6 bg-gradient-to-br from-[#0F172A] via-[#1E3A5F] to-[#0F172A] text-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-innovator/20 rounded-full blur-3xl" />
      </div>
      <div className={`relative z-10 max-w-3xl mx-auto transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}>
        <span className="inline-block text-innovator text-sm font-semibold tracking-widest uppercase mb-6">
          Join the Mission
        </span>
        <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Let's Build the Next Generation of
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-innovator via-creator to-changemaker"> Young Founders</span>
        </h2>
        <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
          Partner with us to turn classrooms into launchpads for future builders, creators, and innovators.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://forms.gle/yourGoogleFormLink"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-innovator text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition-colors animate-pulse-slow">
            Apply as a Pilot School
          </a>
          <a
            href="https://wa.me/919999999999?text=Hi%2C%20I%27m%20interested%20in%20AI%20Founders%20Journey"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/30 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
            WhatsApp Us
          </a>
        </div>
        <p className="text-gray-500 text-sm mt-8">
          Or email us at{' '}
          <a href="mailto:naushad@ioe.school" className="text-innovator hover:underline">naushad@ioe.school</a>
        </p>
      </div>
    </section>
  )
}
