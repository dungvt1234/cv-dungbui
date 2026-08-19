import { experience } from '../data/experience.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Experience() {
  const { ref, visible } = useReveal()

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className={`section-head ${visible ? 'is-visible' : ''}`} ref={ref}>
          <p className="overline">Kinh nghiệm</p>
          <h2 className="section-title">
            Thành tích <span className="accent">bán hàng, điều phối và tạo kết quả</span>
          </h2>
        </div>

        <div className="experience__list">
          {experience.map((job, i) => (
            <ExperienceItem key={job.id} job={job} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceItem({ job, index }) {
  const { ref, visible } = useReveal()

  return (
    <article className={`exp-item ${visible ? 'is-visible' : ''}`} ref={ref} style={{ transitionDelay: `${index * 40}ms` }}>
      <div className="exp-item__marker">
        <span className={`exp-item__dot exp-item__dot--${job.type}`} />
      </div>
      <div className="exp-item__card">
        <div className="exp-item__head">
          <h3 className="exp-item__title">{job.title}</h3>
          <span className="exp-item__period">{job.period}</span>
        </div>
        {job.subtitle && <p className="exp-item__subtitle">{job.subtitle}</p>}
        {job.summary && <p className="exp-item__summary">{job.summary}</p>}
        {job.points.length > 0 && (
          <ul className="exp-item__points">
            {job.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}
