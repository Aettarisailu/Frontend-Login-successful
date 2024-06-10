import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [swapiData, setSwapiData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5010/api/login', formData);
      alert('Login successful');
      localStorage.setItem('token', response.data.token);

      // Fetch data from SWAPI after successful login
      const swapiResponse = await axios.get('https://swapi.dev/api/people');
      setSwapiData(swapiResponse.data);
      console.log(swapiResponse.data);
    } catch (error) {
      alert('Invalid email or password');
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
      {swapiData && (
        <div className="swapi-data">
          <h3>SWAPI Data</h3>
          <pre>{JSON.stringify(swapiData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Login;
