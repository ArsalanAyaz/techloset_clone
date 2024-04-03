import React from 'react'

const Header2 = () => {
  return (
    <div className='gap-3 p-3 mt-6 sm:flex items-center justify-center inline-block '>


        <div className='items-center mt-6 text-center '>
            <h4 className='text-red-600'>TRANSFORM YOUR IDEAS INTO REALITY</h4>
            <h1 className='text-2xl sm:text-2xl mb-6'>Unleash Innovation with TechloSet Solutions</h1>
            <p>We are recognized globally as a top technology solutions provider. We offer custom development services for Android, iOS, Artificial Intelligence, Blockchain, DevOps and IoT</p>
            <button className='p-2 bg-orange-600 rounded-xl m-4 hover:bg-orange-700 text-white'>About Company</button>
        </div>


    
      <div className='mt-4'>

        <div className='bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmgx_cQNCBglGRsUd2aehL_gfyZpBDqft88A&s")]
        h-[200px] w-[300px]  bg-cover bg-center flex items-center justify-center shadow-2xl rounded-xl'>
            <h1 className='text-white font-bold text-2xl shadow-2xl '>STARUP</h1>   
        </div>

        <div className='mt-4'>
          <p>We are recognized globally as a top technology solutions provider. We offer custom development services for Android, iOS, Artificial Intelligence, Blockchain, DevOps and IoT</p>
        </div>

      </div>
      <div className='mt-6'>

        <div className='bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS27Az4SBYX8LKpoZnU9w1NlUCoEBno1fV31A&s")]
        h-[200px] w-[300px] bg-cover bg-center flex items-center justify-center shadow-2xl rounded-xl'>
            <h1 className='text-white font-bold text-2xl shadow-2xl'>Enterprise</h1>   
        </div>

        <div className='mt-4'>
          <p>We are recognized globally as a top technology solutions provider. We offer custom development services for Android, iOS, Artificial Intelligence, Blockchain, DevOps and IoT</p>
        </div>

      </div>

        


    </div>
  )
}

export default Header2