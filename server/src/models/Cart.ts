import mongoose, { Schema } from 'mongoose'

interface Products{
    productId:string,
    quantity:number
}

interface ICart{
    userId:string,
    products:Products[]
}

const CartSchema = new Schema({
    userId:{
        type:String,
        required:true
    },
    products:[{
        productId:{
            type:String
        },
        quantity:{
            type:Number,
            default:1
        }
    }]
},{timestamps:true})

const CartModel = mongoose.model<ICart>("Cart",CartSchema)

export default CartModel