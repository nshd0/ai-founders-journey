import { useEffect, useState } from 'react'

export function useInView(ref, options = {}) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, ...options }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])

  return inView
}
