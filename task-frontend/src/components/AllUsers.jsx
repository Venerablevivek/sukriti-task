import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loader from "../components/Loading/Loader"
import toast from 'react-hot-toast';
import { apiConnector } from '../services/apiConnector';
import { BASE_URL } from '../BASE_URL';
import { setLoading } from '../slices/authSlice';

const AllUsers = () => {
    const { user } = useSelector((state) => state.profile);
    const {loading} = useSelector((state) => state.auth);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [data, setAllData] = useState([]);

    const getAllUsers = async()=>{
        dispatch(setLoading(true));
        try {
            const response = await apiConnector("get",`${BASE_URL}/users/get-all-users`);
    
            if(!response.data.success){
                throw new Error(response.data.message);
            }

            setAllData(response.data.data);
    
        } catch (error) {
            console.log("Can't fetch Data due to",error);
            toast.error(error?.response.data.message);
        }
        dispatch(setLoading(false));
    }
    
      useEffect(()=>{
        getAllUsers();
      },[])

  return (
    <div className=' bg-slate-100 mb-10 ' >
        <div className=' mt-10 w-10/12 mx-auto flex flex-col gap-5 items-center justify-center ' >
            <h1 className=' text-black font-semibold text-2xl text-center ' >All Registered Users</h1>
            <div className=' w-full h-[1px] bg-blue-900 ' ></div>
          {
            loading && (<Loader/>)
          }
          {
            !loading && (  
            <div className=' grid grid-cols-3 gap-10 ' >
                {
                    data?.map((user,index)=>(
                        <div key={index} className=' bg-slate-300 rounded-lg px-8 py-6 flex flex-col ' >
                            <p>First Name :- {user.firstName}</p>
                            <p>Last Name :- {user.lastName}</p>
                            <p>Email Id :- {user.email}</p>
                            <p>Phone No. :- {user.phoneNumber}</p>
                            <p>Age :- {user.age}</p>
                        </div>
                    ))
                }
            </div>
         )
          }
        </div>
    </div>
  )
}

export default AllUsers