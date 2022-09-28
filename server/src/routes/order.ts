import express from 'express'
import { addOrder, deleteOrder, getAllOrder, getMonthlyIncome, getUserOrder, updateOrder } from '../controllers/orderController'
import { veriftTokenandAdmin, verifyToken, verifyTokenAndAuthorixation } from '../services/verifyToken'

const router = express.Router()

router.post('/',verifyToken,addOrder)

router.put('/:id',veriftTokenandAdmin,updateOrder)

router.delete('/:id',veriftTokenandAdmin,deleteOrder)

//get user order
router.get('/find/:userid',verifyTokenAndAuthorixation,getUserOrder)

router.get('/',veriftTokenandAdmin,getAllOrder)

// get monthly income
router.get('/income',veriftTokenandAdmin,getMonthlyIncome)
export default router