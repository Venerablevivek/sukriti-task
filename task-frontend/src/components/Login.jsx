import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../services/authAPI';
import Loader from "../components/Loading/Loader";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {loading} = useSelector((state) => state.auth);

    const [formData, setFormData] = useState({
        email:'',
        password:'',
    });

    const handleInputChange = (e) =>{
        setFormData({...formData,
            [e.target.name]: e.target.value
    })}

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(login(formData.email, formData.password, navigate))
    }

  return (
    <div className='w-[100%] h-full flex justify-between gap-[100px] font-poppins' >
        {/* Content */}
        <div className='w-full lg:w-[100%] h-[100%] bg-[white] rounded-md flex flex-col px-8 py-8 ' >
            <p className='font-medium text-[20px]' >Welcome </p>
            <h2 className='font-bold text-sm text-blue-500 font-poppins '
            >Login to your Account</h2>
            <div className='w-full h-[1px] bg-[#BFBFBF] mt-7 ' ></div>
            {
                loading && (<Loader/>)
            }
            {
                !loading && (<form className='flex flex-col gap-2' >
          
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
                <button onClick={handleSubmit} 
                className='bg-blue-500 mt-3 font-semibold text-white px-1 py-3 rounded-md
                 hover:bg-blue-600 transition-all duration-300' 
                >Login</button>
            </form>)
            }
        </div>
    </div>
  )
}

export default Login