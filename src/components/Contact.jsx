import { site } from '../data/site.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Contact() {
  const { ref, visible } = useReveal()

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className={`contact__box ${visible ? 'is-visible' : ''}`} ref={ref}>
          <p className="overline">Contact</p>
          <h2 className="section-title">Let's work together</h2>
          <p className="contact__intro">
            Available for part-time / evening roles in Sales, Customer Service, Marketing and AI
            Content Creation. Quick to adapt, easy to work with, focused on results.
          </p>

          <div className="contact__actions">
            <a href={site.phoneHref} className="btn btn--primary">
              Call Me
            </a>
            <a href={site.emailHref} className="btn btn--ghost">
              Email Me
            </a>
            <a href={site.cvFile} className="btn btn--outline" download>
              Download CV
            </a>
          </div>

          <div className="contact__details">
            <div className="contact__detail">
              <span className="contact__label">Phone</span>
              <a href={site.phoneHref} className="contact__value">
                {site.phone}
              </a>
            </div>
            <div className="contact__detail">
              <span className="contact__label">Email</span>
              <a href={site.emailHref} className="contact__value">
                {site.email}
              </a>
            </div>
            <div className="contact__detail">
              <span className="contact__label">Availability</span>
              <span className="contact__value">Part-time / Evening</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
