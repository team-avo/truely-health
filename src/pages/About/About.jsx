import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './About.module.css'

const values = [
  {
    icon: '🔬',
    title: 'Science-Led Formulation',
    desc: 'Advanced technologies like rTG ensure superior absorption — not just standard fish oil in a capsule.',
  },
  {
    icon: '🌍',
    title: 'Global Quality Standards',
    desc: 'Certified raw materials meeting IFOS, GOED, and FOS international benchmarks.',
  },
  {
    icon: '🧪',
    title: 'Purity You Can Trust',
    desc: 'Tested for heavy metals, oxidation, and contaminants before manufacturing begins.',
  },
  {
    icon: '📋',
    title: 'Transparent Sourcing',
    desc: 'Full traceability from ocean to capsule. Every claim is backed by data you can access.',
  },
]

const promise = [
  'Clinically effective dosages designed to deliver real, measurable results',
  'Advanced, high-bioavailability formulations for superior absorption and performance',
  'Globally certified raw materials aligned with IFOS, GOED, and FOS standards',
  'Stringent quality control and testing to ensure unmatched purity, safety, and consistency',
  'Complete transparency — you always know exactly what you\'re putting into your body',
]

export default function About() {
  useEffect(() => { document.title = 'About Truly Health | Science You Can Trust' }, [])

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={`${styles.heroInner} container`}>
          <div className={styles.heroText}>
            <span className={styles.heroLabel}>About Us</span>
            <h1 className={styles.heroTitle}>
              Built on Belief.<br />Backed by Science.
            </h1>
            <p className={styles.heroLead}>
              A premium nutraceutical brand dedicated to delivering high-quality, science-backed supplements that support everyday wellness — formulated using advanced technologies and globally sourced ingredients.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>86%</span>
                <span className={styles.heroStatLabel}>Total Omega-3</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>3</span>
                <span className={styles.heroStatLabel}>Int'l Certifications</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>rTG</span>
                <span className={styles.heroStatLabel}>Gold Standard Form</span>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <img
              src="/assets/images/product-mockup-2.jpg"
              alt="Truly Health RTG 1000 — The Truly Health Standard"
              className={styles.heroImg}
            />
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className={`section ${styles.whoSection}`}>
        <div className="container">
          <div className={styles.whoGrid}>
            <div className={styles.whoContent}>
              <span className={styles.sectionLabel}>Who We Are</span>
              <h2 className="h2">Built on a belief that wellness shouldn't require compromise.</h2>
              <p className={styles.bodyP}>
                Truly Health is a premium nutraceutical brand dedicated to delivering high-quality, science-backed supplements that support everyday wellness. Our products are formulated using advanced technologies and globally sourced ingredients to ensure superior purity, potency, and absorption.
              </p>
              <p className={styles.bodyP}>
                We focus on transparency, rigorous quality testing, and clinically relevant dosages to provide real, effective results. With a commitment to innovation and trust, Truly Health aims to make better health simple, reliable, and accessible for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className={`section ${styles.storySection}`}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div className={styles.storyHead}>
            <span className={styles.sectionLabel}>Our Story</span>
            <h2 className="h2">Born from a simple realisation.</h2>
          </div>
          <div className={styles.storyBlocks}>
            <div className={`${styles.storyBlock} reveal`}>
              <div className={styles.storyBlockIcon}>💡</div>
              <p className={styles.storyBlockText}>
                Truly Health was born from a simple realisation — <strong>most supplements don't deliver what they promise.</strong> Frustrated by inconsistent quality, low-absorption formulas, and a lack of transparency in the industry, we decided to do things differently.
              </p>
            </div>
            <div className={`${styles.storyBlock} reveal reveal-delay-1`}>
              <div className={styles.storyBlockIcon}>🤝</div>
              <p className={styles.storyBlockText}>
                We partnered with globally trusted suppliers, adopted advanced formulation technologies, and committed to strict quality standards to <strong>create a new benchmark in nutraceuticals.</strong>
              </p>
            </div>
            <div className={`${styles.storyBlock} reveal reveal-delay-2`}>
              <div className={styles.storyBlockIcon}>🎯</div>
              <p className={styles.storyBlockText}>
                From sourcing premium marine ingredients to ensuring every capsule meets international purity standards, our journey is driven by one goal: <strong>to bring truly effective health.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className={`section ${styles.missionSection}`}>
        <div className="container">
          <div className={styles.missionInner}>
            <div className={styles.missionContent}>
              <span className={styles.sectionLabelLight}>Our Mission</span>
              <h2 className={styles.missionTitle}>Why we exist</h2>
              <p className={styles.missionP}>
                To empower people to take control of their health with high-quality, scientifically formulated nutraceuticals that are safe, effective, and accessible.
              </p>
              <p className={styles.missionP}>
                We aim to bridge the gap between clinical nutrition and everyday wellness, delivering products that support long-term health, not just short-term trends.
              </p>
            </div>
            <div className={styles.missionVisual}>
              <img
                src="/assets/images/product-mockup-1.jpg"
                alt="RTG 1000 product"
                className={styles.missionImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROMISE */}
      <section className={`section ${styles.promiseSection}`}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div className={styles.promiseHead}>
            <span className={styles.sectionLabel}>Our Promise</span>
            <h2 className="h2">Choosing Truly Health means choosing excellence without compromise.</h2>
          </div>
          <div className={styles.promiseList}>
            {promise.map((p, i) => (
              <div key={i} className={`${styles.promiseItem} reveal`} style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className={styles.promiseCheck}>✓</div>
                <p className={styles.promiseText}>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <div className={styles.valuesHead}>
            <span className={styles.sectionLabel}>Our Values</span>
            <h2 className="h2">Four principles behind every capsule</h2>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <div key={v.title} className={`${styles.valueCard} reveal`} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


{/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <p className={styles.ctaQuote}>
            "At Truly Health, we believe your well-being deserves the highest standards. Because health isn't a choice — it's a lifelong commitment."
          </p>
          <div className={styles.ctaBtns}>
            <Link to="/" className={styles.btnPrimary}>Why Truly Health →</Link>
            <Link to="/report" className={styles.btnOutline}>View Report</Link>
          </div>
        </div>
      </section>
    </>
  )
}
