import { site } from '../data/site.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Contact() {
  const { ref, visible } = useReveal()

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className={`contact__box ${visible ? 'is-visible' : ''}`} ref={ref}>
          <p className="overline">Liên hệ</p>
          <h2 className="section-title">Hãy cùng làm việc</h2>
          <p className="contact__intro">
            Sẵn sàng nhận các vị trí part-time / remote trong lĩnh vực Sales, Chăm sóc khách
            hàng, Marketing và Sáng tạo nội dung bằng AI. Thích nghi nhanh, dễ hợp tác, tập trung
            vào kết quả.
          </p>

          <div className="contact__actions">
            <a href={site.phoneHref} className="btn btn--primary">
              Gọi cho tôi
            </a>
            <a href={site.emailHref} className="btn btn--ghost">
              Gửi Email
            </a>
            <a href={site.cvFile} className="btn btn--outline" download>
              Tải CV
            </a>
          </div>

          <div className="contact__details">
            <div className="contact__detail">
              <span className="contact__label">Điện thoại</span>
              <a href={site.phoneHref} className="contact__value">
                {site.phone}
              </a>
            </div>
            <div className="contact__detail">
              <span className="contact__label">Email</span>
              <a href={site.emailHref} className="contact__value">
                {site.email}
              </a>
            </div>
            <div className="contact__detail">
              <span className="contact__label">Thời gian làm việc</span>
              <span className="contact__value">Part-time / Remote</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
