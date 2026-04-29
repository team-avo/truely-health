import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import WhyTrulyHealth from './pages/WhyTrulyHealth/WhyTrulyHealth'
import Report from './pages/Report/Report'
import About from './pages/About/About'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function GlobalRevealObserver() {
  const { pathname } = useLocation()
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.visible)')
    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('visible'))
      return
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <GlobalRevealObserver />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<WhyTrulyHealth />} />
          <Route path="/why-truly-health" element={<WhyTrulyHealth />} />
          <Route path="/report" element={<Report />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
