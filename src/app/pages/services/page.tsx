import React from 'react'
import Header from '@/app/components/services/Header';
import Header2 from '@/app/components/services/Header2';
import Forefront_services from '@/app/components/services/Forefront_services';
import Cutting_edge_tech from '@/app/components/services/Cutting_edge_tech';
import Why_us from '@/app/components/services/Why_us';
import { Contact_us } from '@/app/components/services/Contact_us';
import Footer from '@/app/components/mainPage/Footer';


const Services = () => {
  return (
    <div>

      <Header/>
      <Header2/>
      <Forefront_services/>
      <Cutting_edge_tech/>
      <Why_us/>
      <Contact_us/>
      <Footer/>
      
    </div>
  )
}
export default Services;