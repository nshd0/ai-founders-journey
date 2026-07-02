import React from 'react'
import { DataStream } from '../ui/founder-lab/index'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#080C14', borderTop: '1px solid #1F2D42' }}>
      <DataStream color="#2563EB" height={1} />
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div style={{ width:28, height:28, borderRadius:8, background:'rgba(37,99,235,0.1)', border:'1px solid rgba(37,99,235,0.3)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <div style={{ width:8, height:8, borderRadius:4, background:'#2563EB' }} />
              </div>
              <span className="font-display font-bold text-sm" style={{ color: '#F1F5F9' }}>AI Founders Journey</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>
              A school-based venture programme taking students from AI literacy to real-world prototypes. Class 6–12.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: '#334155' }}>Navigate</p>
            <div className="flex flex-col gap-2">
              {['#journey','#roles','#class68','#class912','#outcomes','#stakeholders'].map((href, i) => (
                <a key={i} href={href}
                  className="text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: '#64748B' }}>
                  {href.replace('#','').replace(/([a-z])([0-9])/g,'$1 $2').replace(/^./,s=>s.toUpperCase())}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: '#334155' }}>Contact</p>
            <div className="flex flex-col gap-2 text-sm" style={{ color: '#64748B' }}>
              <a href="mailto:naushad@ioe.school" className="hover:text-white transition-colors">naushad@ioe.school</a>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
              <span>IOE · India</span>
            </div>
          </div>
        </div>
        <div style={{ borderTop:'1px solid #1F2D42', paddingTop:'1.5rem', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'1rem' }}>
          <p className="font-mono text-xs" style={{ color: '#334155' }}>
            © {new Date().getFullYear()} AI Founders Journey · IOE · All rights reserved
          </p>
          <p className="font-mono text-xs" style={{ color: '#334155' }}>NEP / NCF Aligned · Class 6–12</p>
        </div>
      </div>
    </footer>
  )
}
