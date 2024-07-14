// src/services/cartService.js

const CART_KEY = "shopping_cart";

const getCart = () => {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
};

const saveCart = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

const addToCart = (product) => {
  const cart = getCart();
  const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
};

const removeFromCart = (productId) => {
  let cart = getCart();
  cart = cart.filter((item) => item.id !== productId);
  saveCart(cart);
};

const decreaseQuantity = (product) => {
  const cart = getCart();
  const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct && existingProduct.quantity > 1) {
    existingProduct.quantity -= 1;
    saveCart(cart);
  }
};

const clearCart = () => {
  localStorage.removeItem(CART_KEY);
};

export { getCart, addToCart, removeFromCart, decreaseQuantity, clearCart };
