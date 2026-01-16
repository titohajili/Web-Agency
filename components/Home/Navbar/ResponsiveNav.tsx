"use client"
import React, { useEffect } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'
import { useState } from 'react'

const ResponsiveNav = () => {

  const [showNav, setShowNav] = useState(false)
  const onpenNavHandler = () => setShowNav(true)
  const closeNavHandler = () => setShowNav(false)

 

  return (
    <div>
      <Nav onpenNavHandler={onpenNavHandler}/>
      <MobileNav showNav={showNav} closeNavHandler={closeNavHandler}/>
    </div>
  )
}

export default ResponsiveNav
