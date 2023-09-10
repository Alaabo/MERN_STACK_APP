import {user} from "../models/user.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import dotenv from 'dotenv'
dotenv.config();

export const login = async (req , res) => {
    try {
        const User = await user.findOne({un : req.body.un})
        if(User)
                {
                    const validPassword = await bcrypt.compare(req.body.psw,User.psw);
                    if (validPassword)
                        {
                            const token = jwt.sign( {"facility" : User.facility,"grade" : User.grade, "un" : User.un, "_id" :User._id} , process.env.JWTPRIVATKEY)
                            res.status(200).send(token);
                        }
                        else{res.status(200).send("wrong credentials")}
                }
        else res.status(200).send("wrong credentials")
    } catch (error) {
        res.status(500).send(error)
    }
}

export const registerUser = async (req , res) => {
    if (req.userGrade === "superUser") {
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
	    const hashPassword = await bcrypt.hash(req.body.psw, salt);

        const newUser = {un : req.body.un , psw : hashPassword , grade : req.body.grade , facility : req.body.facility}
    
        try {
            await new user(newUser).save()
            res.status(200).json("registred")
        } catch (error) {
            res.status(200).send('user already exist')
            console.log(error)
        }
    } else {
        res.status(401).json({message : "access denied"})
    }
}

export const deleteUser = async (req, res) => {
   if (req.userGrade === "superUser") {
    try {
        await user.findByIdAndDelete(req.params.id)
        res.status(205).send("deleted")
    } catch (error) {
        res.status(400).send(error)
    }
   } else {
    res.status(401).json({message : "access denied"})
   }
}

export const updateUser = async (req , res) => {
    if (req.userGrade === "superUser") {
        const User = {
            un : req.body.un,
            psw : req.body.psw,
            grade : req.body.grade,
            facility : req.body.facility
        }
        
        try {
            await user.findByIdAndUpdate(req.params.id , User , {new : true})
            .then( res.status(200).send("user updated!").json())
        } catch (error) {
            res.status(500).send(error)
        }
    } else {
     res.status(401).json({message : "access denied"})
    }
    
}
export const verifyuser =  (req , res , next) => {
    const authHeader = req.headers['authorization']
    const Token = authHeader && authHeader.split(' ')[1]
    jwt.verify(Token ,process.env.JWTPRIVATKEY , (err , User) =>{
        if(err) return res.status(403)
        if(User.grade === "superUser") {req.userGrade = User.grade ; next()} 
        else {next()}
    })
}

export const getAllusers = async (req , res) => {
    try {
        const allUsers = await user.find().populate('facility' , 'name')
        res.status(200).send(allUsers)
    } catch (error) {
        res.status(500).send(error)
    }
}











