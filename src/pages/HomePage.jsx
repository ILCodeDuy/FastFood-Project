import React from "react";
import Banner from "../components/Home/Banner";
import Sale from "../components/Home/Sale";
import Menu from "../components/Home/Menu";
import About from "../components/Home/About";
import Drink from "../components/Home/Drink";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <Sale />
      <Menu />
      <About />
      <Drink/>
    </div>
  );
};

export default Home;
