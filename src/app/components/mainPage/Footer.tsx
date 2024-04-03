import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='bg-gray-800 text-white '>
        <div className='grid w-full grid-cols-2 sm:grid-cols-4 bg-gray-800 text-white pt-10'>
            <div className='p-4 '>
                <h1 className='text-3xl font-md mb-6'>Address</h1>
                <h1 className='text-md mb-4'>Head Office</h1>
                <p className='mb-4'>717 K Street, STE 207 Sacramento, CA 95814, United State</p>
                <p className='mb-6 hover:text-orange-700'>phone: +1(916) 822 7374</p>



                <div className='hidden sm:block'>
                <h1 className='text-xl font-bold mb-4'>Cooperata Office :</h1>
                <p className='mb-4'>P681 W Canal Rd, Amin Town, Faisalabad, Pakistan</p>
                <p className='mb-4 hover:text-orange-700'>Landline: +1(916) 822 7374</p>
                <p className='mb-6 hover:text-orange-700'>Whatsapp: +1(916) 822 7374</p>
                </div>


                <div className='hidden sm:block'>
                <h1 className='text-2xl font-bold mb-4'>Follow us</h1>
                    <div className=''>
                         <div className='grid grid-cols-3 gap-4 text-2xl'>
                                 <BsFacebook className='hover:text-blue-500'/>
                                 <AiOutlineInstagram className='hover:text-blue-500'/>
                                 <AiOutlineGithub className='hover:text-blue-500'/>
                                 <BsTwitterX className='hover:text-blue-500'/>
                                 <BsLinkedin className='hover:text-blue-500'/>
                                 <AiFillYoutube className='hover:text-blue-500 text-3xl'/>
                         </div>
                    </div>
                </div>
            </div>






       

            <div className='hidden sm:block p-4 pl-20'>
                <h1 className='text-xl font-bold mb-4'>Who we are</h1>
                <p className='mb-2 mt-2'>About us</p>
                <p className='mb-2 mt-2'>Clients & Partners</p>
                <p className='mb-2 mt-2'>Team Techloset</p>
                <p className='mb-2 mt-2'>Life at Techloset</p>
                <p className='mb-2 mt-2'>Hire us</p>
                <p className='mb-2 mt-2'>Contact us</p>
                <p className='mb-2 mt-2'>Events</p>
            </div>

            <div className='hidden sm:block p-4 pl-20'>
                <h1 className='text-xl font-bold mb-4'>Insight</h1>
                <p className='mb-2 mt-2'>Our cases</p>
                <p className='mb-2 mt-2'>Careers</p>
                <p className='mb-2 mt-2'>Awards and Achievements</p>
                <p className='mb-2 mt-2'>Testimonials</p>
                <p className='mb-2 mt-2'>News</p>
                <p className='mb-2 mt-2'>Blogs</p>
            </div>


            <div className='hidden sm:block p-4'>
                <h1 className='text-xl font-bold mb-4'>Services</h1>
                <p className='mb-2 mt-2'>Mobile App Development</p>
                <p className='mb-2 mt-2'>Web App Development</p>
                <p className='mb-2 mt-2'>AI Services</p>
                <p className='mb-2 mt-2'>Blockchain solutions</p>
                <p className='mb-2 mt-2'>Saas products</p>
                <p className='mb-2 mt-2'>DevOps Service</p>
            </div>


        






                <div className='block sm:hidden p-4'>
                <h1 className='text-xl font-bold mb-4'>Cooperata Office :</h1>
                <p className='mb-4'>P681 W Canal Rd, Amin Town, Faisalabad, Pakistan</p>
                <p className='mb-4 hover:text-orange-700'>Landline: +1(916) 822 7374</p>
                <p className='mb-6 hover:text-orange-700'>Whatsapp: +1(916) 822 7374</p>
                </div>

            <div className='flex items-center gap-10 ml-[350px]'>


                <div className='hidden sm:block grid grid-cols-1 items-center justify-center text-center'>
                    <h1 className='mt-4 mb-1 text-xl'>Review on us</h1>
                    <h1 className='mb-4 text-6xl font-bold text-orange-600'>Clutch</h1>
                </div>


               

                <div className='hidden sm:block'>
                    <p className='pb-2 text-2xl underline hover:text-orange-600'>Newsletter</p>
                    <div className='flex'>
                    <input type="text" placeholder='email' className='p-2' />
                    <button className='bg-orange-600 p-2'>Subscribe</button>
                    </div>
                </div>


            </div>

    

        </div>

        <div className='block sm:hidden text-white'>
                <h1 className='text-2xl font-bold text-center underline text-orange-600'>Follow us</h1>
                    <div className=''>
                         <div className='flex w-full gap-2 text-2xl items-center justify-center p-4'>
                                 <BsFacebook className='hover:text-blue-500'/>
                                 <AiOutlineInstagram className='hover:text-blue-500'/>
                                 <AiOutlineGithub className='hover:text-blue-500'/>
                                 <BsTwitterX className='hover:text-blue-500'/>
                                 <BsLinkedin className='hover:text-blue-500'/>
                                 <AiFillYoutube className='hover:text-blue-500 text-3xl'/>
                         </div>
                    </div>
        </div>

            <div className='block sm:hidden flex  '>
                <div className='block sm:hidden p-4'>
                <h1 className='text-xl font-bold mb-4'>Who we are</h1>
                <p className='mb-2 mt-2'>About us</p>
                <p className='mb-2 mt-2'>Clients & Partners</p>
                <p className='mb-2 mt-2'>Team Techloset</p>
                <p className='mb-2 mt-2'>Life at Techloset</p>
                <p className='mb-2 mt-2'>Hire us</p>
                <p className='mb-2 mt-2'>Contact us</p>
                <p className='mb-2 mt-2'>Events</p>
                </div>



                <div className='block sm:hidden p-4'>
                <h1 className='text-xl font-bold mb-4'>Insight</h1>
                <p className='mb-2 mt-2'>Our cases</p>
                <p className='mb-2 mt-2'>Careers</p>
                <p className='mb-2 mt-2'>Awards and Achievements</p>
                <p className='mb-2 mt-2'>Testimonials</p>
                <p className='mb-2 mt-2'>News</p>
                <p className='mb-2 mt-2'>Blogs</p>
                </div>

            </div>

                <div className='block sm:hidden p-4'>
                <h1 className='text-xl font-bold mb-4'>Services</h1>
                <p className='mb-2 mt-2'>Mobile App Development</p>
                <p className='mb-2 mt-2'>Web App Development</p>
                <p className='mb-2 mt-2'>AI Services</p>
                <p className='mb-2 mt-2'>Blockchain solutions</p>
                <p className='mb-2 mt-2'>Saas products</p>
                <p className='mb-2 mt-2'>DevOps Service</p>
                </div>
        
                
        <div className='block sm:hidden grid grid-cols-1 items-center justify-center text-center'>
            <h1 className='mt-4 mb-1 text-xl'>Review on us</h1>
            <h1 className='mb-4 text-6xl font-bold text-orange-600'>Clutch</h1>
        </div>

        <div className='block sm:hidden'>
            <h1 className='p-2 ml-4 underline'>Newsletter</h1>
        </div>

        <div className='block sm:hidden flex items-center justify-center pb-4'>
            <input type="text" placeholder='email' className='p-2' />
            <button className='bg-orange-600 p-2'>Subscribe</button>
        </div>

        <div className='bg-black '>
            <p className='text-center p-2'>Copyright @ Techloset. All rights reserved</p>
        </div>

    </div>
  )
}

export default Footer