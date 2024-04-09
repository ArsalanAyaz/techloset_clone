import Cases_contact from '@/app/components/cases/Cases_contact';
import Details from '@/app/components/cases/Details';
import Cases_Header from '@/app/components/cases/cases_Header';
import Footer from '@/app/components/mainPage/Footer';

import React from 'react'

const Cases = () => {
  return (
    <div>

      <Cases_Header/>
      <Details/>
      <Cases_contact/>
      <Footer/>
      
    </div>
  )
}
export default Cases;