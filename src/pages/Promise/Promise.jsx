import { useEffect } from 'react'
import SectionLabel from '../../components/SectionLabel/SectionLabel'
import CertBadge from '../../components/CertBadge/CertBadge'
import Button from '../../components/Button/Button'
import { useInView } from '../../hooks/useInView'
import styles from './Promise.module.css'

export default function PromisePage() {
  useEffect(() => { document.title = 'Our Quality Promise | Truly Health' }, [])
  const [tableRef, tableInView] = useInView()

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={`${styles.heroInner} container`}>
          <SectionLabel text="Our Quality Standard" align="center" light />
          <h1 className={`h1 ${styles.heroTitle}`}>Purity is not optional.</h1>
          <p className={`lead ${styles.heroLead}`}>
            In a market where "pure" is used as a marketing word with no backing, we decided to make it a verifiable standard. Every claim we make is supported by third-party data you can access yourself.
          </p>
        </div>
      </section>

      {/* CHAIN OF TRUST */}
      <section className={`section`} style={{background:'var(--white)'}}>
        <div className="container">
          <div style={{textAlign:'center', marginBottom:56}}>
            <SectionLabel text="Our Process" align="center" />
            <h2 className="h2">The Truly Health chain of trust</h2>
          </div>
          <div className={styles.chainGrid}>
            {[
              {
                icon: '🐟',
                title: 'Certified Raw Material Sourcing',
                desc: 'We source exclusively from IFOS 5-Star and GOED-certified suppliers. Our anchovies are harvested from sustainable, traceable fisheries — small pelagic fish chosen specifically for their low heavy-metal accumulation and high Omega-3 content.',
                detail: 'IFOS · GOED · FOS Certified',
              },
              {
                icon: '🔬',
                title: 'Third-Party Laboratory Testing',
                desc: 'Before any batch is manufactured, raw materials are tested at ISO/IEC 17025 accredited labs. We test for EPA/DHA potency, oxidation markers (PV, AV, TOTOX), heavy metals, PCBs, dioxins, and microbial contamination.',
                detail: 'ISO 17025 Accredited Labs',
              },
              {
                icon: '⚗️',
                title: 'RTG Manufacturing Process',
                desc: 'Our oil is manufactured in the RTG (Re-esterified Triglyceride) form through enzymatic re-esterification — no harsh solvents, no synthetic intermediates. The result is structurally natural, highly concentrated Omega-3 with superior bioavailability.',
                detail: 'RTG Form — Best Absorption',
              },
              {
                icon: '🔍',
                title: 'QR-Linked Batch Transparency',
                desc: 'Every finished-goods batch is assigned a unique ID. The corresponding Certificate of Analysis is published at trulyhealth.in/report/[BATCH-ID] and linked via the QR code on the box. Any customer can independently verify their bottle\'s test results.',
                detail: 'Scan-to-verify on every box',
              },
            ].map((step, i) => (
              <div key={step.title} className={`${styles.chainCard} reveal`} style={{transitionDelay:`${i*0.1}s`}}>
                <div className={styles.chainIcon}>{step.icon}</div>
                <div className={styles.chainNum}>{String(i+1).padStart(2,'0')}</div>
                <h3 className={styles.chainTitle}>{step.title}</h3>
                <p className={styles.chainDesc}>{step.desc}</p>
                <span className={styles.chainDetail}>{step.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OXIDATION STANDARDS */}
      <section className={`section`} style={{background:'var(--off-white)'}}>
        <div className="container" style={{maxWidth:800}}>
          <div ref={tableRef} className={`${styles.oxHead} reveal ${tableInView ? 'visible' : ''}`}>
            <SectionLabel text="Oxidation Standards" align="center" />
            <h2 className="h2">Our standards vs the industry</h2>
            <p className="lead" style={{maxWidth:540, margin:'12px auto 0'}}>
              Oxidised fish oil is ineffective and potentially harmful. Our TOTOX values are consistently 50–60% below the IFOS limits.
            </p>
          </div>
          <div className={`${styles.oxTable} reveal reveal-delay-2 ${tableInView ? 'visible' : ''}`}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Marker</th>
                  <th className={styles.thOurs}>Truly Health RTG 1000</th>
                  <th>IFOS Limit</th>
                  <th>Industry Average</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Peroxide Value (PV)', '< 2.1 meq/kg', '< 5 meq/kg', '3–6 meq/kg'],
                  ['Anisidine Value (AV)', '< 8.3', '< 20', '12–18'],
                  ['TOTOX Score', '< 12.5', '< 26', '18–24'],
                  ['PCBs', 'Not Detected', 'ND', 'Trace levels common'],
                  ['Heavy Metals', 'Not Detected', 'ND', 'Trace levels common'],
                ].map(([marker, ours, limit, avg], i) => (
                  <tr key={marker} className={i%2===1 ? styles.rowAlt : ''}>
                    <td className={styles.markerCell}>{marker}</td>
                    <td className={styles.oursCell}><strong>{ours}</strong></td>
                    <td>{limit}</td>
                    <td className={styles.avgCell}>{avg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SOURCING */}
      <section className={`section`} style={{background:'var(--teal-dark)'}}>
        <div className={`${styles.sourcingInner} container`}>
          <div>
            <SectionLabel text="Sourcing Philosophy" align="left" light />
            <h2 className={`h2 ${styles.sourcingTitle}`}>Why small fish?</h2>
            <p className={styles.sourcingP}>
              Larger fish like tuna or salmon accumulate mercury and other heavy metals over their long lifespans. We source exclusively from anchovies — small, short-lived fish that accumulate very little contamination while being naturally rich in EPA and DHA.
            </p>
            <p className={styles.sourcingP}>
              Our FOS (Friend of the Sea) certification confirms that every batch of raw material comes from fisheries that meet strict environmental and sustainability criteria — protecting ocean ecosystems for generations to come.
            </p>
            <div className={styles.sourcingBadges}>
              <span className={styles.sBadge}>Sustainable Fisheries</span>
              <span className={styles.sBadge}>Traceable Origin</span>
              <span className={styles.sBadge}>FOS Certified</span>
            </div>
          </div>
          <div className={styles.sourcingCard}>
            <div className={styles.sourcingCardTitle}>Fish Source</div>
            <div className={styles.sourcingFish}>🐟 Anchovies</div>
            <div className={styles.sourcingDetail}>Small pelagic · Short lifespan · Low mercury risk</div>
            <div className={styles.sourcingDivider} />
            <div className={styles.sourcingCardTitle}>Fishery Standard</div>
            <div className={styles.sourcingStd}>Friend of the Sea (FOS)</div>
            <div className={styles.sourcingDetail}>Audited sustainable harvest practices</div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className={`section`} style={{background:'var(--white)'}}>
        <div className="container">
          <div style={{textAlign:'center', marginBottom:48}}>
            <SectionLabel text="Certifications" align="center" />
            <h2 className="h2">The credentials behind the promise</h2>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24}}>
            <CertBadge name="IFOS" delay={0} />
            <CertBadge name="GOED" delay={0.1} />
            <CertBadge name="FOS" delay={0.2} />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={`section`} style={{background:'var(--off-white)', textAlign:'center'}}>
        <div className="container">
          <SectionLabel text="Verify It Yourself" align="center" />
          <h2 className="h2" style={{marginBottom:12}}>See your batch's Certificate of Analysis.</h2>
          <p className="lead" style={{maxWidth:480, margin:'0 auto 28px'}}>
            Scan the QR code on your box or click below to check any batch report. No account needed.
          </p>
          <div style={{display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap'}}>
            <Button to="/report/RTG1000-B001" variant="primary" size="md">View Batch Report →</Button>
            <Button to="/products" variant="outline" size="md">See the Product</Button>
          </div>
        </div>
      </section>
    </>
  )
}
