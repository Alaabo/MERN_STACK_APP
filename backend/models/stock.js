import mongoose from "mongoose";

const stockSchema = new mongoose.Schema({
    facility:{type:mongoose.Schema.Types.ObjectId , required: true , ref: 'Facility'},
    date : {type: String , required:true},
    tp : {type: String , required: true},
    unites:{type : String , required: true},
    qnt : {type : Number , required: true},

})

export const stock = mongoose.model('Stock' , stockSchema)
