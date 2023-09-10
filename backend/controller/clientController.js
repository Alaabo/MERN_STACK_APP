import { client } from '../models/client.js'
import bcrypt from 'bcrypt'

export const loginClient = async (req, res) => {
    try {
        const Client = await client.findOne({ email: req.body.email })
        if (Client) {
            const validPassword = await bcrypt.compare(req.body.psw, Client.psw);
            if (validPassword)
            { 
                const cred = {id : Client._id , fullname : Client.fn}
                res.status(200).json(cred);}
        }
        else res.status(200).json("wrong credentials")
    } catch (error) {
        res.status(300).send(error)
    }
}
export const mfClient = async (req, res) => {
    try {
        const Client = await client.findById(req.params.id)
        if (Client) {
                res.status(200).json(Client.medicalFile);}
                else res.status(200).json("Nothing there yet")
        }
    catch (error) {
        res.status(300).send(error)
    }
}
export const registerClient = async (req, res) => {
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.psw, salt);
    const newClient = {
        fn: req.body.fn,
        email: req.body.email,
        psw: hashPassword,
        bd: req.body.bd,
        adr: req.body.adr,
        phn: req.body.phn,
        wilaya: req.body.wilaya,
        idn : req.body.idn
    }
    try {
        try {
            const Client = await client.findOne({ email: req.body.email })
        if (Client) {
            res.status(200).send('user with given email already exist')
        } else {
            await new client(newClient).save()
                .then(() => res.status(200).send("registred"))
        }
        } catch (error) {
            res.status(200).send(error)
        }
    } catch (e) {
        res.status(500).send(e)
        console.log(e)
    }
}
export const updateClient = async (req, res) => {
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.psw, salt);
    const currentClient = {
        fn: req.body.fn,
        email: req.body.email,
        psw: hashPassword,
        bd: Date.parse(req.body.bd),
        adr: req.body.adr,
        phn: req.body.phn,
        wilaya: req.body.wilaya
    }

    try {
        await client.findByIdAndUpdate(req.params.id, currentClient, { new: true })
            .then(() => { res.status(200).send("updated!") })
    } catch (error) {
        res.status(406).send(error)

    }

}

export const deleteClient = async (req, res) => {
    try {
        await client.findByIdAndDelete(req.params.id)
            .then(() => { res.status(205).send("deleted") })
    } catch (error) {
        res.status(500).send(error)

    }
}

export const medicalFile = async (req, res) => {
    try {
        await client.findById(req.params.id)
            .then(
                Client => {
                    if (Client.medicalFile) {
                        Client.medicalFile = Client.medicalFile + "  " + req.body.medicalcase
                        Client.save()
                            .then(() => { res.status(200).send("medicale case added succesfully") })
                    }
                    else {
                        Client.medicalFile = req.body.medicalcase
                        Client.save()
                            .then(() => { res.status(200).send("medicale case added succesfully") })
                    }
                }
            )
            .catch(err => res.status(300).send(err))
    } catch (error) {
        res.status(500).send(error)
    }

}
export const AllClient = async (req ,res) =>{
    try {
        const Client = await client.find()
        res.status(200).send(Client)
    } catch (error) {
        res.status(500)
    }
}