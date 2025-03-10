import React from 'react'
import doctor1 from '../assets/images/doctor/doctor1 (1).png'
import doctor2 from '../assets/images/doctor/doctor1 (2).png'
import doctor4 from '../assets/images/doctor/doctor1 (4).png'


import newDoc1 from '../assets/images/newDoc/newDoc (1).png'
import newDoc2 from '../assets/images/newDoc/newDoc (2).png'
import newDoc3 from '../assets/images/newDoc/newDoc (3).png'
import newDoc4 from '../assets/images/newDoc/newDoc (4).png'
import newDoc5 from '../assets/images/newDoc/newDoc (5).png'
import newDoc6 from '../assets/images/newDoc/newDoc (6).png'
import newDoc7 from '../assets/images/newDoc/newDoc (7).png'
import newDoc8 from '../assets/images/newDoc/newDoc (8).png'
import { useNavigate } from 'react-router'

export const Pediatricians = () => {
     const navigate = useNavigate()
     const handleNavigate =()=>{
          navigate('/appointment')
          scroll(0,0)
     }
  return (
   <>
       <section className=' py-5'>
                   <div className="container">
                       <div className="row">
                           <div onClick={handleNavigate } className="col-lg-4 col-md-4 col-sm-6 doctorRes">
                                <div className='shadow-md rounded-md  p-2 bg-[#C9D8FF] my-2 MyImg hover:cursor-pointer'>
                                   <div className=''><img src={newDoc4} alt="image" /></div>
           
                                    <div className='d-flex align-items-center pt-2'>
                                        <div className='w-[8px] h-[8px] rounded-full bg-[#0FBF00]'></div>
                                         <p className='Available m-0 ps-2'>Available</p>
                                    </div>
           
                                     <h4 className='dr'>Dr. Richard James</h4>
                                     <span className='general'>General physician</span>
                                </div>
                           </div>
                           <div onClick={handleNavigate } className="col-lg-4 col-md-4 col-sm-6 doctorRes">
                           <div className='shadow-md rounded-md  p-2 bg-[#C9D8FF] my-2 MyImg hover:cursor-pointer'>
                                   <div className=''><img src={newDoc8} alt="image" /></div>
           
                                    <div className='d-flex align-items-center pt-2'>
                                        <div className='w-[8px] h-[8px] rounded-full bg-[#0FBF00]'></div>
                                         <p className='Available m-0 ps-2'>Available</p>
                                    </div>
           
                                     <h4 className='dr'>Dr. Richard James</h4>
                                     <span className='general'>General physician</span>
                                </div>
                           </div>
                           <div onClick={handleNavigate } className="col-lg-4 col-md-4 col-sm-6 doctorRes">
                           <div className='shadow-md rounded-md  p-2 bg-[#C9D8FF] my-2 MyImg hover:cursor-pointer'>
                                   <div className=''><img src={newDoc2} alt="image" /></div>
           
                                    <div className='d-flex align-items-center pt-2'>
                                        <div className='w-[8px] h-[8px] rounded-full bg-[#0FBF00]'></div>
                                         <p className='Available m-0 ps-2'>Available</p>
                                    </div>
           
                                     <h4 className='dr'>Dr. Richard James</h4>
                                     <span className='general'>General physician</span>
                                </div>
                           </div>
                           <div onClick={handleNavigate } className="col-lg-4 col-md-4 col-sm-6 doctorRes">
                           <div className='shadow-md rounded-md  p-2 bg-[#C9D8FF] my-2 MyImg hover:cursor-pointer'>
                                   <div className=''><img src={newDoc4} alt="image" /></div>
           
                                    <div className='d-flex align-items-center pt-2'>
                                        <div className='w-[8px] h-[8px] rounded-full bg-[#0FBF00]'></div>
                                         <p className='Available m-0 ps-2'>Available</p>
                                    </div>
           
                                     <h4 className='dr'>Dr. Richard James</h4>
                                     <span className='general'>General physician</span>
                                </div>
                           </div>
           
           
                           <div onClick={handleNavigate } className="col-lg-4 col-md-4 col-sm-6 doctorRes">
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
                           <div onClick={handleNavigate } className="col-lg-4 col-md-4 col-sm-6 doctorRes">
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
                           <div onClick={handleNavigate } className="col-lg-4 col-md-4 col-sm-6 doctorRes">
                           <div className='shadow-md rounded-md  p-2 bg-[#C9D8FF] my-2 MyImg hover:cursor-pointer'>
                                   <div className=''><img src={newDoc8} alt="image" /></div>
           
                                    <div className='d-flex align-items-center pt-2'>
                                        <div className='w-[8px] h-[8px] rounded-full bg-[#0FBF00]'></div>
                                         <p className='Available m-0 ps-2'>Available</p>
                                    </div>
           
                                     <h4 className='dr'>Dr. Richard James</h4>
                                     <span className='general'>General physician</span>
                                </div>
                           </div>
                           <div onClick={handleNavigate } className="col-lg-4 col-md-4 col-sm-6 doctorRes">
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
     
                   </div>
               </section>
   </>
  )
}
