// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
// import required modules

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { IProduct } from "../../interface";
import axiosInstance from "../../utils/axios";
import OneCardProd from "../product/OneCardProd";
import Container from "../ui/Container";

const BestSelling = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getall = async () => {
      try {
        const res = await axiosInstance.get("/products");
        setProducts(res.data.slice(5, 9));
      } catch (err) {
        setError(`Failed to fetch products ${err}`);
      } finally {
        setLoading(false);
      }
    };

    getall();
  }, []);

  return (
    <Container className="my-10  ">
      <div className="flex">
        <span className="border-s-[3rem]  rounded-md  border-[#DB4444] "></span>
        <h5 className="ps-3 text-2xl font-bold text-[#DB4444] ">This Month</h5>
      </div>
      <div className="flex items-center justify-between mb-6">
        <h5 className="text-3xl font-bold">Best Selling Products</h5>
        <Link
          className="block w-fit px-8 py-3 bg-[#DB4444] text-white rounded-md"
          to="">
          View All
        </Link>
      </div>

      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={30}
        freeMode={true}>
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="w-8 h-8 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center h-48 text-red-500 font-bold">
            {error}
          </div>
        ) : (
          products.map((product) => (
            <SwiperSlide key={product._id}>
              <OneCardProd product={product} />
            </SwiperSlide>
          ))
        )}
      </Swiper>

      <Link
        className="block w-fit m-auto text-center mt-10 px-8 py-3 bg-[#DB4444] text-white rounded-md"
        to="">
        View All Products
      </Link>
    </Container>
  );
};

export default BestSelling;
