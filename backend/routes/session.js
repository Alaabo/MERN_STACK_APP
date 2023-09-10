import express from 'express'

import {getTest , getTestByID , getUsersTest ,getVaccinePassport, newTest ,getTestWithNoResults ,addTestResults , getAllVaccines , newVaccine ,getVaccineById} from '../controller/sessionController.js'

const sessionRouter = express.Router()

sessionRouter.get("/test" , getTest)

sessionRouter.get("/test/:id" , getTestByID)

sessionRouter.get("/usertest/:id" , getUsersTest)

sessionRouter.post("/test/new" , newTest)

sessionRouter.get("/pendingresults" ,getTestWithNoResults)

sessionRouter.post("/setresult/:id" , addTestResults)

sessionRouter.get("/vaccines" , getAllVaccines)

sessionRouter.get("/vaccine/passport/:id" , getVaccinePassport)

sessionRouter.get("/vaccine/:id" , getVaccineById)

sessionRouter.post("/vaccine/new" , newVaccine)


export default sessionRouter