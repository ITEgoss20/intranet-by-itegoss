import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "./redux/sidebarSlice";
import { Menu, User } from "lucide-react";
import Sidebar from "./components/Sidebar";
import ScrollToTop from "./components/ScrollToTop";
import Logo from "./assets/logo.png";
import { useEffect, useState } from "react";

function App() {
  const isSidebarOpen = useSelector((state) => state.isOpen);
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen flex overflow-hidden">
      <Sidebar />
      <div
        id="main-content"
        className={`flex-1 transition-all duration-500 ease-in-out ${
          isSidebarOpen && !isMobile ? "ml-64" : "ml-0 md:ml-16"
        } w-full overflow-y-auto`}
      >
        <ScrollToTop />
        {/* Header */}
        <div className="flex items-center justify-between h-16 sticky top-0 bg-gray-900 w-full px-3 md:px-4 z-40">
          <div className="text-white text-xl flex items-center space-x-3 md:space-x-6">
            {/* Mobile menu button */}
            {isMobile && (
              <button
                onClick={() => dispatch(toggleSidebar())}
                className="text-white cursor-pointer -mt-2"
              >
                <Menu size={28} />
              </button>
            )}
            {!isSidebarOpen && <img src={Logo} alt="Logo" className="w-28" />}
          </div>
          <div className="flex items-center gap-4">
            {user && <p className="text-sm text-gray-200">{user.loginId}</p>}
            <div className="w-12 h-12 cursor-pointer bg-blue-400  flex items-center justify-center rounded-full">
              <User className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="py-4 md:px-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
