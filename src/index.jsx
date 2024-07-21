import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./Service/Cart/cartService";
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const productsReducer = (state = [], action) => {
  return state;
};

const usersReducer = (state = [], action) => {
  return state;
};

// Combine reducers
const rootReducer = combineReducers({
  products: productsReducer,
  users: usersReducer,
  form: formReducer,
});

// Create store
const store = createStore(rootReducer);

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
