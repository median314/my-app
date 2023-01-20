import React from 'react'
import BannerHeader from '../Components/BannerHeader'
import HeaderIntro from '../Components/HeaderIntro'
import Navbar from '../Components/Navbar'
import LandingPage from '../Components/LandingPage'
import AboutUs from '../Components/AboutUs'
import News from '../Components/News'
import TopikPelatihan from '../Components/TopikPelatihan'
import ArtikelRecommendation from '../Components/ArtikelRecommendation'
import Promotion from '../Components/Promotion'
import Footer from '../Components/Footer'
import Benefit from '../Components/Benefit'

const Homepage = () => {
  return (
    <div>
        <Navbar />
        <BannerHeader />
        <HeaderIntro />
        <LandingPage />
        <AboutUs />
        <News />
        <TopikPelatihan />
        <ArtikelRecommendation />
        <Benefit />
        <Promotion />
        <Footer />
    </div>
  )
}

export default Homepage