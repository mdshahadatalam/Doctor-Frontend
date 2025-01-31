import React from 'react'
import './Banner.css'
import group from '../assets/images/banner/group.png'
import doctor from '../assets/images/banner/doc1 (2).png'
import { IoIosArrowRoundForward } from 'react-icons/io'

import findImg from '../assets/images/find/find (1).svg'
import findImg1 from '../assets/images/find/find (2).svg'
import findImg2 from '../assets/images/find/find (3).svg'
import findImg3 from '../assets/images/find/find (4).svg'
import findImg4 from '../assets/images/find/find (5).svg'
import findImg5 from '../assets/images/find/find (6).svg'

export const Banner = () => {
  return (
    <>
       <section className="px-4 py-6 md:px-10 lg:px-16">
      <div className="container bg-[#5F6FFF] py-6 rounded-md">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="lg:w-7/12 text-center lg:text-left">
            <h4 className="text-4xl md:text-4xl lg:text-4xl font-semibold text-white py-3">
              Book Appointment With Trusted Doctors
            </h4>
              <p className="text-white pl-2 text-sm md:text-xl">
                Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
              </p>
           
            <div className="py-2 flex justify-center lg:justify-start">
              <button className="flex items-center text-2xl bg-white text-[#5F6FFF] font-semibold px-4 py-2 rounded-md shadow-md hover:bg-gray-200 transition-all">
                Book appointment <IoIosArrowRoundForward className="ml-2 text-lg" />
              </button>
            </div>
          </div>
          <div className="lg:w-5/12 mt-6 lg:mt-0 flex justify-center">
            <img className="w-64 md:w-80 lg:w-full" src={doctor} alt="Doctor" />
          </div>
        </div>
      </div>
    </section>


    {/* Find by Speciality   */}

    <section className='py-5'>
       <div className="container">

         <div>
              <h4 className='find py-2'>Find by Speciality </h4>
              <p className='findDami pb-5'>Simply browse through our extensive list of trusted doctors, schedule <br />your appointment hassle-free.</p>
         </div>
         <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-4 findRes">
                <div>
                <div className='d-flex justify-center'>
                   <img src={findImg} alt="images" />
                 </div>

                 <p className='general text-center py-2'>General physician</p>
                </div>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-4 findRes">
            <div>
                <div className='d-flex justify-center'>
                   <img src={findImg1} alt="images" />
                 </div>

                 <p className='general text-center py-2'>Gynecologist</p>
                </div>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-4 findRes">
            <div>
                <div className='d-flex justify-center'>
                   <img src={findImg2} alt="images" />
                 </div>

                 <p className='general text-center py-2'>Dermatologist</p>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 findRes">
            <div>
                <div className='d-flex justify-center'>
                   <img src={findImg3} alt="images" />
                 </div>

                 <p className='general text-center py-2'>Pediatricians</p>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 findRes">
            <div>
                <div className='d-flex justify-center'>
                   <img src={findImg4} alt="images" />
                 </div>

                 <p className='general text-center py-2'>Neurologist</p>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 findRes">
            <div>
                <div className='d-flex justify-center'>
                   <img src={findImg5} alt="images" />
                 </div>

                 <p className='general text-center py-2'>Gastroenterologist</p>
                </div>
            </div>
         </div>
       </div>
    </section>
    </>
  )
}
