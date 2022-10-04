import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { login } from '../redux/apiCalls'
import './pages.css'
const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const {isFetching,error} = useSelector((state:any)=>state.user)
  const dispatch = useDispatch()
  const handleClick = (e:any) =>{
    e.preventDefault()
    login(dispatch,{email,password})
  }
  return (
    <div className='registerContainer'>
        <div className="registerWrapper">
            <h1>SIGN IN</h1>
            <form>
                <input placeholder='username' onChange={(e)=>setEmail(e.target.value)}/>
                <input placeholder='password' type="password" onChange={(e)=>setPassword(e.target.value)}/>
                <a>DO NOT REMEMBER THE PASSWORD?</a>
                <a>CREATE A NEW ACCOUNT</a>
                <button className='logBtn' onClick={handleClick} disabled={isFetching}>LOG IN</button>
                {error && <div className='wrong'>Something went wrong....</div>}
            </form>
        </div>
    </div>
  )
}

export default Login