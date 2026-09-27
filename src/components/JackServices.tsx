import FadeIn from "./FadeIn";

const SERVICES = [
  {
    name: "Phát triển Web",
    description:
      "Website Jamstack, Next.js và Headless CMS cho trường học, spa và thương hiệu — nhanh, chuẩn SEO/GEO, chi phí vận hành 0đ.",
  },
  {
    name: "AI Video & Image",
    description:
      "Video quảng cáo, ảnh sản phẩm studio và content TikTok/Reels sản xuất bằng AI — nhanh, rẻ, không cần buổi chụp thực tế.",
  },
  {
    name: "Marketing & Content",
    description:
      "Kế hoạch chiến dịch, banner và nội dung mạng xã hội đúng insight khách hàng nhờ kinh nghiệm sales thực chiến.",
  },
  {
    name: "Sổ sách & Dữ liệu",
    description:
      "Sổ sách kế toán, quản lý kho công nợ và phân tích dữ liệu bán hàng cho doanh nghiệp nhỏ — chính xác, có hệ thống.",
  },
  {
    name: "Webapp quản lý",
    description:
      "Webapp POS bán hàng, quản lý kho và sản xuất bằng Node.js + SQLite — thao tác nhanh, phù hợp quán F&B và xưởng nhỏ.",
  },
];

/** Services với 5 dịch vụ thật của bạn. */
export default function JackServices() {
  return (
    <section id="services" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-12 md:py-16 font-kanit">
      <FadeIn y={40} duration={0.7}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center mb-8 md:mb-12"
          style={{ fontSize: "clamp(2rem, 7vw, 88px)" }}
        >
          Dịch vụ
        </h2>
      </FadeIn>

      <div className="max-w-4xl mx-auto">
        {SERVICES.map((s, i) => (
          <FadeIn key={s.name} delay={i * 0.1} y={30} duration={0.7}>
            <div
              className="flex items-center gap-5 md:gap-8 py-5 md:py-6"
              style={{ borderTop: "1px solid rgba(12, 12, 12, 0.15)" }}
            >
              <span
                className="font-black text-[#0C0C0C] shrink-0"
                style={{ fontSize: "clamp(2rem, 6vw, 84px)", lineHeight: 1 }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: "clamp(0.95rem, 2vw, 1.6rem)" }}
                >
                  {s.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]"
                  style={{ fontSize: "clamp(0.8rem, 1.5vw, 1.05rem)", opacity: 0.6 }}
                >
                  {s.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
        <div style={{ borderTop: "1px solid rgba(12, 12, 12, 0.15)" }} />
      </div>
    </section>
  );
}
