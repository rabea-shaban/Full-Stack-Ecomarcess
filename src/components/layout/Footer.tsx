import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoSendOutline } from "react-icons/io5";
import Container from "../ui/Container";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 mt-10">
      <Container className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Exclusive */}
        <div>
          <h3 className="text-xl font-bold mb-5">Exclusive</h3>

          <h4 className="font-semibold mb-3">Subscribe</h4>
          <p className="text-gray-400 text-sm mb-4">
            Get 10% off your first order
          </p>

          <div className="flex border border-gray-600 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black px-4 py-2 w-full outline-none"
            />

            <button className="px-4">
              <IoSendOutline size={20} />
            </button>
          </div>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-bold mb-5">Support</h3>

          <p className="text-gray-400 text-sm mb-2">
            111 Bijoy sarani, Dhaka,
            <br />
            DH 1515, Bangladesh.
          </p>

          <p className="text-gray-400 text-sm mb-2">exclusive@gmail.com</p>

          <p className="text-gray-400 text-sm">+88015-88888-9999</p>
        </div>

        {/* Account */}
        <div>
          <h3 className="text-xl font-bold mb-5">Account</h3>

          <ul className="space-y-2 text-gray-400">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Link */}
        <div>
          <h3 className="text-xl font-bold mb-5">Quick Link</h3>

          <ul className="space-y-2 text-gray-400">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h3 className="text-xl font-bold mb-5">Download App</h3>

          <p className="text-gray-400 text-sm mb-4">
            Save $3 with App New User Only
          </p>

          <div className="flex gap-3 mb-4">
            <img src="/Qr Code.png" className="w-20 h-20" />

            <div className="flex flex-col gap-2">
              <img src="/google-play.png" className="h-8" />
              <img src="/app-store.png" className="h-8" />
            </div>
          </div>

          <div className="flex gap-4 text-lg">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </Container>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        © Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
};

export default Footer;
