import { useReveal } from '../hooks/useReveal.js'

const cards = [
  {
    title: 'AI Video',
    desc: 'Video quảng cáo dạng ngắn tạo bằng AI cho sản phẩm và thương hiệu — kịch bản, lồng tiếng và hình ảnh.',
    icon: 'M8 5v14l11-7L8 5Z',
  },
  {
    title: 'AI Creative',
    desc: 'Ảnh sản phẩm bằng AI, chỉnh sửa ảnh, banner và creative mạng xã hội — chất lượng studio không cần buổi chụp.',
    icon: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 16a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm-2-10 5 3-5 3V9Z',
  },
  {
    title: 'AI Marketing',
    desc: 'Ý tưởng chiến dịch, lập kế hoạch nội dung và concept quảng cáo — dùng AI để tăng tốc sản xuất nội dung.',
    icon: 'M3 10v4h3l4 4V6L6 10H3Zm18-2v8a2 2 0 0 1-2 2h-2v2h-4v-2h-2l-2-2h6V4h2a2 2 0 0 1 2 2v2Z',
  },
  {
    title: 'AI Automation',
    desc: 'Tự động hóa công việc lặp lại và tối ưu quy trình bằng công cụ AI để nhanh và nhất quán.',
    icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1 5h2v6h-2V7Zm0 8h2v2h-2v-2Z',
  },
]

export default function AISection() {
  const { ref, visible } = useReveal()

  return (
    <section id="ai-marketing" className="section ai">
      <div className="container">
        <div className={`section-head section-head--center ${visible ? 'is-visible' : ''}`} ref={ref}>
          <p className="overline">AI × Marketing</p>
          <h2 className="section-title">
            Kinh nghiệm Sales, <span className="accent">khuếch đại bằng AI</span>
          </h2>
          <p className="section-sub">
            Tôi kết hợp tư duy sales với kỹ năng AI thực tế để sản xuất nội dung và tự động hóa công
            việc — nhanh hơn, rẻ hơn và nhất quán với thương hiệu.
          </p>
        </div>

        <div className="ai__grid">
          {cards.map((c, i) => (
            <AiCard key={c.title} card={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AiCard({ card, index }) {
  const { ref, visible } = useReveal()

  return (
    <div className={`ai-card ${visible ? 'is-visible' : ''}`} ref={ref} style={{ transitionDelay: `${index * 70}ms` }}>
      <span className="ai-card__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d={card.icon} />
        </svg>
      </span>
      <h3>{card.title}</h3>
      <p>{card.desc}</p>
    </div>
  )
}
