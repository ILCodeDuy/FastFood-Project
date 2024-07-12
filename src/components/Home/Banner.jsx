import React from "react";
import { bg } from "../../assets/img";

const Banner = () => {
  return (
    <div className="h-screen">
        <div className="absolute top-0">
          <img src={bg} alt="" />
        </div>
        <div className="mt-16 z-0 text-white absolute ml-32">
          <h1 className="text-6xl dancing-script ">Fast Food Restaurant</h1>
          <p className="mt-6 text-xl">Mua ngay kẻo lỡ!!!</p>
          <button className="bg-yellow-400 p-4 mt-6 rounded-full w-32">
            Đặt Ngay !
          </button>
        </div>
      </div>
  );
};

export default Banner;
