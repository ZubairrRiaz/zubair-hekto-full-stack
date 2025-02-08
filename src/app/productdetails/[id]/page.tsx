"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";
import { useAppDispatch } from "../../store/hooks";
import { addToCart } from "../../store/features/cart";
import { client } from "src/sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import { toast } from "sonner";
import { Productinfo } from "src/app/Product/page";
import { useRouter } from "next/router";

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
      "imageUrl":image.asset->url,
      isFeaturedProduct
    }`);
    return dataFetch;
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    return []; // Return an empty array instead of null
  }
}

// interface ProductDetailsProps {
//   params: {
//     id: string;
//   };
// }

const ProductDetails = () => {
  const [, setData] = useState([]);
 
  const [quantity, setQuantity] = useState(1);
  const [cartItem, setCartItem] = useState(null);
  const router = useRouter();
  const { id } = router.query;  // Extracts 'id' from the URL

  useEffect(() => {
    const fetchData = async () => {
      const data = await sanityDataProducts();
      setData(data);

      if (id) {
        const productId = Number(id);
        const product = data.find((i: Productinfo) => i.id === productId);

        if (product) {
          setCartItem({
            id: product.id,
            name: product.name,
            price: product.price,
            category: product.category,
            image: urlFor(product.imageUrl).url(),
            stock: product.stockLevel,
            description: product.description,
            isAvailable: product.isFeaturedProduct,
          });
        }
      }
    };

    fetchData();
  }, [id]);

  const dispatch = useAppDispatch();

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (cartItem && quantity < cartItem.stock) {
      setQuantity(quantity + 1);
    }
  };

  if (!cartItem) {
    return (
      <div className="font-bold text-center text-3xl py-44">
        Product Loading...
      </div>
    );
  }

  const price = cartItem.price * quantity;

  const addToCartFun = () => {
    const updatedCartItem = {
      ...cartItem,
      Price: price,
    };
    setCartItem(updatedCartItem);
    dispatch(addToCart(updatedCartItem));
    toast(`Added ${quantity} Quantity Of (${cartItem.name}) In Cart.`);
  };

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

      <div className="sm:py-24 flex justify-center">
        {cartItem ? (
          <div
            key={cartItem.id}
            className="bg-[#efe5dc] shadow-2xl pb-16 sm:rounded-xl sm:h-[600px] sm:w-[80%] w-full flex flex-col sm:flex-row justify-evenly items-center p-4"
          >
            <Image
              src={cartItem.image}
              alt={cartItem.name}
              height={300}
              width={300}
              className="sm:w-[500px]"
            />
            <div className="space-y-3 mt-4 sm:mt-0">
              <h2 className="text-2xl font-bold">{cartItem.name}</h2>
              <p className="text-yellow-300 flex items-center gap-1">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp className="text-gray-300" />
                <span className="text-blue-800 font-bold"> (22)</span>
              </p>
              <p className="text-blue-900 font-bold">PKR {price}</p>
              <p className="font-bold">Color</p>
              <p className="text-gray-500">{cartItem.description}</p>
              <p className="text-blue-900 font-bold">
                Category: {cartItem.category}
              </p>
              <p className="text-blue-900 font-bold">Tags</p>
              <p className="text-blue-900 font-bold flex gap-3 items-center">
                Share <FaFacebook />
                <span className="text-pink-600">
                  <AiFillInstagram />
                </span>
                <AiFillTwitterCircle />
              </p>
              {cartItem.isAvailable ? (
                <p className="text-blue-900 font-bold">
                  Stock: {cartItem.stock}
                </p>
              ) : null}

              {cartItem.isAvailable ? (
                <>
                  <div className="flex items-center justify-center gap-3">
                    <button
                      className="text-blue-900 font-bold border border-blue-200 rounded-md w-[50px] text-2xl"
                      onClick={decreaseQuantity}
                    >
                      -
                    </button>
                    <span className="text-lg w-[27px] text-center">
                      {quantity}
                    </span>
                    <button
                      className="text-blue-900 font-bold border border-blue-200 rounded-md w-[50px] text-2xl"
                      onClick={increaseQuantity}
                    >
                      +
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <button
                      onClick={addToCartFun}
                      className="bg-blue-600  text-white font-bold py-2 px-4 rounded-lg flex items-center gap-3"
                    >
                      Add To Cart <FaShoppingCart className="text-white" />
                    </button>
                  </div>
                </>
              ) : 
              <p className="text-3xl font-bold text-red-600 text-center">Out of Stock</p>}
              
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