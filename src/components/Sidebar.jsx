// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { closeSidebar, openSidebar } from "../redux/sidebarSlice";
// import { NavLink } from "react-router-dom";
// import { ChevronLeft, Menu } from "lucide-react";
// import Logo from "../assets/logo.png";
// import { menuItems } from "../services/helper.js";

// const Sidebar = () => {
//   const isSidebarOpen = useSelector((state) => state.isOpen);
//   const dispatch = useDispatch();

//   return (
//     <aside
//       className={`fixed top-0 left-0 h-screen bg-gray-900 text-white shadow-lg transition-all duration-500 ease-in-out ${
//         isSidebarOpen ? "w-64" : "w-16"
//       } flex flex-col`}
//     >
//       {/* Sidebar Header (Fixed) */}
//       <div className="px-2.5 py-3 flex items-center justify-between flex-shrink-0">
//         {isSidebarOpen && <img src={Logo} alt="Logo" className="w-28" />}
//         <button
//           onClick={() =>
//             dispatch(isSidebarOpen ? closeSidebar() : openSidebar())
//           }
//           className="text-white  focus:outline-none"
//         >
//           {isSidebarOpen ? (
//             <ChevronLeft size={28} className="cursor-pointer -mt-3" />
//           ) : (
//             <Menu size={28} className="cursor-pointer" />
//           )}
//         </button>
//       </div>

//       {/* Scrollable Sidebar Navigation */}
//       <div className="flex-1 overflow-y-auto scrollbar-hide mt-2">
//         <nav>
//           <ul className="space-y-2">
//             {menuItems.map((item, index) => (
//               <NavLink
//                 key={index}
//                 to={item.path}
//                 className={({ isActive }) =>
//                   `flex items-center p-3 rounded-lg transition-all duration-300 ${
//                     isActive ? "bg-gray-700" : "hover:bg-gray-800"
//                   }`
//                 }
//               >
//                 <item.icon className="w-6 h-6" />
//                 <span
//                   className={`ml-3 text-sm font-medium transition-all duration-300 ${
//                     !isSidebarOpen && "hidden"
//                   }`}
//                 >
//                   {item.name}
//                 </span>
//               </NavLink>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar, openSidebar } from "../redux/sidebarSlice";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.png";
import { menuItems } from "../services/helper.js";

const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.isOpen);
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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

  return (
    <>
      {/* Mobile overlay when sidebar is open */}
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
        {/* Sidebar Header */}
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

        {/* Sidebar Navigation */}
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
                      !isSidebarOpen && !isMobile && "hidden"
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
    </>
  );
};

export default Sidebar;
