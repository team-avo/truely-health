import { useState } from 'react'
import styles from './FAQAccordion.module.css'

export default function FAQAccordion({ items }) {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <div className={styles.wrap}>
      {items.map((item, i) => (
        <div key={i} className={`${styles.item} ${openIdx === i ? styles.open : ''}`}>
          <button
            className={styles.question}
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            aria-expanded={openIdx === i}
          >
            <span>{item.q}</span>
            <span className={styles.icon} aria-hidden="true">{openIdx === i ? '−' : '+'}</span>
          </button>
          <div className={styles.answer}>
            <p className={styles.answerText}>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
