import React, { useState } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import { SyncLoader } from 'react-spinners'
export const Appointment = () => {

    const [loader,setLoader] = useState(false)
     const [name,setName] = useState("")
      const [email,setEmail] = useState("")
      const [phone,setPhone] = useState("")
      const [address,setAddress] = useState("")
      const [gender,setGender] = useState("")
      const [date,setDate] = useState("")
      const [docName,setDocName] = useState("")
      const [img,setImg] = useState({})

      const handleSubmit =(e)=>{
          e.preventDefault()
          setLoader(true)

          let data = new FormData()
          data.append("img",img)
          data.append("name",name)
          data.append("email",email)
          data.append("phone",phone)
          data.append("address",address)
          data.append("gender",gender)
          data.append("date",date)
          data.append("docName",docName)

        axios.post('http://localhost:3000/appointment',data).then(res=>{
            console.log(res)
            setName('')
            setEmail('')
            setPhone('')
            setAddress('')
            setGender('')
            setDate('')
            setDocName('')

            toast.success('Successfully send', {
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

                setLoader(false)
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
    <div className="flex justify-center items-center min-h-screen  py-5">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-xl font-serif font-semibold text-center text-gray-700 mb-4">Appointment</h2>
        <form className="space-y-4">
          
        <div className="mb-2">
    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="file-upload">
      Upload your image
    </label>
    <input
      onChange={(e)=>{setImg(e.target.files[0])}}
      className="py-2 px-4 w-full border border-[#E0E0E0] rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      type="file"
      id="file-upload"
    />
  </div>


          <input
           className="w-full mt-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" type="text"
            name="name"
             placeholder="Name" 
             onChange={(e)=>{setName(e.target.value)}}
             value={name}
             />

          <input 
          className="w-full mt-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" type="email"
           name="email"
            placeholder="Email"
            onChange={(e)=>{setEmail(e.target.value)}}
            value={email}
            />

          <input
           className="w-full mt-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" type="number"
            name="number"
            placeholder="Phone number" 
            onChange={(e)=>{setPhone(e.target.value)}}
            value={phone}
            />

          <input
           className="w-full mt-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" type="text"
            name="address" 
            placeholder="Present address" 
            onChange={(e)=>{setAddress(e.target.value)}}
            value={address}
            />

          <select 
          className="w-full mt-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" name="gender"
          onChange={(e)=>{setGender(e.target.value)}}
          value={gender}
          >

            <option value="" disabled selected>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <input
           className="w-full mt-3  px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" type="date" 
           name="date"
           onChange={(e)=>{setDate(e.target.value)}}
           value={date}
           />


          <input
           className="w-full my-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" type="text"
            name="name"
             placeholder="Doctor name" 
             onChange={(e)=>{setDocName(e.target.value)}}
             value={docName}
             />

          <button onClick={handleSubmit} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"> 
            {
                loader? <SyncLoader size={5} color='white'/> : "Submit"
            }
            </button>
        </form>
      </div>
    </div>

    <ToastContainer />

    </>
  )
}
