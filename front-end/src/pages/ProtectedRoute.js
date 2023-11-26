import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";

function ProtectedRoute( {children}) {
  const { loggedIn } = useAuth();
  console.log(loggedIn)
  if (loggedIn) {
    return children
  }
   return <Navigate replace to="/signin" />
    

}
export default ProtectedRoute