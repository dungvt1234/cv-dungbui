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
              Kết quả kinh doanh là trên hết, <span className="accent">AI là đòn bẩy</span>
            </h2>
            <p>
              Tôi có kinh nghiệm thực tế trong <strong>phân phối vật liệu xây dựng &amp; sơn</strong>{' '}
              — trực tiếp làm sales, tư vấn khách hàng và phát triển kinh doanh. Bên cạnh đó, tôi
              cũng từng làm <strong>nhân viên kinh doanh bất động sản</strong> (condotel, căn hộ
              thương mại).
            </p>
            <p>
              Từ năm 2024, tôi đầu tư vào doanh nghiệp phân phối vật liệu xây dựng &amp; sơn — làm
              việc cùng đội ngũ 3–5 người, với doanh thu đạt đỉnh khoảng{' '}
              <strong>500 triệu VND/tháng</strong>.
            </p>
            <p>
              Ngoài sales, tôi dùng <strong>AI để tạo video quảng cáo ngắn, ảnh sản phẩm, banner
              và chiến dịch marketing</strong> — đồng thời am hiểu phát triển web, tự động hóa bằng
              AI, Word và Excel.
            </p>
            <p>
              Với tấm bằng <strong>Quản trị kinh doanh (Kế toán)</strong>, tôi có nền tảng về{' '}
              <strong>tài chính và kinh tế</strong> — theo dõi chi phí, định giá và sổ sách tài
              chính — giúp tôi hiểu rõ con số đằng sau mỗi thương vụ kinh doanh hằng ngày.
            </p>
          </div>

          <div className="about__facts">
            <div className="fact-card">
              <span className="fact-card__label">Hiện tại</span>
              <span className="fact-card__value">Sẵn sàng nhận việc part-time / buổi tối</span>
            </div>
            <div className="fact-card">
              <span className="fact-card__label">Trọng tâm</span>
              <span className="fact-card__value">Sales • Marketing • AI Content</span>
            </div>
            <div className="fact-card">
              <span className="fact-card__label">Thế mạnh cốt lõi</span>
              <span className="fact-card__value">Chốt deal + sản xuất nội dung bằng AI</span>
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
