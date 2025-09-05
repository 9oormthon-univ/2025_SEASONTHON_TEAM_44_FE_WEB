import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouteLayout = () => {
  const isLoggedIn = false // Replace with actual authentication logic
  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />;
  }
  return <Outlet />
}

export default ProtectedRouteLayout;
