import express from 'express'
import { createProduct, getAllproduct, deleteProduct, updateProduct } from '../Controller/productController.js'
import { auth } from '../Middleware/auth.js'


const router = express.Router()

router.get("/", getAllproduct)
router.post("/", auth, createProduct)
router.patch("/:id", auth, updateProduct)
router.delete("/:id", auth, deleteProduct)

export default router