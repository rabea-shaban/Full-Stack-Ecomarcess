import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import WishlistComoants from "../../components/WishlistComoants";
import Container from "../../components/ui/Container";
import axiosInstance from "../../utils/axios";

type ProfileForm = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  currentPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
};

type ErrorResponse = {
  message: string;
};

export default function Account() {
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState("profile");

  const { register, handleSubmit, reset } = useForm<ProfileForm>();

  // ================= GET PROFILE =================
  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await axiosInstance.get("/auth/profile");

        const { name, email, address } = res.data;

        const names = name.split(" ");

        reset({
          firstName: names[0] || "",
          lastName: names[1] || "",
          email,
          address,
        });
      } catch {
        toast.error("Failed to load profile");
      }
    };

    getProfile();
  }, [reset]);

  // ================= UPDATE PROFILE =================
  const onSubmit = async (data: ProfileForm) => {
    try {
      setLoading(true);

      if (data.newPassword && data.newPassword !== data.confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }

      const payload = {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        address: data.address,
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      };

      await axiosInstance.put("/auth/profile", payload);

      toast.success("Profile updated successfully");
    } catch (error) {
      if (error instanceof AxiosError) {
        const err = error.response?.data as ErrorResponse;
        toast.error(err?.message || "Update failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 py-10 min-h-screen">
      <Container>
        {/* Breadcrumb */}
        <div className="flex justify-between text-sm text-gray-500 mb-10">
          <p>
            Home / <span className="text-black">My Account</span>
          </p>

          <p>
            Welcome! <span className="text-red-500 font-medium">User</span>
          </p>
        </div>

        <div className="grid grid-cols-12 gap-10">
          {/* Sidebar */}
          <div className="col-span-3 space-y-6 text-sm">
            <div>
              <h3 className="font-semibold mb-3">Manage My Account</h3>

              <ul className="space-y-2 text-gray-500">
                <li
                  onClick={() => setTab("profile")}
                  className={`cursor-pointer ${
                    tab === "profile" ? "text-red-500 font-medium" : ""
                  }`}>
                  My Profile
                </li>

                <li
                  onClick={() => setTab("address")}
                  className={`cursor-pointer ${
                    tab === "address" ? "text-red-500 font-medium" : ""
                  }`}>
                  Address Book
                </li>

                <li
                  onClick={() => setTab("payment")}
                  className={`cursor-pointer ${
                    tab === "payment" ? "text-red-500 font-medium" : ""
                  }`}>
                  My Payment Options
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">My Orders</h3>

              <ul className="space-y-2 text-gray-500">
                <li
                  onClick={() => setTab("returns")}
                  className={`cursor-pointer ${
                    tab === "returns" ? "text-red-500 font-medium" : ""
                  }`}>
                  My Returns
                </li>

                <li
                  onClick={() => setTab("cancellations")}
                  className={`cursor-pointer ${
                    tab === "cancellations" ? "text-red-500 font-medium" : ""
                  }`}>
                  My Cancellations
                </li>
              </ul>
            </div>

            <div>
              <h3
                onClick={() => setTab("wishlist")}
                className={`cursor-pointer ${
                  tab === "wishlist" ? "text-red-500 font-medium" : ""
                }`}>
                My WishList
              </h3>
            </div>
          </div>

          {/* Content */}
          <div className="col-span-9">
            {/* PROFILE */}
            {tab === "profile" && (
              <div className="bg-white p-8 rounded-md shadow-sm">
                <h2 className="text-red-500 font-semibold mb-6">
                  Edit Your Profile
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-2 gap-6">
                    <input
                      {...register("firstName")}
                      placeholder="First Name"
                      className="bg-gray-100 p-3 rounded-md outline-none"
                    />

                    <input
                      {...register("lastName")}
                      placeholder="Last Name"
                      className="bg-gray-100 p-3 rounded-md outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <input
                      {...register("email")}
                      placeholder="Email"
                      className="bg-gray-100 p-3 rounded-md outline-none"
                    />

                    <input
                      {...register("address")}
                      placeholder="Address"
                      className="bg-gray-100 p-3 rounded-md outline-none"
                    />
                  </div>

                  <div className="space-y-4">
                    <input
                      {...register("currentPassword")}
                      type="password"
                      placeholder="Current Password"
                      className="bg-gray-100 p-3 rounded-md w-full"
                    />

                    <input
                      {...register("newPassword")}
                      type="password"
                      placeholder="New Password"
                      className="bg-gray-100 p-3 rounded-md w-full"
                    />

                    <input
                      {...register("confirmPassword")}
                      type="password"
                      placeholder="Confirm Password"
                      className="bg-gray-100 p-3 rounded-md w-full"
                    />
                  </div>

                  <div className="flex justify-end gap-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-red-500 text-white px-6 py-3 rounded-md">
                      {loading ? "Saving..." : "Save Changes"}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* ADDRESS */}
            {tab === "address" && (
              <div className="bg-white p-8 rounded-md shadow-sm">
                Address Book
              </div>
            )}

            {/* PAYMENT */}
            {tab === "payment" && (
              <div className="bg-white p-8 rounded-md shadow-sm">
                Payment Options
              </div>
            )}

            {/* RETURNS */}
            {tab === "returns" && (
              <div className="bg-white p-8 rounded-md shadow-sm">
                My Returns
              </div>
            )}

            {/* CANCELLATIONS */}
            {tab === "cancellations" && (
              <div className="bg-white p-8 rounded-md shadow-sm">
                My Cancellations
              </div>
            )}

            {/* WISHLIST */}
            {tab === "wishlist" && (
              <div className="bg-white p-8 rounded-md shadow-sm">
                <WishlistComoants />
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
