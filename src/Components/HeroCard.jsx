import React from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";

function HeroCard({ elem }) {
  return (
    <div className="container w-full h-full bg-zinc-200 rounded-2xl flex flex-col md:flex-row">
      
      {/* Left Content */}
      <div className="w-full absolute md:relative md:w-1/2 h-full md:h-full md:flex flex-col items-start justify-center gap-4 md:gap-7 px-4 md:px-[4%] py-6 md:py-0">
        <div className=''>
          <h1 className="text-3xl text-white md:text-black mt-[35%] sm:text-4xl md:text-5xl lg:text-7xl font-semibold">
            {elem.name}
          </h1>
        </div>
        <p className="text-sm hidden md:block sm:text-base md:text-lg lg:text-xl line-clamp-3">
          {elem.des}
        </p>
        <button className="h-[5vh] mt-2 sm:h-[5.5vh] px-4 sm:px-5 py-1 bg-transparent rounded-md flex gap-2 items-center justify-center text-sm sm:text-md md:text-lg border font-semibold text-black 
          hover:bg-black hover:cursor-pointer hover:text-white hover:scale-105 transition-all duration-300">
          <MdOutlineShoppingCart className="text-xl sm:text-2xl" />
          Shop More
        </button>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 h-full md:h-full flex items-center justify-center md:justify-end">
        <img
          className="h-[75%] sm:h-[70%] md:h-[85%] object-contain"
          src={elem.image}
          alt={elem.name}
        />
      </div>
    </div>
  );
}

export default HeroCard;
