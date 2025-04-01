import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const user = JSON.parse(localStorage.getItem("user")); // Get user from localStorage

  return user?.token ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
