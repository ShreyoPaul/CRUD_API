import mongoose from "mongoose"
import { productSchema } from "../DB/Models/productSchema.js"

let products = [
    {
        name: "Camera",
        price: 20000,
        pic: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F81WtQ64-SOL._SX355_.jpg&tbnid=yXuPpEykVIlf8M&vet=12ahUKEwiSmsTOn-3-AhUrDLcAHWMDDA0QMygCegUIARDpAQ..i&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FNikon-D850-45-7MP-Digital-24-120mm%2Fdp%2FB07872WZQ7&docid=zlMEwg9UX-2bKM&w=355&h=342&q=camera&ved=2ahUKEwiSmsTOn-3-AhUrDLcAHWMDDA0QMygCegUIARDpAQ",
        desc: "Become an Awesome developer at most Afordable Price Learn the essential skills for modern fullstack app development while having tons of fun in the process."
    }
]

export const getAllproduct =  (req,res)=> {

    const getAllProduct = async ()=>{
        try{
            const result = await productSchema.find()
            console.log(result)
            if(result) res.send(result)
        }catch(error){
            console.log(error)
        }
    }

    getAllProduct()
    
}

export const createProduct = (req,res)=> {

    const productInfo  = new productSchema({
        name:req.body.name,
        price : req.body.price,
        pic: req.body.pic,
        desc: req.body.desc
    })

    const insertProduct = async (productInfo)=>{
        try{
            const result = await productInfo.save()
            console.log(result)
            if(result) res.send({message: "Product is added!"})
        }catch(error){
            console.log(error)
            res.send({message: "ERROR occured!"})
        }
    }

    insertProduct(productInfo)
    
}

export const updateProduct =  (req,res)=> {

    const {id} = req.params
    const productInfo  = {
        name:req.body.name,
        price : req.body.price,
        pic: req.body.pic,
        desc: req.body.desc
    }
    const removeProduct = async (_id,productInfo)=>{
        
        try{
            console.log(productInfo.name)
            const result = await productSchema.updateMany({_id}, {
                $set : {
                    name: productInfo.name,
                    price: productInfo.price,
                    pic: productInfo.pic,
                    desc: productInfo.desc,
                }
            })

            console.log(result)
            if(result) res.send({message: "Product details updated!"})
        }catch(error){
            console.log(error)
        }
    }

    removeProduct(id,productInfo)
    
}

export const deleteProduct =  (req,res)=> {

    const {id} = req.params
    const removeProduct = async (_id)=>{
        
        try{
            const result = await productSchema.deleteOne({_id})

            console.log(result)
            if(result) res.send(result)
        }catch(error){
            console.log(error)
        }
    }

    removeProduct(id)
    
}