import React from 'react'
import Navbar from '../../pages/Navbar/Navbar'
import HeroSection from '../../pages/HeroSection/HeroSection'
import ServicesSection from '../../pages/ServicesSection/ServicesSection'
import CustomizeSection from '../../pages/CustomizeSection/CustomizeSection'
import About from '../../pages/About/About'
import Shape from '../../pages/Shape/Shape'
import VisualSection from '../../pages/Material/Material'
import StrategyCard from '../../pages/Strategy/Strategy'
import Footer from '../../pages/Footer/Footer'
import FullScreenDialog from '../../pages/Choose/Choose'
import Images from '../../pages/Images/Images'
import ImageGallery from '../../pages/ScrollImage/ScrollImage'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <ServicesSection/>
        <CustomizeSection/>
        <About/>
        <Shape/>
        <ImageGallery/>
        {/* <VisualSection/> */}
        <StrategyCard/>
        <FullScreenDialog/>
        {/* <Images/> */}
        <Footer/>
    </div>
  )
}

export default Home