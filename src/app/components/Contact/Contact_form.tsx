import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { ImSkype } from "react-icons/im";
import { FaAddressCard } from "react-icons/fa6";

const Contact_form = () => {
  return (
    <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 mt-10'>

            <div className='sm:w-[500px] p-4'>

                    <div className='flex mt-4'>

                            <div>
                                <MdOutlineMail className='text-[80px] text-blue-600'/>
                            </div>

                            <div className='pl-2'>
                                <h1 className='text-black text-2xl pt-[14px] '>E-MAIL</h1>
                                <p>info@techloset.com</p>
                            </div>

                    </div>

                    <div className='flex mt-10'>
                            <div>
                                <FaPhoneSquareAlt className='text-[80px] text-orange-600'/>
                            </div>

                            <div className='pl-2'>
                                
                                <p className='pt-[4px]'>
                                    <b>PHONE</b> <br />
                                    <b>Sale:</b> <br />
                                    
                                    Phone: +1 (916) 822 7374 <br />
                                    <b>For Careers:</b> <br />
                                    Landline: +92 (41) 87 50005 <br />
                                    Whatsapp: +92 (327) 87 50005
                                </p>

                            </div>

                    </div>

                    <div className='flex mt-10 pl-1 '>
                            <div>
                                <SlCalender className='text-[80px] text-red-600'/>
                            </div>

                            <div className='pl-3'>
                            
                            <h1 className='font-bold mt-2'>Lets Schedule a Call</h1>
                            <button className='text-white hover:text-black bg-orange-600 hover:bg-white border hover:border-black p-2 rounded'>Schedule a call ...</button>

                            </div>

                    </div>


                    <div className='flex mt-10'>

                            <div>
                                <ImSkype  className='text-[80px] text-blue-600 pl-1'/>
                            </div>

                            <div className='pl-2'>
                                <h1 className='text-black text-2xl pt-[14px] '>SKYPE</h1>
                                <p>Techloset</p>
                            </div>

                    </div>


                    <div className='flex mt-8 pl-1'>
                            <div>
                                <FaAddressCard className='text-[80px] text-yellow-400'/>
                            </div>

                            <div className='pl-2'>
                                
                                <p className='pt-[4px]'>
                                    <b>ADDRESS</b> <br />
                                    <b>Head Office:</b> <br />
                                    
                                    717 K Street, STE 207 <br />
                                    <b>For Careers:</b> <br />
                                    Landline: +92 (41) 87 50005 <br />
                                    Whatsapp: +92 (327) 87 50005
                                </p>

                            </div>

                    </div>


                    


            </div>





           
            <div className='bg-gray-200 sm:w-[500px] shadow-2xl rounded-xl mt-10 sm:mt-0 '>
                
                        <div className='sm:flex ml-5 mt-10'>
                            <div>
                                <label htmlFor="" className='font-bold'>Name*</label>
                                <input type="text" className='mt-2 ml-2 sm:ml-0 rounded h-[40px] border border-gray-200'/>
                            </div>
                            <div className='mt-6 sm:mt-0'>
                                <label htmlFor="" className='font-bold'>Email*</label>
                                <input type="text" className='mt-2 ml-3 sm:ml-0 rounded h-[40px] border border-gray-200'/>
                            </div>
                        </div>

                        <div className='sm:flex ml-5 mt-10'>
                            <div>
                                <label htmlFor="" className='font-bold'>SKYPE</label>
                                <input type="text" className='mt-2 ml-2 sm:ml-0 rounded h-[40px] border border-gray-200'/>
                            </div>
                            <div className='mt-6 sm:mt-0'>
                                <label htmlFor="" className='font-bold'>Phone</label>
                                <input type="text" className='mt-2 ml-3 sm:ml-0 rounded h-[40px] border border-gray-200'/>
                            </div>
                        </div>

                        <div className='mt-10 ml-[20px] sm:ml-[50px]'>
                            <h1 className='font-bold mb-2'>How can we help you!</h1>
                            <textarea name="" className='h-[200px] w-[300px] sm:w-[400px] p-4 rounded'></textarea>
                        </div>

                        <div className='flex ml-4 mt-8 sm:ml-8'>
                            <input type="checkbox" />
                            <p className='ml-4 opacity-80 '>I agree to receive marketing communication from TechloSet by email.</p>
                        </div>
                       
                        <div className='ml-4 sm:ml-6 mt-8'>
                            <button className='bg-orange-600 hover:bg-orange-700 p-2 rounded-xl text-white'>submit</button>
                        </div>
            </div>

        </div>
    </div>
  )
}

export default Contact_form