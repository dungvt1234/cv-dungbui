import { useReveal } from '../hooks/useReveal.js'

export default function About() {
  const { ref, visible } = useReveal()

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className={`about__grid ${visible ? 'is-visible' : ''}`} ref={ref}>
          <div className="about__text">
            <p className="overline">About Me</p>
            <h2 className="section-title">
              Business results first, <span className="accent">AI as the multiplier</span>
            </h2>
            <p>
              I have hands-on experience in <strong>real estate sales</strong> and{' '}
              <strong>building materials distribution</strong>, combined with investing in a business,
              working with people and supervising construction projects.
            </p>
            <p>
              Since 2024 I have invested in a building materials &amp; paint distribution
              business — working with a 3–5 person team, with the business reaching a peak of about{' '}
              <strong>500 million VND/month</strong> in revenue while I oversaw around{' '}
              <strong>6 construction projects per month</strong>.
            </p>
            <p>
              Beyond sales, I use <strong>AI to create short ads, product images, banners and
              marketing campaigns</strong> — and I know my way around web development, AI automation,
              Word and Excel.
            </p>
          </div>

          <div className="about__facts">
            <div className="fact-card">
              <span className="fact-card__label">Currently</span>
              <span className="fact-card__value">Available for part-time / evening work</span>
            </div>
            <div className="fact-card">
              <span className="fact-card__label">Focus</span>
              <span className="fact-card__value">Sales • Marketing • AI Content</span>
            </div>
            <div className="fact-card">
              <span className="fact-card__label">Core strength</span>
              <span className="fact-card__value">Closing deals + producing content with AI</span>
            </div>
            <div className="fact-card">
              <span className="fact-card__label">Location</span>
              <span className="fact-card__value">Vietnam — remote friendly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
