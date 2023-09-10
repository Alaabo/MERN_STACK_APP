import express  from "express";
import {newStock , getStock , getStockAdmin , getStockForAssiss} from '../controller/stockController.js'

const stockRouter = express.Router()

stockRouter.post("/new" , newStock)
stockRouter.post("/get" , getStock)
stockRouter.post("/get/admin" , getStockAdmin)
stockRouter.post("/get/assiss" ,getStockForAssiss)

export default stockRouter