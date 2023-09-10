import { facility} from '../models/facility.js'

export const getFacility = async (req , res) => {
    try {
        const fac = await facility.findOne({name : req.body.name})
            if(fac)
                res.status(200).send(fac).json()
            else res.status(200).send("no related data")
        
    } catch (error) {
        res.status(405).send(error)
    }
}
export const getAllFacility = async (req , res) => {
    try {
        const fac = await facility.find()
            
                res.status(200).send(fac)
            
        
    } catch (error) {
        res.status(405).send(error)
    }
}
export const getAllFacilityByWillaya = async (req , res) => {
    try {
        const fac = await facility.find({wilaya : req.params.id})
            
                res.status(200).send(fac)
            
        
    } catch (error) {
        res.status(405).send(error)
    }
}

export const newFacility = async (req , res) => {
    const newfac = {
        name: req.body.name,
        adr : req.body.adr,
        wilaya : req.body.wilaya
    }
    try {
        await new facility(newfac).save()
        res.status(200).send("facility added succesfuly")
    } catch (error) {
        res.status(405).send(error)
        console.log(error)
    }
}

export const updateFacility = async (req , res) => {
    try {
        await facility.findById(req.params.id)
            .then(Facility=>{
                if(Facility)
                    {
                        Facility.adr = req.body.adr
                        Facility.wilaya = req.body.wilaya
                        Facility.save()
                        res.status(200).send(`updated succefuly `)
                    }
                else
                    {
                        res.status(403).send("no related data")
                    }
            })
            .catch(err => res.status(403).send(err))
    } catch (error) {
        res.status(405).send(error)
        console.log(error)
    }
}

export const deleteFacility = async (req , res) => {
    try {
        await facility.findByIdAndDelete(req.params.id)
            .then(()=> res.status(200).send("deleted succefully"))
    } catch (error) {
        res.status(500).send(error)
    }
}