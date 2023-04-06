import mongoose from "mongoose";

const OrderSchema = mongoose.Schema({
   
    firstName: {
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})