import express from 'express'
import { login, register } from '../controllers/authController'
const router = express.Router()

//REGSITER
router.post("/register",register)

//LOGIN
router.post("/login",login)

export default router