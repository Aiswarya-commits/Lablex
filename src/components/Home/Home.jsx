import React from 'react'
import Navbar from '../../pages/Navbar/Navbar'
import HeroSection from '../../pages/HeroSection/HeroSection'
import ServicesSection from '../../pages/ServicesSection/ServicesSection'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <ServicesSection/>
    </div>
  )
}

export default Home