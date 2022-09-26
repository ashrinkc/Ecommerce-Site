import React from 'react'
import Announcement from '../components/Announcement/Announcement'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import './pages.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const Cart = () => {
  return (
    <div className='cartContainer'>
        <Announcement/>
        <Navbar/>
        <div className="cartWrapper">
            <h1>YOUR BAG</h1>
            <div className="cartTop">
                <button className='sbtn'>CONTINUE SHOPPING</button>
                <div className="topText">
                    <span>SHOPPING BAG(2)</span>
                    <span>YOUR WISHLIST(0)</span>
                </div>
                <button className='cbtn'>CHECKOUT NOW</button>
            </div>
            <div className="cartBottom">
                <div className="cartInfo">
                    <div className="cartProduct">
                        <div className="cartProDetail">
                            <img src="https://static.nike.com/a/images/t_default/45289cb4-2ae6-4165-be6c-88237d42c819/zoomx-streakfly-road-racing-shoes-Dn1Lw8.png"/>
                            <div className="details">
                                <p><b>Product:</b> JESSIE THUNDER SHOES</p>
                                 <p><b>ID:</b> 93819202</p>
                                 <div className='cartColor'/>
                                  <p><b>Size:</b> 37.5</p>
                            </div>
                        </div>
                        <div className="cartPriceDetail">
                            <div className="priceamttCont">
                                <AddIcon/>
                                <span>2</span>
                                <RemoveIcon/>
                            </div>
                            <p>$30</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="cartProduct">
                        <div className="cartProDetail">
                            <img src="https://static.nike.com/a/images/t_default/45289cb4-2ae6-4165-be6c-88237d42c819/zoomx-streakfly-road-racing-shoes-Dn1Lw8.png"/>
                            <div className="details">
                                <p><b>Product:</b> JESSIE THUNDER SHOES</p>
                                 <p><b>ID:</b> 93819202</p>
                                 <div className='cartColor'/>
                                  <p><b>Size:</b> 37.5</p>
                            </div>
                        </div>
                        
                        <div className="cartPriceDetail">
                            <div className="priceamttCont">
                                <AddIcon/>
                                <span>2</span>
                                <RemoveIcon/>
                            </div>
                            <p>$30</p>
                        </div>
                    </div>
                </div>
                <div className="cartSummary">
                    <h1>ORDER SUMMARYS</h1>
                    <div className="summaryItem">
                        <p>SubTotal</p>
                        <p>$ 80</p>
                    </div>
                    <div className="summaryItem">
                        <p>Estimated Shipping</p>
                        <p>$ 5.90</p>
                    </div>
                    <div className="summaryItem">
                        <p>Shipping Discount</p>
                        <p>$ -5.90</p>
                    </div>
                    <div className="summaryItem">
                        <p><b>Total</b></p>
                        <p>$ 80</p>
                    </div>
                    <button>CHECKOUT NOW</button>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Cart