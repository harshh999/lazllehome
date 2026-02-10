import React from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/homepage/HeroSection'
import WhoWeAre from '@/components/homepage/WhoWeAre'
import Services from '@/components/homepage/Services'
import FlagshipProducts from '@/components/homepage/FlagshipProducts'
import HowWeWork from '@/components/homepage/HowWeWork'
import WhyChooseUs from '@/components/homepage/WhyChooseUs'
import Faq from '@/components/homepage/Faq'

function page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <FlagshipProducts />
      <WhyChooseUs />
      <HowWeWork />
      <WhoWeAre />
      <Faq />
      <Footer />
    </>
  )
}

export default page