import { Link } from "react-router-dom";
import Container from "../../components/ui/Container";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../App/store";
import { clearCart } from "../../App/slices/cartSlice";
import { IMG_URL } from "../../utils/axios";
import Swal from "sweetalert2";
const Checkout = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0,
  );

  const handleOrder = () => {
    if (cart.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your cart is empty 🛒",
        confirmButtonColor: "#DB4444",
      });
      return;
    }
  
    Swal.fire({
      title: "Confirm Order?",
      text: "Do you want to place this order?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#DB4444",
      cancelButtonColor: "#999",
      confirmButtonText: "Yes, place order",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Order Placed 🎉",
          text: "Your order has been successfully placed!",
          confirmButtonColor: "#DB4444",
        });
  
        dispatch(clearCart());
      }
    });
  };
  return (
    <Container>
      <p className="text-sm text-gray-400 mt-6 mb-10">
        Account / <Link to="/account"> My Account</Link> /{" "}
        <Link to="/products"> Product</Link> /{" "}
        <Link to="/account/cart"> View Cart</Link> / CheckOut
      </p>

      <div className="grid md:grid-cols-2 gap-16">
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

        <div>
          <div className="space-y-5">
            {cart.map((item) => (
              <div key={item._id} className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img
                    src={`${IMG_URL}${item.image}`}
                    className="w-12 h-12 object-cover"
                  />
                  <p>{item.name}</p>
                </div>
                ${(item.price * (item.quantity || 1)).toFixed(2)}
              </div>
            ))}
          </div>

          {cart.length === 0 && (
            <p className="text-gray-500 mt-5">Your cart is empty</p>
          )}

          <div className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span>Shipping:</span>
              <span>Free</span>
            </div>

            <div className="flex justify-between font-medium pt-2">
              <span>Total:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="bank flex justify-between items-center">
              <label className="flex items-center  gap-3">
                <input type="radio" name="payment" />
                Bank
              </label>
              <div className=" flex gap-6">
                <img src="/Bkash.png" alt="" />
                <img src="/Visa.png" alt="" />
                <img src="/Mastercard.png" alt="" />
                <img src="/Nagad.png" alt="" />
              </div>
            </div>
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
          <button
            onClick={handleOrder}
            disabled={cart.length === 0}
            className="mt-6 bg-red-500 disabled:bg-gray-300 text-white px-8 py-3 rounded-md hover:bg-red-600 transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Checkout;
