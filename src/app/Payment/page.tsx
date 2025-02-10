'use client'
import React, { useState } from 'react'
import CheckoutPage from '../components/CheckOutPage';
import convertToSubcurrency from './convertToSubcurrency';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useAppSelector } from '../store/hooks';

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Payment() {

  const cart = useAppSelector(state => state.cart)
  
     

      const totalPrice = cart.reduce((acc, item) => acc + (item.price), 0);

    

  const amount = totalPrice;
    
   if(amount <= 0){
    return (
      <div className='text-xl font-bold text-center h-[400px] content-center'>No any products selected!</div>
    )
   }

   else{
   
  return (
    <main className="font-[family-name:var(--font-geist-sans)] max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
      <div className="mb-10">
        <h1 className="sm:text-4xl text-3xl font-extrabold mb-2">Hekto</h1>
        <h2 className="text-xl">
          Your Bill is
          <span className="font-bold"> ${amount}</span>
        </h2>
      </div>

      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(amount),
          currency: "usd",
        }}
      >
        <CheckoutPage amount={amount} />
      </Elements>
    </main>
  );
}

}