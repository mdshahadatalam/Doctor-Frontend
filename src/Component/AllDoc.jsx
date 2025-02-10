import React, { useState } from 'react'
import './AllDoc.css'
import { General } from './General'
import { Gynecologist } from './Gynecologist'
import { Dermatologist } from './Dermatologist'
import { Pediatricians } from './Pediatricians'
import { Neurologist } from './Neurologist'
import { Gastroenterologist } from './Gastroenterologist'

export const AllDoc = () => {

     const [ menu, setMenu] = useState('Navbar')

  const handleMenu = (menu)=>{
    console.log(menu);
    setMenu(menu)
    
  }
  return (
    <>
     

<section className='font-serif py-5'>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 AllRes ">
              <div className='btn'>
                <div>
                <button onClick={()=>handleMenu("Navbar")} className='allDocNav mt-3'>General physician</button>
                </div>

               <div>
               <button onClick={()=>handleMenu("Banner")} className='allDocNav mt-3'>Gynecologist</button>
               </div>

                <div>
                <button onClick={()=>handleMenu("About")} className='allDocNav mt-3'>Dermatologist</button>
                </div>

               <div>
               <button onClick={()=>handleMenu("Service")} className='allDocNav mt-3'>Pediatricians</button>
               </div>
               
                <div>
                <button onClick={()=>handleMenu("Resume")} className='allDocNav mt-3'>Neurologist</button>
                </div>
                
                <div>
                <button onClick={()=>handleMenu("Portfolio")} className='allDocNav mt-3'>Gastroenterologist</button>
                </div>
                
              </div>
            </div>
            <div className="col-lg-9">

              <div className=''>
                 {  menu === "Navbar" && <General/>}
                 {  menu === "Banner" && <Gynecologist/>}
                 {  menu === "About" && <Dermatologist/>}
                 {  menu === "Service" && <Pediatricians/>}
                 {  menu === "Resume" && <Neurologist/>}
                 {  menu === "Portfolio" && <Gastroenterologist/>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
