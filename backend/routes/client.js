import Express from 'express';

import { medicalFile,loginClient , mfClient , AllClient , registerClient ,updateClient , deleteClient} from '../controller/clientController.js';




const clientRouter = Express.Router()

clientRouter.post("/all" , AllClient )
clientRouter.post("/mf/:id" , mfClient )
clientRouter.post("/login" , loginClient )
clientRouter.post("/new" , registerClient )
clientRouter.post("/update/:id" , updateClient )
clientRouter.delete("/delete/:id", deleteClient)
clientRouter.post("/medicalfile/:id" , medicalFile)
export default clientRouter