import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

mongoose.
connect(`${process.env.DB}`)
.then(()=>{
    console.log("Database connection successfull")
})
.catch(err=>{
    console.log(err)
})

export default mongoose