import { RouterProvider } from "react-router";
import { router } from "./router.tsx";

export const AppRouterProvider = () => {
  return <RouterProvider router={router} />
}
