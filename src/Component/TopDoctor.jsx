import React from 'react'
import './TopDoctor.css'
import doctor1 from '../assets/images/doctor/doctor1 (1).png'
import doctor2 from '../assets/images/doctor/doctor1 (2).png'
import doctor3 from '../assets/images/doctor/doctor1 (3).png'
import doctor4 from '../assets/images/doctor/doctor1 (4).png'
export const TopDoctor = () => {
  return (
   <>
      

    <section className=' py-5'>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6 doctorRes">
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
                <div className="col-lg-3 col-md-4 col-sm-6 doctorRes">
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
                <div className="col-lg-3 col-md-4 col-sm-6 doctorRes">
                <div className='shadow-md rounded-md  p-2 bg-[#C9D8FF] my-2 MyImg hover:cursor-pointer'>
                        <div className=''><img src={doctor3} alt="image" /></div>

                         <div className='d-flex align-items-center pt-2'>
                             <div className='w-[8px] h-[8px] rounded-full bg-[#0FBF00]'></div>
                              <p className='Available m-0 ps-2'>Available</p>
                         </div>

                          <h4 className='dr'>Dr. Richard James</h4>
                          <span className='general'>General physician</span>
                     </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 doctorRes">
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


            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6 doctorRes">
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
                <div className="col-lg-3 col-md-4 col-sm-6 doctorRes">
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
                <div className="col-lg-3 col-md-4 col-sm-6 doctorRes">
                <div className='shadow-md rounded-md  p-2 bg-[#C9D8FF] my-2 MyImg hover:cursor-pointer'>
                        <div className=''><img src={doctor3} alt="image" /></div>

                         <div className='d-flex align-items-center pt-2'>
                             <div className='w-[8px] h-[8px] rounded-full bg-[#0FBF00]'></div>
                              <p className='Available m-0 ps-2'>Available</p>
                         </div>

                          <h4 className='dr'>Dr. Richard James</h4>
                          <span className='general'>General physician</span>
                     </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 doctorRes">
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
