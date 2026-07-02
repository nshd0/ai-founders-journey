/**
 * Founder-Lab Theme Manifest
 * Single source of truth for all design tokens.
 * Import this anywhere to access the full design language.
 */

export const colors = {
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
  signal: {
    blue:   '#2563EB',
    cyan:   '#06B6D4',
    teal:   '#14B8A6',
    violet: '#7C3AED',
    amber:  '#F59E0B',
    coral:  '#F97316',
  },
}

export const roles = {
  innovator:   { color: '#2563EB', glow: 'rgba(37,99,235,0.35)',  label: 'Innovator',   emoji: '🧠' },
  builder:     { color: '#14B8A6', glow: 'rgba(20,184,166,0.35)', label: 'Builder',     emoji: '⚙️' },
  creator:     { color: '#8B5CF6', glow: 'rgba(139,92,246,0.35)',label: 'Creator',     emoji: '🎨' },
  strategist:  { color: '#F59E0B', glow: 'rgba(245,158,11,0.35)',label: 'Strategist',  emoji: '📊' },
  changemaker: { color: '#F97316', glow: 'rgba(249,115,22,0.35)',label: 'Changemaker', emoji: '🌍' },
}

export const glass = {
  base:    'bg-white/[0.04] backdrop-blur-glass border border-white/[0.07] shadow-glass',
  active:  'bg-white/[0.08] backdrop-blur-glass border border-white/[0.14] shadow-panel',
  hover:   'hover:bg-white/[0.06] hover:border-white/[0.1]',
  panel:   'bg-lab-surface/80 backdrop-blur-glass border border-lab-border shadow-panel',
}

export const motion = {
  duration: { fast: 0.2, base: 0.5, slow: 0.8, crawl: 1.2 },
  ease: {
    lab:    [0.16, 1, 0.3, 1],
    spring: [0.34, 1.56, 0.64, 1],
    out:    [0.0, 0.0, 0.2, 1],
    in:     [0.4, 0.0, 1, 1],
  },
  stagger: { tight: 0.05, base: 0.1, loose: 0.15 },
}

export const typography = {
  display: 'font-display font-extrabold tracking-tight',
  heading: 'font-display font-bold tracking-tight',
  label:   'font-mono text-xs font-semibold tracking-[0.2em] uppercase',
  body:    'font-sans text-base leading-relaxed',
  caption: 'font-sans text-sm text-lab-ghost',
}

export const grid = {
  section: 'max-w-7xl mx-auto px-6 md:px-10',
  cols2:   'grid grid-cols-1 md:grid-cols-2 gap-6',
  cols3:   'grid grid-cols-1 md:grid-cols-3 gap-6',
  bento:   'grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-4',
}
