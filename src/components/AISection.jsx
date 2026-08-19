import { useReveal } from '../hooks/useReveal.js'

const cards = [
  {
    title: 'AI Video',
    desc: 'Short-form AI-generated advertising videos for products and brands — script, voiceover and visuals.',
    icon: 'M8 5v14l11-7L8 5Z',
  },
  {
    title: 'AI Creative',
    desc: 'AI product images, photo editing, banner and social media creative — studio quality without a shoot.',
    icon: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 16a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm-2-10 5 3-5 3V9Z',
  },
  {
    title: 'AI Marketing',
    desc: 'Campaign ideas, content planning and ad concepts — using AI to speed up content production.',
    icon: 'M3 10v4h3l4 4V6L6 10H3Zm18-2v8a2 2 0 0 1-2 2h-2v2h-4v-2h-2l-2-2h6V4h2a2 2 0 0 1 2 2v2Z',
  },
  {
    title: 'AI Automation',
    desc: 'Automating repetitive work and optimizing workflows with AI tools for speed and consistency.',
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
            Sales experience, <span className="accent">amplified by AI</span>
          </h2>
          <p className="section-sub">
            I combine a sales mindset with practical AI skills to produce content and automate work —
            faster, cheaper and consistently on-brand.
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
