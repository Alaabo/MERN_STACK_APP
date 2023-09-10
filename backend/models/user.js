import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    un : {type : String , required: true },
    psw: {type: String , required : true , min : 8},
    grade : {type : String , required: true },
    facility : {type : mongoose.Schema.Types.ObjectId , required: true , ref : 'Facility' }

})

export const user = mongoose.model('User' , userSchema)


