import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import Container from "../../components/ui/Container";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../App/store";
import { IMG_URL } from "../../utils/axios";
import {
  decreaswQty,
  increaswQty,
  removeFromCart,
} from "../../App/slices/cartSlice";
import type { IProduct } from "../../interface";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const total = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0,
  );

  const handleIncreaswQty = (prod: IProduct) => {
    dispatch(increaswQty(prod._id));
  };

  const handleDecreaswQty = (prod: IProduct) => {
    dispatch(decreaswQty(prod._id));
  };
  const handelRemoveFromCart = (prod: IProduct) => {
    dispatch(removeFromCart(prod._id));
  };

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
      {cart.map((item) => (
        <div
          key={item._id}
          className="grid grid-cols-4 bg-white shadow-sm border rounded-md px-8 py-5 text-sm font-medium text-gray-600"
        >
          <div className="flex items-center gap-4">
            <FaTimes
              onClick={() => handelRemoveFromCart(item)}
              className="cursor-pointer text-gray-400 hover:text-black"
            />
            <img
              src={`${IMG_URL}${item.image}`}
              className="w-16 h-16 object-cover"
              alt=""
            />
            <p>{item.name}</p>
          </div>

          <p>${item.price}</p>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => handleDecreaswQty(item)}
              className="border w-8 h-8 flex items-center justify-center rounded-md"
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => handleIncreaswQty(item)}
              className="border w-8 h-8 flex items-center justify-center rounded-md"
            >
              +
            </button>
          </div>
          <p className="text-right">
            ${(item.price * (item.quantity || 1)).toFixed(2)}
          </p>
        </div>
      ))}

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
            <span>${total.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-sm mb-3 border-b pb-3">
            <span>Shipping:</span>
            <span>Free</span>
          </div>

          <div className="flex justify-between text-sm font-medium mt-3 mb-6">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <Link
            to="/account/checkout"
            className="w-fit inline-block px-4 py-4 bg-red-500 text-white  rounded-md text-sm hover:bg-red-600 transition"
          >
            Procees to checkout
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
