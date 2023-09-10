import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    fn: {type : String , required:true},
    email: {type:String , required: true , unique: true},
    psw: {type:String , required: true },
    bd: {type:String , required: true },
    adr: {type:String , required: true},
    wilaya: {type:String , required: true},
    idn:{type:String , required : true , unique : true},
    phn: {type:String , required: true },
    medicalFile: {type :String}
})

export const client = mongoose.model('Client' , clientSchema )