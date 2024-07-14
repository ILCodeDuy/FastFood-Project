import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/User/ProfilePage";
import CartPage from "./pages/CartPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Header2 from "./components/Header/Header2";
import Login from "./pages/LoginPage";
import SignUp from "./pages/SignUpPage";
import Account from "./pages/User/Account";
import OrderPage from "./pages/User/OrderPage";
import EditUser from "./pages/User/EditUser";

function App() {
  const location = useLocation();

  const renderHeader = () => {
    if (location.pathname === "/") {
      return <Header />;
    } else {
      return <Header2 />;
    }
  };

  return (
    <div>
      {renderHeader()}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile" element={<ProfilePage />}>
          <Route index element={<Account />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="edit-user" element={<EditUser />} />
        </Route>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
