import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SectionLabel from '../../components/SectionLabel/SectionLabel'
import BenefitCard from '../../components/BenefitCard/BenefitCard'
import CertBadge from '../../components/CertBadge/CertBadge'
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard'
import NutritionFacts from '../../components/NutritionFacts/NutritionFacts'
import Button from '../../components/Button/Button'
import { useInView } from '../../hooks/useInView'
import { testimonials } from '../../data/testimonials'
import styles from './Home.module.css'

const benefits = [
  {
    icon: '❤️',
    title: 'Heart Health',
    points: [
      'Reduces triglyceride levels by up to 30%',
      'Supports healthy blood pressure',
      'Promotes arterial flexibility and blood flow',
      'EPA shown to reduce cardiovascular risk markers',
    ],
  },
  {
    icon: '🧠',
    title: 'Brain Health',
    points: [
      'DHA is the primary structural fat in the brain',
      'Supports cognitive function and memory retention',
      'Linked to improved mood and reduced mental fatigue',
      'Supports healthy neural development and signalling',
    ],
  },
  {
    icon: '🦴',
    title: 'Joint Health',
    points: [
      'EPA reduces inflammatory cytokines in joints',
      'Clinically linked to reduced morning stiffness',
      'Supports cartilage protection and lubrication',
      'Helps athletes recover faster from intense training',
    ],
  },
]

