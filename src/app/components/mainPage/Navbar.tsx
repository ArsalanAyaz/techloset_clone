"use client"
import React, { useState } from 'react'
import { IoIosOptions } from "react-icons/io";
import { MdCancelPresentation } from "react-icons/md";
import { IoLogoSlack } from "react-icons/io5";

export const Navbar = () => {

          const [showMenu, setShowMenue] = useState(false)

          const toggler = () => {
            setShowMenue(!showMenu)
          }

  return (
    <div className='text-white flex h-20 w-full bg-blue-800 items-center justify-between'>
      <div className='text-6xl m-4'>
        <IoLogoSlack />
      </div> 
        
      <div className='text-4xl m-4'>
        {showMenu ?

        <MdCancelPresentation onClick={toggler}/>
            :
        <IoIosOptions onClick={toggler}/>
        
        
        }
      </div>

      <div className='absolute top-20 w-full h-screen'>
         { showMenu && (
         
          <div className='w-full h-screen bg-blue-800 p-20'>
          <a href="./pages/cases" className='py-2 ml-4 flex items-center justify-center hover:bg-white hover:text-black text-2xl '>Cases</a>
          <a href="./pages/services" className='py-4 ml-4 flex items-center justify-center hover:bg-white hover:text-black text-2xl'>Services</a>
          <a href="./pages/about" className='py-2 ml-4 flex items-center justify-center hover:bg-white hover:text-black text-2xl'>About</a>
          <a href="./pages/career" className='py-2 ml-4 flex items-center justify-center hover:bg-white hover:text-black text-2xl'>Career</a>
          <a href="./pages/blog" className='py-2 ml-4 flex items-center justify-center hover:bg-white hover:text-black text-2xl'>Blog</a>
          <a href="./pages/contact" className='py-2 ml-4 flex items-center justify-center hover:bg-white hover:text-black text-2xl'>Contact Us</a>
          </div>
          
          )}
      </div>

    </div>
  )
}

