import {test , vaccine} from '../models/session.js'

export const getTest = async (req , res) => {
    try {
        const tests = await test.find().populate("client","fn").populate("facility","name").populate("user" , "un")
        res.status(200).json(tests)
    } catch (e) {
        res.status(500).json(e)
    }
}
export const getUsersTest = async (req , res) => {
    try {
        const tests = await test.find({client : req.params.id}).populate("client","fn").populate("facility","name").populate("user" , "un")
        res.status(200).json(tests)
    } catch (e) {
        res.status(500).json(e)
    }
}

export const getTestByID = async (req , res) => {
    try {
        const testbyid = await test.findById(req.params.id).populate("client","fn").populate("facility","name").populate("user" , "un")
        res.status(200).json(testbyid)
    } catch (e) {
        res.status(500).json(e)
    }
}

export const newTest = async (req , res)=> {
    
    const testbody = {
        client : req.body.client,
        facility : req.body.facility,
        user : req.body.user,
        tp : req.body.tp,
        res : null 
    }
    
    try {
        await new test(testbody).save()
        res.status(200).send("confirmed")
    } catch (e) {
        res.status(500).json(e)
    }
}

export const getTestWithNoResults = async (req , res) => {
    try {
        const NoResTest = await test.find().where({res : null}).populate("client","fn").populate("facility","name").populate("user" , "un")
        res.status(200).json(NoResTest)
    } catch (e) {
        res.status(500).json(e)
        console.log(e)
    }
}

export const addTestResults = async (req , res) => {
    try {
        await test.findById(req.params.id)
            .then(
                Test =>{
                    if(Test.res=== null)
                        {
                            Test.res = req.body.res
                            Test.save()
                                .then(() => {res.status(200).send("medicale case added succesfully")})
                        }
                    else 
                        {
                            res.status(404).send("results already exists")
                        }
                }
            )
            .catch(err => res.status(300).send(err))
    } catch (error) {
        res.status(500).send(error)
    }
}

///////////////////////////////////////////////////
export const getAllVaccines = async (req , res) => {
    try {
        const allVaccines = await vaccine.find().populate("client","fn").populate("facility","name").populate("user" , "un")
            res.status(200).json(allVaccines)
    } catch (error) {
        res.status(500).send(error)
    }
}
export const getVaccinePassport = async (req , res) => {
    try {
        const allVaccines = await vaccine.find({client : req.params.id}).populate("client","fn").populate("facility","name").populate("user" , "un")
            res.status(200).send(allVaccines)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const getVaccineById = async (req , res) => {
    try {
        const allVaccines = await vaccine.findById(req.params.id).populate("client","fn").populate("facility","name").populate("user" , "un")
            res.status(200).json(allVaccines)
    } catch (error) {
        res.status(500).send(error)
    }
}


export const newVaccine = async (req , res)=> {
    
    const vaccbody = {
        client : req.body.client,
        facility : req.body.facility,
        user : req.body.user,
        tp : req.body.tp,
    }
    
    try {
        await new vaccine(vaccbody).save()
        res.status(200).send("confirmed")
    } catch (e) {
        res.status(500).json(e)
    }
}
