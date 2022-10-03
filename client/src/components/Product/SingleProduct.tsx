import React from 'react'
import './product.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
interface Prop{
    id:number,
    img:string
}

const SingleProduct:React.FC<Prop> = ({id,img}:Prop) => {
  return (
    <div className='sinProductContainer'>
        <img src={img}/>
        <div className='proInfo'>
            <div className='proIcon'>
                <ShoppingCartOutlinedIcon/>
            </div>
            <div className='proIcon'>
                <Link to={`/product/${id}`}>
                    <SearchOutlinedIcon/>
                </Link>
            </div>
            <div className='proIcon'>
                <FavoriteBorderOutlinedIcon/>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct