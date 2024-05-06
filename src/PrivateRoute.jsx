import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  return isAuthenticated ? children : <Navigate to="/auth" />;
};

export default PrivateRoute;
