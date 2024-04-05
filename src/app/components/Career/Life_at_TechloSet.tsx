import React from 'react'
import { RiTeamFill } from "react-icons/ri";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { GiBookshelf } from "react-icons/gi";
import { LiaAddressBookSolid } from "react-icons/lia";
import { SiOnlyoffice } from "react-icons/si";
import { DiCompass } from "react-icons/di";





const Life_at_TechloSet = () => {
  return (
    <div>

              <h1 className='text-center text-3xl sm:text-6xl m-10 font-bold underline'>Life at Techloset</h1>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 p-8  items-center justify-center'>
                
                
                
                <div className='w-[300px] h-[500px] p-4 rounded hover:shadow-2xl'>
                    <RiTeamFill className='text-orange-600 text-8xl text-center ml-[80px] ' />
                    <h1 className='text-center text-2xl font-semibold m-2'>Collaborative Team</h1>
                    <p className='text-center'>At TechloSet, you’re encouraged to share your ideas and give your input on how we can grow. We don’t hesitate to try, experiment, and adopt new ways. We ensure flexible and relaxing environment for their teammates. We support ideas of our teammates & help them in setting goals.</p>
                </div>

                <div className='w-[300px] h-[500px] p-4 rounded hover:shadow-2xl'>
                    <HiBuildingOffice2  className='text-green-600 text-8xl text-center ml-[80px] ' />
                    <h1 className='text-center text-2xl font-semibold m-2'>Panoramic Office</h1>
                    <p className='text-center'>The building does indeed have a fully equipped, multi-functional activity hall that our occupants can use to consolidate any type and size of circumstance for their office work. This style of workspace is more space and efficient compared to small built-in offices. We have a combination of built-in meeting rooms and private offices for senior staff.</p>
                </div>

                <div className='w-[300px] h-[500px] p-4 rounded hover:shadow-2xl'>
                    <GiBookshelf  className='text-blue-600 text-8xl text-center ml-[80px] ' />
                    <h1 className='text-center text-2xl font-semibold m-2'>Educative Possibilities</h1>
                    <p className='text-center'>At TechloSet we provide a good learning environment. Before you can expect to succeed professionally, we make sure you also feel safe both mentally and intellectually. While most of the organizations are not focused on intellectual growth, we take proper measure to provide an educative environment for all. Not only this, TechloSet Training offers free education for all.</p>
                </div>

                <div className='w-[300px] h-[500px] p-4 rounded hover:shadow-2xl'>
                    <LiaAddressBookSolid  className='text-red-600 text-8xl text-center ml-[80px] ' />
                    <h1 className='text-center text-2xl font-semibold m-2'>Accessibility</h1>
                    <p className='text-center'>Not only in our products, but in our location as well, we promote Accessibility. TechloSet is located in the heart of city Faisalabad. It is not only in the middle of city, but Canal expressway combines various towns and nearby cities of District Faisalabad along the way. You can reach out to our main office quickly and easily.</p>
                </div>

                <div className='w-[300px] h-[500px] p-4 rounded hover:shadow-2xl'>
                    <SiOnlyoffice  className='text-yellow-600 text-8xl text-center ml-[80px] ' />
                    <h1 className='text-center text-2xl font-semibold m-2'>Recognition Awards</h1>
                    <p className='text-center'>We recognise our team members when they reach significant milestones in order to make them feel as if the many years they have put in were worthwhile. We think it's a great way of saying 'thank you' for all the months and years of hard work they've put into our company.</p>
                </div>

                <div className='w-[300px] h-[500px] p-4 rounded hover:shadow-2xl'>
                    <DiCompass  className='text-blue-600 text-8xl text-center ml-[80px] ' />
                    <h1 className='text-center text-2xl font-semibold m-2'>Daily Sustenance</h1>
                    <p className='text-center'>We believe that a mind works at its fullest when the stomach is happiest and full. A brilliant brain is nourished by a good diet of course. At TechloSet we provide healthiest options for our team member and provide daily Lunch along with some snacking. You can enjoy lunch and teatime snack on daily basis, its on us!</p>
                </div>
                


        </div>
    </div>
  )
}

export default Life_at_TechloSet