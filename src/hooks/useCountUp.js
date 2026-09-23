import { useState, useEffect, useRef } from 'react'

/**
 * Count up animation — animates from 0 to target value when element enters viewport
 */
export function useCountUp(target, { duration = 1500, startOnView = true } = {}) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(!startOnView)
  const ref = useRef(null)

  // Intersection observer to trigger when in viewport
  useEffect(() => {
    if (!startOnView || !ref.current) return
    const el = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [startOnView])

  // Animation
  useEffect(() => {
    if (!started) return

    const start = performance.now()
    let raf

    const step = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))

      if (progress < 1) {
        raf = requestAnimationFrame(step)
      }
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [started, target, duration])

  return { count, ref }
}
