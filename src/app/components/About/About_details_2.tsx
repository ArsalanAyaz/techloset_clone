import React from 'react'
import { TiTickOutline } from "react-icons/ti";

const About_details_2 = () => {
  return (
    <div className='p-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 '>

            <div>
                <h1 className='text-2xl sm:text-3xl'>Let us Manage your Projects end-to-end</h1>
                <h1 className='text-xl sm:text-2xl mt-4 mb-4'>We can build your project end-to-end.</h1>
                <div className='flex items-center justify-center gap-2'>
                    <TiTickOutline className='text-orange-600 text-8xl' />
                    <p>Providing MVP workshops where we can present strategies and define the scope of your product by analyzing the market and target audience.</p>
                </div>

                <div className='flex items-center justify-center gap-2 mt-2 mb-2'>
                    <TiTickOutline className='text-orange-600 text-5xl' />
                    <p>Appointing expert vetted developers, designers, and quality assurance officers.</p>
                </div>

                <div className='flex items-center justify-center gap-2 mt-4'>
                    <TiTickOutline className='text-orange-600 text-5xl' />
                    <p>Appointing expert vetted developers, designers, and quality assurance officers.</p>
                </div>

                <button className='bg-orange-600 hover:bg-white border hover:border-black hover:text-black rounded p-2 text-white mt-6 ml-16 sm:ml-[120px]'>Start your project</button>
            </div>








            <div className='mt-10 sm:mt-0 mb-10'>
                <h1 className='text-2xl sm:text-3xl'>Hire us as your dedicated team</h1>
                <h1 className='text-xl sm:text-2xl mt-4 mb-4'>We'll put together a skilled team to build your product.</h1>
                <div className='flex items-center justify-center gap-2'>
                    <TiTickOutline className='text-orange-600 text-4xl' />
                    <p>Onboard us to plan, design, develop, test, and deploy your product in complete transparency.</p>
                </div>


                <div className='flex items-center justify-center gap-2 mt-2'>
                    <TiTickOutline className='text-orange-600 text-4xl' />
                    <p>Pricing and strategies that are project centric</p>
                </div>


                <div className='flex items-center justify-center gap-2 mt-2'>
                    <TiTickOutline className='text-orange-600 text-4xl' />
                    <p>Works best for startups, small businesses, and large corporations.</p>
                </div>

                <button className='bg-orange-600 hover:bg-white border hover:border-black hover:text-black rounded p-2 text-white mt-6 ml-20 sm:ml-[120px]'>Know More ...</button>
            </div>


        </div>
    </div>
  )
}

export default About_details_2