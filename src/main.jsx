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
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

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
        element: <ProtectedRoute element={<Dashboard />} />,
      },
      {
        path: "/admin-dashboard",
        element: <ProtectedRoute element={<AdminDashboard />} />,
      },
      {
        path: "/user-role-module",
        element: <ProtectedRoute element={<UserManagementPage />} />,
      },
      {
        path: "/people",
        element: <ProtectedRoute element={<PeopleManagmentPage />} />,
      },
      {
        path: "/boadring-management",
        element: <ProtectedRoute element={<BoardingManagementPage />} />,
      },
      {
        path: "/leave-management",
        element: <ProtectedRoute element={<LeaveManagementPage />} />,
      },
      {
        path: "/request-management",
        element: <ProtectedRoute element={<RequestManagementPage />} />,
      },
      {
        path: "/inventory-management",
        element: <ProtectedRoute element={<InventoryManagementPage />} />,
      },
      {
        path: "/asset-management",
        element: <ProtectedRoute element={<AssetManagementPage />} />,
      },
      {
        path: "/vvc-management",
        element: <ProtectedRoute element={<VVCManagementPage />} />,
      },
      {
        path: "/task-allocation",
        element: <ProtectedRoute element={<TaskAllocationPage />} />,
      },
      {
        path: "/mis-dashboard",
        element: <ProtectedRoute element={<MISDashboard />} />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer position="top-right" autoClose={3000} />
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);
