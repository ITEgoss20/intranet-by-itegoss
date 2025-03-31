import {
  User,
  LayoutDashboard,
  Users,
  ClipboardList,
  Calendar,
  Package,
  Settings,
  LogOut,
} from "lucide-react";

export const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { name: "User Role Module", icon: User, path: "/user-role-module" },
  { name: "People", icon: Users, path: "/people" },
  {
    name: "Onboarding / Offboarding",
    icon: ClipboardList,
    path: "/boadring-management",
  },
  { name: "Leave Management", icon: Calendar, path: "/leave-management" },
  {
    name: "Request Management",
    icon: ClipboardList,
    path: "/request-management",
  },
  {
    name: "Inventory Management",
    icon: Package,
    path: "/inventory-management",
  },
  { name: "Asset Management", icon: Settings, path: "/asset-management" },
  { name: "Visitor / Vendor / Customer", icon: Users, path: "/vvc-management" },
  { name: "Task Allocation", icon: ClipboardList, path: "/task-allocation" },
  { name: "MIS Dashboard", icon: LayoutDashboard, path: "/mis-dashboard" },
  { name: "Logout", icon: LogOut, path: "/login" },
];
