import React from 'react'

export default function GridBackground({ children, className = '', fine = false, id, style = {} }) {
  return (
    <div
      id={id}
      className={`relative ${className}`}
      style={{
        ...style,
        backgroundImage: fine
          ? 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)'
          : 'linear-gradient(rgba(37,99,235,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(37,99,235,0.05) 1px,transparent 1px)',
        backgroundSize: fine ? '32px 32px' : '64px 64px',
      }}
    >
      <div className="relative z-10">{children}</div>
    </div>
  )
}
