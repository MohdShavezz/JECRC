import { User } from "../models/user.model.js"

// controller action methods are for db ineraction
export async function addUser(req, res) {
    const user = req.body
    try {
        const u=await User.insertOne(user)
        res.status(201).json(u)
    } catch (error) {
        console.log('error in addUser',error)
    }
}
export async function getUser(req, res) {
    try {
        const users=await User.find()
        res.status(200).json(users)
    } catch (error) {
        console.log('error in getUser',error)
    }
}
export async function getUserById(req, res) {
    const userId = req.params.id
    try {
        const user = await User.findById(userId)
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
    }
}
export async function updateUser(req, res) {
    const userId = req.params.id
    const updatedData = req.body // updated data
    try {
        await User.findByIdAndUpdate(userId,updatedData)
        res.status(200).send('user updated succesfully.')
    } catch (error) {
        console.log(error)
    }
}
export async function deleteUserById(req, res) {
    const userId = req.params.id
    try {
        const u= await User.findByIdAndDelete(userId)
        res.status(200).json({
            success:true,
            message:'user deleted',
            user:u
        })
    } catch (error) {
        console.log(error)
    }
}



