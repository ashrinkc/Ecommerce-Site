import React,{useState,useEffect} from 'react'
import Announcement from '../components/Announcement/Announcement'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Newsletter from '../components/Newsletter/Newsletter'
import './pages.css'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'

const Product:React.FC = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const [product,setProduct] = useState({})
    const [quantity,setQuantity] = useState<number>(1)
    const [color,setColor] = useState("")
    const [size,setSize] = useState("")
    const dispatch = useDispatch()
    useEffect(()=>{
        const getProduct = async() =>{
            try{
                const res = await axios.get(`http://localhost:5000/api/product/find/${id}`)
                setProduct(res.data)
            }catch(e:any){

            }
        }
        getProduct()
    },[id])

    const handleClick = (val:string) =>{
        if(val==="dec"){
            quantity > 1 && setQuantity(quantity - 1)
        }else{
            setQuantity(quantity + 1)
        }
    }

    const handleSub = () =>{
       dispatch( addProduct({...product,quantity,color,size}))
    }
  return (
    <div className='productHcontainer'>
        <Announcement/>
        <Navbar/>
        <div className='productHwrapper'>
            <div className="pImgCont">
                {/* @ts-ignore */}
                <img src={product.img}/>
            </div>
            <div className="pInfoCont">
                {/* @ts-ignore */}
                <h1>{product.title}</h1>
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
                        {/* <div className='filterColorR'/>
                        <div className='filterColorBl'/> */}
                        {/* @ts-ignore */}
                        {product.color ? product.color.map(c=>(
                            <div className={c}  onClick={()=>{
                                setColor(c)
                            }} />
                        )) : <div className='filterColorR'/>}
                        
                    </div>
                    <div className="pFilter">
                        <h2>Size</h2>
                         <select onChange={(e)=>setSize(e.target.value)}>
                            {/* @ts-ignore */}
                            {product.size ? product.size.map(c=>(
                             <option>{c}</option>
                        )) : ""}
                           
                            {/* <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option> */}
                </select>
                    </div>
                </div>
                <div className="addContainer">
                    <div className="amtContainer">
                        <RemoveIcon onClick={()=>{
                            handleClick("dec")
                        }}/>
                        <span>{quantity}</span>
                        <AddIcon onClick={()=>{
                            handleClick("inc")
                        }}/>
                    </div>
                    <button onClick={handleSub}>ADD TO CART</button>
                </div>
            </div>
        </div>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Product