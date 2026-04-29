import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SectionLabel from '../../components/SectionLabel/SectionLabel'
import BenefitCard from '../../components/BenefitCard/BenefitCard'
import CertBadge from '../../components/CertBadge/CertBadge'
import FAQAccordion from '../../components/FAQAccordion/FAQAccordion'
import NutritionFacts from '../../components/NutritionFacts/NutritionFacts'
import Button from '../../components/Button/Button'
import { useInView } from '../../hooks/useInView'
import { faqs } from '../../data/faqs'
import styles from './Product.module.css'

const benefits = [
  {
    icon: '❤️',
    title: 'Heart Health',
    points: [
      'EPA clinically reduces serum triglycerides by up to 30%',
      'Supports healthy blood pressure and arterial flexibility',
      'Anti-inflammatory action reduces cardiovascular risk markers',
      'DHA supports healthy LDL particle size and HDL function',
    ],
  },
  {
    icon: '🧠',
    title: 'Brain & Cognition',
    points: [
      'DHA comprises over 30% of the brain\'s fatty acid content',
      'Supports memory retention and cognitive processing speed',
      'Linked to improved mood and reduced depressive symptoms',
      'Critical for healthy neural membrane fluidity and signalling',
    ],
  },
  {
    icon: '🦴',
    title: 'Joint & Mobility',
    points: [
      'EPA inhibits pro-inflammatory eicosanoids in joints',
      'Clinically linked to reduced morning stiffness in RA',
      'Supports synovial fluid production and cartilage integrity',
      'Preferred by athletes for post-training recovery support',
    ],
  },
]

