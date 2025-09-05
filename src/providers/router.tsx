import { createBrowserRouter } from "react-router";
import RootLayout from "@layouts/RootLayout.tsx";
import LoginPage from "@pages/LoginPage.tsx";
import QRManagementPage from "@pages/QRManagementPage.tsx";
import VisitManagementPage from "@pages/VisitManagementPage.tsx";
import NoticesPage from "@pages/NoticesPage.tsx";
import MyInfoPage from "@pages/MyInfoPage.tsx";
import DashboardPage from "@pages/DashboardPage.tsx";
import ProtectedRouteLayout from "@layouts/ProtectedRouteLayout.tsx";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRouteLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: '/qr-management',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <QRManagementPage />,
      },
    ],
  },
  {
    path: '/visit-management',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <VisitManagementPage />,
      },
    ],
  },
  {
    path: '/notices',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <NoticesPage />,
      },
    ],
  },
  {
    path: '/my-info',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <MyInfoPage />,
      },
    ],
  },
]);
