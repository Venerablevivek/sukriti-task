const User = require("../Models/User");
const dotenv = require("dotenv");

dotenv.config();

exports.getAllUser = async(req,res)=>{
    try {

        const allUsers = await User.find({});

        if(!allUsers){
            return res.status(404).json({
                success:false,
                message:'No user Found, Try Again'
            });
        }

        return res.status(200).json({
            success:true,
            message:'User fetched successfully',
            data:allUsers
        });

        
    } catch (error) {
        return res.status(500).json({
            success:true,
            message:`Cannot fetch all users due to ${error.message}`,
        });
    }
}

exports.getSingleUser = async(req,res)=>{
    try {

        const {id} = req.params;

        const allUsers = await User.find({_id:id});

        if(!allUsers){
            return res.status(404).json({
                success:false,
                message:'No user Found, Try Again'
            });
        }

        return res.status(200).json({
            success:true,
            message:'User fetched successfully',
            data:allUsers
        });

        
    } catch (error) {
        return res.status(500).json({
            success:true,
            message:`Cannot fetch all users due to ${error.message}`,
        });
    }
}

exports.deleteUser = async(req,res)=>{
    try {

        const {id} = req.body;

        const getuser = await User.findById({_id:id});

        if(!getuser){
            return res.status(403).json({
                success:false,
                message:"No user present"
            });
        }

        const allUsers = await User.findByIdAndDelete({_id:id});

        return res.status(200).json({
            success:true,
            message:'User deleted successfully',
            data:allUsers
        });

        
    } catch (error) {
        return res.status(500).json({
            success:true,
            message:`Cannot delete user due to ${error.message}`,
        });
    }
}

exports.updateUser = async(req,res)=>{
    try {

        const {
            id,
            firstName,
            lastName,
            phoneNumber,
            age
        } = req.body;

        const getuser = await User.findById({_id:id});

        if(!getuser){
            return res.status(403).json({
                success:false,
                message:"No user present"
            });
        }

        const updateData = await User.findByIdAndUpdate({_id:id},{
            firstName,
            lastName,
            phoneNumber,
            age
        });

        return res.status(200).json({
            success:true,
            message:'User Data Updated successfully',
            data:updateData
        });

        
    } catch (error) {
        return res.status(500).json({
            success:true,
            message:`Cannot update user due to ${error.message}`,
        });
    }
}
