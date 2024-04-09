import React from 'react'
import { TbBrandNextjs } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiHiveBlockchain } from "react-icons/si";
import { SiBlockchaindotcom } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { FaNode } from "react-icons/fa";
import { FaAws } from "react-icons/fa6";
import { IoIosCloudUpload } from "react-icons/io";
import { VscAzureDevops } from "react-icons/vsc";
import { SiFlipkart } from "react-icons/si";
import { CgEditFlipH } from "react-icons/cg";
import { SiAudiotechnica } from "react-icons/si";
import { FaArrowCircleRight } from "react-icons/fa";


const Software = () => {
  return (
    <div className=''>
        <div className=" bg-blue-900 ">
            <div className='grid grid-cols-4 sm:pl-[260px] sm:pr-[220px] pt-10 p-10'>
                        
                        
                        <div className=''>

                            <TbBrandNextjs className=' mb-4 text-[80px] sm:text-[120px] text-gray-400 hover:text-orange-600 duration-1000 shadow-2xl  hover:scale-110 bg-white rounded-full p-6 hover:opacity-100' />
                            <FaPython className='mb-4 text-[80px] sm:text-[120px] text-gray-400 hover:text-blue-600 duration-1000 shadow-2xl  hover:scale-110 bg-white rounded-full p-6 hover:opacity-100' />
                            <SiTailwindcss className='mb-4 text-[80px] sm:text-[120px] text-gray-400 hover:text-violet-600 duration-1000 shadow-2xl  hover:scale-110 bg-white rounded-full p-6 hover:opacity-100' />
                            

                        </div>


                        <div className='-ml-[4px] sm:-ml-[20px] mt-12 sm:mt-20'>

                            <IoLogoNodejs className=' mb-4 text-[80px] sm:text-[120px] text-gray-400 hover:text-amber-950 duration-1000 shadow-2xl  hover:scale-110 bg-white rounded-full p-6 hover:opacity-100' />
                            <SiHiveBlockchain className='mb-4 text-[80px] sm:text-[120px] text-gray-400 hover:text-lime-600 duration-1000 shadow-2xl  hover:scale-110 bg-white rounded-full p-6 hover:opacity-100' />
                            <FaNode className='mb-4 text-[80px] sm:text-[120px] text-gray-400 hover:text-green-900 duration-1000 shadow-2xl  hover:scale-110 bg-white rounded-full p-6 hover:opacity-100' />
                            

                        </div>

        
                        <div className='-ml-[4px] sm:-ml-[40px]'>

                            <FaAws className=' mb-4 text-[80px] sm:text-[120px] text-gray-400 hover:text-indigo-950 duration-1000 shadow-2xl  hover:scale-110 bg-white rounded-full p-6 hover:opacity-100' />
                            <IoIosCloudUpload  className='mb-4 text-[80px] sm:text-[120px] text-gray-400 hover:text-pink-300 duration-1000 shadow-2xl  hover:scale-110 bg-white rounded-full p-6 hover:opacity-100' />
                            <VscAzureDevops className='mb-4 text-[80px] sm:text-[120px] text-gray-400 hover:text-rose-600 duration-1000 shadow-2xl  hover:scale-110 bg-white rounded-full p-6 hover:opacity-100' />
                            

                        </div>

                        <div className='-ml-[8px] sm:-ml-[60px] mt-12 sm:mt-20'>

                            <SiFlipkart className=' mb-4 text-[80px] sm:text-[120px] text-gray-400 hover:text-violet-950 duration-1000 shadow-2xl  hover:scale-110 bg-white rounded-full p-6 hover:opacity-100' />
                            <CgEditFlipH  className='mb-4 text-[80px] sm:text-[120px] text-gray-400 hover:text-blue-600 duration-1000 shadow-2xl  hover:scale-110 bg-white rounded-full p-6 hover:opacity-100' />
                            <SiAudiotechnica className='mb-4 text-[80px] sm:text-[120px] text-gray-400 hover:text-amber-600 duration-1000 shadow-2xl  hover:scale-110 bg-white rounded-full p-6 hover:opacity-100' />
                            

                        </div>
                        



                 
            </div>


                        <div className='p-4 mt-6'>

                                    <h1 className='text-white text-2xl sm:text-4xl underline mb-4 ml-10'>Technology Capabilities</h1>
                                    <p className='text-white text-center'>TechloSet Solutions aspires to enhance the productivity and growth of your business by providing 'Smart Solutions' and 'Digitally Transforming' your business processes. Using latest state-of-the-art Technologies, we're providing the following services to bring life in your product.</p>
                                    <div className='flex mt-8 ml-10'>
                                            <FaArrowCircleRight className='text-orange-600 text-4xl '/>
                                            <h1 className='ml-2 text-white text-xl mt-1'>00% Average Customer Satisfaction</h1>
                                    </div>
                                    <div className='flex mt-8 ml-10'>
                                            <FaArrowCircleRight className='text-orange-600 text-4xl '/>
                                            <h1 className='ml-2 text-white text-xl mt-1'>70.3% Net Promoter Scope</h1>
                                    </div>
                                    <div className='flex mt-8 ml-10'>
                                            <FaArrowCircleRight className='text-orange-600 text-4xl '/>
                                            <h1 className='ml-2 text-white text-xl mt-1'>174 Active World-class Client</h1>
                                    </div>

                        </div>



        </div>
    </div>
  )
}

export default Software