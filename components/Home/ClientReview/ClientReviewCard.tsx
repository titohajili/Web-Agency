"use client"
import Image from 'next/image';
import React from 'react'
import { FaQuoteRight, FaStar } from 'react-icons/fa';

type Props = {
     user: {
    id: number;
    name: string;
    profession: string;
    userImg: string;
    review: string;
}
}

const ClientReviewCard = ({user}: Props) => {
  return (
    <div className='bg-gray-100 rounded-lg m-3 p-6 relative'>
      <FaQuoteRight className='w-8 h-8 absolute top-4 right-4 text-red-600 opacity-20'/>
      <div className='mt-6 flex items-center'>
        <FaStar className='w-4 h-4 text-yellow-600'/>
        <FaStar className='w-4 h-4 text-yellow-600'/>
        <FaStar className='w-4 h-4 text-yellow-600'/>
        <FaStar className='w-4 h-4 text-yellow-600'/>
        <FaStar className='w-4 h-4 text-yellow-600'/>
      </div>
      <p className='pt-6 text-base text-gray-600 font-semibold'>{user.review}</p>
      <div className='w-full h-[1.2px] bg-gray-600 opacity-10 mt-10 mb-10'></div>
      <div className='flex items-center space-x-4'>
        <Image src={user.userImg} alt='img' width={50} height={50} className='rounded-full' />
        <div>
            <h1 className='font-bold text-gray-800'>{user.name}</h1>
            <p className='text-sm text-gray-500'>{user.profession}</p>
        </div>
      </div>
    </div>
  )
}

export default ClientReviewCard
