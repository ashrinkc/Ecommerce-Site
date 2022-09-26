import React from 'react'
import './pages.css'
const Login = () => {
  return (
    <div className='registerContainer'>
        <div className="registerWrapper">
            <h1>SIGN IN</h1>
            <form>
                <input placeholder='username'/>
                <input placeholder='password'/>
                <a>DO NOT REMEMBER THE PASSWORD?</a>
                <a>CREATE A NEW ACCOUNT</a>
                <button>LOG IN</button>
            </form>
        </div>
    </div>
  )
}

export default Login