import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleItem } from "../services/apiService";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await getSingleItem(id);
        setProduct(res.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({
      id: product._id,
      name: product.title,
      price: product.price,
      image: product.image,
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.title} added to cart`);
  };

  if (loading) {
    return (
      <div className="w-full h-[50vh] flex items-center justify-center text-lg">
        Loading...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="w-full h-[50vh] flex items-center justify-center text-lg">
        Product not found.
      </div>
    );
  }

  return (
    <div className="w-full min-h-[80vh] flex flex-col md:flex-row px-4 sm:px-8 lg:px-[5%] gap-8 py-8">
      <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-[80vh] flex items-center justify-center">
        <img
          className="max-h-full max-w-full object-contain rounded-2xl shadow-lg"
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          {product.title}
        </h1>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg">
          {product.des}
        </p>
        <p className="text-xl sm:text-2xl font-semibold">${product.price}</p>

        <div className="flex flex-wrap gap-4 mt-4">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-white font-semibold border-2 rounded-md hover:bg-black hover:text-white transition-all duration-200"
          >
            Back
          </button>

          <button
            onClick={addToCart}
            className="px-5 py-2 bg-black text-white rounded-md font-semibold hover:bg-white hover:text-black hover:border hover:border-black transition-all duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
