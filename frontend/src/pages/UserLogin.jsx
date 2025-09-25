import React from 'react'
import '../styles/auth.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserLogin = () => {
  const navigate = useNavigate()

  const handleSubmit = async (e)=>{ 
    e.preventDefault();

   
    const email= e.target.email.value;
    const password= e.target.password.value;
    
    const response = await axios.post("http://localhost:3000/api/auth/user/login",{
      
      email,
      password
    },{
      withCredentials:true
    })
    
    console.log(response.data)
    navigate("/")

  }

  return (
    <div className="auth-page" >
      <div className="auth-card">
        <h2>Welcome back</h2>
        <p className="subtitle">Sign in to continue</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" />
          </label>

          <label>
            Password
            <input type="password" name="password" placeholder="••••••••" />
          </label>

          <button type="submit" className="primary">Sign in</button>
        </form>

        <div className="auth-footer">Don't have an account? <a href="/user/register">Create one</a></div>
      </div>
    </div>
  )
}

export default UserLogin
