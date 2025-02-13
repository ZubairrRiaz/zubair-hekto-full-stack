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
import { urlFor } from "../../../sanity/lib/image";
import { toast } from "sonner";
import { Productinfo } from "src/app/Product/page";
import { useParams } from "next/navigation";
import { client } from "src/sanity/lib/client";

// Sanity query for fetching products
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
    return []; // Return an empty array if there's an error
  }
}

const ProductDetails = () => {
  const params = useParams(); // Get the params object
  const [data, setData] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [cartItem, setCartItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const allProducts = await sanityDataProducts();
      setData(allProducts);

      if (params && params.id) { // Check if params and id are defined
        const productId = Number(params.id);
        const product = allProducts.find((p: Productinfo) => p.id === productId);

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
        } else {
          console.error("Product not found:", productId);
          setCartItem(null); // Clear cartItem if product not found
        }
      } else {
        console.error("Params or id is undefined");
      }
    };

    fetchData();
  }, [params?.id]);

  const dispatch = useAppDispatch();

  // Show loading message if cartItem is not yet set
  if (!cartItem) {
    return (
      <div className="font-bold text-center text-3xl py-44">
        Product Loading...
      </div>
    );
  }


  // Function to update the cart and stock (only in browser)
  const addToCartFun = () => {
    if (cartItem.stock < quantity) {
      toast.error("Sorry, not enough stock available.");
      return;
    }

    // Update the cart item in the state (decrease stock in browser)
    const updatedCartItem = {
      ...cartItem,
      totalPrice: cartItem.price * quantity, // Store total price based on quantity
      quantity: quantity, // Store the selected quantity as well
    };

    // Update the cart item stock locally (decrease in browser)
    const updatedProduct = {
      ...cartItem,
      stock: cartItem.stock - quantity, // Decrease the stock in the browser state
    };

    setCartItem(updatedProduct); // Update cart item state
    dispatch(addToCart(updatedCartItem)); // Dispatch to update the Redux store
    toast.success(`Added ${quantity} of (${cartItem.name}) to Cart. Total: PKR ${updatedCartItem.totalPrice}`);
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
              <p className="text-blue-900 font-bold">PKR {cartItem.price}</p>
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

              {cartItem.isAvailable || cartItem.stockLevel == 0 ?  (
                <>
                  <div className="flex justify-center">
                    <button
                      onClick={addToCartFun}
                      className="bg-blue-600 active:bg-blue-500  text-white font-bold py-2 px-4 rounded-lg flex items-center gap-3"
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

      <div className="bg-gray-100 sm:px-12 h-auto w-full my-20 flex justify-center items-center p-4 sm:py-28">
  <div className="space-y-7">
    <div className="flex gap-5 text-xl text-blue-900 font-bold flex-wrap justify-center">
      <h2 className="underline">Description</h2>
      <h2>Additional Info</h2>
      <h2>Reviews</h2>
      <h2>Videos</h2>
    </div>

    <div className="space-y-2">
      <h2 className="text-xl text-blue-900 font-bold">Comfortable and Stylish Chairs</h2>
      <p className="text-gray-500">
        Our collection of chairs is designed for both comfort and style. Whether you're looking for a modern accent chair or a plush recliner, we have something to suit every taste and need. Crafted with high-quality materials, our chairs are perfect for any living room, office, or outdoor space.
      </p>
      <p className="text-gray-500">
        From sleek, minimalist designs to cozy, upholstered options, our chairs are built to provide maximum comfort without compromising on aesthetics. Whether you're hosting a gathering or enjoying a quiet moment, our chairs offer the perfect balance of support and style.
      </p>
      <p className="text-gray-500">
        Our chairs feature durable fabrics, sturdy frames, and ergonomic designs, ensuring they stand the test of time while providing an exceptional seating experience. Choose from a wide range of colors and materials to match your home’s décor.
      </p>
    </div>

    <div className="space-y-2">
      <h2 className="text-xl text-blue-900 font-bold">Sofa Sets for Every Style</h2>
      <p className="flex items-center gap-1 text-gray-500">
        <FaArrowRightLong className="text-black" />
        Discover a variety of sofa sets that cater to different preferences, from compact loveseats to spacious sectional sofas, perfect for any room size.
      </p>
      <p className="flex items-center gap-1 text-gray-500">
        <FaArrowRightLong className="text-black" />
        Our sofas are designed to offer both luxury and durability, featuring high-density foam cushions, reinforced frames, and soft yet durable upholstery materials.
      </p>
      <p className="flex items-center gap-1 text-gray-500">
        <FaArrowRightLong className="text-black" />
        Choose from a variety of styles, such as contemporary, classic, and mid-century modern, and add a touch of sophistication to your living space.
      </p>
      <p className="flex items-center gap-1 text-gray-500">
        <FaArrowRightLong className="text-black" />
        With customizable options like reclining seats, adjustable headrests, and chaise lounges, our sofa sets offer versatility and comfort for all your relaxation needs.
      </p>
    </div>

    <div className="space-y-2">
      <h2 className="text-xl text-blue-900 font-bold">Customer Reviews</h2>
      <p className="text-gray-500">
        "Absolutely in love with my new sofa! It's both beautiful and comfortable. The quality is outstanding, and it fits perfectly in my living room. Highly recommend!"
      </p>
      <p className="text-gray-500">
        "The chair I bought exceeded my expectations. The craftsmanship is top-notch, and it’s so comfortable. I’ll be purchasing more pieces from this collection."
      </p>
      <p className="text-gray-500">
        "I ordered a sectional sofa, and it arrived in perfect condition. The customer service was excellent, and they helped me with every step of the way. Definitely a great purchase!"
      </p>
    </div>

    <div className="space-y-2">
      <h2 className="text-xl text-blue-900 font-bold">Watch Our Product Videos</h2>
      <p className="text-gray-500">
        Check out our product videos to see how our chairs and sofas fit into various home setups, and learn more about the design features, materials, and assembly process. Watch customer unboxing and reviews to get a better idea of what you can expect from our furniture.
      </p>
      <p className="text-gray-500">
        Our video tutorials also provide helpful tips on maintenance, cleaning, and assembling our furniture, ensuring your new purchase lasts for years to come.
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










