import About_Header from '@/app/components/About/About_Header'
import React from 'react'
import Images from '@/app/components/About/About_Images'
import About_details from '@/app/components/About/About_details'
import Cards from '@/app/components/About/Cards'
import Blue_cards from '@/app/components/About/Blue_cards'
import About_details_2 from '@/app/components/About/About_details_2'
import Footer from '@/app/components/mainPage/Footer'
import About_Images from '@/app/components/About/About_Images'

const About = () => {
  return (
    <div>

      <About_Header/>
      <About_Images/>
      <About_details/>
      <Cards/>
      <Blue_cards/>
      <About_details_2/>
      <Footer/>

    </div>
  )
}

export default About