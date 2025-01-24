'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { deltItem } from '../store/features/cart';
import { toast } from 'sonner';


const CartPage = () => {
    const cart = useAppSelector(state => state.cart)
    const dispatch = useAppDispatch()

    const [cartItems, setCartItems] = useState(cart);

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
        const tax = totalPrice * 0.1; // Assuming a 10% tax rate
        return { totalProducts, totalPrice, tax };
    };

    const checkProduct = cartItems.find(cart => cart)
    if (!checkProduct) {
        return <>
            <h1 className="text-3xl font-bold mb-6 text-[#4a4e69] text-center py-7 sm:py-12 shadow-md bg-[#f0f4f8]">Shopping Cart</h1>
            <div className='text-xl font-bold text-center h-[400px] content-center'>Shopping Cart is Empty!</div>
        </>
    } else {
        const { totalProducts, totalPrice, tax } = calculateSummary();
        return (
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
                    <div className="mt-6 p-6 bg-[#7E33E0] text-white shadow-inner space-y-2">
                        <h2 className="text-2xl font-bold text-white mb-4">Order Summary</h2>
                        <p className="text-lg">Total Products: {totalProducts}</p>
                        <p className="text-lg">Total Price: PKR {totalPrice.toFixed(2)}</p>
                        <p className="text-lg">Tax: PKR {tax.toFixed(2)}</p>
                        <p className="text-lg font-bold mt-2">Grand Total: PKR {(totalPrice + tax).toFixed(2)}</p>
                    </div>
                    <button className="w-full mt-6 bg-[#7E33E0] text-white py-3 rounded-lg font-semibold hover:bg-[#88b0c0] transition duration-300">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        );
    }
}

export default CartPage;
