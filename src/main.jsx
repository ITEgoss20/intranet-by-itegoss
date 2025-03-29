import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import UserManagementPage from "./pages/UserManagementPage.jsx";
import PeopleManagmentPage from "./pages/PeopleManagmentPage.jsx";
import BoardingManagementPage from "./pages/BoardingManagementPage.jsx";
import LeaveManagementPage from "./pages/LeaveManagementPage.jsx";
import RequestManagementPage from "./pages/RequestManagementPage.jsx";
import InventoryManagementPage from "./pages/InventoryManagementPage.jsx";
import VVCManagementPage from "./pages/VVCManagementPage.jsx";
import TaskAllocationPage from "./pages/TaskAllocationPage.jsx";
import MISDashboard from "./pages/MISDashboard.jsx";
import AssetManagementPage from "./pages/AssetManagementPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

const ProtectRoute = ({ element }) => {
  const [isLogin, setIslogin] = useState(false);
  return isLogin ? element : <LoginPage />;
};

const appRouter = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to={"/login"} replace />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin-dashboard",
        element: <ProtectRoute element={<AdminDashboard />} />,
      },
      {
        path: "/user-role-module",
        element: <UserManagementPage />,
      },
      {
        path: "/people",
        element: <PeopleManagmentPage />,
      },
      {
        path: "/boadring-management",
        element: <BoardingManagementPage />,
      },
      {
        path: "/leave-management",
        element: <LeaveManagementPage />,
      },
      {
        path: "/request-management",
        element: <RequestManagementPage />,
      },
      {
        path: "/inventory-management",
        element: <InventoryManagementPage />,
      },
      {
        path: "/asset-management",
        element: <AssetManagementPage />,
      },
      {
        path: "/vvc-management",
        element: <VVCManagementPage />,
      },
      {
        path: "/task-allocation",
        element: <TaskAllocationPage />,
      },
      {
        path: "/mis-dashboard",
        element: <MISDashboard />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);
