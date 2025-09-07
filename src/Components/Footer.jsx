import React, { useEffect, useState } from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.role === "admin") {
      setIsAdmin(true);
    }
  }, []);

  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-10 px-[5%] mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">GameStore</h2>
          <p className="text-sm text-gray-400">
            Your one-stop shop for gaming gear, gadgets, and accessories.
            Upgrade your setup today!
          </p>
          {isAdmin && (
            <Link to="/add-product">
              <button className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
                Add Product
              </button>
            </Link>
          )}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/products" className="hover:text-white transition">Products</Link></li>
            <li><Link to="/categories" className="hover:text-white transition">Categories</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/help" className="hover:text-white transition">Help Center</Link></li>
            <li><Link to="/shipping" className="hover:text-white transition">Shipping & Returns</Link></li>
            <li><Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white transition">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-white transition"><Facebook size={20} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition"><Instagram size={20} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition"><Twitter size={20} /></a>
            <a href="#" aria-label="Youtube" className="hover:text-white transition"><Youtube size={20} /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} GameStore. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
