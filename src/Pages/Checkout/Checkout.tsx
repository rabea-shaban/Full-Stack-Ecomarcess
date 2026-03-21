import { Link } from "react-router-dom";
import Container from "../../components/ui/Container";

const Checkout = () => {
  return (
    <Container>
      {/* Breadcrumb */}
      <p className="text-sm text-gray-400 mt-6 mb-10">
        Account / <Link to="/account"> My Account</Link> /{" "}
        <Link to="/products"> Product</Link> /
        <Link to="/account/cart"> View Cart</Link> / CheckOut
      </p>

      <div className="grid md:grid-cols-2 gap-16">
        {/* LEFT - Billing Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-8">Billing Details</h2>

          <div className="space-y-5">
            <input placeholder="First Name *" className="input" />
            <input placeholder="Company Name" className="input" />
            <input placeholder="Street Address *" className="input" />
            <input
              placeholder="Apartment, floor, etc. (optional)"
              className="input"
            />
            <input placeholder="Town/City *" className="input" />
            <input placeholder="Phone Number *" className="input" />
            <input placeholder="Email Address *" className="input" />
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-3 mt-6">
            <input type="checkbox" className="accent-red-500" />
            <p className="text-sm">
              Save this information for faster check-out next time
            </p>
          </div>
        </div>

        {/* RIGHT - Order Summary */}
        <div>
          {/* Products */}
          <div className="space-y-5">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img src="/images/products/gamepad.png" className="w-12" />
                <p>LCD Monitor</p>
              </div>
              <p>$650</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img src="/images/products/monitor.png" className="w-12" />
                <p>HI Gamepad</p>
              </div>
              <p>$1100</p>
            </div>
          </div>

          {/* Totals */}
          <div className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>$1750</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span>Shipping:</span>
              <span>Free</span>
            </div>

            <div className="flex justify-between font-medium pt-2">
              <span>Total:</span>
              <span>$1750</span>
            </div>
          </div>

          {/* Payment */}
          <div className="mt-6 space-y-4">
            <label className="flex items-center gap-3">
              <input type="radio" name="payment" />
              Bank
            </label>

            <label className="flex items-center gap-3">
              <input type="radio" name="payment" defaultChecked />
              Cash on delivery
            </label>
          </div>

          {/* Coupon */}
          <div className="flex gap-4 mt-6">
            <input
              placeholder="Coupon Code"
              className="border px-4 py-3 w-full rounded-md outline-none text-sm"
            />
            <button className="bg-red-500 text-white px-6 rounded-md hover:bg-red-600 transition">
              Apply Coupon
            </button>
          </div>

          {/* Button */}
          <button className="mt-6 bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition">
            Place Order
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Checkout;
