import { FaEye, FaShoppingCart, FaStar, FaRegHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { IMG_URL } from "../../utils/axios";
import type { IProduct } from "../../interface";
import { useDispatch } from "react-redux";
import { isInWishlist, toggleWishlist } from "../../utils/wishlist";
import { useState } from "react";
import { addItem } from "../../App/slices/cartSlice";

const DAYS_NEW = 14;

const formatPrice = (value?: number) => {
  if (value == null) return "-";
  return `$${value.toLocaleString()}`;
};

const isNewProduct = (createdAt?: string | Date) => {
  if (!createdAt) return false;
  const created = new Date(createdAt);
  const diffDays = (Date.now() - created.getTime()) / (1000 * 60 * 60 * 24);
  return diffDays <= DAYS_NEW;
};

const ProductCard = ({ product }: { product: IProduct }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [liked, setLiked] = useState(isInWishlist(product._id));

  const rating = Math.round(product.rating || 0);
  const hasDiscount = product.price > 1000;
  const discountPercent = hasDiscount ? 20 : 0;

  const originalPrice = hasDiscount
    ? product.price + Math.round(product.price * 0.2)
    : product.price + 200;

  // 🔐 Auth Check
  const requireAuth = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/auth/login");
      return false;
    }
    return true;
  };

  // 🛒 Add To Cart
  const handleAddToCart = () => {
    if (!requireAuth()) return;

    dispatch(addItem(product));
  };

  const handleWishlist = () => {
    if (!requireAuth()) return;

    toggleWishlist(product);
    setLiked(!liked);
  };

  return (
    <article className="group relative bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
      
      <div className="relative bg-gray-50 h-52 flex items-center justify-center overflow-hidden">
        <Link
          to={`/products/${product._id}`}
          className="w-full h-full flex items-center justify-center"
        >
          <img
            src={`${IMG_URL}${product.image}`}
            alt={product.name}
            className="max-h-40 object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </Link>

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300" />

        <div className="absolute inset-0 z-50 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={handleAddToCart}
            className="w-10 h-10 z-50 rounded-full bg-white flex items-center justify-center shadow hover:bg-black hover:text-white transition"
          >
            <FaShoppingCart size={14} />
          </button>

          <Link
            to={`/products/${product._id}`}
            className="w-10 h-10 z-50 rounded-full bg-white flex items-center justify-center shadow hover:bg-black hover:text-white transition"
          >
            <FaEye size={14} />
          </Link>

          <button
            onClick={handleWishlist}
            className="w-10 h-10 z-50 rounded-full bg-white flex items-center justify-center shadow hover:bg-rose-500 hover:text-white transition"
          >
            <FaRegHeart size={14} className={liked ? "text-red-500" : ""} />
          </button>



        </div>

        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {hasDiscount && (
            <span className="text-xs bg-red-500 text-white px-2 py-1 rounded">
              -{discountPercent}%
            </span>
          )}

          {isNewProduct(product.createdAt) && (
            <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">
              NEW
            </span>
          )}
        </div>
      </div>

      <div className="p-4">
        <Link to={`/products/${product._id}`}>
          <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2 hover:text-black">
            {product.name}
          </h3>
        </Link>

        {/* PRICE */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-rose-600">
            {formatPrice(product.price)}
          </span>

          <span className="text-sm text-gray-400 line-through">
            {formatPrice(originalPrice)}
          </span>
        </div>

        {/* RATING */}
        <div className="flex items-center gap-2 mt-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                size={13}
                className={i < rating ? "text-yellow-400" : "text-gray-200"}
              />
            ))}
          </div>

          <span className="text-xs text-gray-500">
            ({product.numReviews || 0})
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
