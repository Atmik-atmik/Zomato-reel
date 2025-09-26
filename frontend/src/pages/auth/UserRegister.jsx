import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../../styles/auth.css'
import { useNavigate } from 'react-router-dom'

const UserRegister = () => {
  const navigate = useNavigate()

  const handleSubmit = async (e)=>{ 
    e.preventDefault();

    const name = e.target.name.value;
    const email= e.target.email.value;
    const password= e.target.password.value;
    
    const response = await axios.post("http://localhost:3000/api/auth/user/register",{
      name,
      email,
      password
    },{
      withCredentials:true
    })
    
    console.log(response.data)
    navigate("/")

  }
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Create your account</h2>
        <p className="subtitle">Sign up to start ordering delicious food</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Full name
            <input type="text" name="name" placeholder="Jane Doe" />
          </label>

          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" />
          </label>

          <label>
            Password
            <input type="password" name="password" placeholder="••••••••" />
          </label>

          <button type="submit" className="primary">Create account</button>
        </form>

        <div className="auth-footer">Already have an account? <a href="/user/login">Log in</a></div>
      </div>
    </div>
  )
}

export default UserRegister
