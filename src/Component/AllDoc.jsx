import React from 'react'
import './AllDoc.css'
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

export const AllDoc = () => {
  return (
    <>
     
      <section>
          <div className="container">
            
             
              <div class="d-flex align-items-start">

<div className="nav flex-column   nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
  <button className="allDocNav mt-3" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">General physician</button>
  <button className="allDocNav mt-3" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Gynecologist</button>
  <button className="allDocNav mt-3" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Dermatologist</button>
  <button className="allDocNav mt-3" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Pediatricians</button>
   
  <button className="allDocNav mt-3" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#Neurologist" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Neurologist</button>
   
  <button className="allDocNav mt-3" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#Gastroenterologist" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Gastroenterologist</button>
</div>


<div className="tab-content mt-3" id="v-pills-tabContent">
  <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
      
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
                                   <div className=''><img src={doctor4} alt="image" /></div>
           
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
                                   <div className=''><img src={newDoc3} alt="image" /></div>
           
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
        
  </div>
  <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
          
  <section className=' py-5'>
                   <div className="container">
                       <div className="row">
                           <div className="col-lg-3 col-md-4 col-sm-6 doctorRes">
                                <div className='shadow-md rounded-md  p-2 bg-[#C9D8FF] my-2 MyImg hover:cursor-pointer'>
                                   <div className=''><img src={newDoc1} alt="image" /></div>
           
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
                                   <div className=''><img src={newDoc2} alt="image" /></div>
           
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
                                   <div className=''><img src={newDoc3} alt="image" /></div>
           
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
                                   <div className=''><img src={newDoc4} alt="image" /></div>
           
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
                                   <div className=''><img src={newDoc5} alt="image" /></div>
           
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
                                   <div className=''><img src={newDoc6} alt="image" /></div>
           
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
                                   <div className=''><img src={newDoc7} alt="image" /></div>
           
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
                                   <div className=''><img src={newDoc8} alt="image" /></div>
           
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
  </div>
  <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                
            <section className=' py-5'>
                   <div className="container">
                       <div className="row">
                           <div className="col-lg-3 col-md-4 col-sm-6 doctorRes">
                                <div className='shadow-md rounded-md  p-2 bg-[#C9D8FF] my-2 MyImg hover:cursor-pointer'>
                                   <div className=''><img src={newDoc3} alt="image" /></div>
           
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
                                   <div className=''><img src={newDoc6} alt="image" /></div>
           
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
                                   <div className=''><img src={newDoc5} alt="image" /></div>
           
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
                                   <div className=''><img src={newDoc7} alt="image" /></div>
           
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
                                   <div className=''><img src={newDoc1} alt="image" /></div>
           
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
                                   <div className=''><img src={newDoc5} alt="image" /></div>
           
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
  </div>
  <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
              
            <section className=' py-5'>
                   <div className="container">
                       <div className="row">
                           <div className="col-lg-3 col-md-4 col-sm-6 doctorRes">
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
                           <div className="col-lg-3 col-md-4 col-sm-6 doctorRes">
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
                           <div className="col-lg-3 col-md-4 col-sm-6 doctorRes">
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
                           <div className="col-lg-3 col-md-4 col-sm-6 doctorRes">
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
                                   <div className=''><img src={newDoc8} alt="image" /></div>
           
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
  </div>

  <div className="tab-pane fade" id="Neurologist" role="tabpanel" aria-labelledby="v-pills-settings-tab">

             
            <section className=' py-5'>
                   <div className="container">
                       <div className="row">
                           <div className="col-lg-3 col-md-4 col-sm-6 doctorRes">
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
                           <div className="col-lg-3 col-md-4 col-sm-6 doctorRes">
                           <div className='shadow-md rounded-md  p-2 bg-[#C9D8FF] my-2 MyImg hover:cursor-pointer'>
                                   <div className=''><img src={newDoc3} alt="image" /></div>
           
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
                                   <div className=''><img src={newDoc5} alt="image" /></div>
           
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
                                   <div className=''><img src={newDoc6} alt="image" /></div>
           
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
  </div>

  <div className="tab-pane fade" id="Gastroenterologist" role="tabpanel" aria-labelledby="v-pills-settings-tab">

           
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
                                   <div className=''><img src={newDoc6} alt="image" /></div>
           
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
                                   <div className=''><img src={newDoc6} alt="image" /></div>
           
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
  </div>
</div>
        </div>
          </div>
      </section>
    </>
  )
}
