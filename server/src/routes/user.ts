import express from 'express'
import { deleteUser, getAllUser, getUser, getUserStats, updateUser } from '../controllers/userController'
import  {veriftTokenandAdmin, verifyToken, verifyTokenAndAuthorixation } from '../services/verifyToken'

const router = express.Router()
 //@ts-ignore
router.put("/:id",verifyTokenAndAuthorixation,updateUser)

router.delete("/:id",verifyTokenAndAuthorixation,deleteUser)

//get indi user
router.get("/find/:id",veriftTokenandAdmin,getUser)

//get all user
router.get("/",veriftTokenandAdmin,getAllUser)

//get user stats
router.get("/stats",veriftTokenandAdmin,getUserStats)

export default router