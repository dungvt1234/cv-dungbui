import { useEffect, useState } from 'react'
import { site, navLinks } from '../data/site.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${open ? 'navbar--open' : ''}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand" onClick={close}>
          {site.brandName}
        </a>

        <nav className={`navbar__menu ${open ? 'is-open' : ''}`}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="navbar__link" onClick={close}>
              {l.label}
            </a>
          ))}
          <a href={site.cvFile} className="btn btn--sm navbar__cta" download onClick={close}>
            Tải CV
          </a>
        </nav>

        <button
          className="navbar__toggle"
          aria-label="Chuyển menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
