import type { AxiosError } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axios";

type FormValues = {
  name: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      setLoading(true);

      const res = await axiosInstance.post("/auth/register", data);
      console.log(res);
      toast.success("Account created successfully");

      reset();
      navigate("/auth/login");
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;

      toast.error(err.response?.data?.message || "Something went wrong");
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
          <h2 className="text-3xl font-bold mb-3">Create an account</h2>

          <p className="text-gray-500 mb-8">Enter your details below</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name */}
            <div>
              <input
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
                type="text"
                placeholder="Name"
                className="w-full border-b outline-none py-2"
              />

              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                placeholder="Email"
                className="w-full border-b outline-none py-2"
              />

              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
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

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#DB4444] text-white py-3 rounded-md disabled:opacity-70">
              {loading ? "Creating..." : "Create Account"}
            </button>
          </form>

          {/* Google */}
          <button className="w-full mt-4 border py-3 rounded-md flex items-center justify-center gap-3">
            <img src="/google.png" className="w-5" />
            Sign up with Google
          </button>

          {/* Login */}
          <p className="text-center mt-6 text-gray-500">
            Already have account?
            <span
              onClick={() => navigate("/auth/login")}
              className="text-black font-medium ml-2 cursor-pointer">
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
