import React,{useState,useEffect} from 'react'
import Announcement from '../components/Announcement/Announcement'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import './pages.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Cart:React.FC = () => {
    const KEY = `${process.env.REACT_APP_STRIPE}`
    const cart = useSelector((state:any)=>state.cart)
    const [stripeToken,setStripeToken] = useState(null)
    const navigate = useNavigate()
    const onToken = (token:any) =>{
        setStripeToken(token)    
    }

    useEffect(()=>{
        const makePayment = async() =>{
            try{
                const res = await axios.post('http://localhost:5000/api/payment',{
                    tokenId:stripeToken,
                    amount: cart.total * 100,
                })
                navigate('/success')
            }catch(e:any){

            }
        }
        stripeToken && makePayment()
    },[stripeToken, cart.total, navigate])
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
                    {cart.products.map((product:any)=>
                    (
                    <><div className="cartProduct">
                            <div className="cartProDetail">
                                <img src={product.img} />
                                <div className="details">
                                    <p><b>Product:</b>{product.title}</p>
                                    <p><b>ID:</b> {product._id}</p>
                                    <div className={product.color} />
                                    <p><b>Size:</b>{product.size}</p>
                                </div>
                            </div>
                            <div className="cartPriceDetail">
                                <div className="priceamttCont">
                                    <AddIcon />
                                    <span>{product.quantity}</span>
                                    <RemoveIcon />
                                </div>
                                <p>${product.price * product.quantity}</p>
                            </div>
                        </div><hr /></>))}
                    
                </div>
                <div className="cartSummary">
                    <h1>ORDER SUMMARYS</h1>
                    <div className="summaryItem">
                        <p>SubTotal</p>
                        <p>$ {cart.total}</p>
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
                        <p>$ {cart.total}</p>
                    </div>
                    {/* @ts-ignore  */}
                    <StripeCheckout 
                    name="Ashrin Shop"
                    image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj52aMCerIfaCDDP_LqjgH0emE-OmmDYMmXg&usqp=CAU'
                    billingAddress
                    shippingAddress
                    description={`Your total is $${cart.total}`}
                    amount={cart.total * 100}
                    token={onToken}
                    stripeKey={KEY}
                    >
                    <button className='strbtn'>CHECKOUT NOW</button>
                    </StripeCheckout>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Cart