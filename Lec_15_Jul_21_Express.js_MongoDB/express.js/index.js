import express from 'express'
import dotenv from 'dotenv'
import userRoute from './routes/user.route.js'
import dbConn from './database/dbConn.js'
dotenv.config({})

dbConn()

const app=express()
app.use(express.json())
app.use(express.static('public')) // serve static files

// app.get('/',(req,res)=>{ // GET: http://localhost:3000/
//     res.send('this is default route')
// })
app.use('/api/user',userRoute)

const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log('server is running on',PORT)
})