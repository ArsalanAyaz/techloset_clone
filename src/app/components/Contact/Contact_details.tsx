import React from 'react'
import { GiBookStorm } from "react-icons/gi";
import { BiSolidOffer } from "react-icons/bi";
import { BiCodeAlt } from "react-icons/bi";

const Contact_details = () => {
  return (
    <div className='bg-blue-200 mt-10'>

        <h1 className='underline pt-8 text-2xl sm:text-4xl font-bold text-center text-black'>What happen next?</h1> 
      <div className='mt-2 grid grid-cols-1 sm:grid-cols-3 p-8 '>

        <div className=' p-4 mt-6 sm:mt-0'>

           <GiBookStorm  className='text-blue-600 text-8xl ml-[80px] mb-2'/>
           <h1 className='font-bold text-center mb-4'>Analyze your aspirations</h1>
           <p className='opacity-80 text-center'>After you contact us, we will set up a call with you to go over your objectives and strategy in depth. We will respond to you in the next 24 hours!</p>

        </div>

        <div className=' p-4 mt-6 sm:mt-0'>

           <BiSolidOffer  className='text-yellow-600 text-8xl ml-[80px] mb-2'/>
           <h1 className='font-bold text-center mb-4'>Propose an offer</h1>
           <p className='opacity-80 text-center'>Once we understand your objectives, we will create an proposal with solutions, as well as a timeline and budget estimate!</p>

        </div>

        <div className=' p-4 mt-6 sm:mt-0'>

           <BiCodeAlt  className='text-red-600 text-8xl ml-[80px] mb-2'/>
           <h1 className='font-bold text-center mb-4'>Make a deal</h1>
           <p className='opacity-80 text-center'>Our development team is excited to continue working together once we have agreed on the terms of the collaboration.</p>

        </div>

      </div>
    </div>
  )
}

export default Contact_details