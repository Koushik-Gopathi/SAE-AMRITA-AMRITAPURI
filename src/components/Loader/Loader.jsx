import { useEffect, useRef } from 'react'
import { animate, motion, useMotionValue, useMotionValueEvent, useTransform } from 'framer-motion'
import TopDownCar from './TopDownCar.jsx'
import './Loader.css'

const DRIVE_SECONDS = 3.6
const HOLD_MS = 350
const CLOSE = { duration: 0.9, ease: [0.76, 0, 0.24, 1] }

// The stage is drawn in a 1000 x 600 box that scales to fit the screen.
const CX = 500
const CY = 300
const R = 170
const MARK_R = R + 12 // the rear tyres swing wide of the line the car follows

// The car swoops in from the bottom left, drifts one full donut around the
// centre (anticlockwise on screen), then blasts off to the right. Start and end
// points sit far outside the box so the car is off-screen even on ultra-wide displays.
const ENTRY = `M -700 700 Q 200 ${CY + R} ${CX} ${CY + R}`
const LOOP = `M ${CX} ${CY + R} A ${R} ${R} 0 0 0 ${CX} ${CY - R} A ${R} ${R} 0 0 0 ${CX} ${CY + R}`
const EXIT = `M ${CX} ${CY + R} Q 900 ${CY + R} 2000 100`
const ROUTE = `${ENTRY} ${LOOP.replace('M', 'L')} ${EXIT.replace('M', 'L')}`
const ring = (r) => `M ${CX} ${CY + r} A ${r} ${r} 0 0 0 ${CX} ${CY - r} A ${r} ${r} 0 0 0 ${CX} ${CY + r}`
// one ring per rear tyre
const MARKS = [ring(MARK_R - 12), ring(MARK_R + 12)]

// Share of the animation spent on each part: entry ends at 0.3, the donut at 0.75.
const ENTRY_END = 0.3
const LOOP_END = 0.75

const MAX_DRIFT_DEG = 38
const smoothstep = (t) => {
  const x = Math.min(Math.max(t, 0), 1)
  return x * x * (3 - 2 * x)
}

