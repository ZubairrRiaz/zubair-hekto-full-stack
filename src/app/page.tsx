import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaVanShuttle } from "react-icons/fa6";
import { HiCurrencyDollar } from "react-icons/hi";
import { PiMedalDuotone } from "react-icons/pi";
import { FaPhone } from "react-icons/fa";
import { client } from "../../sanityClient";


interface Product {
  name: string;
  code: string;
  price: string;
  image: string;
}

const chairsofArray = [
  {
    name: "Cantilever chair",
    code: "Code Y2043942",
    price: "PKR 1000",
    image: "/c1.png",
  },
  {
    name: "Cantilever chair",
    code: "Code Y2043942",
    price: "PKR 1500",
    image: "/c2.png",
  },
  {
    name: "Cantilever chair",
    code: "Code Y2043942",
    price: "PKR 2000",
    image: "/c3.png",
  },
  {
    name: "Cantilever chair",
    code: "Code Y2043942",
    price: "PKR 1800",
    image: "/c4.png",
  },
];

const blogs = [
  {
    text: "John Doe",
    date: "5 February 2025",
    title: "Innovative Furniture Designs to Watch in 2024",
    description:
      "Discover the top essential furniture trends for 2024. From minimalist designs to bold colors, these trends will transform your home. Stay ahead of the curve with the latest in living room, bedroom, and office furniture. Don't miss out on making your space more stylish and functional.",
    image: "/b1.png",
    read: "Read more",
  },
  {
    text: "Jane Smith",
    date: "12 January 2025",
    title: "Sustainable and Stylish: 2024's Eco-Friendly Furniture Trends",
    description:
      "Upgrade your home with the best furniture trends for 2024. From smart furniture solutions to eco-friendly materials, this year's trends focus on sustainability and modern design. Whether you're redecorating or just adding a few new pieces, these trends will elevate your home decor.",
    image: "/b2.png",
    read: "Read more",
  },
  {
    text: "Emily Davis",
    date: "18 December 2024",
    title: "How Multifunctional Furniture is Shaping 2024 Interiors",
    description:
      "2024 brings a wave of exciting furniture trends that combine comfort, functionality, and design. With multi-functional furniture and minimalist aesthetics dominating the market, it's time to update your space. Explore the latest pieces that will help you create the home of your dreams.",
    image: "/b3.png",
    read: "Read more",
  }
];

const chairsArray = [
  {
    name: "Luxury Executive Chair",
    price: "₨ 2,150",
    image: "/c5.png",
  },
  {
    name: "Ergonomic Mesh Back Chair",
    price: "₨ 1,800",
    image: "/c6.png",
  },
  {
    name: "High-Back Leather Chair",
    price: "₨ 2,500",
    image: "/c2.png",
  },
  {
    name: "Adjustable Modern Chair",
    price: "₨ 2,200",
    image: "/c7.png",
  },
  {
    name: "Compact Office Chair",
    price: "₨ 1,999",
    image: "/c5.png",
  },
  {
    name: "Gaming Recliner Chair",
    price: "₨ 2,850",
    image: "/c6.png",
  },
  {
    name: "Sleek Executive Chair",
    price: "₨ 2,300",
    image: "/c2.png",
  },
  {
    name: "Ergonomic Task Chair",
    price: "₨ 1,600",
    image: "/c7.png",
  },
  {
    name: "Luxury Office Recliner",
    price: "₨ 2,750",
    image: "/c5.png",
  },
  {
    name: "Contemporary Desk Chair",
    price: "₨ 2,100",
    image: "/c6.png",
  },
];



async function getSanityData(){
  const sanityData = await client.fetch(`*[_type == 'LandingPage']{introText,mainTitle,description,buttonText,
  featuredProductsTitle,latestProductsTitle,
  offerTitle,offerDescription,uniqueFeaturesTitle,uniqueFeaturesDescription,
  trendingProductsTitle,discountItemTitle,discountDescription,topCategoriesTitle,
  subscribeTitle,latestBlogTitle}`);
  return sanityData

}


