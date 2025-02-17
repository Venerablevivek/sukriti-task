const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
        firstName:{
            type:String,
            required:true,
        },
        lastName:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
        },
        phoneNumber:{
            type:Number
        },
        token: {
            type : String,
        },
        age:{
            type:Number
        }
});

module.exports = mongoose.model("User",UserSchema);