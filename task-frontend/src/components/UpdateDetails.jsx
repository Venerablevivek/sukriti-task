import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {UpdateUserDetails} from "../services/authAPI";
import Loader from "../components/Loading/Loader"

const UpdateDetails = () => {
    const { user } = useSelector((state) => state.profile);
    const {loading} = useSelector((state) => state.auth);
    console.log(user);

    const id = user._id;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        firstName:'',
        lastName:'',
        phoneNumber:'',
        age:''
    });

    const handleInputChange = (e) =>{
        setFormData({...formData,
            [e.target.name]: e.target.value
    })}

    const handleSubmit = (e) =>{
        e.preventDefault();
       
        dispatch(UpdateUserDetails(
            id,
            formData.firstName, 
            formData.lastName,
            formData.phoneNumber,
            formData.age,
             navigate));
        dispatch(setSignupData(formData));


        //Reset 
        setFormData({
            firstName: "",
            lastName:"",
            phoneNumber:"",
            age:""
        });
    }

  return (
    <div className=' w-[100vw] h-[100vh] bg-slate-100 ' >
        <div className=' mt-10 w-10/12 mx-auto flex flex-col gap-5 items-center justify-center ' >
            <h1 className=' text-black font-semibold text-2xl text-center ' >Update User Details</h1>
            <div className=' w-full h-[1px] bg-blue-900 ' ></div>
          {
            loading && (<Loader/>)
          }
          {
            !loading && (  <form className='flex flex-col gap-2' >
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5' >
            <div className='flex flex-col gap-4 mt-5 ' >
                             <div>
                                 <label htmlFor='firstName' >
                                     <p className=' text-md text-richblack-5 mb-1 leading-[1.375rem]' >First Name  </p>  </label>
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
                                     <p className=' text-md text-richblack-5 mb-1 leading-[1.375rem]' >Last Name  </p>  </label>
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
                         <div className='flex flex-col gap-4 mt-5 ' >
                             <div>
                                 <label htmlFor='age' >
                                     <p className=' text-md text-richblack-5 mb-1 leading-[1.375rem]' >Age</p>  </label>
                                     <input
                                         required
                                         type='number'
                             id='age'
                             name='age'
                             placeholder='Enter Age'
                             value={formData.age}
                             onChange={handleInputChange}
                                         className="w-full rounded-[0.5rem] text-sm outline-none bg-gray-200 p-[12px] pr-10 text-black border-b-2 border-gray-500"
                                     />
                             </div>
                         </div>
            </div>
          
             <button onClick={handleSubmit} 
             className='bg-blue-500 mt-5 font-semibold text-white px-2 py-3 rounded-md
             hover:bg-blue-600 transition-all duration-300' >Update</button>
         </form>)
          }
        </div>
    </div>
  )
}

export default UpdateDetails