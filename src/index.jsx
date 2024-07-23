import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./Service/Cart/cartService";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';

const productsReducer = (state = [], action) => {
  return state;
};

const usersReducer = (state = [], action) => {
  return state;
};

const store = configureStore({
  reducer: {
    products: productsReducer,
    users: usersReducer,
    form: formReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <CartProvider>
        <App />
      </CartProvider>
    </Provider>
  </BrowserRouter>
);
