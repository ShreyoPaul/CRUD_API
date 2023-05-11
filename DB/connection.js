import dotenv from 'dotenv'
dotenv.config({ path: './.env' })

import mongoose from "mongoose";
const db = process.env.MONGOODB_URI

mongoose.set('strictQuery', false)

mongoose.connect(db, {
    useNewUrlParser: true
}).then(() => {
    console.log("MongooDB is connected!")
}).catch((error) => console.log(error))
