import Container from "../../components/ui/Container";
import { FaShippingFast, FaHeadset, FaCheckCircle } from "react-icons/fa";
import {
  FaStore,
  FaDollarSign,
  FaShoppingBag,
  FaMoneyBillWave,
} from "react-icons/fa";
const stats = [
  {
    title: "Sellers active our site",
    value: "10.5k",
    icon: <FaStore />,
  },
  {
    title: "Monthly Product Sale",
    value: "33k",
    highlight: true,
    icon: <FaDollarSign />,
  },
  {
    title: "Customer active in our site",
    value: "45.5k",
    icon: <FaShoppingBag />,
  },
  {
    title: "Annual gross sale in our site",
    value: "25k",
    icon: <FaMoneyBillWave />,
  },
];

const team = [
  { name: "Tom Cruise", role: "Founder & Chairman", img: "Tom Cruise.png" },
  { name: "Emma Watson", role: "Managing Director", img: "Emma Watson.png" },
  { name: "Will Smith", role: "Product Designer", img: "Will Smith.png" },
];

const features = [
  {
    title: "FREE AND FAST DELIVERY",
    desc: "Free delivery for all orders over $140",
    icon: <FaShippingFast />,
  },
  {
    title: "24/7 CUSTOMER SERVICE",
    desc: "Friendly 24/7 customer support",
    icon: <FaHeadset />,
  },
  {
    title: "MONEY BACK GUARANTEE",
    desc: "We return money within 30 days",
    icon: <FaCheckCircle />,
  },
];

const About = () => {
  return (
    <Container className="bg-white">
      <p className="text-sm text-gray-400 mb-2 mt-5">Home / About</p>

      <div className="grid md:grid-cols-2 gap-10 items-center py-16">
        <div>
          <h1 className="text-4xl font-bold mb-6">Our Story</h1>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast pace.
          </p>
        </div>

        <img
          src="/AboutBaner.jpg"
          alt="shopping"
          className="rounded-lg w-full h-[350px] object-cover"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`group p-6 rounded-xl border text-center transition duration-300 cursor-pointer
      ${
        item.highlight
          ? "bg-red-500 text-white shadow-lg scale-105"
          : "bg-white text-black hover:shadow-xl hover:-translate-y-2"
      }`}
          >
            {/* Icon */}
            <div
              className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl transition
        ${
          item.highlight
            ? "bg-white text-red-500"
            : "bg-gray-200 text-black group-hover:bg-black group-hover:text-white"
        }`}
            >
              {item.icon}
            </div>

            {/* Value */}
            <h3 className="text-2xl font-bold">{item.value}</h3>

            {/* Title */}
            <p className="text-sm mt-2">{item.title}</p>
          </div>
        ))}
      </div>

      <div className="py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group transition">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-[300px] object-contain transition group-hover:scale-105"
                />
              </div>

              <h3 className="font-semibold text-lg mt-4">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-100 mb-10 py-12 rounded-xl">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {features.map((feature, index) => (
            <div key={index}>
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-black text-white flex items-center justify-center text-xl">
                {feature.icon}
              </div>
              <h4 className="font-semibold">{feature.title}</h4>
              <p className="text-gray-500 text-sm mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default About;
