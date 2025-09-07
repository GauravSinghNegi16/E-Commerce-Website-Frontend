import React, { useEffect, useState } from "react";
import { AiFillAliwangwang } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const categories = [
    { name: "Mobile", route: "/category/phone" },
    { name: "Headphones", route: "/category/headphones" },
    { name: "Laptop", route: "/category/laptop" },
    { name: "Keyboard", route: "/category/keyboard" },
    { name: "Mouse", route: "/category/mouse" },
    { name: "Gamepad", route: "/category/gamepad" },
    { name: "Watch", route: "/category/watch" },
  ];

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <div className="px-[5%]">
      <div className="w-full h-[10vh] md:h-[7.5vh] sm:h-[5vh] px-4 flex items-center justify-between bg-zinc-100 rounded-b-xl">
        <div className="flex items-center justify-between w-full lg:w-auto gap-20">
          <div className="flex items-center text-2xl font-semibold">
            <AiFillAliwangwang className="text-4xl" />
            <h1>Lumora</h1>
          </div>
          <button
            className="lg:hidden text-2xl text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div className="hidden lg:flex gap-12">
            <div className="flex items-center gap-10 font-semibold relative">
              {["/", "/products", "/about", "/contact"].map((path, idx) => {
                const name =
                  path === "/"
                    ? "Home"
                    : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
                return (
                  <Link
                    key={idx}
                    to={path}
                    className="relative text-gray-700 hover:text-black transition-all duration-300
                           after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] 
                           after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {name}
                  </Link>
                );
              })}
              <div className="relative group">
                <span className="cursor-pointer text-gray-700 hover:text-black relative
                             after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
                             after:bg-black after:transition-all after:duration-300 group-hover:after:w-full">
                  Category
                </span>
                <div className="absolute top-full left-0 mt-2 w-40 sm:w-[30vh] bg-white border rounded-md shadow-lg
                            opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {categories.map((cat, idx) => (
                    <Link
                      key={idx}
                      to={cat.route}
                      className="block px-4 py-2 hover:bg-gray-100 capitalize"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="hidden lg:flex h-full items-center gap-4">
          {isLoggedIn ? (
            <>
              <Link
                to="/cart"
                className="flex items-center gap-1 text-gray-700 hover:text-black transition-all duration-300"
              >
                <FaShoppingCart size={22} />
                <span>Cart</span>
              </Link>
              <Link
                to="/profile"
                className="flex items-center gap-1 text-gray-700 hover:text-black transition-all duration-300"
              >
                <FaUserCircle size={22} />
                <span>Profile</span>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="w-24 h-[5.5vh] py-1 bg-zinc-200 rounded-md flex items-center justify-center text-md font-semibold hover:underline">
                  Log in
                </button>
              </Link>
              <Link to="/signup">
                <button className="w-24 h-[5.5vh] py-1 bg-zinc-900 rounded-md flex items-center justify-center text-md font-semibold text-white hover:underline">
                  Sign up
                </button>
              </Link>
            </>
          )}
        </div>

        {menuOpen && (
          <div className="absolute top-[10vh] left-0 w-full bg-white shadow-md flex flex-col items-start gap-4 p-6 lg:hidden z-40">
            {["/", "/products", "/about", "/contact"].map((path, idx) => {
              const name =
                path === "/"
                  ? "Home"
                  : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
              return (
                <Link
                  key={idx}
                  to={path}
                  className="w-full text-gray-700 hover:text-black text-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  {name}
                </Link>
              );
            })}
            <div className="w-full">
              <p className="font-semibold mb-2">Categories</p>
              <div className="flex flex-col gap-2">
                {categories.map((cat, idx) => (
                  <Link
                    key={idx}
                    to={cat.route}
                    className="block px-2 py-1 hover:bg-gray-100 capitalize rounded-md"
                    onClick={() => setMenuOpen(false)}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full mt-4">
              {isLoggedIn ? (
                <>
                  <Link
                    to="/cart"
                    className="flex items-center gap-2 text-gray-700 hover:text-black"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaShoppingCart />
                    <span>Cart</span>
                  </Link>
                  <Link
                    to="/profile"
                    className="flex items-center gap-2 text-gray-700 hover:text-black"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaUserCircle />
                    <span>Profile</span>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setMenuOpen(false)}>
                    <button className="w-full py-2 bg-zinc-200 rounded-md text-md font-semibold hover:underline">
                      Log in
                    </button>
                  </Link>
                  <Link to="/signup" onClick={() => setMenuOpen(false)}>
                    <button className="w-full py-2 bg-zinc-900 rounded-md text-md font-semibold text-white hover:underline">
                      Sign up
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
