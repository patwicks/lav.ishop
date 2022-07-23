import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const isLogin = false;
  return !isLogin ? <Navigate to="/login" /> : <Outlet />;
};

export default PrivateRoute;
