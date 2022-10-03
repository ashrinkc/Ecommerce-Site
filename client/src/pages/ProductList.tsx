import { ReactJSXElementChildrenAttribute } from '@emotion/react/types/jsx-namespace'
import React,{useState} from 'react'
import { useLocation } from 'react-router-dom'
import Announcement from '../components/Announcement/Announcement'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Newsletter from '../components/Newsletter/Newsletter'
import Product from '../components/Product/Product'
import './pages.css'

const ProductList:React.FC = () => {
    const location = useLocation()
    const cat = location.pathname.split('/')[2]
    const [filter,setFilter] = useState<object>({})
    const [sort,setSort] = useState("newest")
    const handleFilters = (e:React.FormEvent) =>{
        //@ts-ignore
        const value : string = e.target.value
        setFilter({
            ...filter,
            //@ts-ignore
            [e.target.name] : value
        })
    }
    
  return (
    <div className='prListContainer'>
        <Announcement/>
        <Navbar/>
        <h1>{cat}</h1>
        <div className='filterContainer'>
            <div className='filter'>
                <span>Filter Products:</span>
                <select name="color" onChange={handleFilters}>
                    <option disabled selected>Color</option>
                    <option>white</option>
                    <option>black</option>
                    <option>red</option>
                    <option>blue</option>
                    <option>yellow</option>
                    <option>green</option>
                </select>
                 <select name="size" onChange={handleFilters}>
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
                <select onChange={(e)=>setSort(e.target.value)}>
                    <option value="newest"> Newest </option>
                    <option value="asc">Price (asc)</option>
                    <option value="dsc">Price (desc)</option>
                </select>
            </div>
        </div>
        <Product cat={cat} filter={filter} sort={sort}/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default ProductList