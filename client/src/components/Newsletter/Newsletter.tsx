import React from 'react'
import './newsletter.css'
import SendIcon from '@mui/icons-material/Send';
const Newsletter = () => {
  return (
    <div className='newsContainer'>
        <h1>Newsletter</h1>
        <p>Get timely updates from your favorite products.</p>
        <div className='newsInput'>
            <input placeholder='Your Email'/>
            <button>
                <SendIcon/>
            </button>
        </div>
    </div>
  )
}

export default Newsletter