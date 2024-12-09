import {FaFacebook} from "react-icons/fa"
import { RxInstagramLogo } from "react-icons/rx";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
<div>
<footer className="bg-[#EEEFFB] h-auto sm:h-[400px] md:h-[500px] py-8 text-[#8A8FB9] items-center">

  <div className="container mx-auto px-16 items-center">

    {/* Responsive Grid */}
    <div className="mt-[94px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8 text-center md:text-left lg:text-left">
            <div className="mt-2 sm:mt-0">
              
          {/* Logo */}
          <h1 className="text-4xl font-bold text-black">Hekto</h1>
              <div className="mt-4  ml-6w-[350px] flex items-center gap-x-2 justify-center sm:justify-start">
               
                {/* Search */}
                <div className="w-full bg-white rounded-md items-center flex">
                  <input
                    className="w-[90%] h-11 p-1 bg-white text-black outline-none opacity-75"
                    type="search"
                    placeholder="Enter Email Address"
                  />
                  <button className="text-base font-medium rounded-sm w-[50%] h-[42px] bg-[#FB2E86] text-[#F3F9FF]">
                    Sign Up
                  </button>
                </div>
              </div>

              <p className="mt-4 text-xs leading-4 text-center sm:text-left">
                Contact Info: <br />
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>
  
            {/* Categories Section */}
            <div className="mt-1 leading-6">
              <h3 className="text-[18px] font-bold text-black mb-7">Categories</h3>
              <ul className="mt-2 space-x-0 md:space-y-5 md:mb-6  text-sm">
                <li>Laptops & Computers</li>
                <li>Cameras & Photography</li>
                <li>Smart Phones & Tablets</li>
                <li>Video Games & Consoles</li>
                <li>Waterproof Headphones</li>
              </ul>
            </div>
  
            {/* Customer Care Section */}
            <div className="mt-1 leading-6">
              <h3 className="text-[18px] font-bold text-black mb-7">Customer Care</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>My Account</li>
                <li>Discount</li>
                <li>Returns</li>
                <li>Orders History</li>
                <li>Order Tracking</li>
              </ul>
            </div>
  
            {/* Pages Section */}
            <div className="mt-1 leading-6">
              <h3 className="text-[18px] font-bold text-black mb-7">Pages</h3>
              <ul className="mt-2 space-y-2 text-sm">
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
{/* bottom */}

        <div className="bg-[#E7E4F8]  ">
    <div className="container px-5 w-[60%]  h-[80px] sm:h-[53px] mx-auto flex items-center sm:flex-row flex-col">
      
    <p className="text-sm text-[#9DA0AE] sm:ml-6 sm:mt-0 mt-4">
        © Webecy
        <a
          href="https://twitter.com/knyttnev"
          rel="noopener noreferrer"
          className="text-[#9DA0AE] ml-1"
          target="_blank"
        >
          All Right Reserved
        </a>
      </p>
      <span className="flex flex-row sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

     <div className="w-5 h-5 " ><a href="#"><FaFacebook  /></a></div> 
      <div className="w-5 h-5  ml-3 text-gray-900"><a href="#"><RxInstagramLogo /></a></div>
        <div className="w-5 h-5  ml-3 text-gray-900"><a href="#"><FaTwitter /></a></div>

    </span>
    </div>
  </div>

      
        </div>
    );
  };
  
  export default Footer;