import { useEffect, useRef } from 'react'

// Attaches an IntersectionObserver to a container and adds `.is-visible`
// to any descendant with the `.reveal` class as it scrolls into view.
// Usage: const ref = useScrollReveal(); return <div ref={ref}>...</div>
export function useScrollReveal(deps = []) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const targets = container.querySelectorAll('.reveal')
    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    targets.forEach((el, i) => {
      el.style.setProperty('--stagger-i', i)
      observer.observe(el)
    })

    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return containerRef
}
