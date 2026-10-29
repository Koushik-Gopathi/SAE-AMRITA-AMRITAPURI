import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { triumphs, triumphsEvent, wix } from '../data/content.js'

export default function Triumphs() {
  return (
    <section className="section" id="triumphs">
      <SectionHeading index="04" eyebrow="Triumphs" title="Tier 3 wins">
        {triumphsEvent}
      </SectionHeading>

      <div className="triumphs">
        {triumphs.map((t, i) => (
          <Reveal as="article" key={t.title} className="triumph" delay={i * 0.1}>
            <div className="triumph__image">
              <img src={wix(t.image, 640, 500)} alt={`${t.title} team`} loading="lazy" />
            </div>
            <div className="triumph__body">
              <span className="triumph__badge">Tier 3</span>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
              <p className="triumph__team">{t.team}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
