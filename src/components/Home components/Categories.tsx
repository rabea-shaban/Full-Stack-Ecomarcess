// Import Swiper React components
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
// import required modules
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera, CiHeadphones, CiLaptop, CiMobile1 } from "react-icons/ci";

import { MdOutlineVideogameAsset } from "react-icons/md";
import { FreeMode, Navigation } from "swiper/modules";
import Container from "../ui/Container";

const Categorie = [
  {
    id: 1,
    icon: <CiMobile1 />,
    title: "Mobile",
  },
  {
    id: 2,
    icon: <CiLaptop />,
    title: "Laptop",
  },
  {
    id: 3,
    icon: <BsSmartwatch />,
    title: "Smart Watch",
  },
  {
    id: 4,
    icon: <CiCamera />,
    title: "Camera",
  },
  {
    id: 5,
    icon: <MdOutlineVideogameAsset />,
    title: "Game",
  },

  {
    id: 6,
    icon: <CiHeadphones />,
    title: "Headphone",
  },
];

const Categories = () => {
  return (
    <Container className="my-10  ">
      <div className="flex">
        <span className="border-s-[3rem] rounded-md  border-[#DB4444] "></span>
        <h5 className="ps-3 text-2xl font-bold text-[#DB4444] ">Categories</h5>
      </div>

      <div className="flex my-5 items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold mr-25 ">Browse By Category</h3>
        </div>

        <div className="flex items-center gap-3">
          <button className="prevCategories bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center">
            <FaArrowLeft />
          </button>

          <button className="nextCategories bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center">
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
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        loop={true}
        spaceBetween={30}
        freeMode={true}
        navigation={{
          nextEl: ".nextCategories",
          prevEl: ".prevCategories",
        }}
        modules={[FreeMode, Navigation]}>
        {Categorie.map((category) => (
          <SwiperSlide key={category.id}>
            <div className="flex flex-col items-center justify-center p-8 bg-gray-100 rounded-lg hover:bg-[#DB4444] hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
              <div className="text-5xl mb-3">{category.icon}</div>
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Categories;
