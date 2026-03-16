import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import { useEffect, useState } from "react";
import type { IProduct } from "../../interface";
import axiosInstance from "../../utils/axios";
import OneCardProd from "../product/OneCardProd";
import Container from "../ui/Container";

const OurProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const getall = async () => {
      const res = await axiosInstance.get("/products");
      setProducts(res.data);
    };

    getall();
  }, []);

  // تقسيم المنتجات كل 8
  const chunkProducts = [];
  for (let i = 0; i < products.length; i += 8) {
    chunkProducts.push(products.slice(i, i + 8));
  }

  return (
    <Container className="my-10">
      <div className="flex mb-5">
        <span className="border-s-[3rem] rounded-md border-[#DB4444]" />
        <h5 className="ps-3 text-2xl font-bold text-[#DB4444]">Our Products</h5>
      </div>

      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Explore Our Products</h2>

        <div className="flex gap-3">
          <button className="prev w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <FaArrowLeft />
          </button>

          <button className="next w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <FaArrowRight />
          </button>
        </div>
      </div>

      <Swiper
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        modules={[Navigation]}
        spaceBetween={30}>
        {chunkProducts.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {group.map((product) => (
                <OneCardProd key={product._id} product={product} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default OurProducts;
