import express from 'express'
import cors from 'cors'
import productsRoute from './Routes/productsRoutes.js'
import './DB/connection.js'
import userRoutes from './Routes/userRoutes.js'
import bodyParser from 'body-parser'

const app = express()

const PORT = 5000

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"]
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use("/products", productsRoute)
app.use("/", userRoutes)

app.get("", (req, res) => {
    res.send("Hello User, how are doing!?")
})


app.listen(PORT, () => console.log("Server is running on port", PORT))