import React from 'react'
import '../styles/auth.css'

const FoodPartnerLogin = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Partner sign in</h2>
        <p className="subtitle">Manage your restaurant and orders</p>

        <form className="auth-form">
          <label>
            Email
            <input type="email" name="email" placeholder="partner@example.com" />
          </label>

          <label>
            Password
            <input type="password" name="password" placeholder="••••••••" />
          </label>

          <button type="button" className="primary">Sign in</button>
        </form>

        <div className="auth-footer">Don't have an account? <a href="/food-partner/register">Create one</a></div>
      </div>
    </div>
  )
}

export default FoodPartnerLogin
