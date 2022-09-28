import { Request, Response } from "express";
import { resourceLimits } from "worker_threads";
import User from "../models/User";
import { IUser } from "../services/verifyToken";


export const updateUser = async(req:Request,res:Response) =>{
    //@ts-ignore
    // if(req.user.password){
    //     req.body.pass
    // }

    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{
            $set: req.body
        },{new:true})
        res.status(200).json(updatedUser)
    }catch(err){
        res.status(500).json(err)
    }
}

export const deleteUser = async(req:Request,res:Response)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted")
    }catch(err){
        res.status(500).json(err)
    }
}

export const getUser = async(req:Request,res:Response)=>{
    try{
        const userI = await User.findById(req.params.id)
        //@ts-ignore
        const {password,...others} = userI._doc
        res.status(200).json(others)
    }catch(err){
        res.status(500).json(err)
    }
}

export const getAllUser = async(req:Request,res:Response)=>{
    const query = req.query.new
    try{
        const userI = query ? await User.find().sort({_id:-1}).limit(5) : await User.find()
        //@ts-ignore
        
        res.status(200).json(userI)
    }catch(err){
        res.status(500).json(err)
    }
}

export const getUserStats = async(req:Request,res:Response)=>{
    const date = new Date()
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))
    try{
        const data = User.aggregate([
            { $match: { createdAt: {$gte:lastYear}}},
            {
                $project:{
                    month: {$month: "$createdAt"},
                },
            },
            {
                $group:{
                    _id:"$month",
                    total: {$sum:1},
                },
            },
        ]);
        res.status(200).json(data)
    }catch(err){
        res.status(500).json(err)
    }
}