import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

function ProtectedRoute({ children }) {
  const { loggedIn } = useAuth();
  console.log(loggedIn)
  if (loggedIn) {
     return children
  }

  alertify.error('Yetkisiz giriş isteği.Lütfen giriş yapınız');
  return <Navigate replace to="/signin" />


}
export default ProtectedRoute