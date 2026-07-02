import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DataStream } from '../ui/founder-lab/index'

const links = [
  { label: 'Journey',   href: '#journey' },
  { label: 'Roles',     href: '#roles' },
  { label: 'Class 6–8', href: '#class68' },
  { label: 'Class 9–12',href: '#class912' },
  { label: 'Impact',    href: '#outcomes' },
  { label: 'Schools',   href: '#stakeholders' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-lab-ink/80 backdrop-blur-glass border-b border-lab-border'
        : 'bg-transparent'
    }`}>
      {scrolled && <DataStream color="#2563EB" height={1} className="absolute bottom-0 left-0 right-0" />}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-lg bg-signal-blue/10 border border-signal-blue/30 flex items-center justify-center">
            <div className="w-2 h-2 rounded-sm bg-signal-blue animate-pulse-glow" />
          </div>
          <span className="font-display font-bold text-lab-white text-sm tracking-tight">
            AI Founders <span className="text-signal-blue">Journey</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.label} href={l.href}
              className="font-mono text-xs text-lab-dim hover:text-lab-white transition-colors tracking-wider uppercase">
              {l.label}
            </a>
          ))}
        </div>
        <a href="#stakeholders"
          className="hidden md:inline-flex items-center gap-2 bg-signal-blue/10 border border-signal-blue/30 text-signal-blue font-mono text-xs font-semibold px-5 py-2 rounded-full hover:bg-signal-blue hover:text-white transition-all duration-300">
          <span className="w-1.5 h-1.5 rounded-full bg-signal-blue animate-pulse" />
          Partner With Us
        </a>
        <button className="md:hidden text-lab-ghost" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="font-mono text-sm">{menuOpen ? '✕' : '☰'}</span>
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-lab-ink/95 backdrop-blur-heavy border-b border-lab-border px-6 pb-6 flex flex-col gap-4"
          >
            {links.map(l => (
              <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
                className="font-mono text-xs text-lab-ghost uppercase tracking-widest py-2 border-b border-lab-border/50">
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
