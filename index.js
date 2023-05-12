// const express = require("express")
// const cors = require("cors")
// const mongoose = require("mongoose")
// const bodyParser = require("body-parser")
// const  productsRoute  = require("./Routes/routes.js")

import dotenv from 'dotenv'
dotenv.config({ path: './.env' })

import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import productsRoute from './Routes/routes.js'
import './DB/connection.js'

const app = express()

const PORT = process.env.PORT || 5000

app.use(bodyParser.json())
app.use("/products", productsRoute)
app.use(cors())

app.get("", (req, res) => {
    res.send("Hello User, how are doing!?")
})

app.listen(PORT, () => console.log("Server is running on port", PORT))