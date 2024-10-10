import React, { useState } from 'react'
import {Link} from "react-router-dom";
import {toast} from "react-hot-toast";
import {useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setSignupData } from '../slices/authSlice';
import { register } from '../services/authAPI';
import { IoArrowBackCircleSharp } from 'react-icons/io5';
import Loader from "../components/Loading/Loader"


const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {loading} = useSelector((state) => state.auth);

    const [formData, setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:'',
        phoneNumber:'',
    });

    const handleInputChange = (e) =>{
        setFormData({...formData,
            [e.target.name]: e.target.value
    })}

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(formData.password !== formData.confirmPassword) {
            toast.error("Passwords Do Not Match")
            return
        }
       
        dispatch(register(formData.firstName, 
            formData.lastName,
            formData.email, 
            formData.password,
            formData.confirmPassword,
            formData.phoneNumber,
             navigate));
        dispatch(setSignupData(formData));
        //Reset 
        setFormData({
            firstName: "",
            lastName:"",
            email: "",
            password: "",
            confirmPassword: "",
            phoneNumber:""
        })
    }


  return (
    <div className='w-full h-[100vh] flex gap-4 ' >
         <div className=' w-[30%] bg-[#081321] h-full flex flex-col pt-6 pb-7 gap-[200px] ' >
    <p className=' font-poppins font-[600] text-white text-lg lg:text-xl uppercase text-center ' >Sukriti Task</p>
    
    <div className='flex flex-col gap-4 items-center font-poppins ' >
        <p className='font-[600] text-blue-500 text-lg lg:text-xl' >Register Now</p>
        <p className='font-[600] text-white text-sm lg:text-md' >Login Now</p>
        <p className='font-[600] text-white text-sm lg:text-md' >Get, Update and Delete</p>
        <p className='font-[600] text-white text-sm lg:text-md' >HomePage</p>

    </div>
    
    </div>

          {/* Content */}
    <div className='w-[70%] h-full flex flex-col px-10 py-5 justify-center items-center ' >
    <Link to="/" className=' w-11/12 mx-auto flex items-center gap-1 mt-[-15px] mb-[-15px] 
        transition-all duration-200 hover:text-blue-500 ' >
        <IoArrowBackCircleSharp className='  text-2xl ' />
        <button>Back</button>
        </Link>
        <p className='font-medium text-[22px]' >Welcome to Sukriti Task</p>
        <h2 className='font-bold text-[20px] text-[#5D59D9] font-poppins '
        >Create an Account</h2>
        <div className='w-[70%] h-[1px] bg-gray-300 mt-1 mb-2 ' ></div>
        {
            loading && (<Loader/>)
        }
        {
            !loading && (<form className='flex flex-col gap-2' >
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-1' >
            <div className='flex flex-col gap-4 mt-5 ' >
                             <div>
                                 <label htmlFor='firstName' >
                                     <p className=' text-md text-richblack-5 mb-1 leading-[1.375rem]' >First Name <sup className='text-[#FF0000] ' >*</sup> </p>  </label>
                                     <input
                                         required
                                         type='firstName'
                                         id='firstName'
                                         name='firstName'
                                         placeholder='Enter your First Name'
                                         value={formData.firstName}
                                         onChange={handleInputChange}
                                         className="w-full rounded-[0.5rem] text-sm outline-none bg-gray-200 p-[12px] pr-10 text-black border-b-2 border-gray-500"
                                     />
                             </div>
                         </div>
                         <div className='flex flex-col gap-4 mt-5 ' >
                             <div>
                                 <label htmlFor='lastName' >
                                     <p className=' text-md text-richblack-5 mb-1 leading-[1.375rem]' >Last Name <sup className='text-[#FF0000] ' >*</sup> </p>  </label>
                                     <input
                                         required
                                         type='lastName'
                                         id='lastName'
                                         name='lastName'
                                         placeholder='Enter your Last Name'
                                         value={formData.lastName}
                                         onChange={handleInputChange}
                                         className="w-full rounded-[0.5rem] text-sm outline-none bg-gray-200 p-[12px] pr-10 text-black border-b-2 border-gray-500"
                                     />
                             </div>
                         </div>
                         <div className='flex flex-col gap-4 mt-5 ' >
                             <div>
                                 <label htmlFor='email' >
                                     <p className=' text-md text-richblack-5 mb-1 leading-[1.375rem]' >Email Address <sup className='text-[#FF0000] ' >*</sup> </p>  </label>
                                     <input
                                         required
                                         type='email'
                                         id='email'
                                         name='email'
                                         placeholder='Enter your email'
                                         value={formData.email}
                                         onChange={handleInputChange}
                                         className="w-full rounded-[0.5rem] text-sm outline-none bg-gray-200 p-[12px] pr-10 text-black border-b-2 border-gray-500"
                                     />
                             </div>
                         </div>
                         <div className='flex flex-col gap-4 mt-5 ' >
                             <div>
                                 <label htmlFor='password' >
                                     <p className=' text-md text-richblack-5 mb-1 leading-[1.375rem]' >Password <sup className='text-[#FF0000] ' >*</sup> </p>  </label>
                                     <input
                                         required
                                         type='password'
                             id='password'
                             name='password'
                             placeholder='Enter your password'
                             value={formData.password}
                             onChange={handleInputChange}
                                         className="w-full rounded-[0.5rem] text-sm outline-none bg-gray-200 p-[12px] pr-10 text-black border-b-2 border-gray-500"
                                     />
                             </div>
                         </div>
                         <div className='flex flex-col gap-4 mt-5 ' >
                             <div>
                                 <label htmlFor='confirmPassword' >
                                     <p className=' text-md text-richblack-5 mb-1 leading-[1.375rem]' >Confirm Password <sup className='text-[#FF0000] ' >*</sup> </p>  </label>
                                     <input
                                         required
                                         type='password'
                             id='confirmPassword'
                             name='confirmPassword'
                             placeholder='Confirm your password'
                             value={formData.confirmPassword}
                             onChange={handleInputChange}
                                         className="w-full rounded-[0.5rem] text-sm outline-none bg-gray-200 p-[12px] pr-10 text-black border-b-2 border-gray-500"
                                     />
                             </div>
                         </div>
                         <div className='flex flex-col gap-4 mt-5 ' >
                             <div>
                                 <label htmlFor='phoneNumber' >
                                     <p className=' text-md text-richblack-5 mb-1 leading-[1.375rem]' >Phone Number</p>  </label>
                                     <input
                                         required
                                         type='phoneNumber'
                             id='phoneNumber'
                             name='phoneNumber'
                             placeholder='Enter Phone Number'
                             value={formData.phoneNumber}
                             onChange={handleInputChange}
                                         className="w-full rounded-[0.5rem] text-sm outline-none bg-gray-200 p-[12px] pr-10 text-black border-b-2 border-gray-500"
                                     />
                             </div>
                         </div>
            </div>
          
             <button onClick={handleSubmit} 
             className='bg-blue-500 mt-5 font-semibold text-white px-2 py-3 rounded-md
             hover:bg-blue-600 transition-all duration-300' >Create an account</button>
         </form>)
        }
        <p className='mt-5 text-center text-[14px] text-gray-500 ' >Already Have an account ? {" "}
            <Link to="/login">
                <span className="text-[#5D59D9]" >Login</span>
            </Link>
        </p>
    </div>
   
</div>
  )
}

export default Register