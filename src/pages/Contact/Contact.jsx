import { useEffect, useState } from 'react'
import SectionLabel from '../../components/SectionLabel/SectionLabel'
import styles from './Contact.module.css'

export default function Contact() {
  useEffect(() => { document.title = 'Contact Us | Truly Health' }, [])

  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'general', message: '' })
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!form.email.trim()) e.email = 'Required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email'
    if (!form.message.trim()) e.message = 'Required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!validate()) return
    setSent(true)
    setForm({ name: '', email: '', phone: '', subject: 'general', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={`${styles.heroInner} container`}>
          <SectionLabel text="Get In Touch" align="center" light />
          <h1 className={`h1 ${styles.heroTitle}`}>We'd love to hear from you</h1>
          <p className={`lead ${styles.heroLead}`}>
            Questions about our product? Need help finding your batch report? Want to partner with us? Reach out and we'll respond within one business day.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className={`section`}>
        <div className={`${styles.gridInner} container`}>
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Send us a message</h2>
            <p className={styles.formSub}>We typically respond within 24 hours, Monday–Saturday.</p>

            {sent && (
              <div className={styles.successMsg}>
                ✅ Thanks! Your message has been received. We'll be in touch shortly.
              </div>
            )}

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label}>Name <span className={styles.req}>*</span></label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    placeholder="Your full name"
                  />
                  {errors.name && <span className={styles.error}>{errors.name}</span>}
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Email <span className={styles.req}>*</span></label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    placeholder="you@example.com"
                  />
                  {errors.email && <span className={styles.error}>{errors.email}</span>}
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label}>Phone <span className={styles.optional}>(optional)</span></label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Subject</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={styles.input}
                  >
                    <option value="general">General Enquiry</option>
                    <option value="product">Product Question</option>
                    <option value="batch">Batch Report Help</option>
                    <option value="partner">Partnership / Wholesale</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Message <span className={styles.req}>*</span></label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                  rows="5"
                  placeholder="Tell us how we can help..."
                />
                {errors.message && <span className={styles.error}>{errors.message}</span>}
              </div>

              <button type="submit" className={styles.submitBtn}>Send Message</button>
            </form>
          </div>

          <div className={styles.infoCol}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📧</div>
              <h3 className={styles.infoTitle}>Email</h3>
              <p className={styles.infoText}>For all enquiries</p>
              <a href="mailto:support@trulyhealth.in" className={styles.infoLink}>support@trulyhealth.in</a>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📞</div>
              <h3 className={styles.infoTitle}>Phone</h3>
              <p className={styles.infoText}>Mon–Sat, 10am–6pm IST</p>
              <a href="tel:+919150099229" className={styles.infoLink}>+91 9150099229</a>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📍</div>
              <h3 className={styles.infoTitle}>Office</h3>
              <p className={styles.infoText}>ABH Health Care Pte. Ltd.</p>
              <p className={styles.infoAddr}>500 D, Srinidhi Dalary, Anna Nagar,<br/>Chennai, Tamil Nadu 600040<br/>India</p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>🌐</div>
              <h3 className={styles.infoTitle}>Website</h3>
              <p className={styles.infoText}>Visit us online</p>
              <a href="https://www.trulyhealth.in" className={styles.infoLink}>www.trulyhealth.in</a>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK FAQ STRIP */}
      <section className={`${styles.faqStrip} section-sm`}>
        <div className="container">
          <div className={styles.faqStripInner}>
            <h3 className={styles.faqStripTitle}>Need help fast?</h3>
            <p className={styles.faqStripText}>
              For batch report queries, you don't need to wait — visit{' '}
              <a href="/report/RTG1000-B001" className={styles.faqLink}>trulyhealth.in/report/[BATCH-ID]</a>{' '}
              with your batch ID directly.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
