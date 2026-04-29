import styles from './SectionLabel.module.css'

export default function SectionLabel({ text, align = 'center', light = false }) {
  return (
    <p className={`${styles.label} ${styles[align]} ${light ? styles.light : ''}`}>
      {text}
    </p>
  )
}
