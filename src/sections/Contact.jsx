import Reveal from '../components/Reveal.jsx'
import { contact } from '../data/content.js'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <Reveal as="p" className="section-heading__eyebrow">
        <span>06</span> Reach us
      </Reveal>
      <Reveal as="h2" className="contact__title" delay={0.08}>
        Let&rsquo;s build <em>something fast.</em>
      </Reveal>

      <div className="contact__grid">
        <Reveal className="contact__block" delay={0.1}>
          <h3>Visit</h3>
          <address>
            <strong>SAE Amrita</strong>
            {contact.address.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
        </Reveal>

        <Reveal className="contact__block" delay={0.18}>
          <h3>Write</h3>
          <a className="contact__email" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </Reveal>

        <Reveal className="contact__block" delay={0.26}>
          <h3>Follow</h3>
          <a className="contact__link" href={contact.facebook} target="_blank" rel="noreferrer">
            Facebook ↗
          </a>
          <a className="contact__link" href={contact.university} target="_blank" rel="noreferrer">
            Amrita University ↗
          </a>
        </Reveal>
      </div>

      <footer className="footer">
        <span>
          SAE<span className="footer__dot">·</span>AMRITA
        </span>
        <span>© {new Date().getFullYear()} Amrita Vishwa Vidyapeetham</span>
      </footer>
    </section>
  )
}
