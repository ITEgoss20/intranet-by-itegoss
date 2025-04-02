import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import App from "../App";
import ProtectedRoute from "../components/ProtectedRoute";
import Dashboard from "../pages/Dashboard";
import AdminDashboard from "../pages/AdminDashboard";
import UserManagementPage from "../pages/UserManagementPage";
import PeopleManagmentPage from "../pages/PeopleManagmentPage";
import BoardingManagementPage from "../pages/BoardingManagementPage";
import LeaveManagementPage from "../pages/LeaveManagementPage";
import RequestManagementPage from "../pages/RequestManagementPage";
import InventoryManagementPage from "../pages/InventoryManagementPage";
import AssetManagementPage from "../pages/AssetManagementPage";
import VVCManagementPage from "../pages/VVCManagementPage";
import TaskAllocationPage from "../pages/TaskAllocationPage";
import MISDashboard from "../pages/MISDashboard";

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

export default appRouter;
