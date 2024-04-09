import React from 'react'
import { MdOutlineSendToMobile } from "react-icons/md";
import { SiSimilarweb } from "react-icons/si";
import { GiArtificialHive } from "react-icons/gi";

const Main_Services = () => {
  return (
    <div>

      <div className='mt-10 p-4'>

              <h1 className='text-4xl text-center mb-4 font-bold underline'> Services </h1>
              <p className='text-center'>TechloSet Solutions aspires to enhance the productivity and growth of your business by providing 'Smart Solutions' and 'Digitally Transforming' your business processes. Using latest state-of-the-art Technologies, we're providing the following services to bring life in your product.</p>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:m-20'>

                        <div className='bg-gradient-to-r hover:from-purple-400 hover:bg-green-400 duration-1000 bg-gray-100 shadow-2xl p-4 rounded-xl mt-4'>

                                <div className='flex'>
                                    <MdOutlineSendToMobile className='text-8xl text-blue-600 rounded-2xl'/>
                                    <h1 className='font-bold ml-4 text-2xl mt-6'>Mobile app Development</h1>
                                </div>
                                
                                <div className='ml-[100px] mt-10 mb-4'>
                                  <h1 className='opacity-80 sm:text-xxl'>Android and ios App</h1>
                                </div>

                        </div>


                        <div className='bg-gradient-to-r hover:from-purple-400 hover:bg-green-400 duration-1000 bg-gray-100 shadow-2xl p-4 rounded mt-4'>

                                <div className='flex'>
                                    <SiSimilarweb className='text-8xl text-orange-600 rounded-2xl'/>
                                    <h1 className='font-bold ml-4 text-2xl mt-6'>Web app Development</h1>
                                </div>

                                <div className='ml-[100px] mt-10 mb-4'>
                                  <p className='opacity-80 sm:text-xxl'>Crafting Digital Magic with TechloSet: Elevate Your Web Presence</p>
                                </div>

                        </div>

                        <div className='bg-gradient-to-r hover:from-purple-400 hover:bg-green-400 duration-1000 bg-gray-100 shadow-2xl p-4 rounded mt-4'>

                                <div className='flex'>
                                    <GiArtificialHive className='text-8xl text-red-600 rounded-2xl'/>
                                    <h1 className='font-bold ml-4 text-2xl mt-6'>AI based Solutions</h1>
                                </div>

                                <div className='ml-[100px] mt-10 mb-4'>
                                  <p className='opacity-80 sm:text-xxl'>Transforming Industries with AI by unlocking possibilities</p>
                                </div>

                        </div>

                        <div className='bg-gradient-to-r hover:from-purple-400 hover:bg-green-400 duration-1000 bg-gray-100 shadow-2xl p-4 rounded mt-4'>

                                <div className='flex'>
                                    <GiArtificialHive className='text-8xl text-yellow-600 rounded-2xl'/>
                                    <h1 className='font-bold ml-4 text-2xl mt-6'>Blockchain Based Solutions</h1>
                                </div>

                                <div className='ml-[100px] mt-10 mb-4'>
                                  <p className='opacity-80 sm:text-xxl'>Empowering Businesses with Blockchain Solutions</p>
                                </div>

                        </div>

                        <div className='bg-gradient-to-r hover:from-purple-400 hover:bg-green-400 duration-1000 bg-gray-100 shadow-2xl p-4 rounded mt-4'>

                                <div className='flex'>
                                    <GiArtificialHive className='text-8xl text-blue-600 rounded-2xl'/>
                                    <h1 className='font-bold ml-4 text-2xl mt-6'>Saas Products</h1>
                                </div>

                                <div className='ml-[100px] mt-10 mb-4'>
                                  <p className='opacity-80 sm:text-xxl'>Empowering Businesses with Blockchain Solutions</p>
                                </div>

                        </div>

                        <div className='bg-gradient-to-r hover:from-purple-400 hover:bg-green-400 duration-1000 bg-gray-100 shadow-2xl p-4 rounded mt-4'>

                                <div className='flex'>
                                    <GiArtificialHive className='text-8xl text-green-600 rounded-2xl'/>
                                    <h1 className='font-bold ml-4 text-2xl mt-6'>Devops products</h1>
                                </div>

                                <div className='ml-[100px] mt-10 mb-4'>
                                  <p className='opacity-80 sm:text-xxl'>Empowering Businesses with Blockchain Solutions</p>
                                </div>

                        </div>
                

              </div>


      </div>

    </div>
  )
}

export default Main_Services