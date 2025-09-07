import API from "../api";

// ======== Add Authorization Header Automatically ========
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// ==================== Auth ====================
export const registerUser = (data) => API.post("/register", data);
export const loginUser = (data) => API.post("/login", data);
export const getProfile = () => API.get("/profile");

// ==================== Items ====================
export const getItems = () => API.get("/items");
export const getSingleItem = (id) => API.get(`/items/${id}`);
export const createItem = (data) => API.post("/items", data); // Admin only
export const updateItem = (id, data) => API.put(`/items/${id}`, data); // Admin only
export const deleteItem = (id) => API.delete(`/items/${id}`); // Admin only

// ==================== Cart ====================
export const addToCart = (productId, quantity = 1) =>
  API.post("/cart", { productId, quantity });

export const getCart = () => API.get("/cart");

export const removeCartItem = (productId) => API.delete(`/cart/${productId}`);

export const clearCart = () => API.delete("/cart");

// ==================== Extra ====================
// Optionally, you can add a function to update cart quantity
export const updateCartItem = (productId, quantity) =>
  API.put(`/cart/${productId}`, { quantity });

