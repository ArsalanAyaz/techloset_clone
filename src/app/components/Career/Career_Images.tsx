import React from 'react'
import About_Images from '../About/About_Images'

const Career_Images = () => {
  return (
    <div className='flex items-center justify-center'>
        <div className='hidden sm:block columns-2 w-[300px]  sm:w-[500px] mt-10 mb-6 shadow-2xl rounded-xl '>

            <div className='bg-[url("https://foyr.com/learn/wp-content/uploads/2021/08/modern-office-design.png")] alt="image" 
            w-[300px] h-[400px] bg-center bg-cover hover:shadow-2xl'>     
            </div>

            <div className='bg-[url("https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Gldn-OP-2021-Perpetual-Hero-3000x1682:VP2-859x540")] alt="image" 
            w-[300px] h-[200px] bg-center bg-cover mt-2 hover:shadow-2xl'>     
            </div>

            <div className='bg-[url("https://www.yarooms.com/hs-fs/hubfs/open%20plan%20office.jpg?width=1904&height=1062&name=open%20plan%20office.jpg")] alt="image" 
            w-[300px] h-[500px] bg-center bg-cover hover:shadow-2xl'>     
            </div>

            <div className='bg-[url("https://www.colliers.com/-/media/images/colliers/asia/asia/research/1536/apacfutureofficespacesitehero1536x1040px.ashx?bid=8a87051cd7074f9e84a0d3ed4f671c83")] alt="image" 
            w-[300px] h-[400px] bg-center bg-cover mt-2 hover:shadow-2xl'>     
            </div>


        </div>


        {/* imported images from about section for mobile screen because above
        code is not being adjusted for mobile */}

        <div className='block sm:hidden -ml-8'>
            <About_Images/>
        </div>



    </div>
  )
}

export default Career_Images