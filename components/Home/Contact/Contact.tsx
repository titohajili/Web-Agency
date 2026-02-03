import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div className='py-20'>
      <div>
        <h1 className='text-red-500 dark:text-red-300 font-medium text-center'>Our Contact Information</h1>
        <h1 className='text-center text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-fuchsia-100 mt-4 font-bold tracking-wider'>Join Our Workplace Around The World</h1>
      </div>
      <div className='w-[90%]  md:w-[80%] lg:w-[70%] mx-auto'>
        <Image src={"/images/map.png"} alt='img' width={900} height={900} className='mx-auto mt-16'/>
        <div className='mt-16'>
            <h1 className='text-lg font-semibold'>Send Message</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
                <input type="email" placeholder='Your email' className='border-2 border-gray-200 px-4 outline-none py-3 rounded-full' />
                <input type="text" placeholder='Phone Number' className='border-2 border-gray-200 px-4 outline-none py-3 rounded-full' />
                <input type="text" placeholder='Website' className='border-2 border-gray-200 px-4 outline-none py-3 rounded-full' />
            </div>
            <textarea 
            rows={9}
            placeholder='Your Message Here'
            className='mt-10 w-full border-2 outline-none border-gray-200 px-4 py-3 rounded-lg'></textarea>
            <button className='mt-10 text-white rounded-full px-14 py-4 cursor-pointer hover:bg-pink-700 bg-pink-600 transition-all duration-200'>Submit Now</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
