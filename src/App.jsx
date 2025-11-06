import React from 'react'
import Navbar from './component/Navbar'
import HeroSection from './component/HeroSection'
import HowItWorks from './component/howItWorks '
import KeyFeatures from "./component/KeyFeatures"
import Testimonials from './component/Testimonials'
import PricingPlans from './component/Pricingplans'
import Footer from './component/Footer'
function App() {
  return (
    <main className='text-sm text-neutral-300 antialiased'>
      <Navbar/>
      <HeroSection/>
      <HowItWorks/>
      <KeyFeatures/>
      <Testimonials/>
      <PricingPlans/>
      <Footer/>

    </main>
  )
}

export default App
