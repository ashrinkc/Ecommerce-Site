import { Request, Response } from "express"
import Order from "../models/Order"


export const addOrder = async(req:Request,res:Response) =>{
    const newOrder = new Order(req.body)
    try{ 
        const saveOrder = await newOrder.save()
        res.status(200).json(saveOrder)
    }catch(err){
        res.status(500).json(err)
    }
}


export const updateOrder = async(req:Request,res:Response) => {
    try{ 
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            { new : true}
        )
        res.status(200).json(updatedOrder)
    }catch(err){
        res.status(500).json(err)
    }
}

export const deleteOrder = async(req:Request,res:Response) =>{
    try{
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order has been deleted...")
    }catch(err){
        res.status(500).json(err)
    }
}

export const getUserOrder = async(req:Request,res:Response) =>{
    try{
        const orders = await Order.find({userId:req.params.userid})
        res.status(200).json(orders)
    }catch(err){
        res.status(500).json(err)
    }
}

export const getAllOrder = async(req:Request,res:Response) =>{
    try{
        const order = await Order.find()
        res.status(200).json(order)
    }catch(err){
        res.status(500).json(err)
    }
}

export const getMonthlyIncome = async(req:Request,res:Response) =>{
    const date = new Date()
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth()-1))
    try{
        const income = Order.aggregate([
            {$match:{createdAt:{$gte : previousMonth}}},
            {
                $project:{
                    month: { $month : "$createdAt"},
                    sales: "$amount",
                },
            },
            {
                $group:{
                    _id: "$month",
                    total: { $sum: "$sales"}
                }
            }
        ]);
        res.status(200).json(income)
    }catch(err){
        res.status(500).json(err)
    }
}