import React from 'react'
import about from '../assets/images/banner/about.png'

export const About = () => {
  return (
    <>
       <section className='py-5'>
          <div className="container">

                <h4 className='conUs pb-5'>About Us</h4>
              <div className="row">
                  <div className="col-lg-6 mt-2">
                     <img className='img-fluid' src={about} alt="image" />
                  </div>
                  <div className="col-lg-6 mt-2">
                     <div>
                         <p className='contactDami'>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records. </p>

                          <p className='contactDami'> Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform,                            integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking                            your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p> 

                          <h4 className='vision'> Our Vision</h4>

                          <p className='contactDami'> Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap                            between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
                     </div>
                  </div>
              </div>
          </div>
       </section>
    </>
  )
}
