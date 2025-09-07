import React, { useState, useEffect } from 'react';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import HeroCard from './HeroCard';
import { Link } from 'react-router-dom';

function Hero() {
  const data = [
    {
      id: "01",
      name: "Razer BlackShark V2",
      des: "The Razer BlackShark V2 is a lightweight esports gaming headset featuring Razer™ TriForce 50mm drivers for clear audio.",
      price: "4999",
      image: "/Images/Ryzer-01.png",
      route: "/category/headphones",
    },
    {
      id: "04",
      name: "Logitech G502 HERO Mouse",
      des: "A high-performance gaming mouse with HERO 25K sensor, customizable weights, and 11 programmable buttons for maximum control.",
      price: "5999",
      image: "/Images/mouse.png",
      route: "/category/mouse",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [data.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % data.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  const goToSlide = (index) => setCurrentIndex(index);

  return (
    <div className="w-full h-[40vh] sm:h-[40vh] md:h-[45vh] lg:h-[85vh] relative overflow-hidden">
      {data.map((elem, index) => (
        <div
          key={elem.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out flex items-center justify-center px-4 sm:px-6 md:px-[5%] py-4`}
          style={{ opacity: currentIndex === index ? 1 : 0 }}
        >
          <Link to={elem.route} className="w-full h-full flex items-center justify-center">
            <HeroCard elem={elem} />
          </Link>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-5 top-1/2 transform -translate-y-1/2 bg-gray-300 p-1.5 sm:p-2 rounded-full hover:bg-gray-400 z-10"
      >
        <FaAngleLeft className="text-lg sm:text-xl md:text-2xl" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-5 top-1/2 transform -translate-y-1/2 bg-gray-300 p-1.5 sm:p-2 rounded-full hover:bg-gray-400 z-10"
      >
        <FaAngleRight className="text-lg sm:text-xl md:text-2xl" />
      </button>

      <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 flex space-x-2 z-10 justify-center w-full">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${currentIndex === index ? 'bg-black' : 'bg-gray-400'}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Hero;
