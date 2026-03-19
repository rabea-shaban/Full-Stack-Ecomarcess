import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductCard from "../../components/product/ProductCard";
import axiosInstance, { IMG_URL } from "../../utils/axios";
import type { IProduct } from "../../interface";
import Container from "../../components/ui/Container";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<IProduct | null>(null);
  const [related, setRelated] = useState<IProduct[]>([]);

  const [selectedImage, setSelectedImage] = useState("");
  const [qty, setQty] = useState(1);
  const [selectedColor, setSelectedColor] = useState("red");
  const [selectedSize, setSelectedSize] = useState("M");
  const [fav, setFav] = useState(false);

  useEffect(() => {
    if (!id) return;

    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchData = async () => {
      try {
        const { data } = await axiosInstance.get(`/products/${id}`);
        setProduct(data);
        setSelectedImage(data.image);

        const res = await axiosInstance.get("/products");

        const filtered = res.data
          .filter((p: IProduct) => p._id !== id)
          .slice(0, 4);

        setRelated(filtered);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [id]);

  if (!product) return <p className="p-6">Loading...</p>;

  const images = [product.image, product.image, product.image, product.image];

  return (
    <Container className="p-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link to="/products">account</Link> / {product.category.name} /
        {product.name}
      </nav>

      {/* 🔥 MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* 🔥 LEFT (images) */}
        <div className="flex gap-4">
          {/* thumbnails */}
          <div className="flex flex-col gap-3">
            {images.map((img, i) => (
              <img
                key={i}
                src={`${IMG_URL}${img}`}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 object-contain bg-gray-100 p-2 rounded cursor-pointer `}
              />
            ))}
          </div>

          {/* main image */}
          <div className="flex-1 bg-gray-100 rounded p-6 flex items-center justify-center">
            <img
              src={`${IMG_URL}${selectedImage}`}
              className="max-h-96 object-contain"
            />
          </div>
        </div>

        {/* 🔥 RIGHT (details) */}
        <div>
          <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>

          {/* rating */}
          <div className="flex items-center gap-3 mb-4">
            {"⭐".repeat(Math.round(product.rating || 0))}
            <span className="text-gray-400 text-sm">
              ({product.numReviews || 0})
            </span>
            <span className="text-green-600 text-sm">In Stock</span>
          </div>

          {/* price */}
          <div className="text-2xl font-bold text-red-500 mb-4">
            ${product.price}
          </div>

          {/* desc */}
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* 🎨 colors */}
          <div className="mb-4">
            <p className="text-sm mb-2">Colours:</p>
            <div className="flex gap-2">
              {["gray", "red"].map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-5 h-5 rounded-full border-2 ${
                    selectedColor === color
                      ? "border-black scale-110"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* 📏 size */}
          <div className="mb-4">
            <p className="text-sm mb-2">Size:</p>
            <div className="flex gap-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 border rounded text-sm ${
                    selectedSize === size
                      ? "bg-red-500 text-white border-red-500"
                      : "border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* ➖➕ + buttons */}
          <div className="flex items-center gap-3 mb-6">
            {/* qty */}
            <div className="flex items-center border rounded overflow-hidden">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-3 py-1"
              >
                -
              </button>

              <span className="px-4">{qty}</span>

              <button
                onClick={() => setQty((q) => q + 1)}
                className="px-3 py-1 bg-red-500 text-white"
              >
                +
              </button>
            </div>

            {/* buy */}
            <button
              onClick={() =>
                console.log({
                  qty,
                  selectedColor,
                  selectedSize,
                })
              }
              className="bg-red-500 text-white px-6 py-2 rounded"
            >
              Buy Now
            </button>

            {/* wishlist */}
            <button onClick={() => setFav(!fav)} className="border p-2 rounded">
              <span className={fav ? "text-red-500" : "text-gray-400"}>❤️</span>
            </button>
          </div>

          {/* info */}
          <div className="border rounded-md p-4 text-sm text-gray-600">
            <p className="font-semibold">Free Delivery</p>
            <p className="text-xs mb-2">
              Enter your postal code for Delivery Availability
            </p>

            <p className="font-semibold">Return Delivery</p>
            <p className="text-xs">Free 30 Days Delivery Returns</p>
          </div>
        </div>
      </div>

      {/* 🔥 RELATED */}
      <div className="mt-12">
        <h2 className="text-red-500 font-semibold mb-4">Related Item</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {related.map((r) => (
            <Link key={r._id} to={`/products/${r._id}`}>
              <ProductCard product={r} />
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
