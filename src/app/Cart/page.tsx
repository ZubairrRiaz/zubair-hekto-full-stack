'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { deltItem } from '../store/features/cart';
import { toast } from 'sonner';
import Link from 'next/link';
import { client } from 'src/sanity/lib/client';




const CartPage = () => {

    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        address1: "",
        address2: "",
        city: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        // Add form submission logic here
      };
    
      const itemKey = Math.floor(Math.random() * 1000)
      const createCustomerInSanity = async () => {
        try {
          const customerObject = {
            _type: "customer",
            name: formData.name,
            email: formData.email,
            phone: formData.phoneNumber,
            city: formData.city,
            address1: formData.address1,
            address2: formData.address2,
            items:cartItems.map((item) => (
            {
                name: item.name,
                id: item.id,
                description: item.description,
                price: item.price,
                _key: itemKey,
              
            }

            ))
          };

    
          const respone = await client.create(customerObject);
          console.log("Order and User is created in sanity", respone);

        //   return respone;
        } catch (error) {
          console.log("Error in User Created", error);
          throw error;
        }
      };




    const cart = useAppSelector(state => state.cart)
    const dispatch = useAppDispatch()
    

    const [cartItems, setCartItems] = useState(cart);
    const [showfrom, setShowFrom] = useState(false)


    useEffect(() => {
        setCartItems(cart);
    }, [cart]);

    const handleDelete = (id: number) => {
        dispatch(deltItem(id));
        toast(`Product Removed!`)
       
    };

    const calculateSummary = () => {
        const totalProducts = cartItems.length;
        const totalPrice = cartItems.reduce((acc, item) => acc + (item.price), 0);
        return { totalProducts, totalPrice };
    };

    const checkProduct = cartItems.find(cart => cart)
    if (!checkProduct) {
        return <>
            <h1 className="text-3xl font-bold mb-6 text-[#4a4e69] text-center py-7 sm:py-12 shadow-md bg-[#f0f4f8]">Shopping Cart</h1>
            <div className='text-xl font-bold text-center h-[400px] content-center'>Shopping Cart is Empty!</div>
        </>
    } else {
        const { totalProducts, totalPrice } = calculateSummary();
        return (
            <div>

            <div className="font-[family-name:var(--font-geist-sans)] min-h-screen bg-[#f0f4f8] flex flex-col items-center py-10">
                <h1 className="text-3xl font-bold mb-6 text-[#4a4e69]">Shopping Cart</h1>
                <div className="sm:w-[70%] bg-white shadow-md rounded-lg p-6">
                    {cartItems.map(item => (
                        <div key={item.id} className="flex flex-col md:flex-row justify-between items-center border-b py-4">
                            <Image src={item.image} alt={item.name} height={200} width={200} className="sm:w-48 sm:h-56 object-cover rounded-md mb-4 md:mb-0" />
                            <div className="flex-1 md:ml-4">
                                <h2 className="text-xl font-semibold text-[#4a4e69]">{item.name}</h2>
                                <p className="text-gray-600">{item.name}</p>
                                <p className="text-gray-500">PKR: {item.price}</p>
                            </div>
                            <button
                                onClick={() => handleDelete(item.id)}
                                className="text-red-500 mt-3 font-bold hover:text-red-700 transition duration-300"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <div className="mt-6 p-6 bg-[#7E33E0] text-white shadow-inyner space-y-2">
                        <h2 className="text-2xl font-bold text-white mb-4">Order Summary</h2>
                        <p className="text-lg">Total Products: {totalProducts}</p>
                        <p className="text-lg">Total Price: PKR {totalPrice.toFixed(2)}</p>
                    </div>

                   <Link href={'#form'}>
                    <button onClick={() =>setShowFrom(true)} className="w-full mt-6 bg-[#7E33E0] text-white py-3 rounded-lg font-semibold hover:bg-[#88b0c0] transition duration-300">
                      Proceed to Checkout
                    </button>
                    </Link>
                </div>
            </div>



        {showfrom && 
        <div id='form' className="form-container p-6 bg-pink-100">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
            <label className="block text-blue-700">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-blue-300 rounded"
            />
          </div>
          <div className="form-group">
            <label className="block text-blue-700">Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full p-2 border border-blue-300 rounded"
            />
          </div>
          <div className="form-group">
            <label className="block text-blue-700">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-blue-300 rounded"
            />
          </div>
          <div className="form-group">
            <label className="block text-blue-700">City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full p-2 border border-blue-300 rounded"
            />
          </div>
          <div className="form-group">
            <label className="block text-blue-700">Address 1:</label>
            <input
              type="text"
              name="address1"
              value={formData.address1}
              onChange={handleChange}
              required
              className="w-full p-2 border border-blue-300 rounded"
            />
          </div>
          <div className="form-group">
            <label className="block text-blue-700">Address 2:</label>
            <input
              type="text"
              name="address2"
              value={formData.address2}
              onChange={handleChange}
              className="w-full p-2 border border-blue-300 rounded"
            />
          </div>
          <Link href={'/Payment'}>
          <button
            onClick={createCustomerInSanity}
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Place Order
          </button>
          </Link>
        </form>
      </div>
    }







        </div>
        );
    }
}

export default CartPage;
