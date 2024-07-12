import React from "react";
import { anh } from "../../assets/img";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
    const plus = faPlus;
  return (
    <div className="container mx-auto px-4">
        <h2 className="text-center dancing-script text-slate-950 text-5xl">
          Our Menu{" "}
        </h2>
        <div className="mt-24 mx-12 flex flex-wrap">
          <div className="p-6 mx-12 mt-6 h-box w-72 rounded-2xl bg-gray-900 text-white">
            <img
              className="w-64 h-48 rounded-3xl hover:scale-105"
              src={anh}
              alt=""
            />
            <h2 className="text-3xl dancing-script mt-4 mb-10">2</h2>
            <span className="font-bold mt-20"> VNĐ</span>
            <p className="font-bold mt-4">Số lượng còn lại:</p>
            <button className="bg-yellow-400 p-3 rounded-full w-12 relative left-48 bottom-16">
              <FontAwesomeIcon
                icon={plus}
                className="text-white text-xl text-center cursor-pointer"
              />
            </button>
            <button className="bg-teal-800 border-2 p-1 border-slate-950 hover:border-gray-100 rounded-full w-32 mt-6">
              Chi tiết
            </button>
          </div>
        </div>
        <div className="text-center">
          <button className="btn mt-6 bg-gray-800 text-white hover:text-black">
            Xem Thêm
          </button>
        </div>
      </div>
  );
};

export default Menu;
