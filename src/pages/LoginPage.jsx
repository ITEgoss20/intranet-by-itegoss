import React from "react";
import { Mail, Lock } from "lucide-react";
import authBg from "../assets/authBg.webp";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../redux/authSlice";
import useFormValidation from "../customHooks/useFormValidation";
import { loginSchema } from "../validations/loginSchema";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, errors } = useFormValidation(loginSchema);

  const handleLogin = (data) => {
    console.log("Form Data:", data);

    const dummyToken = "dummy-auth-token";
    localStorage.setItem(
      "user",
      JSON.stringify({ ...data, token: dummyToken })
    );
    dispatch(login({ loginId: data.loginId, token: dummyToken }));
    toast.success("Login successful!");
    navigate("/");
  };

  return (
    <div
      className="h-screen w-screen bg-cover bg-bottom flex items-center justify-center"
      style={{ backgroundImage: `url(${authBg})` }}
    >
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="bg-opacity-20 backdrop-blur-lg p-8 rounded-md shadow-2xl w-full max-w-md"
      >
        <h2 className="text-3xl font-semibold text-center mb-6 text-white">
          Login
        </h2>

        {/* Login ID Input */}
        <div className="relative mb-8">
          <Mail
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white"
            size={20}
          />
          <input
            type="text"
            name="loginId"
            placeholder="Login"
            {...register("loginId")}
            aria-invalid={errors.loginId ? "true" : "false"}
            className="w-full pl-12 pr-4 py-3 rounded-xl border text-white placeholder:text-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <div className="absolute left-0 bottom-[-20px] w-full">
            {errors.loginId && (
              <p className="text-red-700 text-sm">{errors.loginId.message}</p>
            )}
          </div>
        </div>

        {/* Password Input */}
        <div className="relative mb-8">
          <Lock
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white"
            size={20}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            {...register("password")}
            aria-invalid={errors.password ? "true" : "false"}
            className="w-full pl-12 pr-4 py-3 rounded-xl border text-white placeholder:text-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <div className="absolute left-0 bottom-[-20px] w-full">
            {errors.password && (
              <p className="text-red-700 text-sm">{errors.password.message}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl shadow-md transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
