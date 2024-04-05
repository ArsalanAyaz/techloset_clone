import React from 'react'

const Paragraph = () => {
  return (
    <div>
        <div className='grid grid-cols-1 mt-10 p-10'>

            <h1 className='text-xl'>What we are</h1>
            <h1 className='text-2xl sm:text-4xl font-bold underline mt-2'> Life at Techloset</h1>
            <p className='mt-4'>We at TechloSet believe in teamwork and hard work. We are looking for productive and flexible individuals who are willing to dedicate themselves to providing innovative products and services to our clients. We have over 100 happy clients and are looking for collaborative and exciting individuals who are willing to dedicate themselves to providing innovative products and services to our clients. <br /><br />

                Aside from the opportunity to realise your full potential, working with TechloSet allows you to network with some of the most talented industry professionals, attend annual picnics outside of the place, and explore a range of other benefits. <br /><br />

                Aside from the opportunity to discover your true potential, TechloSet allows you to network with some of the most talented individuals around the globe.</p>
            <div>
            <button className='bg-orange-600 p-2 mt-6 hover:bg-white text-white hover:text-black border hover:border-orange rounded-xl'>Learn More ... </button>
            </div>
        </div>
    </div>
  )
}

export default Paragraph