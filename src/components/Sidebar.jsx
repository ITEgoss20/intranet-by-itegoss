import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar, openSidebar } from "../redux/sidebarSlice";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.png";
import { menuItems } from "../utils/helper.js";

const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.isOpen);
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  const location = useLocation(); // Get current route

  // Close sidebar on route change
  useEffect(() => {
    if (isMobile) {
      dispatch(closeSidebar());
    }
  }, [location.pathname, dispatch]);

  // Detect screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        dispatch(openSidebar());
      } else {
        dispatch(closeSidebar());
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  // Click outside to close sidebar (only for mobile)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMobile && !isSidebarOpen && !e.target.closest(".sidebar")) {
        dispatch(closeSidebar());
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isSidebarOpen, isMobile, dispatch]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => dispatch(closeSidebar())}
        />
      )}

      <aside
        className={`sidebar fixed top-0 left-0 h-screen bg-gray-900 text-white shadow-lg transition-all duration-500 ease-in-out z-50 ${
          isSidebarOpen ? "w-64" : isMobile ? "w-0" : "w-16"
        } flex flex-col overflow-hidden`}
      >
        <div className="px-2.5 py-3 flex items-center justify-between flex-shrink-0">
          {isSidebarOpen && <img src={Logo} alt="Logo" className="w-28" />}
          {!isSidebarOpen && (
            <button
              onClick={() => dispatch(openSidebar())}
              className="text-white cursor-pointer"
            >
              <Menu size={28} />
            </button>
          )}
          <button
            onClick={() =>
              dispatch(isSidebarOpen ? closeSidebar() : openSidebar())
            }
            className="text-white focus:outline-none"
          >
            {isSidebarOpen && (
              <X size={28} className="cursor-pointer -mt-2.5" />
            )}
          </button>
        </div>
        <div className="flex-1 overflow-y-auto scrollbar-hide mt-2">
          <nav>
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  {item.action ? (
                    <button
                      onClick={handleLogout}
                      className="flex cursor-pointer items-center w-full p-3 rounded-lg transition-all duration-300 hover:bg-gray-800 text-left"
                    >
                      <item.icon className="w-6 h-6" />
                      <span
                        className={`ml-3 text-sm font-medium ${
                          !isSidebarOpen && "hidden"
                        }`}
                      >
                        {item.name}
                      </span>
                    </button>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `flex items-center p-3 rounded-lg transition-all duration-300 ${
                          isActive ? "bg-gray-700" : "hover:bg-gray-800"
                        }`
                      }
                    >
                      <item.icon className="w-6 h-6" />
                      <span
                        className={`ml-3 text-sm font-medium ${
                          !isSidebarOpen && "hidden"
                        }`}
                      >
                        {item.name}
                      </span>
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
