import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Achievements from './components/Achievements.jsx'
import Skills from './components/Skills.jsx'
import AISection from './components/AISection.jsx'
import EveningServices from './components/EveningServices.jsx'
import Portfolio from './components/Portfolio.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  // Smooth scrolling cho anchor links
  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (!anchor) return
      const id = anchor.getAttribute('href')
      if (id === '#') return
      const el = document.querySelector(id)
      if (el) {
        e.preventDefault()
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Achievements />
        <Skills />
        <AISection />
        <EveningServices />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
