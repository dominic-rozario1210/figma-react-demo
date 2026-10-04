import React from 'react'
import Header from './components/Header'
import "./App.css"
import HeroSection from './components/HeroSection'
import Client from './components/Client'
import Community from './components/Community'
import BusinessSection from './components/BusinessSection'
import BusinessStats from './components/businessStats'
import FooterDesign from './components/FooterDesign'
import TestimonialSection from './components/TestimonialSection'
import Marketing from './components/Marketing'
import Demo from './components/Demo'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <div className='container'>
        <Header />
        <HeroSection />
        <Client />
        <Community />
        <BusinessSection />
        <BusinessStats />
        <FooterDesign />
        <TestimonialSection />
        <Marketing/>
        <Demo/>
        <Footer/>
      </div>
    </>
  )
}

export default App
