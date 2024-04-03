import React from 'react'
import Image from 'next/image'
import mobile from '../images/mobile.png'
import tab from '../images/tab.png'

const Details = () => {
  return (
    <div >
        <div className='sm:flex items-center justify-center '>
            <Image src={mobile} alt='image' className='h-[500px] w-full'/>
        </div>

        <div>
            <h1 className='text-center text-6xl font-bold mb-4'>Crypsey</h1>
            <p className='p-8'>Techloset Solution worked on Crypsey – Your Cryptocurrency Resource Hub. Dive into the world of digital finance with Crypsey's comprehensive insights and tools. Explore real-time market data, track trends, and gain a deeper understanding of cryptocurrencies. From Bitcoin to altcoins, this platform empowers you to make informed decisions in this ever-evolving landscape. <br /> <br />

            From Bitcoin to altcoins, this platform empowers you to make informed decisions in this ever-evolving landscape. Whether you're an investor, trader, or simply curious, Crypsey provides the knowledge and resources to navigate the complexities of the crypto universe. Join us in embracing the future of finance through innovation, education, and empowerment.</p>
        </div>


        <div className='sm:flex items-center justify-center'>
            <Image src={tab} alt='image' className='h-[500px] w-[2600px]'/>
        </div>

        <div>
            <h1 className='text-center text-6xl font-bold mb-4'>RemoteBCJobs</h1>
            <p className='p-8'>Techloset Solutions worked on RemoteBCJobs web app that allows you to find and apply for remote jobs in British Columbia, Canada. The web app lets you browse through different categories of remote jobs, such as software development, design, marketing, and more, and see their details, requirements, and salaries. You can also create an account and upload your resume and cover letter to apply for the jobs.

From tech roles to creative positions, RemoteBCJobs connects you with employers who value talent regardless of location. Discover a new way of working that allows you to achieve a work-life balance while contributing to innovative projects.</p>
        </div>

    </div>
  )
}

export default Details