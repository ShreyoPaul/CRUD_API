import express from 'express'
import { createProduct, getAllproduct, deleteProduct, updateProduct, getProduct } from '../Controller/productController.js'
import { auth } from '../Middleware/auth.js'


const router = express.Router()

router.get("/", auth, getAllproduct)
router.get("/:id" , auth, getProduct)
router.post("/", auth, createProduct)
router.patch("/:id", auth, updateProduct)
router.delete("/:id", auth, deleteProduct)

export default router