function TrustBar() {
  const [ref, inView] = useInView()
  const items = [
    { icon: '✅', text: 'IFOS 5-Star Certified' },
    { icon: '🌿', text: 'GOED Member' },
    { icon: '💊', text: '86% Total Omega-3' },
    { icon: '🔬', text: 'RTG Form — Best Absorption' },
  ]
  return (
    <div ref={ref} className={`${styles.trustBar} reveal ${inView ? 'visible' : ''}`}>
      <div className={styles.trustInner}>
        {items.map((it, i) => (
          <div key={i} className={styles.trustItem}>
            <span className={styles.trustIcon}>{it.icon}</span>
            <span className={styles.trustText}>{it.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProductHighlight() {
  const [ref, inView] = useInView()
  return (
    <section className={styles.productHighlight} id="product">
      <div className={`${styles.productInner} container`}>
        <div ref={ref} className={`${styles.productImg} reveal ${inView ? 'visible' : ''}`}>
          <div className={styles.productImgBox}>
            <div className={styles.productPlaceholder}>
              <div className={styles.productName}>RTG 1000</div>
              <div className={styles.productSub}>Ultra-Pure Omega-3</div>
              <div className={styles.productOmega}>86% Total Omega-3</div>
              <div className={styles.softgels}>30 Softgels</div>
            </div>
            <div className={styles.floatBadge1}>EPA 600mg</div>
            <div className={styles.floatBadge2}>DHA 400mg</div>
            <div className={styles.floatBadge3}>IFOS ★★★★★</div>
          </div>
        </div>
        <div className={`${styles.productContent} reveal reveal-delay-2 ${inView ? 'visible' : ''}`}>
          <SectionLabel text="Flagship Product" align="left" />
          <h2 className="h2">RTG 1000<br /><span className={styles.productSubtitle}>Ultra-Pure Omega-3 Fish Oil</span></h2>
          <div className={styles.specs}>
            {[
              ['1250 mg', 'Total Omega-3 per 2 softgels'],
              ['600 mg', 'EPA per 2 softgels'],
              ['400 mg', 'DHA per 2 softgels'],
              ['86%', 'Total Omega-3 concentration'],
            ].map(([val, label]) => (
              <div key={label} className={styles.specItem}>
                <span className={styles.specVal}>{val}</span>
                <span className={styles.specLabel}>{label}</span>
              </div>
            ))}
          </div>
          <NutritionFacts />
          <div className={styles.productCtas}>
            <Button to="/products" variant="primary" size="md">View Full Details</Button>
            <Button to="/report/RTG1000-B001" variant="outline" size="md">Check Batch Report</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function RTGTeaser() {
  const [ref, inView] = useInView()
  return (
    <section className={styles.rtgTeaser}>
      <div className={`${styles.rtgInner} container`}>
        <div ref={ref} className={`reveal ${inView ? 'visible' : ''}`}>
          <SectionLabel text="Why RTG Form Matters" align="center" light />
          <h2 className={`h2 ${styles.rtgTitle}`}>Not all Omega-3 is absorbed the same.</h2>
          <p className={styles.rtgLead}>Most supplements use the ethyl ester (EE) form — a synthetic byproduct that requires conversion before your body can use it. RTG form skips that step.</p>
        </div>
        <div className={`${styles.rtgCompare} reveal reveal-delay-2 ${inView ? 'visible' : ''}`}>
          <div className={styles.compareCard}>
            <div className={`${styles.compareLabel} ${styles.goodLabel}`}>RTG Form</div>
            <ul className={styles.compareList}>
              <li>✅ Up to 70% better bioavailability</li>
              <li>✅ Structurally identical to natural fish oil</li>
              <li>✅ No enzymatic conversion needed</li>
              <li>✅ Lower oxidation risk</li>
              <li>✅ No fishy aftertaste</li>
            </ul>
          </div>
          <div className={styles.compareCard}>
            <div className={`${styles.compareLabel} ${styles.badLabel}`}>Ethyl Ester (EE)</div>
            <ul className={styles.compareList}>
              <li>❌ Poor absorption without dietary fat</li>
              <li>❌ Synthetic — not found in nature</li>
              <li>❌ Requires enzymatic processing</li>
              <li>❌ Higher oxidation potential</li>
              <li>❌ Common source of fishy burps</li>
            </ul>
          </div>
        </div>
        <div className={styles.rtgCta}>
          <Button to="/our-promise" variant="outlineWhite" size="md">Learn More About Quality</Button>
        </div>
      </div>
    </section>
  )
}

function CTABanner() {
  const [batchInput, setBatchInput] = useState('')
  const navigate = useNavigate()
  const [ref, inView] = useInView()

  const handleCheck = () => {
    const id = batchInput.trim().toUpperCase()
    if (id) navigate(`/report/${id}`)
  }

  return (
    <section className={styles.ctaBanner}>
      <div ref={ref} className={`${styles.ctaBannerInner} container reveal ${inView ? 'visible' : ''}`}>
        <SectionLabel text="Transparency First" align="center" />
        <h2 className="h2">Know exactly what's in your bottle.</h2>
        <p className={styles.ctaLead}>
          Every batch of RTG 1000 is third-party tested. Scan the QR on your box — or enter your Batch ID below to view the full Certificate of Analysis.
        </p>
        <div className={styles.batchLookup}>
          <input
            className={styles.batchInput}
            type="text"
            placeholder="e.g. RTG1000-B001"
            value={batchInput}
            onChange={e => setBatchInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleCheck()}
          />
          <button className={styles.batchBtn} onClick={handleCheck}>View Report →</button>
        </div>
        <p className={styles.batchHint}>Try: RTG1000-B001, RTG1000-B002, or RTG1000-B003</p>
      </div>
    </section>
  )
}

export default function Home() {
  useEffect(() => { document.title = 'Truly Health — Ultra-Pure Omega-3 Fish Oil' }, [])

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroWave} />
        <div className={`${styles.heroInner} container`}>
          <div className={styles.heroContent}>
            <div className={styles.heroPill}>🇮🇳 IFOS 5-Star Certified · Made in India</div>
            <h1 className={`display ${styles.heroH1}`}>
              Ultra-Pure Omega-3.<br />
              <span className={styles.heroAccent}>Backed by Science.</span>
            </h1>
            <p className={`lead ${styles.heroLead}`}>
              RTG 1000 delivers 1250 mg of the highest-purity Omega-3 in the RTG form — the most bioavailable form available. EPA 600 mg. DHA 400 mg. Every batch verified.
            </p>
            <div className={styles.heroCtas}>
              <Button to="/products" variant="gold" size="lg">Shop RTG 1000</Button>
              <Button to="/report/RTG1000-B001" variant="outlineWhite" size="lg">Check Batch Report</Button>
            </div>
            <div className={styles.heroCerts}>
              <span className={styles.certChip}>IFOS ★★★★★</span>
              <span className={styles.certChip}>GOED Certified</span>
              <span className={styles.certChip}>RTG Form</span>
              <span className={styles.certChip}>Natural Lemon</span>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroProductCard}>
              <div className={styles.heroProductTop}>truly<strong>health</strong></div>
              <div className={styles.heroProductName}>RTG 1000</div>
              <div className={styles.heroProductDesc}>Ultra-Pure Omega-3 Fish Oil</div>
              <div className={styles.heroOmegaBadge}>Total Omega — 86%</div>
              <div className={styles.heroHealthBadge}>Supports Heart • Brain • Joint Health</div>
              <div className={styles.heroFlavour}>🍋 Natural Lemon Flavour</div>
              <div className={styles.heroEpaDha}>High Strength EPA 600 mg – DHA 400 mg</div>
              <div className={styles.heroWeight}>1250 mg Omega-3 Fish Oil</div>
              <div className={styles.heroCount}>30 Softgels · NUTRACEUTICAL</div>
            </div>
            <div className={styles.floatingBadgeA}>86%<br/><small>Total Omega-3</small></div>
            <div className={styles.floatingBadgeB}>RTG<br/><small>Form</small></div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* BENEFITS */}
      <section className={`${styles.benefits} section`}>
        <div className="container">
          <div className={styles.benefitsHead}>
            <SectionLabel text="Why Omega-3 Matters" align="center" />
            <h2 className="h2">Three pillars of Omega-3 health</h2>
            <p className="lead" style={{maxWidth:560, margin:'12px auto 0'}}>
              Clinical research consistently links EPA and DHA to improved outcomes across the body's three most critical systems.
            </p>
          </div>
          <div className={styles.benefitsGrid}>
            {benefits.map((b, i) => (
              <BenefitCard key={b.title} icon={b.icon} title={b.title} points={b.points} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <ProductHighlight />
      <RTGTeaser />

      {/* CERTIFICATIONS */}
      <section className={`${styles.certs} section`}>
        <div className="container">
          <div className={styles.certsHead}>
            <SectionLabel text="Certified Raw Materials" align="center" />
            <h2 className="h2">Global certifications. Indian quality.</h2>
            <p className="lead" style={{maxWidth:540, margin:'12px auto 0'}}>
              Our raw materials carry the world's most respected certifications for fish oil purity and sustainability.
            </p>
          </div>
          <div className={styles.certsGrid}>
            <CertBadge name="IFOS" delay={0} />
            <CertBadge name="GOED" delay={0.1} />
            <CertBadge name="FOS" delay={0.2} />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={`${styles.testimonials} section`}>
        <div className="container">
          <div className={styles.testimonialsHead}>
            <SectionLabel text="What People Say" align="center" />
            <h2 className="h2">Trusted by doctors, athletes & customers</h2>
          </div>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t, i) => (
              <div key={t.id} className={`reveal ${styles.testimonialReveal}`} style={{transitionDelay:`${i*0.12}s`}}>
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
