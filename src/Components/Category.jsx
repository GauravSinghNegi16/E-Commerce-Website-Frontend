import React from "react";
import { Link } from "react-router-dom";

function Category() {
  const data = [
    { image: "https://i.pinimg.com/736x/d5/1b/0d/d51b0d8826063f245dc38e9ff6c5c263.jpg", name: "Phone" },
    { image: "https://i.pinimg.com/736x/4e/a5/c8/4ea5c8c480625906a692bafa65ba7aad.jpg", name: "Headphones" },
    { image: "https://i.pinimg.com/736x/89/ac/6d/89ac6d88437807a6cb4954206e3689f4.jpg", name: "Laptop" },
    { image: "https://i.pinimg.com/736x/5e/f8/ff/5ef8fff54e2cb54e4806bc8a6d19417b.jpg", name: "Keyboard" },
    { image: "https://i.pinimg.com/1200x/6e/d2/2e/6ed22e8565336de708a2d3cf9ac1d6c3.jpg", name: "Mouse" },
    { image: "https://i.pinimg.com/736x/aa/47/92/aa47925d3d6b674f7f288f835bf1e0b4.jpg", name: "Gamepad" },
    { image: "https://i.pinimg.com/736x/3b/7a/25/3b7a25b829711e5e20a697f55eb76f48.jpg", name: "Watch" },
  ];

  return (
    <div className="w-full px-[5%] py-10 mt-12">
      <div className="w-full mb-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center md:text-left">
          Browse by Category
        </h1>
      </div>
      {/* Horizontal scroll container */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide py-2">
        {data.map((elem, index) => (
          <Link
            key={index}
            to={`/category/${elem.name.toLowerCase()}`}
            className="flex-shrink-0 w-28 sm:w-36 rounded-md flex flex-col items-center justify-center p-2 hover:scale-105 transition-transform duration-300"
          >
            <div className="w-[12vh] h-[12vh] sm:w-[13vh] sm:h-[13vh] border-2 rounded-full overflow-hidden shadow-lg">
              <img
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-200"
                src={elem.image}
                alt={elem.name}
              />
            </div>
            <div className="mt-2 text-center">
              <h1 className="text-black text-sm sm:text-md">{elem.name}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Category;
