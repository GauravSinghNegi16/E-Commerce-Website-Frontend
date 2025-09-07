import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getItems } from "../services/apiService";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getItems();
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-[50vh] flex items-center justify-center text-lg sm:text-xl">
        Loading products...
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="w-full h-[50vh] flex items-center justify-center text-lg sm:text-xl">
        No products available.
      </div>
    );
  }

  return (
    <div className="w-full px-4 sm:px-6 md:px-[5%] flex flex-col gap-10 sm:gap-16 py-6 sm:py-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center md:text-left">
        Featured Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-15 justify-items-center">
        {products.map((item) => (
          <ProductCard
            key={item._id}
            id={item._id}
            name={item.title}
            price={item.price}
            rating={item.rating || 4.5}
            image={item.image}
            des={item.des}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
