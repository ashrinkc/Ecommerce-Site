import React from 'react'
import './navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Navbar:React.FC = () => {
    const quantity = useSelector((state:any)=>state.cart.quantity)
  return (
    <div className='container'>
        <div className='wrapper'>
            <div className='left'>
                <span className='language'>EN</span>
                <span className='searchContainer'><input className='input'/> <SearchIcon style={{color:"gray"}}/></span>
            </div>
            <div className='center'><h1>KC.STORE</h1></div>
            <div className='right'>
                <div className='menuItem'>REGISTER</div>
                <div className='menuItem'>SIGN IN</div>
                <Link to="/cart">
                <div className='menuItem'>
                    <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartOutlinedIcon/>
                    </Badge>
                </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar