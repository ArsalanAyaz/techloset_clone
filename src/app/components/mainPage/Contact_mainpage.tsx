import React from 'react'

const Contact_mainpage = () => {
  return (
    <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 p-8'>

            <div>


                <h1 className='text-xl sm:text-2xl font-bold text-orange-600 mb-4'>Head Office:</h1>
                <p className='mb-8'>717 K Street, STE 207 Sacramento, CA 95814, United State Phone: +1 (916) 822 7374</p>
                <h1 className='text-xl sm:text-2xl font-bold text-orange-600 mb-4'>Corporate Office:</h1>
                <p>
                    
                    P681 W Canal Rd, Amin Town, Faisalabad, Pakistan <br />
                    Landline: +92 (41) 87 50005  <br />
                    Whatsapp: +92 (327) 87 50005  <br />

                </p>

                <h2 className='text-xl sm:text-4xl font-bold mt-4 mb-4'>info@techloset.com</h2>   
                <button className='mt-4 mb-20 bg-orange-600 hover:bg-white border hover:border-orange-600 rounded-xl p-2 text-white hover:text-black'>Contact us</button> 

            </div>

            <div className='bg-[url("https://play-lh.googleusercontent.com/XL6sM0bWCIpsH-Rep0ZQ1bWyEFdeTHQ2wiXIv7cD6MdweDik5wIZSbdVwcTA-ChSVpE")]
            alt="map" h-[300px] w-[300px] bg-center bg-cover sm:ml-[100px] sm:mt-8
            '>


            </div>


        </div>
    </div>
  )
}

export default Contact_mainpage