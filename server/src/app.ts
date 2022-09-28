import express, { Application } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import './services/connection'
import authRoute from './routes/auth'
import userRoute from './routes/user'
import productRoute from './routes/product'
import cartRoute from './routes/cart'
import orderRoute from './routes/order'
dotenv.config()

const app:Application = express()

app.use(express.json())
app.use('/api/auth',authRoute)
app.use('/api/user',userRoute)
app.use('/api/product',productRoute)
app.use('/api/cart',cartRoute)
app.use('/api/orders',orderRoute)
app.listen(process.env.PORT || 5000,()=>{
    console.log(`Running successfully in port ${process.env.PORT}`)
})