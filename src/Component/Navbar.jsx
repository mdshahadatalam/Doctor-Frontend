import React, { useState } from 'react'
import './Navbar.css'
import {IoIosSearch} from "react-icons/io";
import {CiMenuFries} from "react-icons/ci";
import logo from '../assets/images/logo/logo.svg'
import { Link, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { loggedOutUser } from '../Feuature/Slice/LoginSlice';
export const Navbar = () => {
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [token,setToken] = useState(true)

    const handleSignUp =()=>{
          navigate('/signUp')

          setMobileSidebarOpen(false)
    }

    const handleLogOut =()=>{
        localStorage.removeItem('user')
        dispatch(loggedOutUser());
        navigate('/')
        setToken(true)
    }

  return (
    <>
    <section>
        <div className="container px-0">
        <nav
            className="flex items-center justify-between w-full relative bg-white rounded-full px-[10px] py-[8px]">

            {/* logo */}
            <img src={logo} alt="logo" className="img-fluid"/>

            {/* nav links */}
            <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden pt-4">

                <Link className='edit' to={'/'}><li className=" navText before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">home</li></Link>

                <Link className='edit' to={'/allDoc'}><li className=" navText before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">all doctors</li></Link>

                <Link className='edit' to={'/about'}><li className=" navText before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">about</li></Link>

                <Link className='edit' to={'/contact'}><li  className=" navText before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">contact</li></Link>
            </ul>

            {/* action buttons */}
            <div className="items-center gap-[10px] flex">

              
            
                {
                    token ? <button onClick={handleSignUp} className='createAcc'>
                    Create account
                </button>:<button onClick={handleLogOut} className='createAcc'>Log out </button> 
                }  
             
             
               

                <CiMenuFries
                    className="text-[1.8rem] mr-1 text-[#424242]c cursor-pointer md:hidden flex"
                    onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}/>
            </div>

            {/* mobile sidebar */}
            <aside
                className={` ${mobileSidebarOpen ? "translate-y-0 opacity-100 z-20" : "translate-y-[200px] opacity-0 z-[-1]"} md:hidden  p-4 text-center absolute top-[65px] right-0 w-full sm:w-[50%] rounded-md transition-all duration-300 bg-black`}>
                <div className="relative mb-5">
                    
                </div>
                <ul className="items-center gap-[20px] text-[1rem] text-white flex flex-col">

                    <Link className='edit' to={'/'}><li onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">home</li></Link>

                    <Link className='edit' to={'/allDoc'}><li onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">all doctor</li></Link>

                    <Link className='edit' to={'/about'}><li onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">about</li></Link>

                   <Link className='edit' to={'/contact'}> <li onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">contact</li></Link>

                    <div className="items-center gap-[10px] flex">
                <button onClick={handleSignUp} className='CreateSmall'>
                    Create account
                </button>
            </div>

                </ul>

            </aside>
        </nav>

        <hr />
        </div>
    </section>
    </>
  )
}
