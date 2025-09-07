import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="w-full px-[5%] py-6 mt-12">
      <div className="w-full h-auto bg-gray-100 rounded-2xl flex flex-col md:flex-row items-center justify-between shadow-md p-6 md:p-10">
        <div className="w-full md:w-1/2 max-w-lg text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Mega Mobile Sale 📱
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Upgrade your smartphone today and enjoy up to{" "}
            <span className="font-bold text-black">15% OFF</span>. Don’t miss out!
          </p>
          <Link to="/category/phone">
            <button className="px-6 py-3 bg-black text-white border rounded-full font-medium transition-all duration-200 hover:bg-white hover:text-black hover:border-black">
              Shop Now
            </button>
          </Link>
        </div>
        <div className="w-full md:w-[40%] flex items-center justify-center">
          <img
            src="/Images/sale-removebg-preview.png"
            alt="Mobile Discount"
            className="w-full max-h-60 sm:max-h-72 md:max-h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
