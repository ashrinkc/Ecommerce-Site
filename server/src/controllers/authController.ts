import { Response,Request } from "express";
import User from "../models/User";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
export const register = async(req:Request,res:Response) =>{
    try{
        const newUser = new User(req.body)
        const salt = await bcrypt.genSalt(12)
        newUser.password = await bcrypt.hash(newUser.password,salt)
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    }catch(err){
        res.status(500).json(err)
    }
    
}

export const login = async(req:Request,res:Response) =>{
    try{
        
        const {email,password} = req.body
        const userData = await User.findOne({email});
        const validPassword = await bcrypt.compare(password, userData!.password)
        if(!validPassword){
            res.status(401).json("Wrong credentials")
        }else{
            if(userData?.password){
                const accessToken = jwt.sign(
                {
                    id:userData._id, 
                    isAdmin:userData.isAdmin,
                },
                `${process.env.JWT_SEC}`,
                {expiresIn:"3d"}
                ) 
                const { password , ...others } = userData
                res.status(200).json({userData, accessToken})
            }
        }

    }catch(err){
        res.status(500).json(err)
    }
}