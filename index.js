import express from 'express'
import cors from 'cors'
import productsRoute from './Routes/productsRoutes.js'
import './DB/connection.js'
import userRoutes from './Routes/userRoutes.js'

const app = express()

const PORT =  5000

app.use(express.json())
app.use(cors())

app.get("", (req, res) => {
    res.send("Hello User, how are doing!?")
})

app.use("/products", productsRoute)
app.use("/", userRoutes)

app.listen(PORT, () => console.log("Server is running on port", PORT))