import Express from 'express'

import {newRdv , getRdv , getRdvbyid ,getRdvToday,getRdvbyclient, deleteRdv} from '../controller/rdvController.js'

const rdvRouter = Express.Router()

rdvRouter.post("/new" , newRdv)
rdvRouter.get("/get" , getRdv)
rdvRouter.post("/get/today" , getRdvToday)
rdvRouter.get("/get/:id" , getRdvbyid)
rdvRouter.get("/getClient/:id" , getRdvbyclient)
rdvRouter.post("/delete/:id" , deleteRdv)

export default rdvRouter