import { skillGroups } from '../data/skills.js'
import { useReveal } from '../hooks/useReveal.js'

const icons = {
  handshake: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm-1-12h2v6h-2zm0 8h2v2h-2z',
  chart: 'M4 20V10h3v10H4Zm6 0V4h3v16h-3Zm6 0v-7h3v7h-3Z',
  megaphone: 'M3 10v4h3l4 4V6L6 10H3Zm18-2v8a2 2 0 0 1-2 2h-2v2h-4v-2h-2l-2-2h6V4h2a2 2 0 0 1 2 2v2Z',
  cpu: 'M9 9h6v6H9V9Zm13 1h-2v4h2v2h-2v3a2 2 0 0 1-2 2h-3v2h-2v-2h-4v2H9v-2H6a2 2 0 0 1-2-2v-3H2v-2h2v-4H2V8h2V5a2 2 0 0 1 2-2h3V1h2v2h4V1h2v2h3a2 2 0 0 1 2 2v3h2v2Z',
}

export default function Skills() {
  const { ref, visible } = useReveal()

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className={`section-head ${visible ? 'is-visible' : ''}`} ref={ref}>
          <p className="overline">Skills</p>
          <h2 className="section-title">
            A practical <span className="accent">skill set</span> built from real work
          </h2>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <SkillGroup key={group.id} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillGroup({ group, index }) {
  const { ref, visible } = useReveal()

  return (
    <div className={`skill-group ${visible ? 'is-visible' : ''}`} ref={ref} style={{ transitionDelay: `${index * 60}ms` }}>
      <div className="skill-group__head">
        <span className="skill-group__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d={icons[group.icon] || icons.chart} />
          </svg>
        </span>
        <h3>{group.title}</h3>
      </div>
      <ul className="skill-group__list">
        {group.skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </div>
  )
}
