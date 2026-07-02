import React from 'react'

export default function BentoGrid({ children, className = '' }) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-4 ${className}`}>
      {children}
    </div>
  )
}
