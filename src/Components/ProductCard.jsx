import React from "react";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ProductCard({ id, image, name, rating, price }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product-detail/${id}`);
  };

  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[20vw] h-auto rounded-2xl flex flex-col items-center bg-white md:shadow-none shadow-md cursor-pointer hover:shadow-lg transition-transform duration-300">
      <div
        className="w-full h-48 sm:h-56 md:h-64 flex items-center justify-center bg-white rounded-xl overflow-hidden"
        onClick={handleNavigate}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain hover:scale-110 transform transition-transform duration-300"
        />
      </div>

      <div className="mt-4 w-full px-2" onClick={handleNavigate}>
        <h2 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-1">
          {name}
        </h2>
        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center text-sm text-gray-600">
            <Star size={16} className="text-yellow-400 fill-yellow-400 mr-1" />
            <span>{rating}</span>
          </div>
          <p className="text-lg sm:text-xl font-bold text-gray-900">${price}</p>
        </div>
      </div>

      <div className="mt-4 flex gap-2 w-full px-2 pb-3">
        <button
          onClick={handleNavigate}
          className="flex-1 py-2 border border-gray-400 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-black hover:text-white hover:border-black"
        >
          Learn more
        </button>
        <button
          onClick={handleNavigate}
          className="flex-1 py-2 bg-black text-white rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black hover:border hover:border-black"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
