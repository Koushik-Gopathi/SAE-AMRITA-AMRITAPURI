import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { ventures } from '../data/content.js'

export default function Ventures() {
  const listRef = useRef(null)
  // The red line fills in as the timeline scrolls past the middle of the screen.
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 60%', 'end 60%'] })

  return (
    <section className="section" id="ventures">
      <SectionHeading index="03" eyebrow="Ventures" title="Workshops & events">
        Workshops, trainings and fests the club has run for students across Amritapuri.
      </SectionHeading>

      <ol className="timeline" ref={listRef}>
        <span className="timeline__track" aria-hidden />
        <motion.span className="timeline__fill" style={{ scaleY: scrollYProgress }} aria-hidden />

        {ventures.map((v, i) => (
          <Reveal as="li" key={v.title} className={`timeline__item ${i % 2 ? 'timeline__item--right' : ''}`} y={30}>
            <span className="timeline__dot" aria-hidden />
            <div className="timeline__card">
              <p className="timeline__date">{v.date}</p>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
