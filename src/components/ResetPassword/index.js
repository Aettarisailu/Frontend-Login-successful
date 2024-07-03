// src/components/ResetPassword/index.js
import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './ResetPassword.css';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { token } = useParams();
  const navigate = useNavigate();

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!token) {
      alert("Invalid token");
      return;
    }
    try {
      const response = await axios.post('https://new-user-creating-backend-59o7.onrender.com/api/reset-password', { token, password });
      alert(response.data.message);
      navigate('/login'); // Redirect to login page after successful reset
    } catch (error) {
      console.error('Error resetting password', error); // Improved error logging
      alert('Error resetting password: ' + (error.response?.data?.message || error.message)); // More descriptive error
    }
  };

  return (
    <div className="reset-password-container">
      <form className="reset-password-form" onSubmit={handleSubmit}>
        <h2>Reset Password</h2>
        <input
          type="password"
          name="password"
          placeholder="New Password"
          value={password} // Added value for controlled component
          onChange={handleChangePassword}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm New Password"
          value={confirmPassword} // Added value for controlled component
          onChange={handleChangeConfirmPassword}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;