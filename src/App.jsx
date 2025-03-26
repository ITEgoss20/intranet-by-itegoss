import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Logo from "./assets/logo.png";
import { User } from "lucide-react";

function App() {
  const [isSidebarOpen, setIsSideBarOpen] = useState(true);

  const openSidebar = () => setIsSideBarOpen(true);
  const closeSidebar = () => setIsSideBarOpen(false);

  return (
    <div className="h-screen overflow-hidden">
      <div className="flex h-full relative">
        {/* Sidebar */}
        <aside
          className={`bg-green-100 min-w-[300px] transition-all duration-500 ease-in-out ${
            isSidebarOpen ? "w-[25%]" : "w-0 -ml-[300px]"
          }`}
        >
          <Link to={"/home"}>
            <div
              className={`leading-3 cursor-pointer p-4 ${
                !isSidebarOpen && "hidden"
              }`}
            >
              {/* <p className="text-green-600">Web App</p> */}
              <img src={Logo} alt="" className="w-28" />
            </div>
          </Link>
          <div className={`mt-2 ${!isSidebarOpen && "hidden"}`}>
            <div className="flex items-center space-x-3 px-4">
              <button onClick={closeSidebar}>
                <i className="fa fa-angle-left text-gray-600 block cursor-pointer"></i>
              </button>
              <div className="w-10 h-10 bg-blue-400 flex items-center justify-center rounded-full">
                <User className="w-7 h-7 text-white" />
              </div>
              <p className="text-lg -mt-1">Modules</p>
            </div>
            <div className="border-b border-gray-400 w-full mt-4"></div>
          </div>
          {/* Sidebar Menu */}
          <ul className={`p-4 space-y-4 ${!isSidebarOpen && "hidden"}`}>
            <NavLink to={"/dashboard"} className="block">
              <li className="flex items-center justify-between cursor-pointer hover:underline">
                Dashboard
              </li>
            </NavLink>
            <NavLink to={"/user-role-module"} className="block">
              <li className="flex items-center justify-between cursor-pointer hover:underline">
                User Role Module
              </li>
            </NavLink>
            <NavLink to={"/people"} className="block">
              <li className="flex items-center justify-between cursor-pointer hover:underline">
                People
              </li>
            </NavLink>
            <NavLink to={"/boadring-management"} className="block">
              <li className="flex items-center justify-between cursor-pointer hover:underline">
                On-boarding / off-boarding
              </li>
            </NavLink>
            <NavLink to="/leave-management" className="block">
              <li className="flex items-center justify-between cursor-pointer hover:underline">
                Leave Management
              </li>
            </NavLink>
            <NavLink to="/request-management" className="block">
              <li className="flex items-center justify-between cursor-pointer hover:underline">
                Request Management
              </li>
            </NavLink>
            <NavLink to="/inventory-management" className="block">
              <li className="flex items-center justify-between cursor-pointer hover:underline">
                Inventory Management
              </li>
            </NavLink>
            <NavLink to="/asset-management" className="block">
              <li className="flex items-center justify-between cursor-pointer hover:underline">
                Asset Management
              </li>
            </NavLink>
            <NavLink to="/vvc-management" className="block">
              <li className="flex items-center justify-between cursor-pointer hover:underline">
                Visitor / Vendor / Customer
              </li>
            </NavLink>
            <NavLink to="/task-allocation" className="block">
              <li className="flex items-center justify-between cursor-pointer hover:underline">
                Task allocation
              </li>
            </NavLink>
            <NavLink to="/mis-dashboard" className="block">
              <li className="flex items-center justify-between cursor-pointer hover:underline">
                MIS Dashboard
              </li>
            </NavLink>
          </ul>
        </aside>
        {/* Main Content */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            isSidebarOpen ? "w-[75%]" : "w-full"
          } overflow-y-auto`}
        >
          {/* Navbar */}
          <div className="flex items-center justify-between h-16 sticky top-0 bg-blue-950 w-full px-4 z-40">
            <div className="text-white text-xl flex items-center space-x-6">
              {!isSidebarOpen && (
                <button onClick={openSidebar}>
                  <i className="fa fa-bars cursor-pointer"></i>
                </button>
              )}
              <Link to={"/home"}>
                <img src={Logo} alt="" className="w-28" />
              </Link>
              {/* <p className="-mt-1">Jigish Sir</p> */}
            </div>
            <div className="w-12 h-12 bg-blue-400 flex items-center justify-center rounded-full">
              <User className="w-8 h-8 text-white" />
            </div>
          </div>
          {/* Page Content */}
          <div className="py-2">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
