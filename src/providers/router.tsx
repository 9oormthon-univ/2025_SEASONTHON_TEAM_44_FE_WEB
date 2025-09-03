import { createBrowserRouter } from "react-router";
import RootLayout from "@layouts/RootLayout.tsx";
import HomePage from "@pages/HomePage.tsx";
import QRManagementPage from "@pages/QRManagementPage.tsx";
import VisitManagementPage from "@pages/VisitManagementPage.tsx";
import NoticesPage from "@pages/NoticesPage.tsx";
import MyInfoPage from "@pages/MyInfoPage.tsx";
import DashboardPage from "@pages/DashboardPage.tsx";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
      {
        path: 'qr-management',
        element: <QRManagementPage />,
      },
      {
        path: 'visit-management',
        element: <VisitManagementPage />,
      },
      {
        path: 'notices',
        element: <NoticesPage />,
      },
      {
        path: 'my-info',
        element: <MyInfoPage />,
      },
    ],
  },
]);
