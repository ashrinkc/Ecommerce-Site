import { Request, Response } from "express";
import Product from "../models/Product";

export const addProduct = async(req:Request,res:Response) =>{
    const newProduct = new Product(req.body)
    try{
        const saveProduct = await newProduct.save()
        res.status(200).json(saveProduct)
    }catch(err){
        res.status(500).json(err)
    }
}

export const updateProduct = async(req:Request,res:Response) => {
    try{
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            { new : true}
        )
        res.status(200).json(updatedProduct)
    }catch(err){
        res.status(500).json(err)
    }
}

export const deleteProduct = async(req:Request,res:Response) =>{
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted...")
    }catch(err){
        res.status(500).json(err)
    }
}

export const getProduct = async(req:Request,res:Response) =>{
    try{
        const product = await Product.findById(req.params.id)
        //@ts-ignore
        // const {password,...others} = product._doc;
        res.status(200).json(product)
    }catch(err){
        res.status(500).json(err)
    }
}

export const getAllProduct = async(req:Request,res:Response) => {
    const qNew = req.query.new
    const qCategory = req.query.category 

    try{
        let products;
        if(qNew){
            products = await Product.find().sort({createdAt:-1}).limit(5)
        } else if(qCategory){
            products = await Product.find({
                categories:{
                    $in: [qCategory],
                },
            });
        }else{
            products = await Product.find()
        }
        res.status(200).json(products)
    }catch(err){
        res.status(500).json(err)
    }
}