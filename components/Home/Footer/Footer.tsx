import Logo from '@/components/Helper/Logo'
import React from 'react'
import { FaFacebook, FaFacebookF, FaInstagram, FaPaperPlane, FaPhone, FaYoutube } from 'react-icons/fa'
import { IoMailOpen } from 'react-icons/io5'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='pt-16 pb-16 bg-blue-950 dark:bg-gray-900'>
      {/* top part */}
      <div className='w-[80%] mx-auto grid items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10'>
        {/* 1st part */}
        <div>
            {/* LOGO */}
            <Logo/>
            <p className='mt-6 text-sm text-gray-300 leading-6 font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure eveniet odit ad!</p>
            <div className='flex items-center space-x-4 mt-6'>
                <div className='w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-col cursor-pointer hover:bg-blue-600 transition-all duration-300'>
                    <FaFacebookF className='w-6 h-6 text-white'/>
                </div>

                <div className='w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-col cursor-pointer hover:bg-red-600 transition-all duration-300'>
                    <FaYoutube className='w-6 h-6 text-white'/>
                </div>

                <div className='w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-col cursor-pointer hover:bg-pink-600 transition-all duration-300'>
                    <FaInstagram className='w-6 h-6 text-white'/>
                </div>
            </div>
        </div>

        {/* 2nd part */}
        <div className='lg:mx-auto'>
            <h1 className='text-lg font-bold text-white'>Address</h1>
            <div className='mt-8'>
                <div className='flex items-center space-x-5'>
                    <FaPaperPlane className='w-5 h-5 text-white'/>
                    <p className='font-medium text-sm text-white'>Old city Street 2, <br />1234 Baku </p>
                </div>

                <div className='flex items-center space-x-5 my-5'>
                    <FaPhone className='w-5 h-5 text-white'/>
                    <p className='font-medium text-sm text-white'>+994 12 345 67 89 </p>
                </div>

                <div className='flex items-center space-x-5 my-5'>
                    <IoMailOpen  className='w-5 h-5 text-white'/>
                    <p className='font-medium text-sm text-white'>h4E9M@example.com</p>
                </div>
            </div>
        </div>

        {/* 3rd part */}
        <div className='lg:mx-auto'>
            <h1 className='text-lg font-bold text-white'>Here Services</h1>
            <div className='mt-8'>
                <div className='flex items-center mb-2'>
                    <MdKeyboardDoubleArrowRight className='w-7 h-7 text-white' />
                    <p>UI Desing</p>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
