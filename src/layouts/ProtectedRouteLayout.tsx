import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@stores/useAuthStore.ts";
import { useQuery } from "@tanstack/react-query";
import { existsStore } from "@apis/store.ts";

const ProtectedRouteLayout = () => {
  const { isLoggedIn } = useAuthStore();
  const { data, isSuccess } = useQuery({
    queryKey: ["auth", "check"],
    queryFn: () => existsStore(),
  })

  if (isSuccess && data) {
    if (isLoggedIn && data.response === true) {
      return <Navigate to="/dashboard" replace />;
    } else if (isLoggedIn && data.response === false) {
      return <Navigate to="/sign-up" replace />;
    }
  }
  return <Outlet />
}

export default ProtectedRouteLayout;
