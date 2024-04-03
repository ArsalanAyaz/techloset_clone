import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Header = () => {
  return (

    <div className="sm:flex sm:flex-col sm:items-center sm:justify-center">
    <div className='bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrMIli9Xj7--XgRQWe2LwCsjf-RAuoG3_jqw&s")]
     w-full h-96 bg-cover bg-center sm:flex sm:items-center sm:justify-between text-white'>
        <div className='sm:pt-[150px] sm:mr-6 pt-20 sm:ml-6 p-4  '>
            <h1 className='sm:flex sm:items-center sm:justify-between sm:text-4xl text-2xl sm:font-bold font-semibold'>TechloSet Services</h1>
            <p className='sm:mt-4'>We find a way to serve you with the most cutting-edge 
                technologies and target the right audience for your product 
                and we add innovation at each step during the cycle.</p>
        </div>

        <div className='sm:pt-[200px] pt-6 sm:pr-10 '>
            <h3 className='flex items-center justify-center text-2xl sm:text-2xl sm:font-semibold sm:pb-2 underline'>Get Connected</h3>
            <div className='flex items-center justify-center pt-4 gap-3 text-4xl sm:mt-2'>

                     <BsFacebook className='hover:text-blue-500'/>
                     <AiOutlineInstagram className='hover:text-blue-500'/>
                     <AiOutlineGithub className='hover:text-blue-500'/>
                     <BsTwitterX className='hover:text-blue-500'/>
                     <BsLinkedin className='hover:text-blue-500'/>

            </div>
        </div>
     </div>

     </div> 
  )
}

export default Header