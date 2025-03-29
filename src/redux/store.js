import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";

export const store = configureStore({
  reducer: sidebarReducer,
});


{/* <div className="absolute bottom-4 left-0 w-full flex justify-center">
<NavLink
  to="/logout"
  className="flex items-center space-x-3 p-3 text-red-400 hover:bg-gray-800 rounded-lg"
>
  <LogOut className="w-6 h-6" />
  <span
    className={`text-sm font-medium transition-all duration-300 ${
      !isSidebarOpen && "hidden"
    }`}
  >
    Logout
  </span>
</NavLink>
</div> */}
