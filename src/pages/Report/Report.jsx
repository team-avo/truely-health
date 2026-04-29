import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Report.module.css'

const checks = [
  {
    title: 'Potency',
    desc: 'EPA 600 mg · DHA 400 mg per softgel. 86% Total Omega-3 concentration as verified by independent testing.',
  },
  {
    title: 'Purity',
    desc: 'Tested for heavy metals (Mercury, Lead, Arsenic), PCBs, dioxins, and furans — all within or below IFOS limits.',
  },
  {
    title: 'Freshness',
    desc: 'Oxidation markers — Peroxide Value (PV), Anisidine Value (AV), and TOTOX — verified within international standards.',
  },
  {
    title: 'Certification',
    desc: 'IFOS 5-Star rated raw material. GOED compliant. FOS certified for sustainable and responsible sourcing.',
  },
]

const pillars = [
  {
    icon: '🏅',
    title: 'Superior Quality',
    desc: 'IFOS 5-Star rated raw material — the highest rating from the International Fish Oil Standards program, the global gold standard for Omega-3 quality.',
  },
  {
    icon: '🔬',
    title: 'Made with Integrity',
    desc: 'Tested at ISO/IEC 17025 accredited laboratories. Every result is scientifically accurate, reproducible, and internationally recognised.',
  },
  {
    icon: '📋',
    title: 'Product Transparency',
    desc: "Check your product's Certificate of Analysis. Every batch is backed by verifiable data — the same document linked via the QR code on every box.",
  },
]


export default function Report() {
  useEffect(() => { document.title = 'Truly Health Report | Quality & Transparency' }, [])

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={`${styles.heroInner} container`}>
          <span className={styles.heroLabel}>Quality Report</span>
          <h1 className={styles.heroTitle}>Truly Health Report</h1>
          <p className={styles.heroLead}>
            Our commitment to deliver the safest, most effective nutrients possible — verifiable, transparent, and backed by internationally accredited testing.
          </p>
        </div>
      </section>

      {/* SIDE-BY-SIDE: Checklist + CoA */}
      <section className={`section ${styles.mainSection}`} id="coa">
        <div className="container">
          <div className={styles.mainGrid}>

            {/* LEFT — Check your product */}
            <div className={styles.leftCol}>
              <span className={styles.sectionLabel}>Verify Your Product</span>
              <h2 className={styles.mainTitle}>Check Your Product's Test Results</h2>
              <p className={styles.introLead}>
                Transparency is a promise, not a claim. Every batch of Truly Health RTG 1000 is tested at ISO/IEC 17025 accredited laboratories. The Certificate of Analysis is the same document linked via the QR code on every box.
              </p>
              <div className={styles.checkList}>
                {checks.map((c, i) => (
                  <div key={i} className={`${styles.checkItem} reveal`} style={{ transitionDelay: `${i * 0.07}s` }}>
                    <div className={styles.checkMark}>✓</div>
                    <div>
                      <h4 className={styles.checkTitle}>{c.title}</h4>
                      <p className={styles.checkDesc}>{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.coaActions}>
                <a href="/assets/certificate-of-analysis.pdf" download className={styles.coaDownload}>
                  ↓ Download PDF
                </a>
                <a href="/assets/certificate-of-analysis.pdf" target="_blank" rel="noopener noreferrer" className={styles.coaOpen}>
                  Open Full PDF →
                </a>
              </div>
            </div>

            {/* RIGHT — CoA as HTML pages */}
            <div className={styles.rightCol}>
              <span className={styles.sectionLabel}>Raw Materials Report</span>
              <h3 className={styles.coaTitle}>Certificate of Analysis</h3>
              <div className={styles.coaPages}>
                <img src="/assets/coa-page-1.jpg" alt="Certificate of Analysis — Page 1" className={styles.coaPageImg} />
                <img src="/assets/coa-page-2.jpg" alt="Certificate of Analysis — Page 2" className={styles.coaPageImg} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className={`section ${styles.pillarsSection}`}>
        <div className="container">
          <div className={styles.pillarsGrid}>
            {pillars.map((p, i) => (
              <div key={i} className={`${styles.pillarCard} reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className={styles.pillarIcon}>{p.icon}</div>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className={styles.cta}>
        <div className="container">
          <h2 className={styles.ctaTitle}>Ready to experience the difference?</h2>
          <div className={styles.ctaBtns}>
            <Link to="/" className={styles.btnPrimary}>Why Truly Health →</Link>
            <Link to="/about" className={styles.btnOutline}>About Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
