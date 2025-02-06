import React, { useState } from 'react';
import axios from 'axios'

export const ContactInfor = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [address,setAddress] = useState("")
  const [gender,setGender] = useState("")
  const [date,setDate] = useState("")


  const handleSubmit =(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3000/contact',{
    name:name,
    email:email,
    phone:phone,
    address:address,
    gender:gender,
    date:date
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
    
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Contact Information</h2>
        <form className="space-y-4">
          <input
           className="w-full mt-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" type="text"
            name="name"
             placeholder="Name" 
             onChange={(e)=>{setName(e.target.value)}}
             />

          <input 
          className="w-full mt-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" type="email"
           name="email"
            placeholder="Email"
            onChange={(e)=>{setEmail(e.target.value)}}
            />

          <input
           className="w-full mt-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" type="number"
            name="number"
            placeholder="Phone number" 
            onChange={(e)=>{setPhone(e.target.value)}}
            />

          <input
           className="w-full mt-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" type="text"
            name="address" 
            placeholder="Present address" 
            onChange={(e)=>{setAddress(e.target.value)}}
            />

          <select 
          className="w-full mt-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" name="gender"
          onChange={(e)=>{setGender(e.target.value)}}>
            <option value="" disabled selected>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <input
           className="w-full my-3  px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" type="date" 
           name="date"
           onChange={(e)=>{setDate(e.target.value)}}
           />

          <button onClick={handleSubmit} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">Submit</button>
        </form>
      </div>
    </div>
  );
};
