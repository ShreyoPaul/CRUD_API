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
    },
    role: {
        type : String,
        require: true
    },
    user_id: {
        type : Number,
        require: true
    }
})

export const userSchema = mongoose.model("userDB", user)