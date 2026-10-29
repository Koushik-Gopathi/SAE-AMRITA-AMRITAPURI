import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading.jsx'
import { projects, series, wix } from '../data/content.js'

const FILTERS = ['all', ...Object.keys(series)]

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.article
      layout
      className="project"
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="project__image">
        <img src={wix(project.image, 640, 440)} alt={`${project.name} vehicle`} loading="lazy" />
        <span className="project__tag">{series[project.series].name}</span>
      </div>

      <div className="project__body">
        <p className="project__date">{project.date}</p>
        <h3 className="project__name">{project.name}</h3>

        {project.highlights.length > 0 ? (
          <ul className="project__highlights">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        ) : (
          <p className="project__soon">Story coming soon</p>
        )}

        {project.story && (
          <>
            <AnimatePresence initial={false}>
              {open && (
                <motion.p
                  className="project__story"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  {project.story}
                </motion.p>
              )}
            </AnimatePresence>
            <button className="project__more" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
              {open ? 'Show less' : 'Read the story'} <span aria-hidden>{open ? '−' : '+'}</span>
            </button>
          </>
        )}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const shown = filter === 'all' ? projects : projects.filter((p) => p.series === filter)

  return (
    <section className="section" id="projects">
      <SectionHeading index="02" eyebrow="Projects" title="Machines we built">
        From formula cars to hybrid trikes and off-road buggies, every vehicle here was designed, fabricated and
        raced by students.
      </SectionHeading>

      <div className="filters" role="tablist">
        {FILTERS.map((key) => (
          <button
            key={key}
            role="tab"
            aria-selected={filter === key}
            className={`filters__btn ${filter === key ? 'is-active' : ''}`}
            onClick={() => setFilter(key)}
          >
            {filter === key && <motion.span layoutId="filter-pill" className="filters__pill" />}
            <span className="filters__label">{key === 'all' ? 'All' : series[key].name}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {filter !== 'all' && (
          <motion.p
            key={filter}
            className="filters__blurb"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {series[filter].blurb}
          </motion.p>
        )}
      </AnimatePresence>

      <motion.div layout className="projects-grid">
        <AnimatePresence>
          {shown.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
