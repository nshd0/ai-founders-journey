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
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
      style={scrolled ? {
        background: 'rgba(13,17,23,0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid #1F2D42',
      } : { background: 'transparent' }}
    >
      {scrolled && <DataStream color="#2563EB" height={1} className="absolute bottom-0 left-0 right-0" />}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div style={{ width:28, height:28, borderRadius:8, background:'rgba(37,99,235,0.1)', border:'1px solid rgba(37,99,235,0.3)', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <div style={{ width:8, height:8, borderRadius:4, background:'#2563EB', animation: 'pulseGlow 2s ease-in-out infinite' }} />
          </div>
          <span className="font-display font-bold text-sm" style={{ color: '#F1F5F9' }}>
            AI Founders <span style={{ color:'#2563EB' }}>Journey</span>
          </span>
        </a>
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.label} href={l.href}
              className="font-mono text-xs tracking-widest uppercase transition-colors duration-200 hover:text-white"
              style={{ color: '#64748B' }}>
              {l.label}
            </a>
          ))}
        </div>
        {/* CTA */}
        <a href="#stakeholders"
          className="hidden md:inline-flex items-center gap-2 font-mono text-xs font-semibold px-5 py-2 rounded-full transition-all duration-300 hover:bg-signal-blue hover:text-white"
          style={{ background:'rgba(37,99,235,0.1)', border:'1px solid rgba(37,99,235,0.3)', color:'#2563EB' }}
        >
          <span style={{ width:6, height:6, borderRadius:'50%', background:'#2563EB', display:'inline-block' }} />
          Partner With Us
        </a>
        {/* Mobile toggle */}
        <button className="md:hidden font-mono text-sm" style={{ color:'#94A3B8' }} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden px-6 pb-6 flex flex-col gap-4"
            style={{ background:'rgba(13,17,23,0.95)', backdropFilter:'blur(32px)', borderBottom:'1px solid #1F2D42' }}
          >
            {links.map(l => (
              <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
                className="font-mono text-xs uppercase tracking-widest py-2"
                style={{ color:'#94A3B8', borderBottom:'1px solid rgba(31,45,66,0.5)' }}>
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
