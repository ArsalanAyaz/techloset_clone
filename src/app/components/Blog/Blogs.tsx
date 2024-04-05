import React from 'react'
import Image from 'next/image'
import blogimage1 from '../images/blogimage1.png'
import blogimage2 from '../images/blogimage2.jpeg'
import blogimage3 from '../images/blogimage3.jpeg'
import blogimage4 from '../images/blogimage4.jpeg'
import blogimage5 from '../images/blogimage5.jpeg'


const Blogs = () => {
  return (
    <div>

        <div>
            <h1 className='text-3xl sm:text-6xl font-bold underline m-10 sm:m-20'>Latest Posts</h1>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2'>


            <div className='m-10 hover:bg-gradient-to-r hover:from-blue-200 hover:to-green-200 p-4 rounded-xl '>
                <Image src={blogimage1} alt="image" className=' w-[300px] h-[200px] sm:ml-6'/>
                <h1 className='text-xl font-bold m-4'>Understanding SDLC Models In Detail 2024</h1>
                <p className='text-center opacity-80'>In software development, SDLC models are similar to roadmaps that guide the process from start to finish. They help development teams work in a properly organized way and outline a clear path throughout the development process.</p>
            </div>
            
            <div className='m-10 hover:bg-gradient-to-r hover:from-blue-200 hover:to-green-200 p-4 rounded-xl'>
                <Image src={blogimage2} alt="image" className=' w-[500px] h-[200px]'/>
                <h1 className='text-xl font-bold m-4'>5 Best Programming Languages For Game Development In 2024</h1>
                <p className='text-center opacity-80'>Every programming language has its own advantages and disadvantages. These can affect different aspects such as performance, ease of development, and compatibility with game engines. Nowadays, game developers have a wide range of options to choose from, each of which caters to different requirements and preferences.</p>
            </div>

            <div className='m-10 hover:bg-gradient-to-r hover:from-blue-200 hover:to-green-200 p-4 rounded-xl'>
                <Image src={blogimage3} alt="image" className=' w-[500px] h-[200px]'/>
                <h1 className='text-xl font-bold m-4'>What is SDLC? Understanding Software Development Life Cycle In 2024</h1>
                <p className='text-center opacity-80'>The software development process can be challenging because of changing requirements, technological upgrades, and cross-functional collaboration. The SDLC methodology entails a systematic management framework with deliverables at each stage. Because of this, multiple stakeholders agree on software development goals and upfront requirements.</p>
            </div>

            <div className='m-10 hover:bg-gradient-to-r hover:from-blue-200 hover:to-green-200 p-4 rounded-xl'>
                <Image src={blogimage4} alt="image" className=' w-[500px] h-[200px]'/>
                <h1 className='text-xl font-bold m-4'>Write Once, Run Anywhere: The Amazing Benefits of Monorepos</h1>
                <p className='text-center opacity-80'>In the ever-evolving realm of software development, monorepos, or monolithic repositories, have risen as a game-changing solution for managing diverse projects within a unified version control system. Distinct from conventional polyrepos (multiple repositories) and monoliths (single, large repositories), monorepos present a unique set of advantages and challenges that profoundly influence development workflows.</p>
            </div>

            <div className='m-10 hover:bg-gradient-to-r hover:from-blue-200 hover:to-green-200 p-4 rounded-xl'>
                <Image src={blogimage5} alt="image" className=' w-[500px] h-[200px]'/>
                <h1 className='text-xl font-bold m-4'>Top 10 LLMs for Startups</h1>
                <p className='text-center opacity-80'>In the ever-evolving tech landscape, harnessing the power of Large Language Models (LLMs) has become a cornerstone for startups seeking innovation. From chatbots to content creation and beyond, the versatility of LLMs is unparalleled</p>
            </div>

            




        </div>

        


    </div>
  )
}

export default Blogs