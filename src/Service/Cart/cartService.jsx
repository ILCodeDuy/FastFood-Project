import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const CART_KEY = "shopping_cart";

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartFromStorage = localStorage.getItem(CART_KEY);
    if (cartFromStorage) {
      setCart(JSON.parse(cartFromStorage));
    }
  }, []);

  const saveCart = (updatedCart) => {
    localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const addToCart = (product) => {
    const updatedCart = [...cart];
    const existingProduct = updatedCart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    saveCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    saveCart(updatedCart);
  };

  const decreaseQuantity = (product) => {
    const updatedCart = [...cart];
    const existingProduct = updatedCart.find((item) => item.id === product.id);

    if (existingProduct && existingProduct.quantity > 1) {
      existingProduct.quantity -= 1;
      saveCart(updatedCart);
    }
  };

  const clearCart = () => {
    localStorage.removeItem(CART_KEY);
    setCart([]);
  };

  const cartContextValue = {
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
