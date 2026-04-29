import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './WhyTrulyHealth.module.css'
import shopStyles from '../Shop/Shop.module.css'

const facts = [
  { label: 'Highly Purified Fish Oil', value: '1250 mg', sub: 'RTG Form' },
  { label: 'Total Omega-3', value: '1075 mg', sub: '86% concentration' },
  { label: 'EPA (Eicosapentaenoic Acid)', value: '600 mg', sub: 'per softgel' },
  { label: 'DHA (Docosahexaenoic Acid)', value: '400 mg', sub: 'per softgel' },
  { label: 'Mixed Tocotrienols', value: '3.75 mg', sub: 'natural antioxidant' },
]

const benefits = [
  {
    icon: '❤️',
    title: 'Heart Health',
    desc: 'Formulated to help maintain healthy cholesterol balance and promote optimal cardiovascular function for long-term heart wellness.',
  },
  {
    icon: '🧠',
    title: 'Brain & Cognitive Performance',
    desc: 'Rich in DHA, a key structural component of the brain, supporting memory, focus, and overall cognitive clarity.',
  },
  {
    icon: '🦴',
    title: 'Joint Comfort & Mobility',
    desc: 'Helps support joint flexibility, ease stiffness, and promote smooth movement — ideal for maintaining an active, healthy lifestyle.',
  },
  {
    icon: '👁️',
    title: 'Visual Health',
    desc: 'DHA contributes to the maintenance of normal vision and supports overall eye health.',
  },
]

