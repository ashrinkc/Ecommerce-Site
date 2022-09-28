import mongoose, { Schema } from 'mongoose'

interface IProduct{
    title:string,
    desc:string,
    img:string,
    categories:string[],
    size:string,
    color:string,
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
            type:String
        },
        color:{
            type:String
        },
        price:{
            type:Number,
            reuired:true
        }
    },
    {
        timestamps:true
    }
)

const ProductModel = mongoose.model<IProduct>("Product",ProductSchema)

export default ProductModel