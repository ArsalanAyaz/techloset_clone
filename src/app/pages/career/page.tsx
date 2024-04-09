
import Images from '@/app/components/About/About_Images'
import Career_Images from '@/app/components/Career/Career_Images'
import Career_header from '@/app/components/Career/Career_header'
import Job_listings from '@/app/components/Career/Job_listings'
import Life_at_TechloSet from '@/app/components/Career/Life_at_TechloSet'
import Paragraph from '@/app/components/Career/Paragraph'
import Footer from '@/app/components/mainPage/Footer'

import React from 'react'

const Career = () => {
  return (
    <div>
        
          <Career_header/>
          <Life_at_TechloSet/>
          <Job_listings/>
          <Paragraph/>
          <Career_Images/>
          <Footer/>
          
        
    </div>
  )
}

export default Career