export default function Loader({ onDone }) {
  // One number (0 → 1) drives the whole animation.
  const progress = useMotionValue(0)
  const onDoneRef = useRef(onDone)
  onDoneRef.current = onDone

  const routeRef = useRef(null)
  const entryRef = useRef(null)
  const loopRef = useRef(null)
  const exitRef = useRef(null)
  const carRef = useRef(null)
  const marksRef = useRef(null)
  const smokeRef = useRef(null)
  const lastPuff = useRef(0)
  const reducedRef = useRef(false)

  // Moves the car, lays tyre marks and puffs smoke for the current progress.
  // Done directly on the SVG nodes so React doesn't re-render 60 times a second.
  useMotionValueEvent(progress, 'change', (p) => {
    const route = routeRef.current
    if (!route) return

    const total = route.getTotalLength()
    const entryLen = entryRef.current.getTotalLength()
    const loopLen = loopRef.current.getTotalLength()
    const s = distanceAlongRoute(p, entryLen, loopLen, exitRef.current.getTotalLength())

    const here = route.getPointAtLength(s)
    const ahead = route.getPointAtLength(Math.min(s + 1, total))
    const behind = route.getPointAtLength(Math.max(s - 1, 0))
    const heading = (Math.atan2(ahead.y - behind.y, ahead.x - behind.x) * 180) / Math.PI

    // How far into the donut we are (0 → 1), and how sideways the car is.
    const loopT = (s - entryLen) / loopLen
    const ramp = 120 / loopLen
    const drift = smoothstep(loopT / ramp) * smoothstep((1 - loopT) / ramp)
    const wobble = Math.sin(loopT * 30) * 3 * drift
    const angle = heading - (MAX_DRIFT_DEG + wobble) * drift

    carRef.current.setAttribute('transform', `translate(${here.x} ${here.y}) rotate(${angle}) scale(1.25)`)

    for (const mark of marksRef.current.children) {
      const len = mark.getTotalLength()
      mark.style.strokeDasharray = len
      mark.style.strokeDashoffset = len * (1 - Math.min(Math.max(loopT, 0), 1))
    }

    const now = performance.now()
    if (drift > 0.35 && !reducedRef.current && now - lastPuff.current > 28) {
      lastPuff.current = now
      const rad = (angle * Math.PI) / 180
      for (const side of [-1, 1]) {
        // rear tyre position, rotated into screen space
        const lx = -28
        const ly = 15 * side
        const x = here.x + (lx * Math.cos(rad) - ly * Math.sin(rad)) * 1.25
        const y = here.y + (lx * Math.sin(rad) + ly * Math.cos(rad)) * 1.25
        spawnPuff(smokeRef.current, x, y)
      }
    }
  })

  // The SAE badge fades up once the car is halfway round the donut.
  const badgeOpacity = useTransform(progress, [0.45, 0.65], [0, 1])
  const badgeScale = useTransform(progress, [0.45, 0.65], [0.85, 1])

  useEffect(() => {
    reducedRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let timer
    const controls = animate(progress, 1, {
      duration: reducedRef.current ? 0.8 : DRIVE_SECONDS,
      ease: 'linear', // speed changes are handled per part in distanceAlongRoute
      onComplete: () => {
        timer = setTimeout(() => onDoneRef.current(), HOLD_MS)
      },
    })
    return () => {
      controls.stop()
      clearTimeout(timer)
    }
  }, [progress])

  return (
    <motion.div
      className="loader"
      role="status"
      aria-label="Loading SAE Amrita"
      initial={{ clipPath: 'circle(150% at 50% 50%)' }}
      exit={{ clipPath: 'circle(0% at 50% 50%)' }}
      transition={CLOSE}
    >
      <svg className="loader__stage" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet">
        <defs>
          <radialGradient id="loader-floor" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1a1a20" />
            <stop offset="100%" stopColor="#0b0b0d" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx={CX} cy={CY} r={R + 90} fill="url(#loader-floor)" />

        {/* measuring paths: never drawn */}
        <path ref={routeRef} d={ROUTE} fill="none" stroke="none" />
        <path ref={entryRef} d={ENTRY} fill="none" stroke="none" />
        <path ref={loopRef} d={LOOP} fill="none" stroke="none" />
        <path ref={exitRef} d={EXIT} fill="none" stroke="none" />

        {/* tyre marks, drawn in as the car goes round */}
        <g ref={marksRef} className="loader__marks">
          {MARKS.map((d) => (
            <path key={d} d={d} fill="none" stroke="#26262d" strokeWidth="8" strokeLinecap="round" />
          ))}
        </g>

        <motion.g style={{ opacity: badgeOpacity, scale: badgeScale, originX: '50%', originY: '50%' }} className="loader__badge">
          <text x={CX} y={CY + 18} textAnchor="middle" className="loader__badge-sae">
            SAE
          </text>
          <text x={CX} y={CY + 60} textAnchor="middle" className="loader__badge-sub">
            AMRITA
          </text>
        </motion.g>

        <g ref={smokeRef} />
        <g ref={carRef} transform="translate(-200 -200)">
          <TopDownCar />
        </g>
      </svg>
    </motion.div>
  )
}

// Turns overall progress (0 → 1) into distance along the route. The donut runs at
// a steady speed; the car brakes smoothly into it and accelerates hard out of it,
// with no sudden jump in speed where the parts meet.
function distanceAlongRoute(p, entryLen, loopLen, exitLen) {
  const loopSpeed = loopLen / (LOOP_END - ENTRY_END)
  // f(t) = a*t + (1 - a)*t^2 covers 0 → 1 with start speed a and end speed 2 - a
  const ease = (t, a) => a * t + (1 - a) * t * t

  if (p < ENTRY_END) {
    const a = 2 - loopSpeed / (entryLen / ENTRY_END)
    return ease(p / ENTRY_END, a) * entryLen
  }
  if (p < LOOP_END) {
    return entryLen + ((p - ENTRY_END) / (LOOP_END - ENTRY_END)) * loopLen
  }
  const a = loopSpeed / (exitLen / (1 - LOOP_END))
  return entryLen + loopLen + ease((p - LOOP_END) / (1 - LOOP_END), a) * exitLen
}

function spawnPuff(layer, x, y) {
  if (!layer) return
  const puff = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
  puff.setAttribute('cx', x + (Math.random() - 0.5) * 6)
  puff.setAttribute('cy', y + (Math.random() - 0.5) * 6)
  puff.setAttribute('r', 5 + Math.random() * 4)
  puff.setAttribute('class', 'loader__puff')
  puff.addEventListener('animationend', () => puff.remove())
  layer.appendChild(puff)
}
