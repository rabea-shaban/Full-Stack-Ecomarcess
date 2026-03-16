import { AxiosError } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axios";
import { setToken, setUser } from "../../utils/auth";

type FormValues = {
  email: string;
  password: string;
};

type LoginResponse = {
  token: string;
  user: {
    name: string;
    email: string;
  };
};

type ErrorResponse = {
  message: string;
};

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      setLoading(true);

      const res = await axiosInstance.post<LoginResponse>(
        "/auth/login",
        data
      );

      const { token, user } = res.data;

      setToken(token);
      setUser(user);

      toast.success("Login successful");

      navigate("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        const err = error.response?.data as ErrorResponse | undefined;
        toast.error(err?.message || "Login failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Image */}
      <div className="hidden lg:block">
        <img src="/auth.jpg" className="w-full h-full object-cover" />
      </div>

      {/* Right Form */}
      <div className="flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-3">
            Log in to Exclusive
          </h2>

          <p className="text-gray-500 mb-8">
            Enter your details below
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            {/* Email */}
            <div>
              <input
                {...register("email", {
                  required: "Email is required",
                })}
                type="email"
                placeholder="Email"
                className="w-full border-b outline-none py-2"
              />

              {errors.email && (
                <p className="text-red-500 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <input
                {...register("password", {
                  required: "Password is required",
                })}
                type="password"
                placeholder="Password"
                className="w-full border-b outline-none py-2"
              />

              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#DB4444] text-white px-10 py-3 rounded-md"
              >
                {loading ? "Logging in..." : "Log In"}
              </button>

              <button
                type="button"
                className="text-[#DB4444]"
              >
                Forgot Password?
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;