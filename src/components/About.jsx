import { useReveal } from '../hooks/useReveal.js'

export default function About() {
  const { ref, visible } = useReveal()

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className={`about__grid ${visible ? 'is-visible' : ''}`} ref={ref}>
          <div className="about__text">
            <p className="overline">Giới thiệu</p>
            <h2 className="section-title">
              Buổi tối, tôi giúp doanh nghiệp nhỏ{' '}
              <span className="accent">lo phần công nghệ và số liệu</span>
            </h2>
            <p>
              Tôi làm website, webapp quản lý, bảng sổ sách tài chính, phân tích dữ liệu bán hàng
              và nội dung marketing bằng AI — phù hợp với quán, spa, homestay, cửa hàng và doanh
              nghiệp nhỏ.
            </p>
            <p>
              Trước đây tôi từng trực tiếp kinh doanh vật liệu xây dựng &amp; sơn (Jotun, Dulux,
              Kansai) — doanh thu đỉnh khoảng <strong>500 triệu đồng/tháng</strong>, quản lý đội 3–5
              người. Nhờ vậy tôi hiểu việc kinh doanh thực tế của chủ quán, chủ cửa hàng hơn là chỉ
              làm theo yêu cầu kỹ thuật.
            </p>
            <p>
              Tôi có bằng Quản trị kinh doanh (chuyên ngành Kế toán), nên việc làm sổ sách và báo
              cáo tài chính là đúng chuyên môn.
            </p>
            <p>
              Hiện tôi nhận việc vào buổi tối, làm từ xa, giá hợp lý hơn thuê agency.
            </p>
          </div>

          <div className="about__facts">
            <div className="fact-card">
              <span className="fact-card__label">Hiện tại</span>
              <span className="fact-card__value">Nhận việc part-time / buổi tối</span>
            </div>
            <div className="fact-card">
              <span className="fact-card__label">Làm gì</span>
              <span className="fact-card__value">Website • Sổ sách • Phân tích dữ liệu • Nội dung AI</span>
            </div>
            <div className="fact-card">
              <span className="fact-card__label">Kinh nghiệm</span>
              <span className="fact-card__value">Kinh doanh 500 triệu/tháng + bằng Kế toán</span>
            </div>
            <div className="fact-card">
              <span className="fact-card__label">Địa điểm</span>
              <span className="fact-card__value">Việt Nam — làm việc từ xa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
