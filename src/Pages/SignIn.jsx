import React, { useEffect, useState } from 'react'
import { data, Link, useNavigate } from 'react-router'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import PropagateLoader from 'react-spinners/esm/PropagateLoader';

export const SignIn = () => {
    
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const navigate = useNavigate()
const [loader,setLoader] = useState(false)

const handleEmail =(e)=>{
    setEmail(e.target.value)
}

const handlePassword =(e)=>{
   setPassword(e.target.value)
}

const handleSubmit =()=>{
      // console.log(email,password)
      setLoader(true)
      axios.post('http://localhost:3000/login',{
            email:email,
            password:password
      }).then((result)=>{
            setLoader(false)
            console.log(result.data)
            
            if(result.data === "Success"){
                  navigate("/")
              }else{
                  navigate("/signUp")
                  toast.error('You are not registered to this service', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        // transition: Bounce,
                        });
  
              }
      }).catch(err=>{
            console.log(err)
            setLoader(false)

             toast.error('Please try again', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    // transition: Bounce,
                    });
      })
}


  return (
  <>
     <div className='signUp mt-5'>
              <div className=' w-[476px] pb-3  mainSign text-center shadow-md'>
                   <div className='pb-2'>
                         

                         <div className='py-2'>
                         <h4 className='createAcct'>Login</h4>
                         <p className='pleaseSi'>Please login to book appointment</p>
                         </div>

                         <input
                          className='inpo mt-4'
                           type="email"
                            name="email"
                             id="email"
                             placeholder='Your email'
                             onChange={handleEmail}
                              />

                         <input
                          className='inpo mt-4'
                           type="password"
                            name="password"
                             id="password"
                              placeholder='New password' 
                              onChange={handlePassword}
                              />


                          <div>
                             <button onClick={handleSubmit} className='createBtn mt-3'>
                              {
                                    loader ? <PropagateLoader size={5} color='white' /> : "Login"
                              }
                              </button>
                          </div>

                          <p className='already pt-3'>Don't have an account? <Link className='here' to={'/signUp'} >sign up</Link> </p>
                   </div>
              </div>
        </div>

        <ToastContainer />
  </>
  )
}
