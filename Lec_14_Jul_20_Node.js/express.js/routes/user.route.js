import express from 'express'
import { getUser,getUserById,deleteUserById,addUser,updateUser } from '../controller/user.controller.js'

const router=express.Router()

router.route('/users').get(getUser) // GET: http://localhost:3000/api/user/users
router.route('/users').post(addUser) // POST: http://localhost:3000/api/user/users {payload}
router.route('/users/:id').get(getUserById) // GET: http://localhost:3000/api/user/users/1 GETUSERBYID
router.route('/users/:id').delete(deleteUserById) // DELETE: http://localhost:3000/api/user/users/1 DELETEUSERBYID
router.route('/users/:id').put(updateUser) // PUT: http://localhost:3000/api/user/users/1 {payload}

export default router