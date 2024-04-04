import React from 'react'
import { FaTools } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { BiWorld } from "react-icons/bi";
import { GrCopy } from "react-icons/gr";

const Cards = () => {
  return (
    <div className='mt-2 grid grid-cols-1 sm:grid-cols-2 p-6  items-center justify-center w-full  gap-2  '>


            <div className='relative bg-orange-600 h-[200px] sm:h-[250px] rounded-xl flex'>
                    <h1 className='text-white font-bold pl-8 text-xl mt-[120px] sm:mt-[180px]'>
                     Product <br />Engineering
                     </h1>  
                     <FaTools  className='absolute text-white text-7xl ml-[200px] mt-4 sm:ml-[350px] sm:mt-8'/>  
            </div>


            <div className='relative bg-orange-600 h-[200px] sm:h-[250px] rounded-xl flex'>
                    <h1 className='text-white font-bold pl-8 text-xl mt-[120px] sm:mt-[180px]'>
                    ENTERPRISE <br />SERVICES
                     </h1>  
                     <GrServices  className='absolute text-white text-7xl ml-[200px] mt-4 sm:ml-[350px] sm:mt-8'/>  
            </div>


            <div className='relative bg-orange-600 h-[200px] sm:h-[250px] rounded-xl flex'>
                    <h1 className='text-white font-bold pl-8 text-xl mt-[110px] sm:mt-[160px]'>
                    DIGITAL <br />
                    TRANSFORMATION <br />
                    SERVICES
                     </h1>  
                     <BiWorld  className='absolute text-white text-7xl ml-[200px] mt-4 sm:ml-[350px] sm:mt-8'/>  
            </div>


            <div className='relative bg-orange-600 h-[200px] sm:h-[250px] rounded-xl flex'>
                    <h1 className='text-white font-bold pl-8 text-xl mt-[110px] sm:mt-[160px]'>
                    STARTUP SOFTWARE <br />
                    SERVICES <br />
                    & SOLUTIONS
                     </h1>  
                     <GrCopy  className='absolute text-white text-6xl sm:text-7xl ml-[200px] mt-4 sm:ml-[350px] sm:mt-8'/>  
            </div>


    
    </div>

  )
}

export default Cards