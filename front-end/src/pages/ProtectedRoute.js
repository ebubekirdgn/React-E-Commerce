import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function ProtectedRoute({ children }) {
  const { loggedIn, user } = useAuth();

  if (user?.role !== "admin" && loggedIn) {
   return <Navigate to="/" />;
  }
  if (loggedIn) {
    return children;
  }
  return <Navigate replace to="/signin" />;
}
export default ProtectedRoute;