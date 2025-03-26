// import {ReactComponent as BubbleLogo } from "../assets/bubbleLogo.svg";
// const LoginPage = () => {
//   return (
//     <>
//       <div className="lg:flex h-full w-full">
//         <div className="lg:w-[65%] flex items-center justify-center bg-blue-500 text-white pt-6 pb-10 lg:pt-0 lg:pb-0">
//           <div className="w-[85%]">
//             <h2 className="text-[60px] leading-16">
//               Welcome to Kutch Yuvak <span className="block">Sangh Portal</span>
//             </h2>
//             <p className="font-light mt-6 text-xl">
//               A{" "}
//               <span className="font-normal">
//                 Web Based Organization Management System
//               </span>{" "}
//               to get people together on a common platform to make them work
//               towards a common predefined goal.
//             </p>
//             <button className="cursor-pointer uppercase mt-8 text-sm text-white px-6 py-2 outline-none border space-x-4 border-white rounded-sm bg-blue-500">
//               <span>Know More</span>
//               <i className="fa-solid fa-arrow-right"></i>
//             </button>
//           </div>
//         </div>
//         <div className="mt-7 lg:mt-0 lg:w-[35%] text-gray-800 text-sm flex items-center justify-center">
//           <div>
//             <p className="text-center text-lg">
//               Pleaas Login with your authorized Google Account
//             </p>
//             <button
//               className="uppercase cursor-pointer border border-gray-800 h-10 py-2 px-6
//            w-28 mx-auto mt-4 rounded-sm bg-white flex items-center"
//             >
//               <p>Login</p>
//               <div>
//                 <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
//                   <circle cx="15" cy="21" r="4.5" fill="#4B5563" />
//                   <circle cx="23" cy="23" r="2.5" fill="#4B5563" />
//                   <circle cx="24" cy="29" r="3" fill="#4B5563" />
//                   <circle cx="28" cy="19" r="1.5" fill="#4B5563" />
//                 </svg>
//                 {/* <img src={BubbleLogo} alt="" /> */}
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default LoginPage;

import React from "react";
import { Mail, Lock } from "lucide-react";
import authBg from "../assets/authBg.jpg";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div
      className="h-screen w-screen bg-cover bg-bottom flex items-center justify-center"
      style={{ backgroundImage: `url(${authBg})` }}
    >
      <div className="bg-white bg-opacity-90 backdrop-blur-lg p-8 rounded-md shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
          Login
        </h2>

        {/* Email Input */}
        <div className="relative mb-2">
          <Mail
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        {/* Password Input */}
        <div className="relative mb-6">
          <Lock
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
        <Link to={"/home"}>
          <button className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl shadow-md transition">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
