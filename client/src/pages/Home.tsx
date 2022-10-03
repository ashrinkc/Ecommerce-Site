import React from 'react'
import Announcement from '../components/Announcement/Announcement'
import Categories from '../components/Categories/Categories'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Newsletter from '../components/Newsletter/Newsletter'
import Product from '../components/Product/Product'
import Slider from '../components/Slider/Slider'

const Home:React.FC = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        {/* @ts-ignore */}
        <Product/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home