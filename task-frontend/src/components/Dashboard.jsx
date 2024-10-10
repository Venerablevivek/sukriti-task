import React, { useEffect, useState } from 'react'
import userImg from "../assets/user1.png";
import { logout } from '../services/authAPI';
import { deleteAccount } from '../services/authAPI';
import { VscSignOut } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { ImCross } from 'react-icons/im';
import UpdateDetails from './UpdateDetails';
import AllUsers from './AllUsers';
import { setLoading } from '../slices/authSlice';
import toast from 'react-hot-toast';
import { apiConnector } from '../services/apiConnector';
import { BASE_URL } from '../BASE_URL';

const Dashboard = () => {
    const {loading} = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile);
    console.log(user);

    const id = user._id;
    console.log(id);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [toggle, setToggle] = useState(true);
  
    const changeClick = (menuType) =>{
      setMenu(menuType);
    }

    const [alldata, setAllData] = useState();

    const getSingleUser = async()=>{
        dispatch(setLoading(true));
        try {

            const response = await apiConnector("get",`${BASE_URL}/users/get-single-user/${id}`);
    
            if(!response.data.success){
                throw new Error(response.data.message);
            }

            console.log(response.data);
            setAllData(response.data.data);
    
        } catch (error) {
            console.log("Can't fetch Data due to",error);
            toast.error(error?.response.data.message);
        }
        dispatch(setLoading(false));
    }
    
      useEffect(()=>{
        getSingleUser();
      },[])

  return (
    <div className='w-full relative font-poppins flex overflow-x-hidden ' >
       <div className=' w-full flex flex-col ' >
        <div className=' w-[100%] flex flex-col ' >
            <div className=' flex lg:items-center justify-between flex-col bg-[#081321] border-b-[black] border-b-[1px] lg:flex-row  lg:py-4 lg:px-5  ' >
                        <div className='flex items-center gap-1 mt-5 mb-5 lg:mb-0 lg:mt-0 ' >
                            <img src={userImg} loading='lazy' alt='User IMG'  width="50px" />
                            <div className=' flex items-center gap-2 font-semibold ' >
                            <p className=' text-sm lg:text-md text-slate-300 ' >{alldata[0]?.firstName}</p>
                            <p className=' text-sm lg:text-md text-slate-300 ' >{alldata[0]?.lastName}</p>
                            </div>
                        </div>
                        <div className=' flex items-center gap-5 ' >
                                <div
                                onClick={() => {
                                    dispatch(logout(navigate))
                                }}
                                className=" flex items-center
                                cursor-pointer gap-x-1 px-3 py-2 text-sm md:text-md text-yellow-500 hover:bg-richblack-700 hover:text-richblack-25
                                transition-all duration-200 hover:bg-yellow-500 hover:text-white rounded-md
                                "
                                >
                                <VscSignOut className="text-md" />
                                Logout
                                </div> 

                                <div
                                onClick={() => {
                                    dispatch(deleteAccount(id,navigate))
                                }}
                                className=" flex items-center
                                cursor-pointer gap-x-1 px-3 py-2 text-sm md:text-md text-red-500 hover:bg-richblack-700 hover:text-richblack-25
                                transition-all duration-200 hover:bg-red-500 hover:text-white rounded-md
                                "
                                >
                                <MdDeleteOutline className="text-md" />
                                Delete Account
                                </div> 
                        </div>  
            </div>

       </div>
       <UpdateDetails/>

      <AllUsers/>

       </div>

    </div>
  )
}

export default Dashboard