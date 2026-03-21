import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import Container from "../../components/ui/Container";

const Cart = () => {
  return (
    <Container>
      {/* Breadcrumb */}
      <p className="text-sm text-gray-400 mt-6 mb-12">Home / Cart</p>

      {/* Header */}
      <div className="grid grid-cols-4 bg-white shadow-sm border rounded-md px-8 py-5 text-sm font-medium text-gray-600">
        <p>Product</p>
        <p>Price</p>
        <p className="text-center">Quantity</p>
        <p className="text-right">Subtotal</p>
      </div>

      {/* Item */}
      <div className="grid grid-cols-4 items-center bg-white shadow-sm border rounded-md px-8 py-6 mt-6">
        {/* Product */}
        <div className="flex items-center gap-4">
          <button className="text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xs">
            <FaTimes />
          </button>

          <img
            src="/images/products/monitor.png"
            className="w-14 h-14 object-contain"
          />

          <p className="text-sm">LCD Monitor</p>
        </div>

        {/* Price */}
        <p className="text-sm">$650</p>

        {/* Quantity */}
        <div className="flex justify-center">
          <input
            type="number"
            defaultValue={1}
            className="w-16 h-10 border rounded-md text-center outline-none"
          />
        </div>

        {/* Subtotal */}
        <p className="text-sm text-right">$650</p>
      </div>

      {/* Item */}
      <div className="grid grid-cols-4 items-center bg-white shadow-sm border rounded-md px-8 py-6 mt-4">
        <div className="flex items-center gap-4">
          <button className="text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xs">
            <FaTimes />
          </button>

          <img
            src="/images/products/gamepad.png"
            className="w-14 h-14 object-contain"
          />

          <p className="text-sm">HI Gamepad</p>
        </div>

        <p className="text-sm">$550</p>

        <div className="flex justify-center">
          <input
            type="number"
            defaultValue={2}
            className="w-16 h-10 border rounded-md text-center outline-none"
          />
        </div>

        <p className="text-sm text-right">$1100</p>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-8">
        <Link
          to="/products"
          className="border px-8 py-3 rounded-md text-sm hover:bg-gray-100 transition"
        >
          Return To Shop
        </Link>

        <button className="border px-8 py-3 rounded-md text-sm hover:bg-gray-100 transition">
          Update Cart
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mt-14 items-start my-5">
        {/* Coupon */}
        <div className="flex gap-4">
          <input
            placeholder="Coupon Code"
            className="border px-4 py-3 w-full rounded-md outline-none text-sm"
          />
          <button className="bg-red-500 text-white px-8 py-3 rounded-md text-sm hover:bg-red-600 transition">
            Apply Coupon
          </button>
        </div>

        {/* Cart Total */}
        <div className="border rounded-md p-6 w-full max-w-md">
          <h3 className="font-semibold mb-4">Cart Total</h3>

          <div className="flex justify-between text-sm mb-3">
            <span>Subtotal:</span>
            <span>$1750</span>
          </div>

          <div className="flex justify-between text-sm mb-3 border-b pb-3">
            <span>Shipping:</span>
            <span>Free</span>
          </div>

          <div className="flex justify-between text-sm font-medium mt-3 mb-6">
            <span>Total:</span>
            <span>$1750</span>
          </div>

          <button className="w-full bg-red-500 text-white py-3 rounded-md text-sm hover:bg-red-600 transition">
            Procees to checkout
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
