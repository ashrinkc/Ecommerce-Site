import React from 'react'
import './categories.css'
import { categories } from '../../data'
import CategoryItem from './CategoryItem'
const Categories:React.FC = () => {
  return (
    <div className='catContainer'>
      {
        categories.map(item=>(
          <CategoryItem key={item.id} id={item.id} img={item.img} title={item.title}/>
        ))
      }
    </div>
  )
}

export default Categories