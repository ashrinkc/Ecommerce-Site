import React from 'react'
import Announcement from '../components/Announcement/Announcement'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Newsletter from '../components/Newsletter/Newsletter'
import './pages.css'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
const Product:React.FC = () => {
  return (
    <div className='productHcontainer'>
        <Announcement/>
        <Navbar/>
        <div className='productHwrapper'>
            <div className="pImgCont">
                <img src="https://media.nastygal.com/i/nastygal/bgg01052_black_xl/womens-black-zip-detail-belted-wide-leg-denim-jumpsuit/?w=1070&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit"/>
            </div>
            <div className="pInfoCont">
                <h1>Denim Jumpsuit</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                       It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of
                         Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <span>$20</span>
                <div className="pFilterContainer">
                    <div className="pFilter">
                        <h2>Color</h2>
                        <div className='filterColorR'/>
                        <div className='filterColorBl'/>
                        <div className='filterColorB'/>
                    </div>
                    <div className="pFilter">
                        <h2>Size</h2>
                         <select>
                   
                            <option>XS</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                </select>
                    </div>
                </div>
                <div className="addContainer">
                    <div className="amtContainer">
                        <RemoveIcon/>
                        <span>1</span>
                        <AddIcon/>
                    </div>
                    <button>ADD TO CART</button>
                </div>
            </div>
        </div>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Product