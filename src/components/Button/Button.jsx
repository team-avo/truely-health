import { Link } from 'react-router-dom'
import styles from './Button.module.css'

export default function Button({ variant = 'primary', size = 'md', children, onClick, to, href, className = '' }) {
  const cls = `${styles.btn} ${styles[variant]} ${styles[size]} ${className}`

  if (to) return <Link to={to} className={cls}>{children}</Link>
  if (href) return <a href={href} className={cls} target="_blank" rel="noopener noreferrer">{children}</a>
  return <button className={cls} onClick={onClick}>{children}</button>
}
