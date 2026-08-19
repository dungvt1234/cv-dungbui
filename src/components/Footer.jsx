import { site } from '../data/site.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__brand">{site.brandName}</span>
        <span className="footer__copy">
          © {year} {site.name}. Sales • Marketing • AI Content &amp; Automation.
        </span>
        <div className="footer__links">
          <a href={site.emailHref}>Email</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
