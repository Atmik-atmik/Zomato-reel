import React from 'react'
import '../../styles/auth.css'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom' 

const FoodPartnerRegister = () => {
  const navigate = useNavigate()

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const name = e.target.businessName.value;
    const contactName = e.target.contactName.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const password = e.target.password.value;

    try {
    const response = await axios.post("http://localhost:3000/api/auth/food-partner/register", {
      name,
      contactName,
      email,
      phone,
      address,
      password
    }, { withCredentials: true });

    console.log(response.data);
    navigate("/create-food");
  } catch (error) {
    console.error(error.response?.data || error.message);
    alert("Registration failed. Please try again.");
  }
}
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Partner sign up</h2>
        <p className="subtitle">Create a food-partner account to manage your listings</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Restaurant / Business name
            <input type="text" name="businessName" placeholder="Joe's Kitchen" />
          </label>

          <label>
            Contact Name
            <input type="text" name="contactName" placeholder="Jane Doe" />
          </label>

          <label>
            Contact email
            <input type="email" name="email" placeholder="partner@example.com" />
          </label>

          <label>
            Phone
            <input type="tel" name="phone" placeholder="+1 555 123 4567" />
          </label>

          <label>
            Address
            <input type="text" name="address" placeholder="123 Main St, City, State" />
          </label>

          <label>
            Password
            <input type="password" name="password" placeholder="••••••••" />
          </label>

          <button type="submit" className="primary">Create account</button>
        </form>

        <div className="auth-footer">Already a partner? <a href="/food-partner/login">Sign in</a></div>
      </div>
    </div>
  )
}

export default FoodPartnerRegister
