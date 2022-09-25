import React from 'react'
import './product.css'
import { popularProducts } from '../../data'
import SingleProduct from './SingleProduct'
const Product = () => {
  return (
    <div className='productContainer'>
        {
            popularProducts.map(item=>(
                <SingleProduct id={item.id} img={item.img} key={item.id}/>
            ))
        }
    </div>
  )
}

export default Product