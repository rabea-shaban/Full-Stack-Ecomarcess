import type { ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Category {
  name: string;
  icon?: ReactNode;
  path: string;
}

const categories: Category[] = [
  { name: "Woman’s Fashion", icon: <FaArrowRight />, path: "" },
  { name: "Men’s Fashion", icon: <FaArrowRight />, path: "" },
  { name: "Electronics", path: "" },
  { name: "Medicine", path: "" },
  { name: "Home & Lifestyle", path: "" },
  { name: "Sports & Outdoor", path: "" },
  { name: "Baby’s & Toys", path: "" },
  { name: "Groceries & Pets", path: "" },
  { name: "Health & Beauty", path: "" },
];

const Side = () => {
  return (
    <div className="md:col-span-3 p-3 border-r  border-[#ccc]  ">
      <ul className="mt-6">
        {categories.map((item) => (
          <li
            key={item.name}
            className="flex items-center space-x-3 justify-between text-[16px] font-medium mb-3">
            <Link to={item.path}>{item.name}</Link>
            {item.icon}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Side;
