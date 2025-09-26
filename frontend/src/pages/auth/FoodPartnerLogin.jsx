import React from 'react'
import '../../styles/auth.css'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom' 


const FoodPartnerLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post("http://localhost:3000/api/auth/food-partner/login",{
        email,
        password
      },{withCredentials: true})

      console.log(response.data);
      navigate("/create-food")
    } catch (error) {
      console.error(error.response?.data || error.message )
      alert("Login failed. Please try again.")
    }

  }
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Partner sign in</h2>
        <p className="subtitle">Manage your restaurant and orders</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Email
            <input type="email" name="email" placeholder="partner@example.com" />
          </label>

          <label>
            Password
            <input type="password" name="password" placeholder="••••••••" />
          </label>

          <button type="submit" className="primary">Sign in</button>
        </form>

        <div className="auth-footer">Don't have an account? <a href="/food-partner/register">Create one</a></div>
      </div>
    </div>
  )
}

export default FoodPartnerLogin
