import React from 'react'
import './categories.css'
interface Prop{
    id:number,
    img:string,
    title:string
}

const CategoryItem:React.FC<Prop> = ({id,img,title}:Prop) => {
  return (
    <div className='indiCatContainer'>
        <img src={img}/>
        <div className='info'>
            <h1>{title}</h1>
            <button>SHOP NOW</button>
        </div>
    </div>
  )
}

export default CategoryItem