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
import ExpandableTable from "./pages/ExpandableTable";
import Admin from "./pages/Admin/AdminPage";
import Dashboard from "./pages/Admin/Dashboard";
import CategoriesAdmin from "./pages/Admin/CategoriesAdmin";
import ProductsAdmin from "./pages/Admin/ProductsAdmin";
import OrderAdmin from "./pages/Admin/OrderAdmin";
import UserAdmin from "./pages/Admin/UserAdmin";

function App() {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");

  const renderHeader = () => {
    if (location.pathname === "/") {
      return <Header />;
    } else {
      return <Header2 />;
    }
  };

  return (
    <div>
      {!isAdminRoute && renderHeader()}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile" element={<ProfilePage />}>
          <Route path="user"  element={<Account />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="edit-user" element={<EditUser />} />
        </Route>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/table" element={<ExpandableTable />} />
        <Route path="/admin" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="categories" element={<CategoriesAdmin />} />
          <Route path="products" element={<ProductsAdmin />} />
          <Route path="orders" element={<OrderAdmin />} />
          <Route path="users" element={<UserAdmin />} />
        </Route>
      </Routes>
      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;
