import React from "react";
import Header from "../components/Home/Header";
import Footer from "../components/Footer";
import Banner from "../components/Home/Banner";
import Sale from "../components/Home/Sale";
import Menu from "../components/Home/Menu";
import About from "../components/Home/About";
import Drink from "../components/Home/Drink";

const Home = () => {
  return (
    <div className="">
      <Header />
      <Banner />
      <Sale />
      <Menu />
      <About />
      <Drink/>
      <Footer />
    </div>
  );
};

export default Home;
