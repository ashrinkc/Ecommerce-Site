import React from 'react'
import Announcement from '../components/Announcement/Announcement'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Newsletter from '../components/Newsletter/Newsletter'
import Product from '../components/Product/Product'
import './pages.css'
const ProductList:React.FC = () => {
  return (
    <div className='prListContainer'>
        <Announcement/>
        <Navbar/>
        <h1>Dresses</h1>
        <div className='filterContainer'>
            <div className='filter'>
                <span>Filter Products:</span>
                <select>
                    <option disabled selected>Color</option>
                    <option>White</option>
                    <option>Black</option>
                    <option>Red</option>
                    <option>Blue</option>
                    <option>Yellow</option>
                    <option>Green</option>
                </select>
                 <select>
                    <option disabled selected>Size</option>
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                </select>
            </div>
            <div className='filter'>
                <span>Sort Products:</span>
                <select>
                    <option selected> Newest </option>
                    <option>Price (asc)</option>
                    <option>Price (desc)</option>
                </select>
            </div>
        </div>
        <Product/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default ProductList