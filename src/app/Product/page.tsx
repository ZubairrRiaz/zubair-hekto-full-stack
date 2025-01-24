import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoStarSharp } from "react-icons/io5";
import { urlFor } from "../../sanity/lib/image";
import { client } from "../../sanity/lib/client";

export interface Productinfo {
  id: number;
  name: string;
  description: string; // Corrected typo
  category: string; // Corrected typo
  discountPercentage: number;
  stockLevel: number;
  price: number;
  imageUrl: string;
}

async function sanityDataProducts() {
  try {
    const dataFetch = await client.fetch(`*[_type == "product"]{
      id,
      name,
      description,
      category,
      discountPercentage,
      stockLevel,
      price,
      "imageUrl":image.asset->url
    }`);
    return dataFetch;
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    return null; // or handle the error as needed
  }
}


const Page = async () => {
  const data = await sanityDataProducts();

  return (
    <div>
      <div className="sm:h-[250px] h-[150px] items-center w-full bg-gray-100 flex sm:justify-start justify-center">
        <div className="sm:ml-36 text-center sm:text-left">
          <h1 className="text-[#151875] sm:text-4xl text-2xl font-bold">
            Shop Grid Default
          </h1>
          <p className="text-sm sm:text-base">
            Home . Pages .{" "}
            <span className="text-pink-600">Shop Grid Default</span>
          </p>
        </div>
      </div>

      <div className="flex justify-center py-[100px]">
        <div className="w-full max-w-5xl flex flex-col sm:flex-row justify-between items-center sm:items-start">
          <div className="text-blue-400 text-sm text-center sm:text-left mb-4 sm:mb-0">
            <h1 className="text-2xl font-bold text-[#151875]">
              Ecommerce Accessories & Fashion item{" "}
            </h1>
            About 9620 results (0.62 seconds)
          </div>
          <div className="text-blue-700 flex flex-col sm:flex-row gap-4 sm:gap-10 text-sm">
            <div className="flex items-center">
              Per Page:{" "}
              <input
                type="text"
                className="w-[60px] border border-gray-300 ml-2"
              />
            </div>
            <div className="flex items-center">
              Sort By:{" "}
              <input
                type="text"
                placeholder="Best Match"
                className="w-[90px] border border-gray-300 ml-2"
              />
            </div>
            <div className="flex items-center">
              View:{" "}
              <input
                type="text"
                className="w-[150px] border border-gray-300 ml-2"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="font-[family-name:var(--font-geist-sans)] pb-44">
        <div className="sm:py-10">
          <h1 className="text-center font-bold text-2xl sm:text-3xl bg-[#FB2E86] sm:rounded-xl text-white py-4 shadow-xl">
            Best Picks Of All Time
          </h1>
          <div
            className="grid grid-cols-1
         md:grid-cols-2 place-items-center gap-[8px] sm:gap-12 w-full lg:grid-cols-3 xl:grid-cols-4"
          >
            {data.map((product: Productinfo) => (
              <Link href={`/productdetails/${product.id}`} key={product.id}>
              <div
                  className="rounded-md flex flex-col justify-between shadow-sm h-[520px] relative w-full md:h-[550px] md:w-[350px] border border-opacity-10"
                >
                  <div className="absolute top-3 text-sm font-mono font-normal left-3 bg-[#FB2E86] rounded-3xl py-1 px-4 text-white">
                    Save {product.discountPercentage}%
                  </div>

                  <div className="sm:w-full h-full flex justify-center items-center">
                    <Image
                      src={urlFor(product.imageUrl).url()}
                      alt="Chair"
                      width={290}
                      height={290}
                    />
                  </div>

                  <div className="bg-[#7E33E0] text-white sm:w-full w-[350px] p-2 rounded-b-md">
                    <p className="sm:text-2xl font-light text-xl">
                      {product.name}
                    </p>

                  <div className="space-y-2 sm:text-lg sm:h-[100px]">
                    <div>
                      <p className="flex gap-2 text-yellow-500">
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                      </p>
                    </div>

                    <p className="text-base sm:text-lg">
                      <span className="text-opacity-65">
                        Category: {product.category}
                      </span>
                      <br />
                      PKR {product.price}
                    </p>
                      </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
