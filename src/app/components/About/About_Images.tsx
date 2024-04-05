
import React from 'react'
import Image from 'next/image'
import image1 from '../images/image1.jpeg'
import image2 from '../images/image2.jpeg'
import image3 from '../images/image3.jpeg'
import image4 from '../images/image4.jpeg'

const About_Images = () => {
  return (
    <div>

        
        <div className='columns-2 w-[300px]  sm:w-[500px] mt-10 mb-6 ml-8 sm:ml-[240px] shadow-2xl rounded-xl'>

            <Image src={image1} alt="image" />
            <Image src={image2} alt="image" />
            <Image src={image3} alt="image" />
            <Image src={image4} alt="image" />
           
            
        </div>
        
    </div>
  )
}

export default About_Images