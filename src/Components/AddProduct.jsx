import React, { useState } from "react";
import { createItem } from "../services/apiService";

function AddProduct() {
  const [formData, setFormData] = useState({
    title: "",
    des: "",
    price: "",
    image: "",
    category: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await createItem(formData);
      setMessage("Product added successfully!");
      setFormData({ title: "", des: "", price: "", image: "", category: "" });
    } catch (error) {
      setMessage("Failed to add product. Please check the fields.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 py-10">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 md:p-8">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-center md:text-left">
          Add New Product
        </h1>
        {message && (
          <p
            className={`mb-4 text-center md:text-left ${
              message.includes("success") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Product Title"
            className="border p-3 rounded-md text-base sm:text-lg"
            required
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            className="border p-3 rounded-md text-base sm:text-lg"
            required
          />
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="border p-3 rounded-md text-base sm:text-lg"
            required
          />
          <textarea
            name="des"
            value={formData.des}
            onChange={handleChange}
            placeholder="Description"
            className="border p-3 rounded-md text-base sm:text-lg resize-none"
            rows="4"
            required
          ></textarea>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="border p-3 rounded-md text-base sm:text-lg"
            required
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="phone">Phone</option>
            <option value="laptop">Laptop</option>
            <option value="watch">Watch</option>
            <option value="keyboard">Keyboard</option>
            <option value="headphones">Headphones</option>
            <option value="mouse">Mouse</option>
            <option value="gamepad">Gamepad</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors text-base sm:text-lg"
          >
            {loading ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
