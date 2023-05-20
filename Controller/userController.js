import dotenv from 'dotenv'
dotenv.config({ path: './.env' })


import { userSchema } from "../DB/Models/userSchema.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
    const { name, email, password ,role, user_id } = req.body
    console.log(req)
    try {
        const existingUserCheck = await userSchema.findOne({ email })
        if (existingUserCheck) {
            console.log(existingUserCheck)
            return res.status(400).json({ message: "User already exist!" })
        }

        const hashPassword = await bcrypt.hash(password, 10)

        const createdUser = new userSchema({
            name,
            email,
            password: hashPassword,
            role,
            user_id
        })

        const signUpUser = async (createdUser) => {

            const result = await createdUser.save()
            const token = jwt.sign({ email, id: result._id }, process.env.JWT_SECRET_KEY)
            res.status(201).json({ message: "Sign up successful!", token, user: result })
        }

        signUpUser(createdUser)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "ERROR occured in Server!" })
    }
}

export const signIn = async (req, res) => {
    const { email, password } = req.body
    try {
        const existingUserCheck = await userSchema.findOne({ email })
        if (!existingUserCheck) {
            return res.status(404).json({ message: "User not found!" })
        }

        const matchPassword = await bcrypt.compare(password, existingUserCheck.password)

        if (!matchPassword) {
            return res.status(400).json({ message: "Invalid credential!" })
        }

        const token = jwt.sign({ email, id: existingUserCheck._id }, process.env.JWT_SECRET_KEY)
        res.status(201).json({ message: "Sign in successful!", token, user: existingUserCheck })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "ERROR occured in Server!" })
    }

}