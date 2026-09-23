import { useMemo, useState, useEffect } from 'react'
import { portfolioCategories, projects } from '../data/portfolio.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Portfolio() {
  const [filter, setFilter] = useState('ALL')
  const [active, setActive] = useState(null)
  const { ref, visible } = useReveal()

  const filtered = useMemo(
    () => (filter === 'ALL' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  )

  // Close modal on ESC
  useEffect(() => {
    if (!active) return
    const onKey = (e) => { if (e.key === 'Escape') setActive(null) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  const closeModal = () => setActive(null)

  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <div className={`section-head ${visible ? 'is-visible' : ''}`} ref={ref}>
          <p className="overline">Dự án</p>
          <h2 className="section-title">
            Công việc tôi có thể <span className="accent">cho xem, không chỉ nói</span>
          </h2>
        </div>

        <div className="portfolio__filters">
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'is-active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat === 'ALL' ? 'TẤT CẢ' : cat}
            </button>
          ))}
        </div>

        <div className="portfolio__grid">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={() => setActive(p)} />
          ))}
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={closeModal} />}
    </section>
  )
}

function ProjectCard({ project, onOpen }) {
  const { ref, visible } = useReveal()

  return (
    <article className={`project-card ${project.featured ? 'project-card--featured' : ''} ${visible ? 'is-visible' : ''}`} ref={ref} onClick={onOpen}>
      <div className="project-card__media">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="project-card__img"
        />
        <div className="project-card__tags">
          <span className="project-card__tag">{project.category}</span>
          {project.featured && <span className="project-card__featured">★ NỔI BẬT</span>}
        </div>
        {project.video && (
          <span className="project-card__play">▶</span>
        )}
      </div>
      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>
        <div className="project-card__tools">
          {project.tools.map((t) => (
            <span key={t} className="tool-chip">
              {t}
            </span>
          ))}
        </div>
        <span className="project-card__cta">Xem chi tiết &amp; demo →</span>
      </div>
    </article>
  )
}

function ProjectModal({ project, onClose }) {
  const closeOnBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div className="modal" role="dialog" aria-modal="true" onClick={closeOnBackdrop}>
      <div className="modal__box">
        <button className="modal__close" aria-label="Đóng" onClick={onClose}>
          ×
        </button>
        <div className="modal__media">
          {project.video ? (
            <video
              src={project.video}
              controls
              autoPlay
              playsInline
              className="modal__video"
            />
          ) : (
            <img src={project.image} alt={project.title} />
          )}
        </div>
        <div className="modal__body">
          <div className="modal__tags">
            <span className="modal__tag">{project.category}</span>
            {project.featured && <span className="modal__featured">★ DỰ ÁN TIÊU BIỂU</span>}
          </div>
          <h3 className="modal__title">{project.title}</h3>
          <p className="modal__desc">{project.description}</p>

          {project.highlights && project.highlights.length > 0 && (
            <div className="modal__highlights">
              <h4 className="modal__highlights-title">Điểm nổi bật &amp; Kiến trúc kỹ thuật:</h4>
              <ul className="modal__highlights-list">
                {project.highlights.map((h, idx) => (
                  <li key={idx}>{h}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="modal__tools">
            {project.tools.map((t) => (
              <span key={t} className="tool-chip">
                {t}
              </span>
            ))}
          </div>

          <div className="modal__actions">
            {project.link && project.link !== '#' && (
              <a href={project.link} target="_blank" rel="noreferrer" className="btn btn--primary btn--sm">
                Xem website trực tiếp →
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="btn btn--ghost btn--sm modal__github-btn">
                <span>Mã nguồn GitHub</span> ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
