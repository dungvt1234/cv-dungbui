import { achievements } from '../data/skills.js'
import { useCountUp } from '../hooks/useCountUp.js'

export default function Achievements() {
  return (
    <section className="achievements" aria-label="Thành tích">
      <div className="container">
        <div className="achievements__grid">
          {achievements.map((a, i) => (
            <AchItem key={a.label} item={a} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AchItem({ item, delay }) {
  const { count, ref } = useCountUp(item.value, { duration: 2000 })

  return (
    <div className="ach-item is-visible" ref={ref} style={{ animationDelay: `${delay}ms` }}>
      <span className="ach-item__value">
        {count}{item.suffix}
      </span>
      <span className="ach-item__label">{item.label}</span>
    </div>
  )
}
