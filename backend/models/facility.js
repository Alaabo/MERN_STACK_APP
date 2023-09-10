import mongoose from "mongoose";

const facilitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    adr: { type: String, required: true },
    wilaya: { type: String, required: true }
})


export const facility = mongoose.model('Facility', facilitySchema)

