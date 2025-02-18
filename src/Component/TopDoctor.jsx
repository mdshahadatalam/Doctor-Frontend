import React, { useState } from 'react'
import './TopDoctor.css'
import doctor1 from '../assets/images/doctor/doctor1 (1).png'
import doctor2 from '../assets/images/doctor/doctor1 (2).png'
import doctor4 from '../assets/images/doctor/doctor1 (4).png'
import { useNavigate } from 'react-router';
import { SyncLoader } from "react-spinners";
export const TopDoctor = () => {
      
      const [loader,setLoader] = useState(false)
      const navigate = useNavigate()
     const handleMore =()=>{
          setLoader(true)
          setTimeout(()=>{
                navigate('/allDoc')
                scroll(0,0)
               },2500)
     }


     const handleNavigate =()=>{
          navigate('/allDoc')
          scroll(0,0)
     }
  return (
   <>
      

    <section className=' py-5'>
        <div className="container">
            <div className="row">
                <div onClick={handleNavigate} className="col-lg-3 col-md-4 col-sm-6 doctorRes">
                     <div className='shadow-md rounded-md  p-2 bg-[#C9D8FF] my-2 MyImg hover:cursor-pointer'>
                        <div  className=''><img src={doctor1} alt="image" /></div>

                         <div className='d-flex align-items-center pt-2'>
                             <div className='w-[8px] h-[8px] rounded-full bg-[#0FBF00]'></div>
                              <p className='Available m-0 ps-2'>Available</p>
                         </div>

                          <h4 className='dr'>Dr. Richard James</h4>
                          <span className='general'>General physician</span>
                     </div>
                </div>
                <div onClick={handleNavigate} className="col-lg-3 col-md-4 col-sm-6 doctorRes">
                <div className='shadow-md rounded-md  p-2 bg-[#C9D8FF] my-2 MyImg hover:cursor-pointer'>
                        <div className=''><img src={doctor2} alt="image" /></div>

                         <div className='d-flex align-items-center pt-2'>
                             <div className='w-[8px] h-[8px] rounded-full bg-[#0FBF00]'></div>
                              <p className='Available m-0 ps-2'>Available</p>
                         </div>

                          <h4 className='dr'>Dr. Richard James</h4>
                          <span className='general'>General physician</span>
                     </div>
                </div>
                <div onClick={handleNavigate} className="col-lg-3 col-md-4 col-sm-6 doctorRes">
                <div className='shadow-md rounded-md  p-2 bg-[#C9D8FF] my-2 MyImg hover:cursor-pointer'>
                        <div className=''><img src={doctor1} alt="image" /></div>

                         <div className='d-flex align-items-center pt-2'>
                             <div className='w-[8px] h-[8px] rounded-full bg-[#0FBF00]'></div>
                              <p className='Available m-0 ps-2'>Available</p>
                         </div>

                          <h4 className='dr'>Dr. Richard James</h4>
                          <span className='general'>General physician</span>
                     </div>
                </div>
                <div onClick={handleNavigate} className="col-lg-3 col-md-4 col-sm-6 doctorRes">
                <div className='shadow-md rounded-md  p-2 bg-[#C9D8FF] my-2 MyImg hover:cursor-pointer'>
                        <div className=''><img src={doctor4} alt="image" /></div>

                         <div className='d-flex align-items-center pt-2'>
                             <div className='w-[8px] h-[8px] rounded-full bg-[#0FBF00]'></div>
                              <p className='Available m-0 ps-2'>Available</p>
                         </div>

                          <h4 className='dr'>Dr. Richard James</h4>
                          <span className='general'>General physician</span>
                     </div>
                </div>


                <div onClick={handleNavigate} className="col-lg-3 col-md-4 col-sm-6 doctorRes">
                     <div className='shadow-md rounded-md  p-2 bg-[#C9D8FF] my-2 MyImg hover:cursor-pointer'>
                        <div className=''><img src={doctor1} alt="image" /></div>

                         <div className='d-flex align-items-center pt-2'>
                             <div className='w-[8px] h-[8px] rounded-full bg-[#0FBF00]'></div>
                              <p className='Available m-0 ps-2'>Available</p>
                         </div>

                          <h4 className='dr'>Dr. Richard James</h4>
                          <span className='general'>General physician</span>
                     </div>
                </div>
                <div onClick={handleNavigate} className="col-lg-3 col-md-4 col-sm-6 doctorRes">
                <div className='shadow-md rounded-md  p-2 bg-[#C9D8FF] my-2 MyImg hover:cursor-pointer'>
                        <div className=''><img src={doctor2} alt="image" /></div>

                         <div className='d-flex align-items-center pt-2'>
                             <div className='w-[8px] h-[8px] rounded-full bg-[#0FBF00]'></div>
                              <p className='Available m-0 ps-2'>Available</p>
                         </div>

                          <h4 className='dr'>Dr. Richard James</h4>
                          <span className='general'>General physician</span>
                     </div>
                </div>
                <div onClick={handleNavigate} className="col-lg-3 col-md-4 col-sm-6 doctorRes">
                <div className='shadow-md rounded-md  p-2 bg-[#C9D8FF] my-2 MyImg hover:cursor-pointer'>
                        <div className=''><img src={doctor1} alt="image" /></div>

                         <div className='d-flex align-items-center pt-2'>
                             <div className='w-[8px] h-[8px] rounded-full bg-[#0FBF00]'></div>
                              <p className='Available m-0 ps-2'>Available</p>
                         </div>

                          <h4 className='dr'>Dr. Richard James</h4>
                          <span className='general'>General physician</span>
                     </div>
                </div>
                <div onClick={handleNavigate} className="col-lg-3 col-md-4 col-sm-6 doctorRes">
                <div className='shadow-md rounded-md  p-2 bg-[#C9D8FF] my-2 MyImg hover:cursor-pointer'>
                        <div className=''><img src={doctor4} alt="image" /></div>

                         <div className='d-flex align-items-center pt-2'>
                             <div className='w-[8px] h-[8px] rounded-full bg-[#0FBF00]'></div>
                              <p className='Available m-0 ps-2'>Available</p>
                         </div>

                          <h4 className='dr'>Dr. Richard James</h4>
                          <span className='general'>General physician</span>
                     </div>
                </div>
            </div>



             <div className=' py-5 text-center'>
                 <button onClick={handleMore} className='w-[150px] h-[60px] bg-[#EAEFFF] text-[#4B5563] font-semibold font-serif  tracking-wider MyImg' >
                    {
                         loader?<SyncLoader  size={5} color='black' />:"More"
                    }
                    </button>
             </div>
        </div>
    </section>
   </>
  )
}
