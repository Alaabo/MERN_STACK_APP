import { rdv } from '../models/rdv.js'


export const newRdv = async (req , res) => {
    const Rdv = {
        client : req.body.client,
        facility : req.body.facility,
        tp : req.body.tp,
        date : req.body.date
    }

    try {
        await new rdv(Rdv).save()
        res.status(200).send("saved succefully")
    } catch (error) {
        res.status(500).send(error)
        console.log(error)
    }
}

export const getRdv = async (req , res) => {
    try {
        const Rdv = await rdv.find().populate("facility" ,"name").populate("client", "fn")
        res.status(200).send(Rdv)
    } catch (error) {
        res.status(503).send(error)
    }
}
export const getRdvToday = async (req , res) => {
    try {
        const Rdv = await rdv.find({date: req.body.dateFormated , facility : req.body.facility}).populate("facility" ).populate("client")
        res.status(200).send(Rdv)
    } catch (error) {
        res.status(200).send(error)
    }
}
export const getRdvbyid = async (req , res) => {
    try {
        const Rdv = await rdv.findById(req.params.id).populate("facility").populate("client" )
        res.status(200).json(Rdv)
    } catch (error) {
        res.status(503).send(error)
    }
}
export const getRdvbyclient = async (req , res) => {
    try {
        const Rdv = await rdv.find({client :req.params.id}).populate("facility" ,"name").populate("client", "fn")
        res.status(200).send(Rdv)
        
    } catch (error) {
        res.status(503).send(error)
    }
}
export const deleteRdv = async (req , res) => {
    try {
        await rdv.findByIdAndDelete(req.params.id)
        res.status(200).send("deleted succefuly")
    } catch (error) {
        res.status(503).send(error)
    }
}