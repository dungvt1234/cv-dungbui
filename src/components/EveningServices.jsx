const eveningServices = [
  {
    icon: '💻',
    title: 'Công nghệ',
    desc: 'Website giới thiệu / bán hàng — bàn giao trong 1 tuần. Webapp quản lý: bán hàng (POS), kho, công nợ, sản xuất. SEO + Google: đưa web lên Google, khách tìm là thấy.',
    proof: 'Đã làm: web Soyzi, web Fairy Luxury (+SEO), webapp quản lý sản xuất, POS F&B',
  },
  {
    icon: '📒',
    title: 'Sổ sách',
    desc: 'Bảng theo dõi doanh thu – chi phí – lợi nhuận – ROI. Bảng báo giá, bảng giá, chứng từ chuẩn (Excel / Google Sheets) — tự động tính toán, dễ nhìn, dễ kiểm tra.',
    proof: 'Nền tảng: bằng Kế toán (PTIT) + quản lý sổ sách kinh doanh đạt đỉnh 500 triệu/tháng',
  },
  {
    icon: '📊',
    title: 'Phân tích dữ liệu',
    desc: 'Báo cáo bán hàng, khách hàng từ Zalo / Facebook. Dashboard doanh thu, chi phí, lợi nhuận theo tháng. Chỉ ra: món nào chạy, quảng cáo nào hiệu quả, khách nào tiềm năng.',
    proof: 'Đã làm: kế hoạch phân tích dữ liệu Zalo, dashboard tài chính Soyzi, báo cáo phân tích hệ thống',
  },
  {
    icon: '📣',
    title: 'Marketing AI',
    desc: 'Viết bài Facebook / Zalo, dựng video quảng cáo 30–60s TikTok / Reels / Shorts, ảnh sản phẩm & banner bằng AI — làm xong, bàn giao dùng được ngay. Kèm chạy quảng cáo nhỏ + SEO Google Maps / Google Business.',
    proof: 'Đã làm: video AI sản phẩm, creative ảnh AI, banner, kế hoạch chiến dịch Marketing',
  },
]

export default function EveningServices() {
  return (
    <section id="evening-services" className="section evening">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="overline">Dịch vụ buổi tối</p>
          <h2 className="section-title">
            Công nghệ • Sổ sách • Phân tích dữ liệu • Marketing AI
          </h2>
          <p className="section-sub">
            Bốn mảng, một người lo — phù hợp với quán, spa, homestay, cửa hàng và doanh nghiệp nhỏ.
            Làm việc buổi tối, giao đúng hẹn.
          </p>
        </div>

        <div className="evening__grid">
          {eveningServices.map((s) => (
            <article key={s.title} className="evening-card">
              <span className="evening-card__icon" aria-hidden="true">
                {s.icon}
              </span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="evening-card__proof">{s.proof}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
