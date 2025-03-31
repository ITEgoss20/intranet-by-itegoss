import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar, openSidebar } from "../redux/sidebarSlice";
import { NavLink } from "react-router-dom";
import {
  User,
  LayoutDashboard,
  Users,
  ClipboardList,
  Calendar,
  Package,
  Settings,
  LogOut,
  ChevronLeft,
  Menu,
} from "lucide-react";
import Logo from "../assets/logo.png";

const menuItems = [
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

const PhoneSidebar = () => {
  const isSidebarOpen = useSelector((state) => state.isOpen);
  const dispatch = useDispatch();

  return (
    <aside
      className={`fixed z-50 top-0 left-0 h-screen block sm:hidden bg-gray-900 text-white shadow-lg transition-all duration-500 ease-in-out ${
        isSidebarOpen ? "w-64" : "w-0"
      } flex flex-col`}
    >
      {/* Sidebar Header (Fixed) */}
      <div className="px-2.5 py-3 flex items-center justify-between flex-shrink-0">
        {isSidebarOpen && <img src={Logo} alt="Logo" className="w-24" />}
        <button
          onClick={() =>
            dispatch(isSidebarOpen ? closeSidebar() : openSidebar())
          }
          className="text-white focus:outline-none"
        >
          {isSidebarOpen && (
            <ChevronLeft size={28} className="cursor-pointer" />
          )}
        </button>
      </div>

      {/* Scrollable Sidebar Navigation */}
      <div className="flex-1 overflow-y-auto scrollbar-hide mt-2">
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center p-3 rounded-lg transition-all duration-300 ${
                    isActive ? "bg-gray-700" : "hover:bg-gray-800"
                  }`
                }
              >
                <item.icon className="w-6 h-6" />
                <span
                  className={`ml-3 text-sm font-medium transition-all duration-300 ${
                    !isSidebarOpen && "hidden"
                  }`}
                >
                  {item.name}
                </span>
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default PhoneSidebar;
