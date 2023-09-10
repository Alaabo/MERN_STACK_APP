import { stock } from '../models/stock.js'
export const newStock = async (req , res)=> {
    
    const newStock = {
        facility: req.body.facility,
        date :  req.body.date,
        tp: req.body.tp,
        unites: req.body.unite,
        qnt : req.body.qnt
        
    }

    try {
        await new stock(newStock).save()
        res.status(200).send('added succefully')
    } catch (error) {
        res.status(500).send(error)

    }
}
export const getStock = async (req , res)=> {

    try {
        const Stock = await stock.find().where( {facility : req.body.facility})
        
        res.status(200).send(Stock)
    } catch (error) {
        res.status(500).send(error)

    }
}
export const getStockForAssiss = async (req , res)=> {

    try {
        const Stock = await stock.find().where( {facility : req.body.facility , date:req.body.date})
        
        res.status(200).send(Stock)
    } catch (error) {
        res.status(500).send(error)

    }
}
export const getStockAdmin = async (req , res)=> {

    try {
        const Stock = await stock.find().populate('facility')
        
        res.status(200).send(Stock)
    } catch (error) {
        res.status(500).send(error)

    }
}