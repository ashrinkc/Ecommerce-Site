import mongoose, { Schema } from 'mongoose'

interface IProduct{
    title:string,
    desc:string,
    img:string,
    categories:string[],
    size:string[],
    color:string[],
    price:number
}

const ProductSchema = new Schema(
    {
        title:{
            type:String,
            required:true,
            unique:true
        },
        desc:{
            type:String,
            required:true
        },
        img:{
            type:String,
            required:true
        },
        categories:{
            type:Array
        },
        size:{
            type:Array
        },
        color:{
            type:Array
        },
        price:{
            type:Number,
            reuired:true
        },
        inStock:{
            type:Boolean,
            default:true
        }
    },
    {
        timestamps:true
    }
)

const ProductModel = mongoose.model<IProduct>("Product",ProductSchema)

export default ProductModel