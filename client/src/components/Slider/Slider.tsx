import React from 'react'
import './slider.css'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
const Slider:React.FC = () => {
  return (
    <div className='sliderContainer'>
        {/* <div className='Arrow'>
            <ArrowLeftOutlinedIcon/>
        </div> */}
        <div className='sliderWrapper'>
            <div className='slide'>
            <div className='ImgContainer'>
                <img className='imgSli' src="https://broncolor.swiss/assets/img/Learn-articles/How-to-photos/How-to-Photograph-White-Clothes-on-White-Background/_contentWithShareBar33/White-on-white-portrait-photography-with-para.jpg"/>
            </div>
            <div className='InfoContainer'>
                <h1>WINTER SALE</h1>
                <p>DONT COMPRAMISE ON STYLE GET 30% OFF FOR NEW ARRIVALS</p>
                <button>SHOP NOW</button>
            </div>
            </div>
        </div>
        {/* <div className='Arrow'>
            <ArrowRightOutlinedIcon/>
        </div> */}
       
    </div>
  )
}

export default Slider