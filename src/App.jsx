import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Nav from "./Components/Nav";
import Products from "./Components/Product";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import ProductDetail from "./Components/ProductDetail";
import Cart from "./Components/CartWrapper";
import Profile from "./Components/Profile";
import CategoryPage from "./Components/CategoryPage";
import AddProduct from "./Components/AddProduct";

function App() {
  return (
    <div className="min-h-screen w-full">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
