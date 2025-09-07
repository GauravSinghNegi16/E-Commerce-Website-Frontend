import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItems } from "../services/apiService";
import ProductCard from "./ProductCard";

function CategoryPage() {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await getItems();
        const filtered = res.data.filter(
          (item) => item.category?.toLowerCase() === category.toLowerCase()
        );
        setItems(filtered);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [category]);

  if (loading) return <p className="text-center mt-20 text-lg">Loading...</p>;

  if (!items.length)
    return (
      <p className="text-center mt-20 text-lg text-gray-500">
        No items found in this category.
      </p>
    );

  return (
    <div className="w-full px-[5%] py-10">
      <h1 className="text-4xl font-semibold mb-8 capitalize">{category}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
  {items.map((item) => (
    <ProductCard
      key={item._id}
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

export default CategoryPage;
