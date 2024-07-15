import React from "react";
import Shopping from "../components/Cart/Shopping";
import Order from "../components/Cart/Order";

const Cart = () => {
  return (
    <div>
      <section className="relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
          <div className="grid grid-cols-12">
            <Shopping />
            <Order />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
