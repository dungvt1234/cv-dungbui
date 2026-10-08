import FadeIn from "./FadeIn";

const SERVICES = [
  {
    name: "Website & Landing Page",
    description: "Thiết kế và phát triển website giới thiệu doanh nghiệp, tối ưu trải nghiệm mobile, nội dung và SEO kỹ thuật cơ bản.",
  },
  {
    name: "Webapp quản lý",
    description: "Xây dựng MVP theo quy trình thực tế: bán hàng, nhập xuất kho, quản lý dữ liệu và dashboard. Phạm vi và bảo mật được xác nhận trước khi triển khai.",
  },
  {
    name: "AI & Workflow Automation",
    description: "Khảo sát và thử nghiệm quy trình tự động hóa lead, báo cáo, phân loại dữ liệu và tích hợp API; có kiểm tra đầu ra và phương án xử lý lỗi.",
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
