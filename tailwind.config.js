/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* ── Founder-Lab Palette ── */
        lab: {
          void:     '#080C14',
          ink:      '#0D1117',
          graphite: '#111827',
          surface:  '#161D2C',
          panel:    '#1C2535',
          border:   '#1F2D42',
          muted:    '#334155',
          dim:      '#64748B',
          ghost:    '#94A3B8',
          light:    '#CBD5E1',
          white:    '#F1F5F9',
        },
        signal: {
          blue:    '#2563EB',
          cyan:    '#06B6D4',
          teal:    '#14B8A6',
          violet:  '#7C3AED',
          amber:   '#F59E0B',
          coral:   '#F97316',
          red:     '#EF4444',
          green:   '#10B981',
        },
        glow: {
          blue:   'rgba(37,99,235,0.35)',
          cyan:   'rgba(6,182,212,0.35)',
          violet: 'rgba(124,58,237,0.35)',
          amber:  'rgba(245,158,11,0.35)',
        },
        /* ── Role Colors ── */
        innovator:  '#2563EB',
        builder:    '#14B8A6',
        creator:    '#8B5CF6',
        strategist: '#F59E0B',
        changemaker:'#F97316',
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem,8vw,7rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2rem,5vw,4.5rem)', { lineHeight: '1.1',  letterSpacing: '-0.025em' }],
        'display-md': ['clamp(1.5rem,3vw,2.5rem)',{ lineHeight: '1.2',  letterSpacing: '-0.02em' }],
      },
      backgroundImage: {
        'grid-lab':        'linear-gradient(rgba(37,99,235,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(37,99,235,0.04) 1px,transparent 1px)',
        'grid-fine':       'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',
        'radial-glow-blue':'radial-gradient(ellipse 80% 50% at 50% 0%,rgba(37,99,235,0.18),transparent)',
        'radial-glow-cyan':'radial-gradient(ellipse 60% 40% at 80% 50%,rgba(6,182,212,0.12),transparent)',
        'lab-gradient':    'linear-gradient(135deg,#080C14 0%,#0D1117 50%,#080C14 100%)',
        'signal-line':     'linear-gradient(90deg,transparent,rgba(37,99,235,0.8),transparent)',
      },
      backgroundSize: {
        'grid-64': '64px 64px',
        'grid-32': '32px 32px',
      },
      boxShadow: {
        'glass':       '0 4px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
        'glow-blue':   '0 0 24px rgba(37,99,235,0.4), 0 0 48px rgba(37,99,235,0.15)',
        'glow-cyan':   '0 0 24px rgba(6,182,212,0.4), 0 0 48px rgba(6,182,212,0.15)',
        'glow-violet': '0 0 24px rgba(124,58,237,0.4), 0 0 48px rgba(124,58,237,0.15)',
        'glow-amber':  '0 0 24px rgba(245,158,11,0.4), 0 0 48px rgba(245,158,11,0.15)',
        'panel':       '0 1px 0 rgba(255,255,255,0.05), 0 24px 48px rgba(0,0,0,0.5)',
        'node':        '0 0 0 1px rgba(37,99,235,0.3), 0 0 20px rgba(37,99,235,0.2)',
      },
      animation: {
        'fade-up':       'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in':       'fadeIn 0.5s ease forwards',
        'scan-line':     'scanLine 3s linear infinite',
        'data-stream':   'dataStream 2s linear infinite',
        'pulse-glow':    'pulseGlow 2s ease-in-out infinite',
        'orbit':         'orbit 8s linear infinite',
        'flicker':       'flicker 0.15s linear 2',
        'beam':          'beam 4s ease-in-out infinite',
        'float':         'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp:      { '0%':{ opacity:0, transform:'translateY(24px)' }, '100%':{ opacity:1, transform:'translateY(0)' } },
        fadeIn:      { '0%':{ opacity:0 }, '100%':{ opacity:1 } },
        scanLine:    { '0%':{ transform:'translateY(-100%)' }, '100%':{ transform:'translateY(100vh)' } },
        dataStream:  { '0%':{ backgroundPosition:'200% center' }, '100%':{ backgroundPosition:'-200% center' } },
        pulseGlow:   { '0%,100%':{ opacity:0.6 }, '50%':{ opacity:1 } },
        orbit:       { '0%':{ transform:'rotate(0deg) translateX(60px) rotate(0deg)' }, '100%':{ transform:'rotate(360deg) translateX(60px) rotate(-360deg)' } },
        flicker:     { '0%,100%':{ opacity:1 }, '50%':{ opacity:0.4 } },
        beam:        { '0%,100%':{ transform:'scaleX(0)', opacity:0 }, '50%':{ transform:'scaleX(1)', opacity:1 } },
        float:       { '0%,100%':{ transform:'translateY(0)' }, '50%':{ transform:'translateY(-12px)' } },
      },
      transitionTimingFunction: {
        'lab':     'cubic-bezier(0.16,1,0.3,1)',
        'spring':  'cubic-bezier(0.34,1.56,0.64,1)',
      },
      backdropBlur: {
        'xs': '2px',
        'glass': '16px',
        'heavy': '32px',
      },
      borderRadius: {
        'panel': '16px',
        'card':  '12px',
      }
    }
  },
  plugins: []
}
