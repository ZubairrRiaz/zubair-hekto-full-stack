import { FaFacebook } from "react-icons/fa";
import { RxInstagramLogo } from "react-icons/rx";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#EEEFFB] py-12 text-[#8A8FB9]">
        <div className="container mx-auto ">
          {/* Responsive Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-center md:text-left place-items-center">
            <div>
              {/* Logo */}
              <h1 className="text-4xl font-bold text-black mb-6">Hekto</h1>
              <div className="flex items-center justify-center sm:justify-start mb-6">
                {/* Search */}
                <div className="flex w- bg-white rounded-md shadow-md">
                  <input
                    className="flex-grow p-3 text-black outline-none"
                    type="search"
                    placeholder="Enter Email Address"
                  />
                  <button className="px-4 py-2 bg-[#FB2E86] text-white rounded-r-md">
                    Sign Up
                  </button>
                </div>
              </div>

              <p className="text-xs leading-5">
                Contact Info: <br />
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>

            {/* Categories Section */}
            <div>
              <h3 className="text-lg font-bold text-black mb-4">Categories</h3>
              <ul className="space-y-3 text-sm">
                <li>Laptops & Computers</li>
                <li>Cameras & Photography</li>
                <li>Smart Phones & Tablets</li>
                <li>Video Games & Consoles</li>
                <li>Waterproof Headphones</li>
              </ul>
            </div>

            {/* Customer Care Section */}
            <div>
              <h3 className="text-lg font-bold text-black mb-4 md:mr-40">Customer Care</h3>
              <ul className="space-y-3 text-sm">
                <li>My Account</li>
                <li>Discount</li>
                <li>Returns</li>
                <li>Orders History</li>
                <li>Order Tracking</li>
              </ul>
            </div>

            {/* Pages Section */}
            <div>
              <h3 className="text-lg font-bold text-black mb-4 sm:ml-2">Pages</h3>
              <ul className="space-y-3 text-sm sm:ml-2">
                <li>Blog</li>
                <li>Browse the Shop</li>
                <li>Category</li>
                <li>Pre-Built Pages</li>
                <li>Visual Composer Elements</li>
                <li>WooCommerce Pages</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom */}
      <div className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-center sm:text-left">
            © Hekto
            <Link
              href="https://twitter.com/knyttnev"
              rel="noopener noreferrer"
              className="ml-1"
              target="_blank"
            >
              All Right Reserved
            </Link>
          </p>
          <div className="flex mt-4 sm:mt-0">
            <a href="#" className="w-6 h-6 mx-2">
              <FaFacebook />
            </a>
            <a href="#" className="w-6 h-6 mx-2">
              <RxInstagramLogo />
            </a>
            <a href="#" className="w-6 h-6 mx-2">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
