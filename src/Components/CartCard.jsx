import React from "react";

function CartCard({ name, price }) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-white p-4 rounded-md shadow-md mb-3 gap-2">
      <span className="font-semibold text-gray-800 text-base sm:text-lg">{name}</span>
      <span className="font-bold text-black text-base sm:text-lg">${price}</span>
    </div>
  );
}

export default CartCard;
