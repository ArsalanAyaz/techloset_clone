import React from 'react'

const Video = () => {
  return (
    <div>
      <div className='video-container bg-gray-200'>

      <h1 className='text-center text-black font-semibold sm:text-4xl underline pt-10'>What Client says about Techloset !</h1>
        
        <iframe
          
          src='https://www.youtube.com/embed/4CP7OMs20Ag'
          
        //   allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        //   allowFullScreen
          className='p-4 sm:p-20 w-full h-auto sm:h-[1080px]' 
        >

        


        </iframe>
      </div>
    </div>
  )
}

export default Video
