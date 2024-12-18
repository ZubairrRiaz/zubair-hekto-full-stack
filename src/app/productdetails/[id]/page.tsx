import React from "react";
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";

const chairsArray = [
  {
    id: 1,
    name: "Wella laage mex",
    discountPrice: "$26.00", // Corrected typo
    originalPrice: "$42.00", // Corrected typo
    image: "/p1.png",
  },
  {
    id: 2,
    name: "Elbaot Chair",
    discountPrice: "$26.00", // Corrected typo
    originalPrice: "$42.00", // Corrected typo
    image: "/p2.png",
  },
  {
    id: 3,
    name: "Notoe Fex",
    discountPrice: "$26.00", // Corrected typo
    originalPrice: "$42.00", // Corrected typo
    image: "/p3.png",
  },
  {
    id: 4,
    name: "Cartel Pixel",
    discountPrice: "$26.00", // Corrected typo
    originalPrice: "$42.00", // Corrected typo
    image: "/p4.png",
  },
  {
    id: 5,
    name: "Iron Wood chair",
    discountPrice: "$26.00", // Corrected typo
    originalPrice: "$42.00", // Corrected typo
    image: "/p5.png",
  },
  {
    id: 6,
    name: "Crystal Clear Chair",
    discountPrice: "$26.00", // Corrected typo
    originalPrice: "$42.00", // Corrected typo
    image: "/p6.png",
  },
  {
    id: 7,
    name: "Wella laage mex",
    discountPrice: "$26.00", // Corrected typo
    originalPrice: "$42.00", // Corrected typo
    image: "/p7.png",
  },
  {
    id: 8,
    name: "Wella laage mex",
    discountPrice: "$26.00", // Corrected typo
    originalPrice: "$42.00", // Corrected typo
    image: "/p8.png",
  },
  {
    id: 9,
    name: "Wella laage mex",
    discountPrice: "$26.00", // Corrected typo
    originalPrice: "$42.00", // Corrected typo
    image: "/p9.png",
  },
  {
    id: 10,
    name: "Wella laage mex",
    discountPrice: "$26.00", // Corrected typo
    originalPrice: "$42.00", // Corrected typo
    image: "/p10.png",
  },
  {
    id: 11,
    name: "Wella laage mex",
    discountPrice: "$26.00", // Corrected typo
    originalPrice: "$42.00", // Corrected typo
    image: "/p11.png",
  },
  {
    id: 12,
    name: "Wella laage mex",
    discountPrice: "$26.00", // Corrected typo
    originalPrice: "$42.00", // Corrected typo
    image: "/p12.png",
  },
  {
    id: 13,
    name: "Wella laage mex",
    discountPrice: "$26.00", // Corrected typo
    originalPrice: "$42.00", // Corrected typo
    image: "/p13.png",
  },
  {
    id: 14,
    name: "Wella laage mex",
    discountPrice: "$26.00", // Corrected typo
    originalPrice: "$42.00", // Corrected typo
    image: "/p14.png",
  },
  {
    id: 15,
    name: "Wella laage mex",
    discountPrice: "$26.00", // Corrected typo
    originalPrice: "$42.00", // Corrected typo
    image: "/p15.png",
  },
  {
    id: 16,
    name: "Wella laage mex",
    discountPrice: "$26.00", // Corrected typo
    originalPrice: "$42.00", // Corrected typo
    image: "/p16.png",
  },
];

