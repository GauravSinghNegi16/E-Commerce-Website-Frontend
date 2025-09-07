import React from "react";
import { FaShippingFast, FaDollarSign, FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <div className="w-full px-[5%] py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Image */}
        <div className="md:w-1/2 relative">
          <img
            src="https://i.pinimg.com/1200x/db/3b/dd/db3bdd4d0859ee604fa34718dec22ade.jpg"
            alt="About Us"
            className="w-full h-auto rounded-2xl shadow-xl object-cover"
          />
          <div className="absolute -bottom-6 -right-6 bg-black text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium">
            Since 2023
          </div>
        </div>

        {/* Text */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <h1 className="text-5xl font-bold text-gray-800 mb-2">
            Who We Are
          </h1>
          <p className="text-gray-600 text-lg">
            Welcome to our store! We are passionate about bringing you the latest gadgets, electronics, and accessories with unbeatable quality and price. Our mission is to make online shopping simple, fun, and trustworthy.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
            <div className="flex flex-col items-center text-center">
              <FaShippingFast className="text-4xl text-black mb-2" />
              <h3 className="font-semibold">Fast Delivery</h3>
              <p className="text-gray-500 text-sm">Get your products quickly with our reliable shipping.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaDollarSign className="text-4xl text-black mb-2" />
              <h3 className="font-semibold">Best Deals</h3>
              <p className="text-gray-500 text-sm">Amazing discounts and offers every day.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaCheckCircle className="text-4xl text-black mb-2" />
              <h3 className="font-semibold">Top Quality</h3>
              <p className="text-gray-500 text-sm">Products you can trust, carefully curated.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default About;
