import { useForm } from "react-hook-form";
import Container from "../../components/ui/Container";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  return (
    <Container>
      {/* Breadcrumb */}
      <p className="text-sm text-gray-400 mt-6 mb-10">Home / Contact</p>

      <div className="grid md:grid-cols-3 gap-8">
        {/* LEFT SIDE */}
        <div className="bg-white p-6 rounded-xl shadow-sm space-y-6">
          {/* Call */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500 text-white">
                <FaPhoneAlt />
              </div>
              <h3 className="font-semibold">Call To Us</h3>
            </div>
            <p className="text-gray-500 text-sm">
              We are available 24/7, 7 days a week.
            </p>
            <p className="text-gray-600 text-sm mt-2">Phone: +8801611112222</p>
          </div>

          <hr />

          {/* Email */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500 text-white">
                <FaEnvelope />
              </div>
              <h3 className="font-semibold">Write To US</h3>
            </div>
            <p className="text-gray-500 text-sm">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-gray-600 text-sm mt-2">customer@exclusive.com</p>
            <p className="text-gray-600 text-sm">support@exclusive.com</p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Inputs */}
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name *"
                  {...register("name", { required: "Name is required" })}
                  className="w-full p-3 bg-gray-100 rounded-md outline-none"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email *"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  className="w-full p-3 bg-gray-100 rounded-md outline-none"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Your Phone *"
                  {...register("phone", {
                    required: "Phone is required",
                  })}
                  className="w-full p-3 bg-gray-100 rounded-md outline-none"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <textarea
                rows={6}
                placeholder="Your Message"
                {...register("message")}
                className="w-full p-3 bg-gray-100 rounded-md outline-none"
              />
            </div>

            {/* Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
