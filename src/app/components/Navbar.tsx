"use client";
import { CiMenuBurger } from "react-icons/ci";
import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io"; // Importing a close icon
import Link from "next/link";
import { useAppSelector } from "../store/hooks";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const cart = useAppSelector((state) => state.cart);

  return (
    <div className="font-[family-name:var(--font-geist-sans)] bg-white">
      <div>
        <div
          className="w-full h-[40px] bg-[#FB2E86]
         text-white text-center content-center overflow-hidden whitespace-nowrap"
        >
          <div className="inline-block animate-marquee sm:w-[85%]">
            Get free shipping when you order over{" "}
            <span className="text-black"> $500 </span>
            Get the best quality Furniture with unbeleiveble{" "}
            <span className="text-black">Discounts upto 55%</span>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}
      </style>

      <div className="bg-[#7E33E0] h-[54px] flex justify-center items-center text-[#F1F1F1] font-sans">
        <div className="w-full md:w-[65%] flex flex-col md:flex-row justify-between text-[16px] px-4 md:px-0">
          <div className="flex sm:flex-col justify-between md:flex-row font-[family-name:var(--font-geist-sans)]">
            <div className="flex justify-center items-center sm:gap-3">
              <MdOutlineEmail />
              zubair@gmail.com
            </div>
            <div className="flex justify-center items-center sm:gap-3">
              <FaPhoneVolume />
              (12345)67890
            </div>
          </div>

          <div className="hidden md:visible gap-3 sm:flex flex-col md:flex-row justify-center items-center font-[family-name:var(--font-geist-sans)]">
            <div className="flex justify-center items-center">
              English <MdOutlineKeyboardArrowDown />
            </div>
            <div className="flex justify-center items-center">
              USD <MdOutlineKeyboardArrowDown />
            </div>
            <div className="flex justify-center items-center">
              <Link href={"/Login"} className="flex items-center">
                Login <IoPersonOutline />
              </Link>
            </div>
            <div className="flex justify-center items-center">
              Whishlist <CiHeart />
            </div>
            <div className="flex justify-center items-center">
              <Link
                className="flex justify-center items-center ml-1"
                href={"/Cart"}
              >
                Cart <CiShoppingCart size={20} />
                <span className="font-light">
                  {cart.length == 0 ? null : cart.length}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[40px] text-[#0D0E43] flex justify-center items-center py-10">
        <div className="flex flex-row md:flex-row justify-between items-center gap-4 md:gap-16 px-4 md:px-0">
          <button
            className="sm:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <IoMdClose size={30} /> : <CiMenuBurger size={30} />}
          </button>
          <div className="font-bold text-[34px]">
            <Link href={"/"}>Hekto</Link>
          </div>
          <div className="hidden lg:block">
            <ul className="text-[16px] flex flex-col md:flex-row gap-4 md:gap-6 font-[family-name:var(--font-geist-sans)]">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                {" "}
                <Link href={"/About"}>About</Link>
              </li>
              <li>
                <Link href={"/Product"}>Products</Link>
              </li>
              <li>
                <Link href={"/Blog"}>Blog</Link>
              </li>
              <li>
                <Link href={"/Shop"}>Shop</Link>
              </li>
              <li>
                <Link href={"/Contact"}>Contact</Link>
              </li>
              <li>
                <Link href={"/Signup"}>Sign Up</Link>
              </li>
              <li>
                <Link href={"/FAQ"}>FAQ</Link>
              </li>
            </ul>
          </div>

          <div className="flex">
            <div className="flex border-gray-300 rounded-sm border justify-center items-center">
              <input type="text" className="w-full md:w-[217px] h-[35px]" />
              <CiSearch
                size={35}
                className="bg-[#FB2E86] text-white rounded-sm relative"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className="lg:hidden bg-white">
        {/* <button className="absolute top-0" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <IoMdClose size={30} /> : <CiMenuBurger size={30} />}
        </button> */}
        <div
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="bg-white w-64 h-full shadow-lg">
            <button
              className="p-4"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? (
                <IoMdClose size={30} />
              ) : (
                <CiMenuBurger size={30} />
              )}
            </button>
            <ul className="bg-white text-[18px] flex flex-col gap-4 p-4 font-[family-name:var(--font-geist-sans)]">
              <li
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="hover:text-white hover:bg-blue-500 rounded-lg p-2"
              >
                <Link href={"/"}>Home</Link>
              </li>
              <li
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="hover:text-white hover:bg-blue-500 rounded-lg p-2"
              >
                <Link href={"/About"}>About</Link>
              </li>
              <li
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="hover:text-white hover:bg-blue-500 rounded-lg p-2"
              >
                <Link href={"/Product"}>Products</Link>
              </li>
              <li
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="hover:text-white hover:bg-blue-500 rounded-lg p-2"
              >
                <Link className="flex items-center" href={"/Cart"}>
                  Cart <CiShoppingCart size={20} />
                  <span className="font-light">
                    {cart.length == 0 ? null : cart.length}
                  </span>
                </Link>
              </li>
              <li
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="hover:text-white hover:bg-blue-500 rounded-lg p-2"
              >
                <Link href={"/Blog"}>Blog</Link>
              </li>
              <li
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="hover:text-white hover:bg-blue-500 rounded-lg p-2"
              >
                <Link href={"/Shop"}>Shop</Link>
              </li>
              <li
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="hover:text-white hover:bg-blue-500 rounded-lg p-2"
              >
                <Link href={"/Contact"}>Contact</Link>
              </li>
              <li
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="hover:text-white hover:bg-blue-500 rounded-lg p-2"
              >
                <Link href={"/Signup"}>Sign Up</Link>
              </li>
              <li
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="hover:text-white hover:bg-blue-500 rounded-lg p-2"
              >
                <Link href={"/FAQ"}>FAQ</Link>
              </li>
              <li
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="flex items-center hover:text-white hover:bg-blue-500 rounded-lg p-2"
              >
                <Link href={"/Login"} className="flex items-center">
                  Login <IoPersonOutline />
                </Link>
              </li>
              <li
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="flex items-center p-2"
              >
                Whishlist <CiHeart />
              </li>
              <li
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="flex items-center p-2"
              >
                English <MdOutlineKeyboardArrowDown />
              </li>
              <li
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="flex items-center p-2"
              >
                USD <MdOutlineKeyboardArrowDown />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
