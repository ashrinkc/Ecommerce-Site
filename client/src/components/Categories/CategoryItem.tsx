import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './categories.css'
interface Prop{
    id:number,
    img:string,
    title:string,
    cat:string
}

const CategoryItem:React.FC<Prop> = ({id,img,title,cat}:Prop) => {
  const navigate = useNavigate()
  return (
    
    <div className='indiCatContainer'>
      {/* <Link to={`/products/${cat}`}> */}
        <img src={img}/>
        <div className='info'>
            <h1>{title}</h1>
            <button onClick={()=>navigate(`/products/${cat}`)}>SHOP NOW</button>
        </div>
        {/* </Link> */}
    </div>
    
  )
}

export default CategoryItem