const ProductDetails = (props: { params: { id: string } }) => {
  // Convert the id from string to number
  const productId = Number(props.params.id);

  // Filter the chairsArray based on the number ID
  const Product = chairsArray.filter((item) => item.id === productId);

  console.log(Product); // Make sure you're getting the correct product

  return (
    <div>
      <div className="sm:h-[250px] h-[150px] items-center w-full bg-gray-100 flex sm:justify-start justify-center">
        <div className="sm:ml-36 text-center sm:text-left">
          <h1 className="text-[#151875] sm:text-4xl text-2xl font-bold">
            Shop Grid Default
          </h1>
          <p className="text-sm sm:text-base">
            Home . Pages .{" "}
            <span className="text-pink-600">Product Details</span>
          </p>
        </div>
      </div>

      <div className="py-24 flex justify-center">
        {Product.length > 0 ? (
          <div className="shadow-2xl sm:h-[450px] sm:w-[900px] w-full flex flex-col sm:flex-row justify-between items-center p-4">
            <Image
              src={Product[0].image}
              alt={Product[0].name}
              height={400}
              width={400}
            />
            <div className="space-y-3 mt-4 sm:mt-0">
              <h2 className="text-4xl font-bold">{Product[0].name}</h2>
              <p className="text-yellow-300 flex items-center gap-1">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp className="text-gray-300" />
                <span className="text-blue-800 font-bold"> (22)</span>
              </p>
              <p className="text-blue-900 font-bold">
                {Product[0].discountPrice}
                <span className="text-pink-600 font-bold line-through ml-2">
                  {Product[0].originalPrice}
                </span>
              </p>
              <p className="font-bold">Color</p>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                provident verit Lorem!
              </p>
              <p className="font-bold text-blue-900 sm:ml-16 flex items-center gap-3">
                Add To Cart <FaRegHeart />
              </p>
              <p className="text-blue-900 font-bold">Categories</p>
              <p className="text-blue-900 font-bold">Tags</p>
              <p className="text-blue-900 font-bold flex gap-3 items-center">
                Share <FaFacebook />
                <span className="text-pink-600">
                  <AiFillInstagram />
                </span>{" "}
                <AiFillTwitterCircle />
              </p>
            </div>
          </div>
        ) : (
          <p>Product not found</p>
        )}
      </div>

      <div className="bg-gray-100 h-auto w-full my-20 flex justify-center items-center p-4 sm:py-28">
        <div className="space-y-7">
          <div className="flex gap-5 text-xl text-blue-900 font-bold flex-wrap justify-center">
            <h2 className="underline">Description</h2>
            <h2>Additional Info</h2>
            <h2>Reviews</h2>
            <h2>Videos</h2>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl text-blue-900 font-bold">Varius tempor</h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
              incidunt cum, vero dolores dolore hic aliquid, amet culpa.
            </p>
            <p className="text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
              incidunt cum, vero dolores dolore hic aliquid, amet culpa.
            </p>
            <p className="text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
              incidunt cum, vero dolores dolore hic aliquid, amet culpa.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl text-blue-900 font-bold">More details</h2>
            <p className="flex items-center gap-1 text-gray-500">
              <FaArrowRightLong className="text-black" />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
              incidunt cum, vero dolores dolore hic aliquid, amet culpa.
            </p>
            <p className="flex items-center gap-1 text-gray-500">
              <FaArrowRightLong className="text-black" />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
              incidunt cum, vero dolores dolore hic aliquid, amet culpa.
            </p>
            <p className="flex items-center gap-1 text-gray-500">
              <FaArrowRightLong className="text-black" />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
              incidunt cum, vero dolores dolore hic aliquid, amet culpa.
            </p>
            <p className="flex items-center gap-1 text-gray-500">
              <FaArrowRightLong className="text-black" />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
              incidunt cum, vero dolores dolore hic aliquid, amet culpa.
            </p>
          </div>
        </div>
      </div>

      <h1 className="font-bold text-3xl sm:ml-36 py-10 text-blue-800 text-center sm:text-left">
        Related Products
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-14 pb-20">
        <div className="h-[390px] w-[220px] space-y-2">
          <div>
            <Image src={"/g1.png"} alt="Men" width={220} height={200} />
          </div>
          <p className="flex justify-between">
            <span className="font-bold text-sm text-blue-900">
              Mens Fashion Wear
            </span>
            <span className="text-yellow-300 flex text-sm">
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp className="text-gray-300" />
            </span>
          </p>
          <p className="text-blue-900 font-bold text-sm">$43.00</p>
        </div>
        <div className="h-[390px] w-[220px] space-y-2">
          <div>
            <Image src={"/g2.png"} alt="Men" width={220} height={200} />
          </div>
          <p className="flex justify-between">
            <span className="font-bold text-sm text-blue-900">
              Mens Fashion Wear
            </span>
            <span className="text-yellow-300 flex text-sm">
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp className="text-gray-300" />
            </span>
          </p>
          <p className="text-blue-900 font-bold text-sm">$64.00</p>
        </div>
        <div className="h-[390px] w-[220px] space-y-2">
          <div>
            <Image src={"/g3.png"} alt="Men" width={220} height={200} />
          </div>
          <p className="flex justify-between">
            <span className="font-bold text-sm text-blue-900">
              Mens Fashion Wear
            </span>
            <span className="text-yellow-300 flex text-sm">
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp className="text-gray-300" />
            </span>
          </p>
          <p className="text-blue-900 font-bold text-sm">$53.00</p>
        </div>
        <div className="h-[390px] w-[220px] space-y-2">
          <div>
            <Image src={"/g4.png"} alt="Men" width={220} height={200} />
          </div>
          <p className="flex justify-between">
            <span className="font-bold text-sm text-blue-900">
              Mens Fashion Wear
            </span>
            <span className="text-yellow-300 flex text-sm">
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp className="text-gray-300" />
            </span>
          </p>
          <p className="text-blue-900 font-bold text-sm">$65.00</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;


