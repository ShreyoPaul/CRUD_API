import mongoose, { model } from "mongoose";

export const product = mongoose.Schema({
    name : {
        type : String,
        require: true
    },
    price : {
        type : Number,
        require: true
    },
    pic : {
        type : String,
        require: true
    },
    desc : {
        type : String,
        require: true
    }
})

export const productSchema = mongoose.model("productDB", product)

