import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

// Fades and slides its children up the first time they scroll into view.
export default function Reveal({ as = 'div', delay = 0, y = 40, className, children, ...rest }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
