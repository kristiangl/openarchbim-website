import { useEffect } from 'react'

// Scroll reveals, a gentle hero parallax and a soft cursor glow on cards.
// Everything is skipped when the visitor prefers reduced motion.
const REVEAL_SELECTORS = [
  '.technical-intro',
  '.technical-list article',
  '.section-heading',
  '.capability-list article',
  '.screenshots-heading',
  '.screen',
  '.story-copy, .support-card',
  '.roadmap-heading, .roadmap-column, .roadmap-cta',
  '.other-projects-heading, .project-card',
  '.download-mark, .download > p, .download h2, .platform-downloads a, .release-info',
]

export function useMotion() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const root = document.documentElement
    const cleanups: Array<() => void> = []

    // Scroll reveals
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' },
    )
    for (const selector of REVEAL_SELECTORS) {
      document.querySelectorAll<HTMLElement>(selector).forEach((el, i) => {
        el.setAttribute('data-reveal', '')
        el.style.setProperty('--reveal-delay', `${(i % 3) * 90}ms`)
        observer.observe(el)
      })
    }
    root.classList.add('js-reveal')
    cleanups.push(() => {
      observer.disconnect()
      root.classList.remove('js-reveal')
    })

    // Hero image drifts slightly slower than the page
    const hero = document.querySelector<HTMLElement>('.hero-visual')
    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        if (hero) hero.style.setProperty('--parallax', `${Math.min(window.scrollY, 900) * 0.06}px`)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    cleanups.push(() => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    })

    // Cursor effects only where there is a real pointer
    if (window.matchMedia('(hover: hover)').matches) {
      document
        .querySelectorAll<HTMLElement>('.technical-list article, .capability-list article')
        .forEach((card) => {
          const move = (e: PointerEvent) => {
            const r = card.getBoundingClientRect()
            card.style.setProperty('--mx', `${e.clientX - r.left}px`)
            card.style.setProperty('--my', `${e.clientY - r.top}px`)
          }
          card.addEventListener('pointermove', move)
          cleanups.push(() => card.removeEventListener('pointermove', move))
        })

      if (hero) {
        const move = (e: PointerEvent) => {
          const r = hero.getBoundingClientRect()
          const x = (e.clientX - r.left) / r.width - 0.5
          const y = (e.clientY - r.top) / r.height - 0.5
          hero.style.setProperty('--tilt-x', `${(x * -10).toFixed(1)}px`)
          hero.style.setProperty('--tilt-y', `${(y * -8).toFixed(1)}px`)
        }
        const leave = () => {
          hero.style.setProperty('--tilt-x', '0px')
          hero.style.setProperty('--tilt-y', '0px')
        }
        hero.addEventListener('pointermove', move)
        hero.addEventListener('pointerleave', leave)
        cleanups.push(() => {
          hero.removeEventListener('pointermove', move)
          hero.removeEventListener('pointerleave', leave)
        })
      }
    }

    return () => cleanups.forEach((fn) => fn())
  }, [])
}
