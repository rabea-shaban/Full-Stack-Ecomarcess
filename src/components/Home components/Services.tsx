import { FaTruck, FaCheck } from "react-icons/fa";
import { FiHeadphones } from "react-icons/fi";

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center py-16">

      {/* Delivery */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center">
          <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-white text-xl">
            <FaTruck />
          </div>
        </div>
        <h4 className="mt-5 font-bold text-lg">FREE AND FAST DELIVERY</h4>
        <p className="text-gray-400 text-sm">
          Free delivery for all orders over $140
        </p>
      </div>

      {/* Support */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center">
          <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-white text-xl">
            <FiHeadphones />
          </div>
        </div>
        <h4 className="mt-5 font-bold text-lg">24/7 CUSTOMER SERVICE</h4>
        <p className="text-gray-400 text-sm">
          Friendly 24/7 customer support
        </p>
      </div>

      {/* Guarantee */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center">
          <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-white text-xl">
            <FaCheck />
          </div>
        </div>
        <h4 className="mt-5 font-bold text-lg">MONEY BACK GUARANTEE</h4>
        <p className="text-gray-400 text-sm">
          We return money within 30 days
        </p>
      </div>

    </div>
  );
};

export default Services;