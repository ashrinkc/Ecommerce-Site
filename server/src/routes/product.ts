import express from 'express'
import { addProduct, deleteProduct, getAllProduct, getProduct, updateProduct } from '../controllers/productController'
import { veriftTokenandAdmin } from '../services/verifyToken'

const router = express.Router()

router.post("/",veriftTokenandAdmin,addProduct)

router.put("/:id",veriftTokenandAdmin,updateProduct)

router.delete("/:id",veriftTokenandAdmin,deleteProduct)

//get indi product
router.get("/find/:id",getProduct)

//get all product
router.get("/allProduct",getAllProduct)
export default router