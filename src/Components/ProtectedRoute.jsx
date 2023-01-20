import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/userAuthContext";
import { auth } from "../firebase-config";

const ProtectedRoute = ({ children }) => {
  let { user } = useUserAuth();
  console.log(user, "protected route");
  if (!user) {
    // alert("Please login before proceed to Todos dashboard page");
    return <Navigate to="/todoslogin" replace />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
