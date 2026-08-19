import { site } from '../data/site.js'
import { useReveal } from '../hooks/useReveal.js'

const heroStats = [
  { value: '500M+', label: 'Doanh thu đỉnh' },
  { value: '3–5', label: 'Đội ngũ kinh doanh' },
  { value: '6', label: 'Dự án / tháng' },
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
            Chuyên gia Sales &amp; kinh doanh với kinh nghiệm thực tế trong lĩnh vực vật liệu xây
            dựng và bất động sản — cùng kỹ năng thực tiễn về AI content, automation và web. Tìm kiếm
            cơ hội part-time / buổi tối để tạo ra kết quả thực sự.
          </p>
          <div className="hero__actions">
            <a href="#portfolio" className="btn btn--primary">
              Xem dự án của tôi
            </a>
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
            <img src="/assets/profile.jpg" alt="Bùi Tuấn Dũng — Chuyên gia Sales, Marketing & AI Content" className="hero__photo" />
          </div>
        </div>
      </div>
    </section>
  )
}
