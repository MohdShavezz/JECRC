import express from 'express'
import { register,login, forgetPassword,resetPassword } from '../controllers/auth.controller.js'
import upload from '../multer.js'


const router=express.Router()


router.route("/register").post(upload.single("photo"), register);
router.route('/login').post(login)
router.route('/forget-password').post(forgetPassword)
router.route('/reset-password').post(resetPassword)

export default router