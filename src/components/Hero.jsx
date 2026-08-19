import { site } from '../data/site.js'
import { useReveal } from '../hooks/useReveal.js'

const heroStats = [
  { value: '500M+', label: 'Business Peak Revenue' },
  { value: '3–5', label: 'Business Team' },
  { value: '6', label: 'Projects / Month' },
]

export default function Hero() {
  const { ref, visible } = useReveal()

  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className={`hero__content ${visible ? 'is-visible' : ''}`} ref={ref}>
          <span className="hero__badge">
            <span className="hero__dot" />
            {site.status}
          </span>
          <h1 className="hero__name">{site.name}</h1>
          <p className="hero__role">{site.role}</p>
          <p className="hero__summary">
            Sales &amp; business professional with hands-on experience in building materials and real
            estate — plus practical AI content, automation and web skills. Looking for part-time /
            evening opportunities where I can create real results.
          </p>
          <div className="hero__actions">
            <a href="#portfolio" className="btn btn--primary">
              View My Work
            </a>
            <a href={site.cvFile} className="btn btn--ghost" download>
              Download CV
            </a>
          </div>
          <div className="hero__stats">
            {heroStats.map((s) => (
              <div key={s.label} className="hero__stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`hero__visual ${visible ? 'is-visible' : ''}`}>
          <div className="hero__photo-frame">
            <img src="/assets/profile.jpg" alt="Bùi Tuấn Dũng — Sales, Marketing & AI Content professional" className="hero__photo" />
          </div>
        </div>
      </div>
    </section>
  )
}
