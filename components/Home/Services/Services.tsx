import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className='py-20 bg-[#eff3f6] dark:bg-gray-900'>
      <div>
        <h1 className='text-red-500 dark:text-red-300 font-medium text-center'>Our Services</h1>
        <h1 className='text-center text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-fuchsia-100 mt-4 font-bold tracking-wider'>Provided Features</h1>
      </div>
      {/* service cards */}
      <div  
      data-aos="fade-up" 
      data-aos-anchor-placement="top-center"
      dats-aos-delay="0"
      className='w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        <div data-aos="fade-up" 
            data-aos-anchor-placement="top-center"
            dats-aos-delay="100">
            <ServiceCard title='Design and Development' img='/images/s1.png' />
        </div>
        <div data-aos="fade-up" 
      data-aos-anchor-placement="top-center"
      dats-aos-delay="200">
            <ServiceCard title='Account Settings' img='/images/s2.png' />
        </div>
        <div data-aos="fade-up" 
      data-aos-anchor-placement="top-center"
      dats-aos-delay="300">
            <ServiceCard title='Notification Manage' img='/images/s3.png' />
        </div>
        <div data-aos="fade-up" 
      data-aos-anchor-placement="top-center"
      dats-aos-delay="400">
            <ServiceCard title='Customer Support' img='/images/s4.png' />
        </div>
        <div data-aos="fade-up" 
      data-aos-anchor-placement="top-center"
      dats-aos-delay="500">
            <ServiceCard title='Email Marketing' img='/images/s5.png' />
        </div>
        <div data-aos="fade-up" 
      data-aos-anchor-placement="top-center"
      dats-aos-delay="600">
            <ServiceCard title='Digital Agency' img='/images/s6.png' />
        </div>
      </div>
    </div>
  )
}

export default Services
