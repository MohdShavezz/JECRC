import express from 'express'
import dotenv from 'dotenv'
import authRoute from './routes/auth.route.js'
import dbConn from './database/dbConn.js'
dotenv.config({})

dbConn()

const app=express()
app.use(express.json())


//routes
// app.get('/',(req,res)=>{
//     console.log('thisisdefault route')
//     res.send('this is deafult route')
// })

app.use('/api/auth/',authRoute)

//server create
const PORT=process.env.PORT||5000
app.listen(PORT,()=>{
    console.log('server is running on',PORT)
})

