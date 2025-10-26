import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Properties from './components/Properties'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Properties />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
