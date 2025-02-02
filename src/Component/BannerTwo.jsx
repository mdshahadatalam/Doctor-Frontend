import React from 'react'
import './BannerTwo.css'
import femal from '../assets/images/banner/femal.png'

export const BannerTwo = () => {
  return (
    <> 
       <section className='py-5'>
          <div className="container bg-[#5F6FFF] rounded-md ">
             <div className="row justify-center align-items-center">
                 <div className="col-lg-7 col-md-6">
                       <div>
                       <h4 className='bannerTwoH text-center py-4'>Book Appointment With 100+ Trusted Doctors</h4>

                          <div className='d-flex justify-center'>
                            <button className='new MyImg'>Create account</button>
                          </div>
                       </div>
                 </div>
                 <div className="col-lg-5 col-md-6">
                     <img className='img-fluid' src={femal} alt="image" />
                 </div>
             </div>
          </div>
       </section>
    </>
  )
}
