import { useState } from 'react'
import { site } from '../data/site.js'
import { useReveal } from '../hooks/useReveal.js'

const heroStats = [
  { value: '500M+', label: 'Doanh thu đỉnh' },
  { value: '3–5', label: 'Đội ngũ kinh doanh' },
  { value: '6', label: 'Dự án / tháng' },
]

export default function Hero() {
  const { ref, visible } = useReveal()
  const [showCv, setShowCv] = useState(false)

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
            Kinh nghiệm thực tế về sales &amp; kinh doanh trong lĩnh vực vật liệu xây dựng và bất
            động sản — cùng kỹ năng thực tiễn về AI content, automation và web. Tìm kiếm cơ hội
            part-time / buổi tối để tạo ra kết quả thực sự.
          </p>
          <div className="hero__actions">
            <a href="#portfolio" className="btn btn--primary">
              Xem dự án của tôi
            </a>
            <button type="button" className="btn btn--cv" onClick={() => setShowCv(true)}>
              Xem CV
            </button>
            <a href={site.cvFile} className="btn btn--ghost" download>
              Tải CV
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
            <img src="/assets/profile.jpg" alt="Bùi Tuấn Dũng — Sales, Marketing & AI Content" className="hero__photo" />
          </div>
        </div>
      </div>

      {showCv && (
        <div className="modal cv-modal" onClick={() => setShowCv(false)}>
          <div className="modal__box cv-modal__box" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal__close"
              onClick={() => setShowCv(false)}
              aria-label="Đóng CV"
            >
              ×
            </button>
            <iframe
              src={site.cvFile}
              title="CV của Bùi Tuấn Dũng"
              className="cv-modal__frame"
            />
            <div className="cv-modal__footer">
              <a href={site.cvFile} className="btn btn--primary" download>
                Tải CV xuống
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
