import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";




const Blog_Header = () => {
  return (

    <div>
    <div className="sm:flex sm:flex-col sm:items-center sm:justify-center">
<div className='bg-[url("https://t4.ftcdn.net/jpg/02/22/68/39/360_F_222683930_mXWfHnOk9spCYOyEhqXNSWbWhZd4dFKF.jpg")]
 w-full h-96 bg-cover bg-center sm:flex sm:items-center sm:justify-between '>
    <div className='sm:pt-[150px] sm:mr-6 pt-20 sm:ml-6 p-4  '>
        <h1 className='sm:flex sm:items-center sm:justify-between text-white sm:text-6xl text-4xl sm:font-bold font-semibold'>TechloSet Blog</h1>
        <p className='sm:mt-4 text-white'>Keep up with the IT news</p>
    </div>

    <div className='sm:pt-[150px] pt-20 sm:pr-10 '>
        <h3 className='text-white flex items-center justify-center text-2xl sm:text-2xl sm:font-semibold sm:pb-2 underline'>Get Connected</h3>
        <div className='text-white flex items-center justify-center pt-4 gap-3 text-4xl sm:mt-2'>

                 <BsFacebook className='hover:text-blue-800'/>
                 <AiOutlineInstagram className='hover:text-blue-800'/>
                 <AiOutlineGithub className='hover:text-blue-800'/>
                 <BsTwitterX className='hover:text-blue-800'/>
                 <BsLinkedin className='hover:text-blue-800'/>

        </div>
    </div>
 </div>

 </div>
</div>
    
  )
}

export default Blog_Header