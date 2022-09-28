import mongoose, { Schema } from "mongoose"

interface products{
    productId:string,
    quantity:number
}
interface IOrder{
    userId:string,
    products:products[],
    amount:number,
    address:object,
    status:string
}

const OrderSchema = new Schema({
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
    }],
    amount:{
        type:Number,
        required:true
    },
    address:{
        type:Object,
        required:true
    },
    status:{
        type:String,
        default:"pending"
    }
},{timestamps:true})

const OrderModel = mongoose.model<IOrder>("Order",OrderSchema)

export default OrderModel