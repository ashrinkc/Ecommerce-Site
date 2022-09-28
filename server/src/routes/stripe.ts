import express, { Request, Response } from 'express'
import Stripe from 'stripe'

const router = express.Router()

const secret = process.env.STRIPE_KEY
// @ts-ignore
const stripe = new Stripe(secret)
router.post('/payment',(req:Request,res:Response)=>{
    stripe.charges.create({
        source:req.body.tokenId,
        amount:req.body.amount,
        currency:"usd"
        //@ts-ignore
    },(stripeErr:any,stripeRes:any)=>{
        if(stripeErr){
            res.status(500).json(stripeErr)
        }else{
            res.status(200).json(stripeRes)
        }
    })
})

export default router