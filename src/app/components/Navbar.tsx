import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <div className="bg-[#7E33E0] h-[44px] flex justify-center items-center w-full text-[#F1F1F1] font-sans">
        <div className="w-[65%] flex justify-between text-[16px]">
          <div className="flex gap-7 font-[family-name:var(--font-geist-sans)]">
            <div className="flex justify-center items-center gap-3">
              <MdOutlineEmail />
              mhhasanul@gmail.com
            </div>
            <div className="flex justify-center items-center gap-3">
              <FaPhoneVolume />
              (12345)67890
            </div>
          </div>

          <div className="gap-5 flex justify-center items-center font-[family-name:var(--font-geist-sans)]">
            <div className="flex justify-center items-center">
              English <MdOutlineKeyboardArrowDown />
            </div>
            <div className="flex justify-center items-center">
              USD <MdOutlineKeyboardArrowDown />
            </div>
            <div className="flex justify-center items-center">
              <Link href={'/Login'} className="flex items-center">
              Login <IoPersonOutline />
              </Link>
            </div>
            <div className="flex justify-center items-center">
              Whishlist <CiHeart />
            </div>
            <div className="flex justify-center items-center">
              <Link href={'/Cart'} className="flex items-center">
              Cart
              <CiShoppingCart size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-fill h-[40px] text-[#0D0E43] flex justify-center items-center py-10">
        <div className="w-[80%] flex justify-between items-center gap-16">
          <div className="font-bold text-[34px]">Hekto</div>
          <div>
            <ul className="text-[16px] flex gap-6 font-[family-name:var(--font-geist-sans)]">
              <li><Link href={'/'}>Home</Link></li>
              <li>Pages</li>
              <li>Products</li>
              <li><Link href={'/Blog'}>Blog</Link></li>
              <li><Link href={'/Shop'}>Shop</Link></li>
              <li><Link href={'/Contact'}>Contact</Link></li>
              <li><Link href={'/Signup'}>Sign Up</Link></li>
              <li><Link href={'/FAQ'}>FAQ</Link></li>


            </ul>
          </div>

          <div className="flex">
            <div className="flex border-gray-300 rounded-sm border justify-center items-center">
              <input type="text"  className="w-[217px] h-[35px]"/>
              <CiSearch size={35} className="bg-[#FB2E86]  text-white rounded-sm relative "/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
