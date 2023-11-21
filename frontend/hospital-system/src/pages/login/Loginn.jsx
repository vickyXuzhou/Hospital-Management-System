import React, { useState } from 'react'
import "./login.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import React from 'react'

const Loginn = () => {
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const navigate = useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:3001/login",{email,password})
    .then(res=>{
      
      if(res.data==="Success"){
        console.log(res)
        navigate("/")
        toast.success("Login Successful",{
          position: toast.POSITION.TOP_RIGHT,
        })
      }
      
    })
    .catch(err=>{
      toast.success(err)
    })
  }
  return (
    <div>

      <div className='container'>
        <form onSubmit={handleSubmit}>
        <h2 className="formH2">Login</h2>
          <div className="formDiv">
        <label htmlFor="email"><strong>Email</strong></label>  
        <input type="text"
        placeholder='Enter Email'
        onChange={(e)=>setEmail(e.target.value)}
        name='email' 
        className='name'/>
        <label htmlFor="password"><strong>Password</strong></label>  
        <input type="password"
        placeholder='Enter Password'
        onChange={(e)=>setPassword(e.target.value)}
        name='password' 
        className='password'/>

      <button className="submit" type="submit">login</button>
      
        </div>
        
        </form>
        
      
      </div>
    </div>
  )
}

export default Loginn