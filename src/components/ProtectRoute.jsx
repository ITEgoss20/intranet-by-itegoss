import React from "react";
import LoginPage from "../pages/LoginPage";

const ProtectRoute = ({ element }) => {
  const isLogin = localStorage.getItem("isLogin") === "true"; // Check stored auth state

  return isLogin ? element : <LoginPage />;
};

export default ProtectRoute;
