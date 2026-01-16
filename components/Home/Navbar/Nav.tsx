"use client"
import Logo from '@/components/Helper/Logo'
import ThemeToggler from '@/components/Helper/ThemeToggler'
import { NavLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { useEffect, useState } from 'react'

type Props = {
    onpenNavHandler:()=>void
}

const Nav = ({onpenNavHandler}: Props) => {
    const [navBg, setNavBg] = useState(false)

    useEffect(()=>{
        const handler =()=>{
            if(window.scrollY > 90) setNavBg(true)
            else setNavBg(false)
        }
        window.addEventListener('scroll', handler)
        return ()=> window.removeEventListener('scroll', handler)
    },[])

  return (
    <div className={`transition-all duration-200 h-[12vh] z-100 fixed w-full ${navBg ? 'dark:bg-gray-900 bg-blue-950 shadow-md': 'fixed '}`}>
      <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
        {/* LOGO */}
        <Logo/>
        {/* LINKS */}
        <div className='hidden lg:flex items-center space-x-10'>
            {
                NavLinks.map((link)=>(
                    <Link key={link.id} href={link.url} className='text-white hover:text-yellow-200 font-semibold transition-all duration-200'>
                        <p>
                            {link.label}
                        </p>
                    </Link>
                ))
            }
        </div>
        {/* buttons */}
        <div className='flex items-center space-x-4'>
            {/* Create Account button */}
            <a href="#_" className='box-border relative z-20 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none'>
                <span className='relative z-20 flex items-center text-sm'>
                    Create Account
                </span>
            </a>
            {/* Theme Toggler */}
            <ThemeToggler/>
            {/* Hamburger */}
            <HiBars3BottomRight onClick={onpenNavHandler} className='w-8 h-8 cursor-pointer text-white lg:hidden'/>
        </div>

      </div>
    </div>
  )
}

export default Nav
