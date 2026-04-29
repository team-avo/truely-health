import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>
            <img src="/assets/truly_health_logo_final.png" alt="Truly Health" className={styles.logoImg} />
            <span className={styles.logoText}>truly<strong>health</strong></span>
          </Link>
          <p className={styles.tagline}>Science-led. Purity-first.<br />Transparency always.</p>
          <p className={styles.fssai}>FSSAI Lic. No: 10062002209904</p>
          <p className={styles.madeIn}>Made in India</p>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Pages</h4>
          <ul className={styles.colLinks}>
            <li><Link to="/">Why Truly Health</Link></li>
            <li><Link to="/report">Truly Health Report</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Product</h4>
          <ul className={styles.colLinks}>
            <li><Link to="/">RTG 1000 Omega-3</Link></li>
            <li><Link to="/#supplement-facts">Supplement Facts</Link></li>
            <li><Link to="/#certifications">Certifications</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Quality</h4>
          <ul className={styles.colLinks}>
            <li><Link to="/report#coa">Certificate of Analysis</Link></li>
            <li><Link to="/#certifications">IFOS · GOED · FOS</Link></li>
            <li><Link to="/why-truly-health">Why RTG Form</Link></li>
          </ul>
        </div>

      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>© {new Date().getFullYear()} Truly Health. All rights reserved.</p>
          <p className={styles.disclaimer}>
            These statements have not been evaluated by FSSAI for disease prevention or cure. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  )
}
