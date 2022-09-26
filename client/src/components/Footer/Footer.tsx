import React from 'react'
import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MapIcon from '@mui/icons-material/Map';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
const Footer = () => {
  return (
    <div className='footerContainer'>
        <div className='footerleft'>
            <h1>KC.</h1>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder
         text commonly used to demonstrate the visual form of a document or a typeface without relying
          on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
          <div className='socialContainer'>
            <div className="socialIcon face">
                <FacebookIcon/>
            </div>
            <div className="socialIcon insta">
                <InstagramIcon/>
            </div>
            <div className="socialIcon twitter">
                <TwitterIcon/>
            </div>
            <div className="socialIcon linke">
                <PinterestIcon/>
            </div>
          </div>
        </div>
        <div className='footercenter'>
            <h3>Useful Links</h3>
            <ul>
                <li>Home</li>
                <li>Cart</li>
                <li>Men Fashion</li>
                <li>Home</li>
                
            </ul>
          </div> 
          
        <div className='footerright'>
            <h1>Contact</h1>
            <p><MapIcon/>Balaju, Nepal</p>
            <p><LocalPhoneIcon/>+1 234 5692</p>
            <p><MailOutlineIcon/>ash@gmail.com</p>
            <p><PaymentIcon/> <LocalAtmIcon/> <PaymentIcon/> <LocalAtmIcon/></p>
        </div>
    </div>
  )
}

export default Footer