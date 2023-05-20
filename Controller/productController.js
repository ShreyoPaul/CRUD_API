import { productSchema } from "../DB/Models/productSchema.js"

export const getAllproduct = (req, res) => {

    const getAllProduct = async () => {
        try {
            const result = await productSchema.find()
            console.log(result)
            if (result) return res.status(201).json({ data: result })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "ERROR occured. Server is not working!" })
        }
    }

    getAllProduct()

}

export const getProduct = (req, res) => {

    const getAllProduct = async () => {
        try {
            const { id } = req.params
            const result = await productSchema.find({ _id: id })
            console.log(result)
            if (result) return res.status(201).json({ data: result })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "ERROR occured. Server is not working!" })
        }
    }

    getAllProduct()

}

export const createProduct = (req, res) => {

    const productInfo = new productSchema({
        name: req.body.name,
        price: req.body.price,
        pic: req.body.pic,
        desc: req.body.desc
    })

    const insertProduct = async (productInfo) => {
        try {
            const result = await productInfo.save()
            console.log(result)
            if (result) return res.status(201).json({ message: "Product is added!" })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "ERROR occured. Server is not working!" })
        }
    }

    insertProduct(productInfo)

}

export const updateProduct = (req, res) => {

    const { id } = req.params
    const productInfo = {
        name: req.body.name,
        price: req.body.price,
        pic: req.body.pic,
        desc: req.body.desc
    }
    const updateProductinfo = async (_id, productInfo) => {

        try {
            console.log(productInfo.name)
            const result = await productSchema.updateOne({ _id }, {
                $set: {
                    name: productInfo.name,
                    price: productInfo.price,
                    pic: productInfo.pic,
                    desc: productInfo.desc,
                }
            })

            console.log(result)
            if (result) return res.status(201).json({ message: "Product details get updated!" })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "ERROR occured. Server is not working!" })
        }
    }

    updateProductinfo(id, productInfo)

}

export const deleteProduct = (req, res) => {

    const { id } = req.params
    const removeProduct = async (_id) => {

        try {
            const result = await productSchema.deleteOne({ _id })

            console.log(result)
            if (result) return res.status(201).json({ message: "Product is successfully deleted!" })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "ERROR occured. Server is not working!" })
        }
    }

    removeProduct(id)

}