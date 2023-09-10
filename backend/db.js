import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
export const connection = () => {
    

    const connectionParam = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    try {
        mongoose.connect(process.env.DB , connectionParam)
        console.log("connected to database")
    } catch (error) {
        console.log(error)
        
    }
}