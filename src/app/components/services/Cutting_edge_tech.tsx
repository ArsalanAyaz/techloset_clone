import React from 'react'
import Image from 'next/image'
import Adobe_XD from '../images/Adobe_XD.png'
import ps from '../images/ps.png'
import ai from '../images/ai.png'
import python from '../images/python.png'
import nextjs from '../images/nextjs.png'
import fastapi from '../images/fastapi.png'
import postgre from '../images/postgre.png'

const Cutting_edge_tech = () => {
  return (

    <div>
        <h1 className='mt-20 mb-10 ml-10 sm:ml-0 sm:text-center text-4xl sm:text-4xl font-bold underline'>Cutting Edge Technologies</h1>
    
    
    
    <div className='sm:flex items-center justify-center gap-2 mb-4'>

       <div className='mb-4 ml-5 sm:ml-0 bg-gray-200 shadow-2xl h-[200px] w-[300px] rounded-xl'>
            <div className='flex flex-col items-center justify-center'>
                <Image src={Adobe_XD} width={200} height={100} alt="image" className=' p-2'/>
                <h1 className='text-2xl '>Adobe XD</h1>
            </div>
       </div>
       <div className='mb-4 ml-5 sm:ml-0 bg-gray-200 shadow-2xl h-[200px] w-[300px] rounded-xl'>
            <div className='flex flex-col items-center justify-center'>
                <Image src={ps} width={200} height={100} alt="image" className=' p-6 mt-2'/>
                <h1 className='text-2xl '>Adobe Photoshop</h1>
            </div>
       </div>
       <div className='mb-4 ml-5 sm:ml-0 bg-gray-200 shadow-2xl h-[200px] w-[300px] rounded-xl'>
            <div className='flex flex-col items-center justify-center'>
                <Image src={ai} width={170} height={100} alt="image" className='p-2'/>
                <h1 className='text-2xl '>Adobe illustrator</h1>
            </div>
       </div>
    </div>




    <div className='sm:flex items-center justify-center gap-2 mb-4'>
       <div className='mb-4 ml-5 sm:ml-0 bg-gray-200 shadow-2xl h-[200px] w-[300px] rounded-xl'>
            <div className='flex flex-col items-center justify-center'>
                <Image src={python} width={150} height={100} alt="image" className=' p-2'/>
                <h1 className='text-2xl '>Python</h1>
            </div>
       </div>
       <div className='mb-4 ml-5 sm:ml-0 bg-gray-200 shadow-2xl h-[200px] w-[300px] rounded-xl'>
            <div className='flex flex-col items-center justify-center'>
                <Image src={nextjs} width={200} height={100} alt="image" className=' p-6 mt-2'/>
                <h1 className='text-2xl '>Nextjs.14</h1>
            </div>
       </div>
       <div className='mb-4 ml-5 sm:ml-0 bg-gray-200 shadow-2xl h-[200px] w-[300px] rounded-xl'>
            <div className='flex flex-col items-center justify-center'>
                <Image src={fastapi} width={220} height={100} alt="image" className='p-2'/>
                <h1 className='text-2xl '>Fastapi</h1>
            </div>
       </div>
    </div>

    <div className='sm:flex items-center justify-center gap-2 mb-4'>
       <div className='mb-4 ml-5 sm:ml-0 bg-gray-200 shadow-2xl h-[200px] w-[300px] rounded-xl'>
            <div className='flex flex-col items-center justify-center'>
                <Image src={postgre} width={120} height={100} alt="image" className=' p-2 mt-6 '/>
                <h1 className='text-2xl '>PostgreSQL</h1>
            </div>
       </div>
       
    </div>

    
    </div>
  )
}

export default Cutting_edge_tech