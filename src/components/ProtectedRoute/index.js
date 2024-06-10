import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, ...rest }) => {
  // Check if user is authenticated (you can implement this logic based on your authentication state)
  const isAuthenticated = localStorage.getItem('token');

  // If user is authenticated, render the provided element (component), else redirect to the login page
  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
