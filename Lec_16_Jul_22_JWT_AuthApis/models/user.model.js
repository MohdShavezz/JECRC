import mongoose, { Schema } from "mongoose";


const userSchema=new Schema({
    username:String,
    email:{
        type:String,
        unique:[true,'email already exist in db']
    },
    password:String,
    photo:{
        originalUrl:String,
        publicId:String
    },
    role:{
        type:String,
        enum:["USER","ADMIN"],
        default:"USER"
    }

},{timestamps:true})

export const User=mongoose.model('User',userSchema)