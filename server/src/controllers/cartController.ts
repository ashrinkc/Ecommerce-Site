import { Request, Response } from "express";
import Cart from "../models/Cart";


export const addCart = async(req:Request,res:Response) =>{
    const newCart = new Cart(req.body)
    try{ 
        const saveCart = await newCart.save()
        res.status(200).json(saveCart)
    }catch(err){
        res.status(500).json(err)
    }
}

export const updateCart = async(req:Request,res:Response) => {
    try{ 
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            { new : true}
        )
        res.status(200).json(updatedCart)
    }catch(err){
        res.status(500).json(err)
    }
}

export const deleteCart = async(req:Request,res:Response) =>{
    try{
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart has been deleted...")
    }catch(err){
        res.status(500).json(err)
    }
}

export const getUserCart = async(req:Request,res:Response) =>{
    try{
        const cart = await Cart.findOne({userId:req.params.userid})
        res.status(200).json(cart)
    }catch(err){
        res.status(500).json(err)
    }
}

export const getAllUserCart = async(req:Request,res:Response) =>{
    try{
        const cart = await Cart.find()
        res.status(200).json(cart)
    }catch(err){
        res.status(500).json(err)
    }
}