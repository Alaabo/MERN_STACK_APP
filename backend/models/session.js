import mongoose from 'mongoose'

const testSchema = new mongoose.Schema({
    client : {type : mongoose.Schema.Types.ObjectId , required: true , ref : 'Client' },
    facility : {type : mongoose.Schema.Types.ObjectId , required: true , ref : 'Facility' },
    user : {type : mongoose.Schema.Types.ObjectId , required: true , ref : 'User' },
    tp : {type : String , required : true} ,
    res : {type : String},
    date : {type: Date , default : new Date() , required: true}
})


export const test = mongoose.model('Test' , testSchema)

const vaccineSchema = new mongoose.Schema({
    client : {type : mongoose.Schema.Types.ObjectId , required: true , ref : 'Client' },
    facility : {type : mongoose.Schema.Types.ObjectId , required: true , ref : 'Facility' },
    user : {type : mongoose.Schema.Types.ObjectId , required: true , ref : 'User' },
    tp : {type : String , required : true} ,
    date : {type: Date , default : new Date() , required: true}
})

export const vaccine = mongoose.model('Vaccine', vaccineSchema )