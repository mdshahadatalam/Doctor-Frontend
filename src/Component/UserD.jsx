import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const UserD = () => {

      const [name,setName] = useState()
      const [email,setEmail] = useState()
      const [phone,setPhone] = useState()
      const [address,setAddress] = useState()
      const [gender,setGender] = useState()
      const [date,setDate] = useState()
    useEffect(()=>{
      async function data(){
        let data = await axios.get('http://localhost:3000/contact')
        console.log(data.data)
        setName(data.data.name)
        setEmail(data.data.email)
        setPhone(data.data.phone)
        setAddress(data.data.address)
        setGender(data.data.gender)
        setDate(data.data.date)
        
        
      }
      data()
    },[])  
  return (
    <>
       <div>
            <div className='d-flex justify-center w-full h-screen'>
                  
                  <div>
                       <p><span>Name:{name} </span></p>
                       <p><span>Email:{email} </span></p>
                       <p><span>Phone:{phone} </span></p>
                       <p><span>Address: {address}</span></p>
                       <p><span>Gender:{gender} </span></p>
                       <p><span>Date of birth:{date} </span></p>
                  </div>
            </div>
       </div>
    </>
  )
}
