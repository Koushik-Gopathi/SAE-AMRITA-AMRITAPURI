import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { faculty, students, wix } from '../data/content.js'

export default function Team() {
  return (
    <section className="section" id="team">
      <SectionHeading index="05" eyebrow="Team" title="The people behind it" />

      <h3 className="team__group">Faculty</h3>
      <div className="faculty">
        {faculty.map((f, i) => (
          <Reveal as="article" key={f.name} className="faculty__card" delay={i * 0.1}>
            <div className="faculty__photo">
              <img src={wix(f.image, 480, 360)} alt={f.name} loading="lazy" />
            </div>
            <h4>{f.name}</h4>
            <p className="faculty__role">{f.role}</p>
            <p className="faculty__bio">{f.bio}</p>
          </Reveal>
        ))}
      </div>

      <h3 className="team__group">Student representatives</h3>
      <div className="students">
        {students.map((s, i) => (
          <Reveal as="article" key={s.name} className="student" delay={i * 0.07}>
            <div className="student__photo">
              <img src={wix(s.image, 240, 240)} alt={s.name} loading="lazy" />
            </div>
            <h4>{s.name}</h4>
            <p>{s.role}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
