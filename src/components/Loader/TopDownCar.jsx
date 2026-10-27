// Formula-style car seen from above, centred on (0, 0) and pointing right (+x),
// so it can be placed with translate() and steered with rotate().
export default function TopDownCar() {
  return (
    <g className="top-car">
      {/* tyres */}
      <rect x="-30" y="-19" width="15" height="8" rx="2" fill="#0d0d10" />
      <rect x="-30" y="11" width="15" height="8" rx="2" fill="#0d0d10" />
      <rect x="14" y="-17" width="12" height="6" rx="2" fill="#0d0d10" />
      <rect x="14" y="11" width="12" height="6" rx="2" fill="#0d0d10" />

      {/* rear wing and tail light */}
      <rect x="-36" y="-14" width="6" height="28" rx="1" fill="#f4f4f5" />
      <rect x="-39" y="-2" width="3" height="4" fill="#ff2a1f" className="top-car__tail" />

      {/* body and side pods */}
      <rect x="-20" y="-11" width="20" height="22" rx="5" fill="var(--red)" />
      <path d="M-30 -7 L-6 -9 L4 -5 L30 -3 L37 0 L30 3 L4 5 L-6 9 L-30 7 Z" fill="var(--red)" />
      <path d="M-24 0 L32 0" stroke="#ff5a4f" strokeWidth="1.2" />

      {/* front wing */}
      <rect x="30" y="-15" width="5" height="30" rx="1" fill="#f4f4f5" />

      {/* cockpit and helmet */}
      <ellipse cx="-3" cy="0" rx="8" ry="4.5" fill="#111" />
      <circle cx="-2" cy="0" r="3.2" fill="#f4f4f5" />
    </g>
  )
}
