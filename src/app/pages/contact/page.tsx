import Contact_details from '@/app/components/Contact/Contact_details'
import Contact_form from '@/app/components/Contact/Contact_form'
import Contact_header from '@/app/components/Contact/Contact_header'
import Footer from '@/app/components/mainPage/Footer'


import React from 'react'

const Contact = () => {
  return (
    <div>
      
      <Contact_header/>
      <Contact_form/>
      <Contact_details/>
      <Footer/>
      


    </div>
  )
}

export default Contact