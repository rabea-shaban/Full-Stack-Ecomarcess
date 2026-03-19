import { FaEye, FaShoppingCart, FaStar, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IMG_URL } from "../../utils/axios";
import type { IProduct } from "../../interface";

const DAYS_NEW = 14; // consider product new if created within this many days

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
  const rating = Math.round(product.rating || 0);
  const hasDiscount = product.price > 1000;
  const discountPercent = hasDiscount ? 20 : 0;
  const originalPrice = hasDiscount ? product.price + Math.round(product.price * (discountPercent / 100)) : product.price + 200;

  return (
    <article className="group bg-white rounded-lg overflow-hidden border border-transparent hover:border-gray-200 transition-shadow shadow-sm hover:shadow-md">
      {/* IMAGE AREA */}
      <div className="relative bg-gray-50 p-4 flex items-center justify-center h-44">
        {/* top-right stacked icons */}
        <div className="absolute top-3 right-3 flex flex-col items-end gap-2">
          <button
            aria-label="Wishlist"
            title="Wishlist"
            className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm text-gray-600 hover:text-rose-500"
          >
            <FaRegHeart size={14} />
          </button>

          <Link to={`/products/${product._id}`} aria-label="Quick view" title="Quick view" className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm text-gray-600 hover:text-gray-900 inline-flex">
            <FaEye size={14} />
          </Link>
        </div>

        {/* Badges (left top) */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {hasDiscount && (
            <span className="inline-flex items-center text-xs font-semibold px-2 py-1 rounded bg-red-500 text-white">-{discountPercent}%</span>
          )}

          {isNewProduct(product.createdAt) && (
            <span className="inline-flex items-center text-xs font-semibold px-2 py-1 rounded bg-green-600 text-white">NEW</span>
          )}
        </div>

        {/* Product Image (link) */}
        <Link to={`/products/${product._id}`} className="flex items-center justify-center w-full h-full">
          <img
            src={`${IMG_URL}${product.image}`}
            alt={product.name}
            className="max-h-36 object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* ADD TO CART BAR - hidden until hover */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 w-11/12 opacity-0 translate-y-3 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
          <button
            className="w-full bg-black text-white py-2 rounded-md flex items-center justify-center gap-2 shadow-md hover:bg-gray-900"
            aria-label={`Add ${product.name} to cart`}
          >
            <FaShoppingCart size={14} />
            <span className="text-sm font-medium">Add To Cart</span>
          </button>
        </div>
      </div>

      {/* INFO */}
      <div className="px-4 pb-4 pt-3">
        <Link to={`/products/${product._id}`} className="block">
          <h3 className="text-sm font-medium text-gray-800 mb-2 h-6 overflow-hidden" title={product.name}>{product.name}</h3>
        </Link>

        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="text-sm font-bold text-rose-600">{formatPrice(product.price)}</div>

              <div className="text-xs text-gray-400 line-through">{formatPrice(originalPrice)}</div>
            </div>

            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    size={14}
                    className={i < rating ? "text-yellow-400" : "text-gray-200"}
                    aria-hidden
                  />
                ))}
              </div>

              <span className="text-xs text-gray-500">({product.numReviews || 0})</span>
            </div>
          </div>

          {/* small placeholder so layout matches screenshot spacing */}
          <div />
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