const MainLandingpage = async() => {

  const sanity = await getSanityData()
  

  return (

    <div>
    <div className="bg-white relative">
      <div className="bg-[#F2F0FF] w-full sm:flex sm:justify-center sm:items-center h-auto text-black sm:py-16 py-10 px-4">
        <div className="flex justify-center sm:absolute sm:top-0 sm:-left-8">
          <Image src={"/lamp.png"} alt="Lamp" height={300} width={300} />
        </div>

        <div className="sm:mr-10 max-w-lg mx-auto mt-10 gap-4 text-center sm:text-left">
          <p className="text-[#FB2E86] text-[14px]">
          
            {sanity[0].introText}
          </p>
          <h1 className="text-[43px] font-bold">
            {sanity[0].mainTitle}
          </h1>
          <p className="text-[#8A8FB9] text-[14px]">
            {sanity[0].description}
          </p>
          <button className="w-[145px] rounded-sm mt-3 h-[42px] bg-[#FB2E86] text-slate-100 font-sans">
            <Link href={"/Product"}>{sanity[0].buttonText}</Link>
          </button>
        </div>

        <div className="flex justify-center mt-10">
          <Image src={"/chair.png"} alt="chair" height={540} width={540} />
        </div>
      </div>

      <h1 className="font-bold text-[40px] text-center mt-20 mb-2 text-[#151875]">
        {sanity[0].featuredProductsTitle}
      </h1>
      <Link href={"/Product"}>
        <div className="flex flex-wrap items-center gap-4 justify-center">
          {chairsofArray.map((product: Product, index: number) => (
            <div
              key={index}
              className="h-[320px] w-[230px] shadow-lg text-center space-y-1 hover:bg-[#151875] hover:text-white"
            >
              <div className="bg-[#F2F0FF] h-[220px] w-full pt-2 flex justify-center items-center ">
                <Image
                  src={product.image}
                  alt="chair"
                  height={150}
                  width={200}
                />
              </div>
              <p className="text-[#FB2E86] text-[20px] font-bold">
                {product.name}
              </p>
              <p className=" text-[16px] font-bold">
                {product.code}
              </p>
              <p className="text-[16px] font-bold">{product.price}</p>
            </div>
          ))}
        </div>
      </Link>

      <h1 className="font-bold text-[#151875] text-[40px] text-center mt-20 mb-2">
        {sanity.latestProductsTitle}
      </h1>
      <div className="flex justify-center">
        <ul className="text-[#151875] flex sm:gap-8 gap-4 font-bold">
          <li>New Arrival</li>
          <li>Best Seller</li>
          <li>Featured</li>
          <li>Special Offer</li>
        </ul>
      </div>

      <Link href={"/Product"}>
  <div className="flex flex-wrap justify-center items-center gap-3 mt-8">
    <div className="w-[360px] h-[306px] font-bold">
      <div className="w-full h-[270px] bg-[#F2F0FF] flex justify-center items-center hover:bg-[#151875] hover:text-white">
        <Image src={"/c5.png"} alt="Chairs" height={280} width={250} />
      </div>
      <div className="flex justify-between px-3 text-[#151875]">
        <p>Royal Ergonomic Chair</p>
        <p>
          ₨ 2,450{" "}
          <span className="line-through text-green-600">₨ 3,100</span>
        </p>
      </div>
    </div>

    <div className="w-[360px] h-[306px] font-bold">
      <div className="w-full h-[270px] bg-[#F2F0FF] flex justify-center items-center hover:bg-[#151875] hover:text-white">
        <Image src={"/c6.png"} alt="Chairs" height={280} width={250} />
      </div>
      <div className="flex justify-between px-3 text-[#151875]">
        <p>Comfort Mesh Back Chair</p>
        <p>
          ₨ 1,950{" "}
          <span className="line-through text-green-600">₨ 2,700</span>
        </p>
      </div>
    </div>

    <div className="w-[360px] h-[306px] font-bold">
      <div className="w-full h-[270px] bg-[#F2F0FF] flex justify-center items-center hover:bg-[#151875] hover:text-white">
        <Image src={"/c2.png"} alt="Chairs" height={280} width={250} />
      </div>
      <div className="flex justify-between px-3 text-[#151875]">
        <p>Luxury Leather Recliner</p>
        <p>
          ₨ 2,800{" "}
          <span className="line-through text-green-600">₨ 3,500</span>
        </p>
      </div>
    </div>
  </div>
</Link>

<Link href={"/Product"}>
  <div className="flex flex-wrap justify-center items-center mt-20 gap-3">
    <div className="w-[360px] h-[306px] font-bold">
      <div className="w-full h-[270px] bg-[#F2F0FF] flex justify-center items-center hover:bg-[#151875] hover:text-white">
        <Image src={"/c7.png"} alt="Chairs" height={280} width={250} />
      </div>
      <div className="flex justify-between px-3 text-[#151875]">
        <p>High-Back Chair</p>
        <p>
          ₨ 2,150{" "}
          <span className="line-through text-green-600">₨ 2,900</span>
        </p>
      </div>
    </div>

    <div className="w-[360px] h-[306px] font-bold">
      <div className="w-full h-[270px] bg-[#F2F0FF] flex justify-center items-center hover:bg-[#151875] hover:text-white">
        <Image src={"/c2.png"} alt="Chairs" height={280} width={250} />
      </div>
      <div className="flex justify-between px-3 text-[#151875]">
        <p>Comfort Handy Chair</p>
        <p>
          ₨ 2,350{" "}
          <span className="line-through text-green-600">₨ 2,950</span>
        </p>
      </div>
    </div>

    <div className="w-[360px] h-[306px] font-bold">
      <div className="w-full h-[270px] bg-[#F2F0FF] flex justify-center items-center hover:bg-[#151875] hover:text-white">
        <Image src={"/c6.png"} alt="Chairs" height={280} width={250} />
      </div>
      <div className="flex justify-between px-3 text-[#151875]">
        <p>Modern Adjustable Chair</p>
        <p>
          ₨ 1,799{" "}
          <span className="line-through text-green-600">₨ 2,400</span>
        </p>
      </div>
    </div>
  </div>
</Link>

      <h1 className="font-bold text-[#151875] text-[40px] text-center mt-20 mb-2">
        {sanity[0].offerTitle}
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-5">
      <div className="flex flex-wrap gap-5 justify-center my-10">
  <div className="text-center content-center w-full sm:w-[270px] h-[320px] shadow-xl gap-5 text-[#151875]">
    <div className="flex justify-center my-6">
      <HiCurrencyDollar size={30} />
    </div>
    <h2 className="font-bold text-[#151875] text-base">All Payment Methods With Refund Guarantee</h2>
    <p className="text-gray-500 px-4 mt-3 text-justify">
      We offer a wide range of secure payment options, including credit cards, PayPal, and more. Your purchase is protected by our 30-day money-back guarantee, ensuring a hassle-free shopping experience.
    </p>
  </div>

  <div className="text-center content-center w-full sm:w-[270px] h-[320px] shadow-xl gap-5">
    <div className="flex justify-center my-6">
      <PiMedalDuotone size={30} />
    </div>
    <h2 className="font-bold text-[#151875] text-base">Trusted and Award-Winning Service</h2>
    <p className="text-gray-500 px-4 mt-3 text-justify">
      We pride ourselves on providing top-notch service. Our commitment to quality and customer satisfaction has earned us numerous awards in the furniture industry, making us a trusted choice for home decor.
    </p>
  </div>

  <div className="text-center content-center w-full sm:w-[270px] h-[320px] shadow-xl gap-5">
    <div className="flex justify-center my-6">
      <FaPhone size={30} />
    </div>
    <h2 className="font-bold text-[#151875] text-base">24/7 Customer Service</h2>
    <p className="text-gray-500 px-4 mt-3 text-justify">
      Our dedicated customer service team is available 24/7 to assist you with any inquiries or concerns. Whether you need help with an order or have questions about our products, we’re here to support you every step of the way.
    </p>
  </div>
</div>


      </div>

      <div className="w-full h-auto bg-[#F1F0FF] mt-20 flex flex-wrap justify-center items-center py-10">
        <div className="flex justify-center sm:ml-36">
          <Image src={"/sofa.png"} alt="sofa" height={480} width={480} />
        </div>

        <div className="w-full max-w-lg mx-auto text-center sm:text-left">
          <h1 className="font-bold text-[#151875] text-[35px]">
            {sanity[0].uniqueFeaturesTitle}
          </h1>
          <p className="text-gray-500 py-3">
            {sanity[0].uniqueFeaturesDescription}
          </p>
          <div className="flex gap-4 justify-center sm:justify-start">
            <button className="bg-[#FB2E86] h-[43px] w-[140px] text-slate-100">
              <Link href={"/Cart"}>Add To Cart</Link>
            </button>
            <p className="font-bold text-[#151875]">
              B&B Italian Sofa <br /> Rs: 5000
            </p>
          </div>
        </div>
      </div>

      <h1 className="font-bold text-[#151875] text-[40px] text-center mt-20 mb-2">
        {sanity[0].trendingProductsTitle}
      </h1>

      <Link href={"/Product"}>
  <div className="flex flex-wrap items-center gap-4 justify-center">
    {chairsArray.map((product, index) => (
      <div
        key={index}
        className="h-[340px] w-[280px] shadow-lg text-center content-center space-y-1 bg-white text-[#151875] hover:bg-[#151875] hover:text-white"
      >
        <div className="bg-[#F2F0FF] h-[240px] px-4 w-[92%] ml-3 pt-2 flex justify-center items-center">
          <Image
            src={product.image}
            alt="chair"
            height={150}
            width={200}
          />
        </div>
        <p className="text-[20px] font-bold py-3">{product.name}</p>

        <p className="text-[16px] font-bold">
          {product.price}{" "}
          <span className="line-through text-gray-400 ml-3">₨ 3,500</span>
        </p>
      </div>
    ))}
  </div>
</Link>

      <div className="flex flex-wrap gap-4 justify-center mt-10">
        <div className="w-[380px] h-[300px] bg-[#FFF6FB] text-[#151875] shadow-md hover:bg-[#151875] hover:text-white">
          <h1 className="text-[25px] py-3 ml-6 font-bold">
            {sanity[0].discountItemTitle}
          </h1>
          <p className="text-slate-500 text-base underline ml-6">Shop Now</p>
          <div className="flex justify-end mt-3 mr-3">
            <Image src={"/chair.png"} alt="chair" height={200} width={200} />
          </div>
        </div>

        <div className="w-[380px] h-[300px] bg-[#e2eafa] shadow-md text-[#151875] hover:bg-[#151875] hover:text-white">
          <h1 className="text-[25px] py-3 ml-6 font-bold">
           {sanity[0].discountDescription}
          </h1>
          <p className="text-slate-500 text-base underline ml-6">Shop Now</p>
          <div className="flex justify-end mt-3 mr-3">
            <Image src={"/c4.png"} alt="chair" height={200} width={200} />
          </div>
        </div>

        <div className="w-[380px] h-[300px] flex flex-col justify-between">
        <div className="w-[380px] h-[300px] flex flex-col justify-between">
  <div className="flex items-center font-bold gap-3 hover:bg-[#151875] hover:text-white">
    <Image
      src={"/c1.png"}
      alt="chair"
      height={100}
      width={90}
      className="bg-[#FFF6FB]"
    />
    <h3>
      Luxury Executive Chair <br />{" "}
      <span className="text-gray-400 line-through">₨ 4,000</span>
    </h3>
  </div>

  <div className="flex font-bold items-center gap-3 hover:bg-[#151875] hover:text-white">
    <Image
      src={"/c2.png"}
      alt="chair"
      height={100}
      width={90}
      className="bg-[#FFF6FB]"
    />
    <h3>
      Ergonomic Mesh Back Chair <br />{" "}
      <span className="text-gray-400 line-through">₨ 3,500</span>
    </h3>
  </div>

  <div className="flex font-bold items-center gap-3 hover:bg-[#151875] hover:text-white">
    <Image
      src={"/c3.png"}
      alt="chair"
      height={100}
      width={90}
      className="bg-[#FFF6FB]"
    />
    <h3>
      High-Back Leather Chair <br />{" "}
      <span className="text-gray-400 line-through">₨ 4,500</span>
    </h3>
  </div>
</div>

        </div>
      </div>

      <div className="mt-32">
        <h1 className="text-3xl text-[#151875] font-bold text-center">
          Discount Item
        </h1>
        <div className="flex justify-center py-6">
          <ul className="flex gap-5 text-[#151875] font-bold">
            <li className="underline">Wood Chair</li>
            <li>Plastic Chair</li>
            <li>Sofa Collection</li>
          </ul>
        </div>

        <div className="flex flex-wrap justify-center items-center py-8">
          <div className="w-full max-w-lg mx-auto text-center sm:text-left space-y-7">
            <h1 className="text-3xl text-[#151875] font-bold">
              {sanity[0].discountDescription}
            </h1>
            <p className="text-pink-600 font-bold">Eams Sofa Compact</p>
            <p className="text-pink-500">
  Discover the Best Sofa Designs for Your Living Room Comfort and Style
</p>

            <div className="text-pink-700 flex gap-14">
              <div className="space-y-3">
                <p>Material Expose Like Metals</p>
                <p>Clear Line And Geomatric Figures</p>
              </div>
              <div className="space-y-3">
                <p>Simple Natural Colors</p>
                <p>Material Expose Like Metals</p>
              </div>
            </div>
            <button className="w-[145px] rounded-sm mt-3 h-[42px] bg-[#FB2E86] text-slate-100 font-sans">
              <Link href={"/Product"}>Shop Now</Link>
            </button>
          </div>

          <div className="flex justify-center sm:pr-24">
            <Image src={"/chair.png"} alt="chair" height={400} width={400} />
          </div>
        </div>
      </div>

      <h1 className="text-3xl text-[#151875] font-bold text-center my-5">
        {sanity[0].topCategoriesTitle}
      </h1>
      <div className="flex flex-wrap justify-center gap-6 my-10">
  <div className="text-[#151875] h-[280px] w-[280px] text-center">
    <div className="h-[280px] w-[280px] shadow-md rounded-full bg-[#FFF6FB] flex justify-center items-center hover:bg-[#151875] hover:text-white">
      <Image src={"/c1.png"} alt="chair" height={200} width={200} />
    </div>
    <p>
      Modern Comfort Chair <br /> ₨ 3,200
    </p>
  </div>

  <div className="text-[#151875] h-[280px] w-[280px] text-center">
    <div className="h-[280px] w-[280px] shadow-md rounded-full bg-[#FFF6FB] flex justify-center items-center hover:bg-[#151875] hover:text-white">
      <Image src={"/c2.png"} alt="chair" height={200} width={200} />
    </div>
    <p>
      Adjustable Ergonomic Chair <br /> ₨ 2,500
    </p>
  </div>

  <div className="text-[#151875] h-[280px] w-[280px] text-center">
    <div className="h-[280px] w-[280px] shadow-md rounded-full bg-[#FFF6FB] flex justify-center items-center hover:bg-[#151875] hover:text-white">
      <Image src={"/c3.png"} alt="chair" height={200} width={200} />
    </div>
    <p>
      Executive Office Chair <br /> ₨ 2,800
    </p>
  </div>

  <div className="text-[#151875] h-[280px] w-[280px] text-center">
    <div className="h-[280px] w-[280px] shadow-md rounded-full bg-[#FFF6FB] flex justify-center items-center hover:bg-[#151875] hover:text-white">
      <Image src={"/c4.png"} alt="chair" height={200} width={200} />
    </div>
    <p>
      Premium Leather Chair <br /> ₨ 3,000
    </p>
  </div>
</div>


      <div className="w-full h-[500px] bg-[url('/bg.png')] my-40 bg-no-repeat bg-cover flex justify-center items-center">
        <div className="w-full max-w-lg text-center">
          <h1 className="text-[#151875] text-4xl font-bold">
            {sanity[0].subscribeTitle}
          </h1>
          <button className="w-[145px] rounded-sm mt-6 h-[42px] bg-[#FB2E86] text-slate-100 font-sans">
            <Link href={"/Product"}>Shop Now</Link>
          </button>
        </div>
      </div>

      {/************blog ****************/}

      <section className=" py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#151875] mb-8">
            {sanity[0].latestBlogTitle}
          </h2>
          {/* Responsive grid layout */}
          <Link href={"/Blog"}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog, index) => (
                <div
                  key={index}
                  className="relative border rounded-xl bg-white shadow-md hover:shadow-lg transition duration-300"
                  style={{ height: "480px" }} // Optional height for consistent card size
                >
                  <div className="flex items-center justify-center overflow-hidden rounded-lg">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      height={450}
                      width={450}
                    />
                  </div>
                  <div className="mt-2 ml-6 flex text-[#151875] font-bold">
                    {blog.text} <div className="ml-11">{blog.date}</div>
                  </div>
                  <div className="mt-4 ml-6">
                    <h3 className="text-lg font-semibold text-[#151875]">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {blog.description}
                    </p>
                    <p className="text-[#151875] underline py-2 font-bold">
                      {blog.read}
                    </p>
                  </div>

                  <div className="absolute inset-0 bg-purple-500 text-white opacity-0 hover:opacity-100 flex items-center justify-center rounded-xl transition duration-300">
                    <button className="py-2 px-4 bg-white text-purple-500 font-bold rounded-md shadow-md">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Link>
        </div>
      </section>
    </div>

    </div>
  );
};

export default MainLandingpage;
