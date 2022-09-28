import { timeStamp } from 'console'
import mongoose, { Schema } from 'mongoose'

interface IUser{
    username:string,
    email:string,
    password:string,
    isAdmin:boolean
}
const userSchema = new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true,
            unique:true
        },
        isAdmin:{
            type:Boolean,
            default:false
        }
    }, {timestamps:true}
)

const userModel = mongoose.model<IUser>("User",userSchema)

export default userModel