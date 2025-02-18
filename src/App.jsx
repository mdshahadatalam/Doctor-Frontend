import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Home } from './Pages/Home';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import { RootLayout } from './RootLayout/RootLayout';
import { AllDoctor } from './Pages/AllDoctor';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { SignUp } from './Pages/SignUp';
import { SignIn } from './Pages/SignIn';
import { ContactInfor } from './Component/ContactInfor';
import { UserD } from './Component/UserD';
import LoggedInUser from './PrivateRoute/LoggeInRoute';
import { useState } from 'react';
import { DoctorDetaile } from './Pages/DoctorDetaile';
import { Appointment } from './Component/Appointment';
import { General } from './Pages/General';
import { Gynecologist } from './Pages/Gynecologist';
import { Dermatologist } from './Pages/Dermatologist';
import { Pediatricians } from './Pages/Pediatricians';
import { Neurologist } from './Pages/Neurologist';
import { Gastroenterologist } from './Pages/Gastroenterologist';

function App() {


  const route = createBrowserRouter(createRoutesFromElements(
    <Route>
          <Route element={<RootLayout/>}>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/signUp' element={<SignUp/>} />
            <Route path='/signIn' element={<SignIn />} />
            <Route path='/contactInfor' element={<ContactInfor/>}/>
            <Route path='/user' element={<UserD/>}/>
            <Route path='/doctorD' element={<DoctorDetaile/>} />

            
            <Route path='/allDoc' element={<AllDoctor/>} />

            <Route path='/general' element={<General/>} />
            <Route path='/gynecologist' element={<Gynecologist/>} />
            <Route path='/dermatologist' element={<Dermatologist/>} />
            <Route path='/pediatricians' element={<Pediatricians/>} />
            <Route path='/neurologist' element={<Neurologist/>} />
            <Route path='/Gastroenterologist' element={<Gastroenterologist/>} />
          </Route>

          <Route element={<LoggedInUser/>}>
              <Route element={<RootLayout/>}>
              <Route path='/appointment' element={<Appointment/>} />
                 </Route>
          </Route>
    </Route>
  ))

  return (
    <>
    <RouterProvider router={route} />
    </>
  )
}

export default App
