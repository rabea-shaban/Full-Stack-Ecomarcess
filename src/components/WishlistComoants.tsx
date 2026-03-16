const urelImg = "http://localhost:5000/uploads/";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { getWishlist, removeFromWishlist } from "../utils/wishlist";

const WishlistComoants = () => {
  const [products, setProducts] = useState<any[]>([]);
  // Wishlist Count
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    setProducts(getWishlist());
    const updateWishlist = () => {
      const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
      setWishlistCount(wishlist.length);
    };
    updateWishlist();
  }, []);

  const removeItem = (id: string) => {
    removeFromWishlist(id);
    setProducts(getWishlist());
  };
  return (
    <>
      <div className="flex items-center justify-between mt-10 mb-6">
        <h5 className="text-lg font-semibold">Wishlist ({wishlistCount})</h5>

        {/* Move All To Bag */}
        <button className="border border-gray-300 px-6 py-3 rounded-md font-medium hover:bg-black hover:text-white transition">
          Move All To Bag
        </button>
      </div>

      <div className=" relative grid grid-cols-1 md:grid-cols-4 gap-10 py-16">
        {products.map((product) => (
          <div key={product._id} className="relative text-center">
            <button
              onClick={() => removeItem(product._id)}
              className="absolute top-2 right-2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-red-500 hover:text-white transition">
              <FaTrash />
            </button>

            <div className="relative bg-gray-200 rounded-2xl overflow-hidden mb-6 flex items-center justify-center">
              <img
                className="w-full h-[300px] object-cover"
                src={`${urelImg}${product.image}`}
                alt={product.name}
              />

              <button className="absolute bottom-0 w-full bg-black text-white py-3">
                Add To Cart
              </button>
            </div>

            <h3 className="text-lg font-semibold">{product.name}</h3>

            <p className="text-red-500 font-bold mt-2">${product.price}</p>
          </div>
        ))}

        {products.length === 0 && (
          <p className="text-center col-span-3 text-gray-500">
            Your wishlist is empty
          </p>
        )}
      </div>
    </>
  );
};

export default WishlistComoants;
