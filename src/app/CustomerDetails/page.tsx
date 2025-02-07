"use client";
import React, { useState } from "react";
import { useAppSelector } from "../store/hooks";
import { client } from "src/sanity/lib/client";


const CustomerDetails = () => {
  const cart = useAppSelector((state) => state.cart);
      const [cartItems, setCartItems] = useState(cart);
  

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
      };
      // const orderObject = {
      //   _type: "order",
      //    items:cartItems.map((item) => ({
      //     _type: 'items',
      //     id: item.id,
      //     productName: item.name,
      //     productDescription: item.description,
      //     productPrice: item.price,
      //   })),
      // };

      const respone = await client.create(customerObject);
      console.log("Order and User is created in sanity", respone);
      return respone;
    } catch (error) {
      console.log("Error in User Created", error);
      throw error;
    }
  };

  // const createOrderInSanity = async() => {
  //   try{

  //   const orderObject = {
  //     _type: 'order',
  //     customer:{
  //       _type: 'reference',
  //       _ref: createCustomerInSanity()
  //     },
  //     items:cart.map((item:any) => (
  //       {
  //       _type:'items',
  //       productName: item.name,
  //       productDescriptiom: item.description,
  //       productPrice: item.price,
  //       productQuantity: item.stockLevel
  //       }

  //   ))

  //   }

  //   const respone = await client.create(orderObject)
  //   console.log('Order is created in sanity', respone)
  //   return respone
  // }
  // catch(error){
  //   console.log('Error in Order Created', error)
  //   throw error
  // }

  // }

  return (
    <div>
      <div className="form-container p-6 bg-pink-100">
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
          <button
            // onClick={createCustomerInSanity}
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomerDetails;
