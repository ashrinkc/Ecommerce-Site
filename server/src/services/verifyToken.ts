import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export interface IUser extends Request{
    user:any
}

export const verifyToken = (req:Request,res:Response,next:NextFunction) =>{
    const {authorization} = req.headers
    if(authorization){
        // const token = authorization.replace("Bearer ","")
        const token = authorization.split(" ")[1]
        jwt.verify(token,`${process.env.JWT_SEC}`,(err,decoded)=>{
            if(err){
                res.status(403).json("Token is not valid")
            }
            //@ts-ignore
              req.user = decoded;
              next();
        })
    }else{
        res.status(401).json("You are not authenticated")
    }
}

export const verifyTokenAndAuthorixation = (req:Request,res:Response,next:NextFunction) =>{
    verifyToken(req,res,()=>{
        //@ts-ignore
        if(req.user.id === req.params.id || req.user.isAdmin ){
            next()
        }else{
            res.status(403).json("you are not allowed to do that")
        }
    })
}

export const veriftTokenandAdmin = (req:Request,res:Response,next:NextFunction)=>{
    verifyToken(req,res,()=>{
        //@ts-ignore
        if(req.user.isAdmin){
            next()
        }else{
            res.status(403).json("you are not admin")
        }
    })
}