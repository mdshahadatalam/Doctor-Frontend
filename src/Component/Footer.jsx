import React from 'react'
import logo from '../assets/images/logo/logo.svg'
import './Footer.css'

export const Footer = () => {
  return (
    <>
      <section  className='py-5'>
         <div className="container">
             <div className="row justify-center ">
                 <div className="col-lg-6 mt-3">
                      
                      <div> 
                         
                         <img className='pb-4 img-fluid' src={logo} alt="images" />

                         <p className='footerDami'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </div>
                 </div>
                  <div className="col-lg-2 mt-3"></div>
                 <div className="col-lg-2 mt-3">
                     <h4 className='company'>COMPANY</h4>
                     <span className='footerNav'>Home</span> <br/>
                     <span className='footerNav'>About</span> <br/>
                     <span className='footerNav'>Contact us</span> <br/>
                     <span className='footerNav'>Privacy policy</span> 
                 </div>
                 <div className="col-lg-2 mt-3">
                     <div>
                         <h4 className='company'>GET IN TOUCH</h4>

                         <span className='footerNav'>+1-212-456-7890</span> <br/>
                         <span className='footerNav'>greatstackdev@gmail.com</span>
                     </div>
                 </div>
             </div>
         </div>
      </section>
    </>
  )
}
