import { FaRegHeart } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import type { IProduct } from "../../interface";
type Props = {
  product: IProduct;
};
const urelImg = "http://localhost:5000/uploads/";
const OneCardProd = ({ product }: Props) => {
  return (
    <div className="relative">
      <div className="relative cart-slider-tocart overflow-hidden img bg-gray-200 rounded-2xl mb-10 flex items-center justify-center">
        <img
          className="w-full h-[400px] object-cover"
          src={`${urelImg}${product.image}`}
          alt=""
        />

        <button
          onClick={() => console.log(product)}
          className="absolute cursor-pointer bottom-0 btn-card bg-black w-full text-white py-3 rounded-md">
          Add To Cart
        </button>
      </div>

      <div className="my-5">
        <h5 className="text-[16px] font-bold">{product.name}</h5>
        <p>{product.categoryId.name}</p>
        <span className="text-[#DB4444] text-[16px]">{product.price}$</span>
        <span className="text-gray-400 text-[16px] ml-5 line-through">
          160$
        </span>
        <div className="rating">⭐⭐⭐⭐⭐</div>
      </div>

      <div className="text-2xl space-y-2 absolute top-0 right-0 mt-2 me-2 ">
        <div className="bg-white p-2 rounded-full flex justify-center items-center">
          <FaRegHeart />
        </div>
        <div className="bg-white p-2 rounded-full flex justify-center items-center">
          <GrView />
        </div>
      </div>

      <span className="absolute top-0 mt-2 ms-2 bg-[#DB4444] text-white px-5 py-3 inline-block rounded-md">
        -40%
      </span>
    </div>
  );
};

export default OneCardProd;
