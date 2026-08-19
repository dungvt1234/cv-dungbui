import { useMemo, useState } from 'react'
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
              {cat}
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
    <article className={`project-card ${visible ? 'is-visible' : ''}`} ref={ref} onClick={onOpen}>
      <div className="project-card__media">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="project-card__img"
        />
        <span className="project-card__tag">{project.category}</span>
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
        <span className="project-card__cta">Xem dự án →</span>
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
          <img src={project.image} alt={project.title} />
        </div>
        <div className="modal__body">
          <span className="modal__tag">{project.category}</span>
          <h3 className="modal__title">{project.title}</h3>
          <p className="modal__desc">{project.description}</p>
          <div className="modal__tools">
            {project.tools.map((t) => (
              <span key={t} className="tool-chip">
                {t}
              </span>
            ))}
          </div>
          {project.link && project.link !== '#' && (
            <a href={project.link} target="_blank" rel="noreferrer" className="btn btn--primary btn--sm">
              Xem trực tiếp →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
