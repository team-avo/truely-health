import styles from './TestimonialCard.module.css'

export default function TestimonialCard({ name, role, text, rating, initials }) {
  return (
    <div className={styles.card}>
      <div className={styles.stars}>
        {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
      </div>
      <blockquote className={styles.quote}>"{text}"</blockquote>
      <div className={styles.author}>
        <div className={styles.avatar}>{initials}</div>
        <div>
          <p className={styles.name}>{name}</p>
          <p className={styles.role}>{role}</p>
        </div>
      </div>
    </div>
  )
}
