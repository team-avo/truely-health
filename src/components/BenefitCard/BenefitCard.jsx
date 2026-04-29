import { useInView } from '../../hooks/useInView'
import styles from './BenefitCard.module.css'

export default function BenefitCard({ icon, title, points, delay = 0 }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`${styles.card} reveal ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className={styles.iconWrap}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.points}>
        {points.map((p, i) => (
          <li key={i} className={styles.point}>
            <span className={styles.dot} />
            {p}
          </li>
        ))}
      </ul>
    </div>
  )
}
