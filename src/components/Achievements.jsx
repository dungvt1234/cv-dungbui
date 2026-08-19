import { achievements } from '../data/skills.js'
import { useReveal, useCounter } from '../hooks/useReveal.js'

function AchievementItem({ item }) {
  const { ref, visible } = useReveal()
  const value = useCounter(item.value, { start: visible })

  const display =
    item.suffix === '–5' ? `${value}–5` : `${value}${item.suffix}`

  return (
    <div className={`ach-item ${visible ? 'is-visible' : ''}`} ref={ref}>
      <strong className="ach-item__value">{display}</strong>
      <span className="ach-item__label">{item.label}</span>
    </div>
  )
}

export default function Achievements() {
  const { ref, visible } = useReveal()

  return (
    <section className="section achievements">
      <div className="container">
        <div className={`achievements__grid ${visible ? 'is-visible' : ''}`} ref={ref}>
          {achievements.map((a) => (
            <AchievementItem key={a.label} item={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
