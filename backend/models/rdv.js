import mongoose from "mongoose";

const rdvSchema = new mongoose.Schema({
    client : {type : mongoose.Schema.Types.ObjectId , required: true , ref : 'Client' },
    facility : {type : mongoose.Schema.Types.ObjectId , required: true , ref : 'Facility' },
    tp : {type : String , required : true} ,
    date : {type: String ,  required: true},
})


export const rdv = mongoose.model('Rdv' , rdvSchema)

//once rdv confirmed it get deleted from the database