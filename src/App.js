import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbarcompo from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';

const App = () => {
  return (
    <BrowserRouter>
      <Navbarcompo />
      <Routes>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
