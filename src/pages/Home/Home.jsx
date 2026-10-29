import { motion } from 'framer-motion'
import Nav from '../../components/Nav/Nav.jsx'
import About from '../../sections/About.jsx'
import Projects from '../../sections/Projects.jsx'
import Ventures from '../../sections/Ventures.jsx'
import Triumphs from '../../sections/Triumphs.jsx'
import Team from '../../sections/Team.jsx'
import Contact from '../../sections/Contact.jsx'
import '../../sections/sections.css'
import './Home.css'

const TITLE = ['SAE', 'WEBSITE']
const MARQUEE = ['Design', 'Build', 'Race', 'Repeat', 'Since 2009', 'Amritapuri']
const EASE = [0.22, 1, 0.36, 1]

export default function Home({ ready }) {
  // Everything waits in its "hidden" state until the loader has finished.
  const state = ready ? 'shown' : 'hidden'

  return (
    <>
      <Nav ready={ready} />

      <div className="home" id="home">
        <div className="home__grid" aria-hidden />
        <div className="home__glow" aria-hidden />

        <main className="hero">
          <motion.p
            className="hero__eyebrow"
            initial="hidden"
            animate={state}
            variants={{ hidden: { opacity: 0, x: -20 }, shown: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.35 }}
          >
            <span className="hero__eyebrow-line" /> Amrita Collegiate Club · SAEINDIA
          </motion.p>

          <h1 className="hero__title" aria-label={TITLE.join(' ')}>
            {TITLE.map((word, w) => (
              <span key={word} className="hero__word" aria-hidden>
                {word.split('').map((char, c) => (
                  <span key={c} className="hero__char-mask">
                    <motion.span
                      className={w === 1 ? 'hero__char hero__char--outline' : 'hero__char'}
                      initial="hidden"
                      animate={state}
                      variants={{ hidden: { y: '110%' }, shown: { y: '0%' } }}
                      transition={{ duration: 0.9, ease: EASE, delay: 0.2 + (w * 3 + c) * 0.05 }}
                    >
                      {char}
                    </motion.span>
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            className="hero__subtitle"
            initial="hidden"
            animate={state}
            variants={{ hidden: { opacity: 0, y: 20 }, shown: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.9 }}
          >
            Engineering the future of mobility — designed, built and raced by students of
            Amrita Vishwa Vidyapeetham since 2009.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial="hidden"
            animate={state}
            variants={{ hidden: { opacity: 0, y: 20 }, shown: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease: EASE, delay: 1.05 }}
          >
            <a href="#projects" className="btn btn--primary">
              Explore projects
            </a>
            <a href="#about" className="btn btn--ghost">
              About us
            </a>
          </motion.div>
        </main>

        <motion.div
          className="home__scroll"
          initial="hidden"
          animate={state}
          variants={{ hidden: { opacity: 0 }, shown: { opacity: 1 } }}
          transition={{ duration: 1, delay: 1.4 }}
          aria-hidden
        >
          <span>Scroll</span>
          <i />
        </motion.div>
      </div>

      <div className="marquee" aria-hidden>
        <div className="marquee__track">
          {/* two copies so the strip can loop seamlessly */}
          {[...MARQUEE, ...MARQUEE].map((word, i) => (
            <span key={i}>{word}</span>
          ))}
        </div>
      </div>

      <About />
      <Projects />
      <Ventures />
      <Triumphs />
      <Team />
      <Contact />
    </>
  )
}
