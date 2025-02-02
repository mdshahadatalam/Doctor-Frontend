import React from 'react'
import contact from '../assets/images/banner/contact.png'

export const Contact = () => {
  return (
    <>
       <section className='py-5'>
         <div className="container">
               <h4 className='conUs py-5'>CONTACT Us</h4>
              <div className="row">
                  <div className="col-lg-6 mt-3">
                     <img className='img-fluid' src={contact} alt="" />
                  </div>
                  <div className="col-lg-6 mt-3">
                     <h4 className='urOff pt-3'>Our OFFICE</h4>

                      <div className='py-5'>
                      <p className='details m-0'>54709 Willms Station </p>
                      <p className='details m-0'>Suite 350, Washington, USA</p>
                      </div>


                     <div className='pb-3'>
                         <span className='details'>Tel: (415) 555‑0132</span> <br/>
                         <span className='details'>Email: greatstackdev@gmail.com</span>
                     </div>

                     <h4 className='urOff py-3'>Careers at PRESCRIPTO</h4>
                     <p className='details pb-3'>Learn more about our teams and job openings.</p>

                     <button className='ExploreBtn'>Explore Jobs</button>
                  </div>
              </div>
         </div>
       </section>
    </>
  )
}
