import React from 'react'
import { Navbar } from '../Component/Navbar'
import { Outlet } from 'react-router'
import { Footer } from '../Component/Footer'

export const RootLayout = () => {
  return (
    <>
     <Navbar/>
     <Outlet/>
     <Footer/>
    </>
  )
}
