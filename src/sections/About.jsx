import { useEffect, useRef } from 'react'
import { animate, useInView } from 'framer-motion'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { about, wix } from '../data/content.js'

// Counts up from 0 to `value` once it scrolls into view.
function Counter({ value, prefix = '', suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  useEffect(() => {
    if (!inView) return
    const from = value > 1000 ? value - 40 : 0
    const controls = animate(from, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${prefix}${Math.round(v)}${suffix}`
      },
    })
    return () => controls.stop()
  }, [inView, value, prefix, suffix])

  return <span ref={ref}>{`${prefix}0${suffix}`}</span>
}

export default function About() {
  return (
    <section className="section" id="about">
      <SectionHeading index="01" eyebrow="About us" title="SAE Amrita Collegiate Club" />

      <div className="about">
        <div className="about__text">
          <Reveal as="p">{about.club}</Reveal>
          <Reveal as="p" delay={0.1} className="about__muted">
            {about.saeindia}
          </Reveal>
        </div>

        <Reveal className="about__image" delay={0.15}>
          <img src={wix('fde18f_8983ad49cad84a0c807cde792ddad5d1.jpg', 900, 600)} alt="Amrita Vishwa Vidyapeetham, Amritapuri campus" loading="lazy" />
        </Reveal>
      </div>

      <div className="stats">
        {about.stats.map((stat, i) => (
          <Reveal key={stat.label} className="stats__item" delay={i * 0.08}>
            <strong>
              <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
            </strong>
            <span>{stat.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
