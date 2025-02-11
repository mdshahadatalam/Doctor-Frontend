import React from 'react'
import doctor from '../assets/images/doctor/doctor1 (1).png'

export const DoctorDetaile = () => {
  return (
   <>
     <section>
        <div className="container">
            <div className="row">
                 <div className="col-lg-4">
                  <div>
                       <img src={doctor} alt="image" />
                  </div>
                 </div>
                 <div className="col-lg-8">
                   <div>
                        <h4>Dr. Richard James</h4>
                         <span>MBBS - General Physician</span>
                          
                          <small>About</small>
                          <p>Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective 
                          treatment strategies.</p>

                          <span>Appointment fee: $50 </span>
                   </div>
                 </div>
            </div>
        </div>
     </section>
   </>
  )
}
