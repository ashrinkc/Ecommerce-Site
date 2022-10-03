import React,{useState,useEffect} from 'react'
import './product.css'
import { popularProducts } from '../../data'
import SingleProduct from './SingleProduct'
import axios from 'axios'

interface Prop{
  cat:string,
  filter:object,
  sort:string
}

const Product:React.FC<Prop> = ({cat,filter,sort}:Prop) => {
  const [products,setProducts] = useState([])
  const [filteredProducts,setFilteredProducts] = useState([])
  useEffect(()=>{
    const getProducts = async()=>{
      try{
        const res = await axios.get("http://localhost:5000/api/product/allProduct")
        // const res = await axios.get(cat ? `http://localhost:5000/api/product/allProduct?category=${cat}`:`http://localhost:5000/api/product/allProduct`)
        //@ts-ignore
        setProducts(res.data)
        
      }catch(err){

      }
    }
    getProducts()
    
  },[cat])
  
  useEffect(()=>{
    cat && setFilteredProducts(
      products.filter((item)=> Object.entries(filter).every(([key,value])=>
      //@ts-ignore
        item[key].includes(value)
      ))
    )
    
  },[cat,filter,products])
  console.log(filteredProducts)
  useEffect(()=>{
    if(sort==="newest"){
      setFilteredProducts(prev=>
        // @ts-ignore 
        [...prev].sort((a,b)=>a.createdAt - b.createdAt)
      )
    }else if(sort==="asc"){
      setFilteredProducts(prev=>
        
        //@ts-ignore 
        [...prev].sort((a,b)=>a.price - b.price)
      )
    }else{
       setFilteredProducts(prev=>
        
        //@ts-ignore 
        [...prev].sort((a,b)=>b.price - a.price)
      )
    }
  },[sort])
  
  return (
    <div className='productContainer'>
        {
            cat ? filteredProducts.slice(0,8).map(item=>(
              //@ts-ignore
                <SingleProduct id={item._id} img={item.img} key={item.id}/>
            )) :  products.map(item=>(
              //@ts-ignore
                <SingleProduct id={item._id} img={item.img} key={item.id}/>
            ))
        }
    </div>
  )
}

export default Product