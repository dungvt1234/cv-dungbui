import { useState } from 'react'
import { site } from '../data/site.js'
import { useTypewriter } from '../hooks/useTypewriter.js'
import { useCountUp } from '../hooks/useCountUp.js'

const roles = [
  'Công nghệ & Web Development',
  'Sổ sách & Kế toán',
  'Phân tích dữ liệu',
  'Marketing AI & Content',
  'Sales & Kinh doanh',
]

const heroStats = [
  { value: 10, suffix: '+', label: 'Web & webapp đã làm' },
  { value: 4, suffix: '', label: 'Mảng dịch vụ remote' },
  { value: 500, suffix: 'M+', label: 'Doanh thu đỉnh (VND/tháng)' },
]

function AnimatedStat({ stat, delay }) {
  const { count, ref } = useCountUp(stat.value, { duration: 1800 })
  return (
    <div className="hero__stat" ref={ref} style={{ animationDelay: `${delay}ms` }}>
      <strong>{count}{stat.suffix}</strong>
      <span>{stat.label}</span>
    </div>
  )
}

export default function Hero() {
  const [showCv, setShowCv] = useState(false)
  const typedRole = useTypewriter(roles, { typeSpeed: 70, deleteSpeed: 40, pauseTime: 2200 })

  return (
    <section id="top" className="hero">
      {/* Animated gradient orbs */}
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />
      <div className="hero__orb hero__orb--3" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content is-visible">
          <span className="hero__badge">
            <span className="hero__dot" />
            {site.status}
          </span>
          <h1 className="hero__name">{site.name}</h1>
          <p className="hero__role">
            <span className="typewriter">
              {typedRole}
              <span className="typewriter__cursor" aria-hidden="true">|</span>
            </span>
          </p>
          <p className="hero__summary">
            Làm việc remote, nhận trọn phần <strong>công nghệ &amp; số liệu</strong> cho doanh
            nghiệp nhỏ: website, webapp quản lý, sổ sách kế toán và phân tích dữ liệu bán hàng.
            Kinh nghiệm sales thực chiến giúp hiểu khách hàng và chốt việc đúng trọng tâm.
          </p>
          <div className="hero__actions">
            <a href="#portfolio" className="btn btn--primary btn--glow">
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
            {heroStats.map((s, i) => (
              <AnimatedStat key={s.label} stat={s} delay={i * 100} />
            ))}
          </div>
        </div>

        <div className="hero__visual is-visible">
          <div className="hero__photo-frame">
            <img src="/assets/profile.jpg" alt="Bùi Tuấn Dũng — Công nghệ, Sổ sách & Phân tích dữ liệu" className="hero__photo" />
          </div>
          {/* Floating badges around photo */}
          <div className="hero__floating-badges" aria-hidden="true">
            <span className="floating-badge floating-badge--1">💻 Web Dev</span>
            <span className="floating-badge floating-badge--2">📊 Data</span>
            <span className="floating-badge floating-badge--3">🤖 AI</span>
            <span className="floating-badge floating-badge--4">📈 Sales</span>
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
