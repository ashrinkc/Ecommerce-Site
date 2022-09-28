import express from 'express'
import { addCart, deleteCart, getAllUserCart, getUserCart, updateCart } from '../controllers/cartController'
import { veriftTokenandAdmin, verifyToken, verifyTokenAndAuthorixation } from '../services/verifyToken'

const router = express.Router()

router.post("/",verifyToken,addCart)

router.put("/:id",verifyTokenAndAuthorixation,updateCart)

router.delete("/:id",verifyTokenAndAuthorixation,deleteCart)

//get user cart
router.get("/find/:userid",verifyTokenAndAuthorixation,getUserCart)

//get All
router.get("/",veriftTokenandAdmin,getAllUserCart)
export default router