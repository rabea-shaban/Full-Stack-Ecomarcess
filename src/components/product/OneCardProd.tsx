import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import type { IProduct } from "../../interface";
import { isInWishlist, toggleWishlist } from "../../utils/wishlist";
import { useNavigate } from "react-router-dom";
import { IMG_URL } from "../../utils/axios";
import { useDispatch } from "react-redux";
import { addItem } from "../../App/slices/cartSlice";
type Props = {
  product: IProduct;
};

const OneCardProd = ({ product }: Props) => {
  const [view, setView] = useState<IProduct | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const [liked, setLiked] = useState(isInWishlist(product._id));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = () => !!localStorage.getItem("token");

  function open(product: IProduct) {
    setView(product);
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const handleWishlist = () => {
    if (!isLoggedIn()) {
      navigate("/auth/login");
      return;
    }

    toggleWishlist(product);
    setLiked(!liked);
  };

  const handleAddToCart = () => {
    if (!isLoggedIn()) {
      navigate("/auth/login");
      return;
    } else {
      console.log("Added to cart", product);
      dispatch(addItem(product));
    }
  };

  return (
    <div className="relative">
      {/* Image */}
      <div className="relative cart-slider-tocart overflow-hidden img bg-gray-200 rounded-2xl mb-10 flex items-center justify-center">
        <img
          className="w-full h-[400px] object-cover"
          src={`${IMG_URL}${product.image}`}
          alt=""
        />

        <button
          onClick={() => handleAddToCart()}
          className="absolute cursor-pointer bottom-0 btn-card bg-black w-full text-white py-3 rounded-md"
        >
          Add To Cart
        </button>
      </div>

      {/* Info */}
      <div className="my-5">
        <h5 className="text-[16px] font-bold">{product.name}</h5>

        <p>{product.category.name}</p>

        <span className="text-[#DB4444] text-[16px]">{product.price}$</span>

        <span className="text-gray-400 text-[16px] ml-5 line-through">
          160$
        </span>

        <div className="rating">
          {"⭐".repeat(Math.round(product.rating || 0))}

          <span className="text-gray-300">( {product.rating})</span>
        </div>
      </div>

      {/* Icons */}
      <div className="text-2xl space-y-2 absolute top-0 right-0 mt-2 me-2">
        {/* Wishlist */}
        <div
          onClick={handleWishlist}
          className="bg-white p-2 rounded-full flex justify-center items-center cursor-pointer"
        >
          <FaRegHeart className={liked ? "text-red-500" : ""} />
        </div>

        {/* View */}
        <div
          onClick={() => open(product)}
          className="cursor-pointer bg-white p-2 rounded-full flex justify-center items-center"
        >
          <GrView />
        </div>
      </div>

      {/* Discount */}
      <span className="absolute top-0 mt-2 ms-2 bg-[#DB4444] text-white px-5 py-3 inline-block rounded-md">
        -40%
      </span>

      {/* Modal */}
      <Dialog open={isOpen} as="div" className="relative z-50" onClose={close}>
        <div className="fixed inset-0 bg-black/40" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="w-full max-w-4xl bg-white rounded-2xl p-6">
            {view && (
              <div className="grid md:grid-cols-2 gap-6">
                {/* Image */}
                <img
                  src={`${IMG_URL}${view.image}`}
                  className="w-full h-[400px] object-cover rounded-xl"
                />

                {/* Details */}
                <div className="space-y-4">
                  <DialogTitle className="text-2xl font-bold">
                    {view.name}
                  </DialogTitle>

                  <p className="text-gray-500">
                    Category: {view.category.name}
                  </p>

                  <p className="text-2xl text-red-500 font-bold">
                    ${view.price}
                  </p>

                  <p className="text-gray-600">
                    {view.description || "No description available"}
                  </p>

                  <button
                    onClick={handleAddToCart}
                    className="bg-black text-white px-6 py-3 rounded-lg"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};

export default OneCardProd;
