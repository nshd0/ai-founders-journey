import React, { useState, useEffect } from 'react'

const links = [
  { label: 'Journey', href: '#journey' },
  { label: 'Roles', href: '#roles' },
  { label: 'Class 6–8', href: '#class68' },
  { label: 'Class 9–12', href: '#class912' },
  { label: 'Impact', href: '#outcomes' },
  { label: 'For Schools', href: '#stakeholders' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-primary tracking-tight">
          AI Founders <span className="text-innovator">Journey</span>
        </a>
        <div className="hidden md:flex gap-8">
          {links.map(l => (
            <a key={l.label} href={l.href}
              className="text-sm font-medium text-secondary hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <a href="#stakeholders"
          className="hidden md:inline-flex bg-innovator text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-blue-700 transition-colors">
          Partner With Us
        </a>
        <button className="md:hidden text-primary" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="text-2xl">{menuOpen ? '✕' : '☰'}</span>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md px-6 pb-6 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-primary">{l.label}</a>
          ))}
        </div>
      )}
    </nav>
  )
}
