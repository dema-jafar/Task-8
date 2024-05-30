import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Pricing from './components/Pricing/Pricing'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <Services />
    <Pricing />
    <Footer />
    </>
  )
}

export default App
