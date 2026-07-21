import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
    // createdAt:Date,
    // updatedAt:Date
},{timestamps:true})

export const User = mongoose.model('User',userSchema)



// const userSchema = new mongoose.Schema({
    // name: {
    //     type: String,
    //     require: [true, 'name is required'],
    // },
    // email: {
    //     type: String,
    //     unique: [true, 'name is already exist'],
    // },
    // address: {
    //     street: {
    //         type: String,
    //     },
    //     zipcode: Number
    // },
    // status: {
    //     enum: ['active', 'inactive']
    // },
    // mobileNo: {
    //     type: String,
    //     // min: [10, "no is < 10"],
    //     // max: [10, "no is > 10"],
    //     validate: {
    //         validator: function (v) {
    //             if (v.length === 10) return true;
    //             return /\d{10}/.test(v);
    //         },
    //         message: props => `${props.value} is not a valid phone number!`
    //     }
    // }
// })