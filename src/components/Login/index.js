import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://new-user-creating-backend-59o7.onrender.com/api/login', formData);
      alert('Login successful');
      localStorage.setItem('token', response.data.token);
      // Redirect to the URL after successful login
      window.location.href = 'https://www.google.co.in/';
    } catch (error) {
      if (error.response && error.response.data) {
        alert(error.response.data.message); // Display specific error message from backend
      } else {
        console.error('Login error:', error);
        alert('Invalid password'); // Fallback generic message for other errors
      }
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
