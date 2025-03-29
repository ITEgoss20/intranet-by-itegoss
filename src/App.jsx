import { Outlet } from "react-router-dom";
import Logo from "./assets/logo.png";
import { User } from "lucide-react";
import { useSelector } from "react-redux";
import Sidebar from "./components/Sidebar";

function App() {
  const isSidebarOpen = useSelector((state) => state.isOpen);

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-500 ease-in-out ${
          isSidebarOpen ? "ml-64" : "ml-16"
        } overflow-y-auto`}
      >
        {/* Navbar */}
        <div className="flex items-center justify-between h-16 sticky top-0 bg-gray-900 w-full px-4 z-40">
          <div className="text-white text-xl flex items-center space-x-6">
            {!isSidebarOpen && <img src={Logo} alt="Logo" className="w-28" />}
          </div>
          <div className="w-12 h-12 bg-blue-400 flex items-center justify-center rounded-full">
            <User className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Page Content */}
        <div className="py-4 px-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
