// Import Swiper React components
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
// import required modules
import { FreeMode, Navigation } from "swiper/modules";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { IProduct } from "../../interface";
import axiosInstance from "../../utils/axios";
import OneCardProd from "../product/OneCardProd";
import Container from "../ui/Container";

const Todays = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getall = async () => {
      try {
        const res = await axiosInstance.get("/products");
        setProducts(res.data.slice(0, 5));
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
        <h5 className="ps-3 text-2xl font-bold text-[#DB4444] ">Today’s</h5>
      </div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <h3 className="text-[30px] font-bold mr-25 ">Flash Sales</h3>

          <div className="flex items-center space-x-2">
            <div>
              <p className="text-[18px] font-medium">Days</p>
              <p className="font-bold text-2xl">23</p>
            </div>
            <span className="text-[#E07575]">:</span>

            <div>
              <p className="text-[18px] font-medium">Hours</p>
              <p className="font-bold text-2xl">12</p>
            </div>
            <span className="text-[#E07575]">:</span>

            <div>
              <p className="text-[18px] font-medium">Min</p>
              <p className="font-bold text-2xl">45</p>
            </div>
            <span className="text-[#E07575]">:</span>

            <div>
              <p className="text-[18px] font-medium">Sec</p>
              <p className="font-bold text-2xl">33</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="prev bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center">
            <FaArrowLeft />
          </button>

          <button className="next bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center">
            <FaArrowRight />
          </button>
        </div>
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
        loop={true}
        spaceBetween={30}
        freeMode={true}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        modules={[FreeMode, Navigation]}>
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

export default Todays;
