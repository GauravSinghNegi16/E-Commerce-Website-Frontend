import React, { useEffect, useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const removeItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  if (cartItems.length === 0) {
    return (
      <div className="w-full min-h-[80vh] flex items-center justify-center text-lg sm:text-xl text-gray-700 px-4 text-center">
        Your cart is empty.
      </div>
    );
  }

  return (
    <div className="w-full min-h-[80vh] px-[5%] py-8 sm:py-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Your Cart</h1>
      <div className="flex flex-col gap-6">
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white p-4 rounded-lg shadow-md gap-4"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded"
              />
              <div className="text-center sm:text-left">
                <h2 className="text-lg sm:text-xl font-semibold">{item.name}</h2>
                <p className="text-md sm:text-lg font-bold">${item.price}</p>
              </div>
            </div>
            <button
              onClick={() => removeItem(index)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-all w-full sm:w-auto"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={clearCart}
        className="mt-6 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition-all w-full sm:w-auto"
      >
        Clear Cart
      </button>
    </div>
  );
}

export default Cart;
