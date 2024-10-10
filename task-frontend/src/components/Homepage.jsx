import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import Login from './Login';

const HomePage = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () =>{
        setToggle(!toggle);
    }

  return (
   <div className='w-full h-[100vh] flex gap-4  ' >
    {/* left */}
    <div className=' w-[30%] bg-[#081321] h-full flex flex-col pt-6 pb-7 gap-[200px] ' >
    <p className=' font-poppins font-[600] text-white text-lg lg:text-xl uppercase text-center ' >Sukriti Task</p>
    
    <div className='flex flex-col gap-4 items-center font-poppins ' >
        <p className='font-[600] text-blue-500 text-lg lg:text-xl' >Register Now</p>
        <p className='font-[600] text-white text-sm lg:text-md' >Login Now</p>
        <p className='font-[600] text-white text-sm lg:text-md' >Get, Update and Delete</p>
        <p className='font-[600] text-white text-sm lg:text-md' >HomePage</p>

    </div>
    
    </div>

    {/* right */}
    <div className=' w-[70%] h-full flex flex-col p-5 gap-10 ' >
    <p className='mt-5 text-end text-[14px] text-gray-500 ' >Don't Have an account ? {" "}
                <Link to="/register" className="text-blue-500"  >Register</Link>
    </p>
    <div className='w-[70%] mx-auto h-full flex justify-center items-center ' >
       <Login/>
    </div>
    </div>

   </div>
  )
}

export default HomePage