import express from 'express'
import { createProduct, getAllproduct, deleteProduct, updateProduct } from '../Controller/productController.js'


const router = express.Router()

router.get("/", getAllproduct)
router.post("/", createProduct)
router.patch("/:id", updateProduct)
router.delete("/:id", deleteProduct)

export default router