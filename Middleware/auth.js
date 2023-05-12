import dotenv from 'dotenv'
dotenv.config({ path: './.env' })

import jwt from "jsonwebtoken"

export const auth = (req, res, next) => {
    try {
        let token = req.headers.autherization
        if (!token) {
            return res.status(401).json({ message: "Unautherized user!" })
        }

        token = token.split(" ")[1]
        let user = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.userId = user.id

        next()
    } catch (error) {
        console.log(error)
        return res.status(401).json({ message: "Unautherized user!" })
    }
}