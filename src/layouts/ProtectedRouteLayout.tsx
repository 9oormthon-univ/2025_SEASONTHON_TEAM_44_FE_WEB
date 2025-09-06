import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@stores/useAuthStore.ts";

const ProtectedRouteLayout = () => {
  const { isLoggedIn } = useAuthStore();
  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />;
  }
  return <Outlet />
}

export default ProtectedRouteLayout;
