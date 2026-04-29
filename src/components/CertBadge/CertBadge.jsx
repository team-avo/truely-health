import { useInView } from '../../hooks/useInView'
import styles from './CertBadge.module.css'

const certData = {
  IFOS: {
    color: '#003087',
    abbr: 'IFOS',
    full: 'International Fish Oil Standards',
    desc: 'The world\'s most rigorous third-party fish oil testing programme. A 5-Star IFOS score means purity, potency, and oxidation values all meet the highest global standards.',
  },
  GOED: {
    color: '#00843D',
    abbr: 'GOED',
    full: 'Global Organization for EPA & DHA',
    desc: 'GOED membership certifies our commitment to responsible sourcing, sustainable fisheries, and adherence to global quality benchmarks for Omega-3 ingredients.',
  },
  FOS: {
    color: '#C8102E',
    abbr: 'FOS',
    full: 'Friend of the Sea',
    desc: 'FOS certification confirms our raw materials are sourced from sustainable, environmentally responsible fisheries — good for you and good for the ocean.',
  },
}

export default function CertBadge({ name, delay = 0 }) {
  const [ref, inView] = useInView()
  const cert = certData[name] || {}

  return (
    <div
      ref={ref}
      className={`${styles.card} reveal ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className={styles.logoBox} style={{ borderColor: cert.color + '30', background: cert.color + '10' }}>
        <span className={styles.logoText} style={{ color: cert.color }}>{cert.abbr}</span>
        <span className={styles.star}>★★★★★</span>
      </div>
      <div className={styles.content}>
        <p className={styles.full}>{cert.full}</p>
        <p className={styles.desc}>{cert.desc}</p>
      </div>
    </div>
  )
}
