import { User } from "../models/user.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { transporter } from "../emailer.js"

export const register = async (req, res) => {
    try {
        // registration
        const { username, email, password } = req.body
        
        let photo=null
        if (req.file) {
            photo = {
                originalUrl: req.file.path, // live url
                publicId: req.file.filename // cloudinary image id
            }
        }

        const usr = await User.findOne({ email }) // get user from database
        if (usr) {
            //user already exist in db
            res.send('user already registered with this email')
            return
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({
            username,
            email, 
            password: hashedPassword,
            photo
        })
        res.status(201).json({
            success: true,
            message: 'user created successfully',
            data: newUser
        })

    } catch (error) {
        console.log('error in register user', error.message)
    }
}
export const login = async (req, res) => {
    try {
        const { email, password } = req.body // fe
        const usr = await User.findOne({ email }) // databse
        if (!usr) {
            //user already exist in db
            res.send('register first.')
            return
        }
        //if user exist : check creds
        const result = await bcrypt.compare(password, usr.password);//boolean
        if (!result) {
            res.status(401).send('invalid creds.')
            return
        }
        //creds match: token generate jwt
        const secretKey = process.env.JWT_SECRET;

        const token = jwt.sign({ userId: usr._id }, secretKey, { expiresIn: '1h' });
        res.status(201).json({
            success: true,
            message: 'user login successful',
            token
        })

    } catch (error) {
        console.log('error in login user', error.message)
    }
}
export const forgetPassword = async (req, res) => {
    try {
        const { email } = req.body 
        const usr = await User.findOne({ email }) 
        if (!usr) {
            res.send('register first.')
            return
        }
        //token generate
        const secretKey = process.env.JWT_SECRET;
        const token = jwt.sign({ userId: usr._id }, secretKey, { expiresIn: '10m' });

        //token in email
        await transporter.sendMail({
            to:usr.email,
            subject:"Reset Email",
            html:`
                <h3> Use this token to reset your passsword </h3>
                <p> ${token}</p>
            `
        })
        res.status(200).send('check your email, token is sent')

    } catch (error) {
        console.log('error in forget password', error.message)
    }
}

export const resetPassword = async (req, res) => {
    try {
        const { newpassword,token } = req.body 
        const decode=await jwt.verify(token,process.env.JWT_SECRET)
        const usr=await User.findById(decode.userId)
        console.log(usr)
        if (!usr) {
            //user already exist in db
           return res.send('register first.')            
        }
        //reset 
        const hashPass=await bcrypt.hash(newpassword,10)
        usr.password=hashPass
        await usr.save()
        return res.status(200).send('password reset success')

    } catch (error) {
        console.log('error in reset password', error.message)
    }
}