function PageHero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.heroInner} container`}>
        <div className={styles.heroContent}>
          <SectionLabel text="Flagship Product" align="left" light />
          <h1 className={`h1 ${styles.heroTitle}`}>RTG 1000</h1>
          <p className={styles.heroSub}>Ultra-Pure Omega-3 Fish Oil</p>
          <div className={styles.heroBadges}>
            <span className={styles.badge}>NUTRACEUTICAL</span>
            <span className={styles.badge}>30 Softgels</span>
            <span className={styles.badge}>🍋 Natural Lemon</span>
          </div>
          <div className={styles.specs}>
            {[
              ['1250 mg', 'Total Omega-3'],
              ['600 mg', 'EPA'],
              ['400 mg', 'DHA'],
              ['86%', 'Omega-3 Concentration'],
            ].map(([v, l]) => (
              <div key={l} className={styles.specItem}>
                <span className={styles.specVal}>{v}</span>
                <span className={styles.specLabel}>{l}</span>
              </div>
            ))}
          </div>
          <div className={styles.heroCtas}>
            <Button to="/contact" variant="gold" size="md">Where to Buy</Button>
            <Button to="/report/RTG1000-B001" variant="outlineWhite" size="md">View Batch Report</Button>
          </div>
          <div className={styles.certRow}>
            {['IFOS ★★★★★', 'GOED', 'FOS Certified'].map(c => (
              <span key={c} className={styles.certChip}>{c}</span>
            ))}
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroCard}>
            <div className={styles.heroCardTop}>truly<strong>health</strong></div>
            <div className={styles.heroCardName}>RTG 1000</div>
            <div className={styles.heroCardDesc}>Ultra-Pure Omega-3 Fish Oil</div>
            <div className={styles.heroBadgeMid}>Total Omega — 86%</div>
            <div className={styles.heroHealthRow}>Supports Heart • Brain • Joint Health</div>
            <div className={styles.heroFlavRow}>🍋 Natural Lemon Flavour</div>
            <div className={styles.heroEpa}>High Strength EPA 600 mg – DHA 400 mg</div>
            <div className={styles.heroGrams}>1250 mg Omega-3 Fish Oil</div>
            <div className={styles.heroSoftgels}>30 Softgels · NUTRACEUTICAL</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function RTGComparison() {
  const [ref, inView] = useInView()
  return (
    <section className={`${styles.rtg} section`} id="rtg">
      <div className="container">
        <div ref={ref} className={`${styles.rtgHead} reveal ${inView ? 'visible' : ''}`}>
          <SectionLabel text="Why RTG Form Matters" align="center" />
          <h2 className="h2">The science of absorption</h2>
          <p className="lead" style={{maxWidth:560, margin:'12px auto 0'}}>
            The form of Omega-3 you take determines how much your body actually uses. RTG form is the gold standard.
          </p>
        </div>
        <div className={`${styles.compareTable} reveal reveal-delay-2 ${inView ? 'visible' : ''}`}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Feature</th>
                <th className={styles.thGood}>RTG Form <span className={styles.ours}>(Ours)</span></th>
                <th>Ethyl Ester (EE)</th>
                <th>Natural TG</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Bioavailability', '★★★★★', '★★☆☆☆', '★★★★☆'],
                ['Absorption w/ food', 'Not required', 'Fat required', 'Fat required'],
                ['Oxidation stability', 'Excellent', 'Poor', 'Good'],
                ['Fish burp risk', 'Very Low', 'High', 'Low'],
                ['Found in nature', 'Yes', 'No', 'Yes'],
                ['Omega-3 concentration', 'Up to 90%', 'Up to 85%', 'Up to 30%'],
                ['IFOS compatible', 'Yes', 'Yes', 'Yes'],
              ].map(([f, rtg, ee, tg]) => (
                <tr key={f}>
                  <td className={styles.featureCell}>{f}</td>
                  <td className={styles.goodCell}>{rtg}</td>
                  <td className={styles.neutralCell}>{ee}</td>
                  <td className={styles.neutralCell}>{tg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function BatchTransparency() {
  const [batchInput, setBatchInput] = useState('')
  const navigate = useNavigate()
  const [ref, inView] = useInView()

  return (
    <section className={styles.batch} id="batch">
      <div ref={ref} className={`${styles.batchInner} container reveal ${inView ? 'visible' : ''}`}>
        <SectionLabel text="Batch Transparency" align="center" />
        <h2 className="h2">Your batch. Your data. Your right to know.</h2>
        <p className="lead" style={{maxWidth:560, margin:'12px auto 0'}}>
          Every RTG 1000 box has a unique QR code printed on the bottom. Scan it — or enter your Batch ID — to view the full Certificate of Analysis for your exact production run.
        </p>
        <div className={styles.batchSteps}>
          {[
            ['1', 'Find Batch ID', 'Look for the Batch No. on the bottom of your box (e.g. RTG1000-B001)'],
            ['2', 'Scan or Search', 'Scan the QR code on the box, or type the Batch ID in the field below'],
            ['3', 'View Your Report', 'See EPA/DHA potency, oxidation values, heavy metals, and more — all verified'],
          ].map(([num, title, desc]) => (
            <div key={num} className={styles.batchStep}>
              <div className={styles.stepNum}>{num}</div>
              <h4 className={styles.stepTitle}>{title}</h4>
              <p className={styles.stepDesc}>{desc}</p>
            </div>
          ))}
        </div>
        <div className={styles.batchUrl}>
          <code className={styles.urlCode}>trulyhealth.in/report/<span className={styles.urlParam}>[BATCH-ID]</span></code>
        </div>
        <div className={styles.lookupRow}>
          <input
            className={styles.lookupInput}
            type="text"
            placeholder="Enter Batch ID (e.g. RTG1000-B001)"
            value={batchInput}
            onChange={e => setBatchInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && batchInput.trim() && navigate(`/report/${batchInput.trim()}`)}
          />
          <button
            className={styles.lookupBtn}
            onClick={() => batchInput.trim() && navigate(`/report/${batchInput.trim()}`)}
          >
            View Report →
          </button>
        </div>
        <div className={styles.demoBatches}>
          {['RTG1000-B001', 'RTG1000-B002', 'RTG1000-B003'].map(id => (
            <button key={id} className={styles.demoBtn} onClick={() => navigate(`/report/${id}`)}>
              {id}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Product() {
  useEffect(() => { document.title = 'RTG 1000 Omega-3 Fish Oil | Truly Health' }, [])

  return (
    <>
      <PageHero />

      {/* SUPPLEMENT FACTS */}
      <section className={`${styles.facts} section`} id="ingredients">
        <div className="container">
          <div className={styles.factsInner}>
            <div>
              <SectionLabel text="Supplement Facts" align="left" />
              <h2 className="h2">What's inside every softgel</h2>
              <p className="lead" style={{marginTop:12, maxWidth:420}}>
                No fillers. No underdosing. Every ingredient serves a purpose — and every amount is on the label, verified by third-party testing.
              </p>
              <ul className={styles.ingredientNotes}>
                <li>🐟 High Purity Fish Oil from Anchovies & European Anchovy</li>
                <li>🍋 Natural Lemon Flavour (no artificial flavouring)</li>
                <li>💊 Softgel: Fish Gelatin, Glycerol, Purified Water</li>
                <li>🌿 Mixed Tocotrienol (antioxidant to preserve freshness)</li>
              </ul>
              <div className={styles.allergen}>
                <strong>Allergen Information:</strong> Contains Fish (Anchovy). Not suitable for fish allergy sufferers.
              </div>
            </div>
            <NutritionFacts />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className={`section`} style={{background:'var(--off-white)'}} id="benefits">
        <div className="container">
          <div style={{textAlign:'center', marginBottom:48}}>
            <SectionLabel text="Clinical Benefits" align="center" />
            <h2 className="h2">What the science says</h2>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24}}>
            {benefits.map((b, i) => (
              <BenefitCard key={b.title} {...b} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <RTGComparison />

      {/* CERTIFICATIONS */}
      <section className={`section`} style={{background:'var(--white)'}} id="certifications">
        <div className="container">
          <div style={{textAlign:'center', marginBottom:48}}>
            <SectionLabel text="Certified Raw Materials" align="center" />
            <h2 className="h2">Third-party verified. Every batch.</h2>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24}}>
            <CertBadge name="IFOS" delay={0} />
            <CertBadge name="GOED" delay={0.1} />
            <CertBadge name="FOS" delay={0.2} />
          </div>
        </div>
      </section>

      <BatchTransparency />

      {/* FAQs */}
      <section className={`section`} style={{background:'var(--off-white)'}} id="faqs">
        <div className="container" style={{maxWidth:760}}>
          <div style={{textAlign:'center', marginBottom:40}}>
            <SectionLabel text="FAQs" align="center" />
            <h2 className="h2">Common questions answered</h2>
          </div>
          <FAQAccordion items={faqs} />
          <div style={{textAlign:'center', marginTop:32}}>
            <Button to="/our-promise" variant="outline" size="md">Learn About Our Quality Promise →</Button>
          </div>
        </div>
      </section>
    </>
  )
}
