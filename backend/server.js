
import express from 'express'

import CORS from 'cors'
//import mongoose from 'mongoose'
import {connection} from './db.js'
import dotenv from 'dotenv'

import  userRouter  from './routes/user.js'
import clientRouter from './routes/client.js'
import facilityRouter from './routes/facility.js'
import rdvRouter from './routes/rdv.js'
import stockRouter from './routes/stock.js'
import sessionRouter from './routes/session.js'


dotenv.config();

const app = express()

const port =  3030
//process.env.PORT ||
//database connection
connection()

// try {
//    mongoose.connect("mongodb://localhost:27017/curehub" , () => {console.log("database mounted succefuly")})
// } catch (error) {
//    console.log(error.message)
// }


//middleware
app.use(express.json())
app.use(CORS())

//routing
app.use("/api/user", userRouter)
app.use("/api/client", clientRouter)
app.use("/api/facility", facilityRouter)
app.use("/api/rdv", rdvRouter)
app.use("/api/stock", stockRouter)
app.use("/api/session", sessionRouter)

// mongoose.connect(CONNECTION_URL)
//     .then(() => app.listen(port , () => console.log(`server started on ${port} and database is connected`)))
//     .catch(err => console.log(err.message))

   app.listen(port, ()=> console.log(`Dolphin app listening on port ${port}!  `))