export default function WhyTrulyHealth() {
  useEffect(() => { document.title = 'Truly Health RTG 1000 | Science You Can Trust' }, [])

  return (
    <>
      {/* PRODUCT HERO */}
      <section className={shopStyles.hero}>
        <div className={`${shopStyles.heroInner} container`}>
          <div className={shopStyles.heroContent}>
            <span className={shopStyles.badge}>Now Available in India</span>
            <h1 className={shopStyles.heroTitle}>
              RTG 1000<br />
              <span className={shopStyles.heroSub}>Ultra-Pure Omega-3 Fish Oil</span>
            </h1>
            <p className={shopStyles.heroClaim}>Total Omega-3 — 86%</p>
            <ul className={shopStyles.heroPoints}>
              <li>EPA 600 mg · DHA 400 mg per softgel</li>
              <li>Re-esterified Triglyceride (rTG) form</li>
              <li>IFOS · GOED · FOS Certified Raw Material</li>
              <li>Natural Lemon Flavour · 30 Softgels</li>
            </ul>
            <div className={shopStyles.heroTags}>
              <span>Supports Heart</span>
              <span>Brain</span>
              <span>Joint Health</span>
            </div>
            <div className={shopStyles.heroCta}>
              <a href="#supplement-facts" className={shopStyles.btnPrimary}>Supplement Facts ↓</a>
              <Link to="/report" className={shopStyles.btnOutline}>View Report →</Link>
            </div>
          </div>

          <div className={shopStyles.heroVisual}>
            <div className={shopStyles.productWrap}>
              <img
                src="/assets/images/product-mockup-1.jpg"
                alt="Truly Health RTG 1000 — box, bottle, and supplement facts"
                className={shopStyles.heroImg}
              />
              <div className={`${shopStyles.popup} ${shopStyles.popupOmega}`}>
                <span className={shopStyles.popupValue}>86%</span>
                <span className={shopStyles.popupLabel}>Total Omega-3</span>
              </div>
              <div className={`${shopStyles.popup} ${shopStyles.popupEpa}`}>
                <span className={shopStyles.popupIcon}>✓</span>
                <div>
                  <span className={shopStyles.popupValue}>IFOS Certified</span>
                  <span className={shopStyles.popupLabel}>5-Star Raw Material</span>
                </div>
              </div>
              <div className={`${shopStyles.popup} ${shopStyles.popupRtg}`}>
                <span className={shopStyles.popupValue}>rTG Form</span>
                <span className={shopStyles.popupLabel}>Superior Absorption</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className={shopStyles.trustBar}>
        <div className="container">
          <div className={shopStyles.trustRow}>
            <div className={shopStyles.trustItem}>
              <strong>IFOS Certified</strong>
              <span>Raw Material</span>
            </div>
            <div className={shopStyles.trustDivider} />
            <div className={shopStyles.trustItem}>
              <strong>GOED Compliant</strong>
              <span>Omega-3 Standard</span>
            </div>
            <div className={shopStyles.trustDivider} />
            <div className={shopStyles.trustItem}>
              <strong>FOS Certified</strong>
              <span>Sustainable Sourcing</span>
            </div>
            <div className={shopStyles.trustDivider} />
            <div className={shopStyles.trustItem}>
              <strong>RTG Form</strong>
              <span>Superior Absorption</span>
            </div>
          </div>
        </div>
      </div>

      {/* THE TRULY HEALTH STANDARD */}
      <section className={`section ${styles.standardSection}`}>
        <div className="container">
          <div className={styles.standardHead}>
            <span className={styles.sectionLabel}>The Truly Health Standard</span>
            <h2 className="h2">Three pillars behind every capsule</h2>
          </div>
          <div className={styles.pillarsGrid}>
            <div className={`${styles.pillarCard} reveal`}>
              <div className={styles.pillarNum}>01</div>
              <h3 className={styles.pillarTitle}>Uncompromising Purity</h3>
              <p className={styles.pillarDesc}>
                Carefully sourced from high-quality marine origin and refined using advanced purification processes, our Omega-3 delivers a consistency and safety standard you can rely on every day.
              </p>
            </div>
            <div className={`${styles.pillarCard} reveal reveal-delay-1`}>
              <div className={styles.pillarNum}>02</div>
              <h3 className={styles.pillarTitle}>Science-Led Formulation</h3>
              <p className={styles.pillarDesc}>
                Enhanced with re-esterified triglyceride (rTG) technology, our formula enhances bioavailability ensuring your body absorbs and utilises Omega-3 more efficiently for specific needs.
              </p>
            </div>
            <div className={`${styles.pillarCard} reveal reveal-delay-2`}>
              <div className={styles.pillarNum}>03</div>
              <h3 className={styles.pillarTitle}>Trust Through Transparency</h3>
              <p className={styles.pillarDesc}>
                Every batch undergoes rigorous quality checks for purity, safety, and performance. Scan the QR code on your box to access detailed product reports and experience complete transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY RTG */}
      <section className={`section ${shopStyles.rtgSection}`} id="rtg">
        <div className="container">
          <div className={shopStyles.rtgGrid}>
            <div className={shopStyles.rtgVisual}>
              <img
                src="/assets/images/product-mockup-2.jpg"
                alt="Truly Health RTG 1000 — The Truly Health Standard"
                className={shopStyles.rtgImg}
              />
            </div>
            <div className={shopStyles.rtgContent}>
              <span className={shopStyles.sectionLabel}>Why rTG Form Matters</span>
              <h2 className={`h2 ${shopStyles.rtgTitle}`}>Not all Omega-3s are created equal.</h2>
              <p className={shopStyles.rtgP}>
                Truly Health delivers Omega-3 in its advanced re-esterified triglyceride (rTG) form — widely regarded as the gold standard for absorption, efficiency, and biological performance.
              </p>
              <p className={shopStyles.rtgP}>
                Unlike conventional ethyl ester forms, rTG closely mirrors the natural structure of dietary fats, allowing your body to recognise, absorb, and utilise it more effectively.
              </p>
              <ul className={shopStyles.rtgList}>
                <li>Enhanced bioavailability compared to standard fish oil forms</li>
                <li>Optimised absorption and utilisation within the body</li>
                <li>Naturally aligned triglyceride structure for superior compatibility</li>
              </ul>
              <p className={shopStyles.rtgQuote}>
                Maximum Omega-3 delivery, precisely where your body needs it most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPLEMENT FACTS */}
      <section className={`section ${shopStyles.factsSection}`} id="supplement-facts">
        <div className="container" style={{ maxWidth: 680 }}>
          <div className={shopStyles.factsHead}>
            <span className={shopStyles.sectionLabel}>Per Softgel Capsule</span>
            <h2 className="h2">Supplement Facts</h2>
          </div>
          <div className={shopStyles.factsPanel}>
            <div className={shopStyles.factsPanelHeader}>
              <span>Supplement Facts</span>
              <div className={shopStyles.factsServing}>
                <span>Serving Size: 1 Soft gel</span>
                <span>Servings Per Container: 30</span>
              </div>
            </div>
            <div className={shopStyles.factsTableHead}>
              <span>Each softgel capsule contains:</span>
              <span>Per Serving</span>
            </div>
            {facts.map(f => (
              <div key={f.label} className={shopStyles.factsRow}>
                <div className={shopStyles.factsLabel}>
                  <span>{f.label}</span>
                  <span className={shopStyles.factsSub}>{f.sub}</span>
                </div>
                <span className={shopStyles.factsValue}>{f.value}</span>
              </div>
            ))}
            <div className={shopStyles.factsIngredients}>
              <p><strong>Ingredients:</strong> Highly Purified Fish Oil in rTG form (from Peruvian anchoveta and European anchovy), Natural Lemon Flavour Oil, Mixed Tocotrienols.</p>
              <p><strong>Allergen Information:</strong> Contains Fish (Anchovy).</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className={`section ${shopStyles.benefitsSection}`}>
        <div className="container">
          <div className={shopStyles.benefitsHead}>
            <span className={shopStyles.sectionLabel} style={{ color: 'rgba(255,255,255,0.6)' }}>Key Benefits</span>
            <h2 className="h2">Formulated for four pillars of wellness</h2>
          </div>
          <div className={shopStyles.benefitsGrid}>
            {benefits.map((b, i) => (
              <div key={b.title} className={`${shopStyles.benefitCard} reveal`} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className={shopStyles.benefitIcon}>{b.icon}</div>
                <h3 className={shopStyles.benefitTitle}>{b.title}</h3>
                <p className={shopStyles.benefitDesc}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className={`section ${shopStyles.sourcingSection}`} id="certifications">
        <div className="container">
          <div className={shopStyles.sourcingHead}>
            <span className={shopStyles.sectionLabel}>Certified Raw Material</span>
            <h2 className={`h2 ${shopStyles.sourcingTitle}`}>Global quality certifications</h2>
            <p className={`lead ${shopStyles.sourcingLead}`}>
              Our raw material is sourced from globally trusted suppliers and backed by internationally recognised certifications — ensuring exceptional purity, safety, and consistency in every softgel.
            </p>
          </div>
          <div className={shopStyles.certsGrid}>
            <div className={`${shopStyles.certCard} reveal`}>
              <div className={shopStyles.certName}>IFOS™</div>
              <div className={shopStyles.certFull}>International Fish Oil Standards</div>
              <p className={shopStyles.certDesc}>
                Tested for heavy metals (Mercury, Lead, Arsenic), oxidation levels, purity, and potency. The globally respected 5-star rating system reflects a commitment to quality that goes beyond industry norms.
              </p>
              <span className={shopStyles.certTag}>5-Star Rating</span>
            </div>
            <div className={`${shopStyles.certCard} reveal reveal-delay-1`}>
              <div className={shopStyles.certName}>GOED</div>
              <div className={shopStyles.certFull}>Global Organization for EPA & DHA Omega-3s</div>
              <p className={shopStyles.certDesc}>
                Ensures strict adherence to quality, safety, and purity guidelines. Accurate labelling, transparency, and responsible ethical manufacturing practices.
              </p>
              <span className={shopStyles.certTag}>Compliant Sourcing</span>
            </div>
            <div className={`${shopStyles.certCard} reveal reveal-delay-2`}>
              <div className={shopStyles.certName}>FOS</div>
              <div className={shopStyles.certFull}>Friend of the Sea</div>
              <p className={shopStyles.certDesc}>
                Fish oil from FOS-certified fisheries supporting sustainable and environmentally responsible fishing, protection of marine ecosystems, and long-term ocean conservation.
              </p>
              <span className={shopStyles.certTag}>Sustainable Fisheries</span>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className={shopStyles.ctaBanner}>
        <div className="container">
          <h2 className={shopStyles.ctaTitle}>Every claim is backed by data you can verify.</h2>
          <p className={shopStyles.ctaSub}>
            Full Certificate of Analysis available. Tested at ISO/IEC 17025 accredited laboratories.
          </p>
          <Link to="/report" className={shopStyles.ctaBtn}>
            View Certificate of Analysis →
          </Link>
        </div>
      </section>
    </>
  )
}
