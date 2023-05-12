import mongoose from "mongoose";

const user = mongoose.Schema({
    name : {
        type : String,
        require: true
    },
    email : {
        type : String,
        require: true
    },
    password : {
        type : String,
        require: true
    }
})

export const userSchema = mongoose.model("userDB", user)