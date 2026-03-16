import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./HeroSlider.css";

const HeroSlider = () => {
  return (
    <div className="HeroSlider md:col-span-9 mt-6 ">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        autoplay={{ delay: 4000 }}
        className="bg-black rounded-md ">
        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-12 items-center px-6 md:px-8 py-10 md:py-14 gap-8">
            {/* Left Content */}
            <div className="text-center md:text-left md:col-span-6 space-y-6">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <img src="/Apple.png" className="w-10" alt="apple" />
                <span className="text-gray-300 text-sm">iPhone 14 Series</span>
              </div>

              <h2 className="text-white text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight">
                Up to 10% <br /> off Voucher
              </h2>

              <Link
                to="/shop"
                className="flex items-center justify-center md:justify-start gap-3 text-white text-lg underline">
                Shop Now
                <FaArrowRight />
              </Link>
            </div>

            {/* Image */}
            <div className="md:col-span-6 flex justify-center md:justify-end">
              <img
                src="/SliderHero.jpg"
                className="w-[300px] md:w-[420px] object-contain"
                alt="iphone"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-12 items-center px-6 md:px-8 py-10 md:py-14 gap-8">
            <div className="text-center md:text-left md:col-span-6 space-y-6">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <img src="/Apple.png" className="w-10" alt="apple" />
                <span className="text-gray-300 text-sm">iPhone 14 Series</span>
              </div>

              <h2 className="text-white text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight">
                Up to 10% <br /> off Voucher
              </h2>

              <Link
                to="/shop"
                className="flex items-center justify-center md:justify-start gap-3 text-white text-lg underline">
                Shop Now
                <FaArrowRight />
              </Link>
            </div>

            <div className="md:col-span-6 flex justify-center md:justify-end">
              <img
                src="/SliderHero.jpg"
                className="w-[300px] md:w-[420px] object-contain"
                alt="iphone"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
