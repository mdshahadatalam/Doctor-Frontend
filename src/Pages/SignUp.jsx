import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import PropagateLoader from 'react-spinners/esm/PropagateLoader';


export const SignUp = () => {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()
  const [loader,setLoader] = useState(false)

  const handleName = (e)=>{
       setName(e.target.value)
  }

  const handleEmail =(e)=>{
      setEmail(e.target.value)
  }

  const handlePassword =(e)=>{
    setPassword(e.target.value)
  }

  const handleSubmit =()=>{
    // console.log(name,email,password);
      setLoader(true)
    axios.post('http://localhost:3000/signUp',{
      name:name,
      email:email,
      password:password
    }).then(res=>{
      console.log(res);
      setLoader(false)
      setName('')
      setEmail('')
      setPassword('')

      toast.success('Sign up success', {
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

      setTimeout(()=>{
        navigate('/signIn')
      },2500)
      
    }).catch(err=>{
      console.log(err);
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
                         <h4 className='createAcct'>Create Account</h4>
                         <p className='pleaseSi'>Please sign up to book appointment</p>
                         </div>
                         
                         
                         <input
                          className='inpo mt-4'
                           type="text"
                            name="name"
                             id="name"
                             placeholder='Full name' 
                             onChange={handleName}
                             value={name}
                             />

                         <input
                          className='inpo mt-4'
                           type="email"
                            name="email"
                             id="email"
                              placeholder='Your email'
                              onChange={handleEmail}
                              value={email}
                               />

                         <input
                          className='inpo mt-4'
                           type="password"
                            name="password"
                             id="password"
                              placeholder='New password'
                              onChange={handlePassword}
                              value={password}
                               />


                          <div>
                             <button onClick={handleSubmit} className='createBtn mt-3'>
                              {
                                loader ? <PropagateLoader size={5} color='white' /> :"Create account"
                              }
                              </button>
                          </div>

                          <p className='already pt-3'>Already have an account? <Link className='here' to={'/signIn'} >Login here</Link> </p>
                   </div>
              </div>
        </div>

        <ToastContainer />
    </>
  )
}
