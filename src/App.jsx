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

const App = () => {
  return (
    <>
      <Header/>
      <HeroSection/>
      <Client/>
      <Community/>
      <BusinessSection/>
      <BusinessStats/>
      <FooterDesign/>
      <TestimonialSection/>
    </>
  )
}

export default App
