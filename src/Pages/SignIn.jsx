import React from 'react'
import { Link } from 'react-router'

export const SignIn = () => {
  return (
  <>
     <div className='signUp mt-5'>
              <div className=' w-[476px] pb-3  mainSign text-center shadow-md'>
                   <div className='pb-2'>
                         

                         <div className='py-2'>
                         <h4 className='createAcct'>Login</h4>
                         <p className='pleaseSi'>Please login to book appointment</p>
                         </div>

                         <input className='inpo mt-4' type="email" name="email" id="email" placeholder='Your email' />

                         <input className='inpo mt-4' type="password" name="password" id="password" placeholder='New password' />


                          <div>
                             <button className='createBtn mt-3'>Login</button>
                          </div>

                          <p className='already pt-3'>Don't have an account? <Link className='here' to={'/signUp'} >sign up</Link> </p>
                   </div>
              </div>
        </div>
  </>
  )
}
