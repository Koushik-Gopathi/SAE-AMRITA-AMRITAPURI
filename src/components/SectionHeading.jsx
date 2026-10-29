import Reveal from './Reveal.jsx'

export default function SectionHeading({ index, eyebrow, title, children }) {
  return (
    <header className="section-heading">
      <Reveal as="p" className="section-heading__eyebrow">
        <span>{index}</span> {eyebrow}
      </Reveal>
      <Reveal as="h2" className="section-heading__title" delay={0.08}>
        {title}
      </Reveal>
      {children && (
        <Reveal as="p" className="section-heading__intro" delay={0.16}>
          {children}
        </Reveal>
      )}
    </header>
  )
}
