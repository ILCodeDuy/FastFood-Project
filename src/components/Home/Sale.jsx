import React from "react";
import { anh, anh2 } from "../../assets/img";

const Sale = () => {
  return (
    <div className="mx-32 flex justify-between items-center mb-24">
      <div className="w-[468px] h-52 p-4 bg-gray-900 flex items-center rounded-lg">
        <div>
          <img
            className="w-40 h-40 rounded-full border-4 border-yellow-400 hover:scale-105"
            src={anh}
            alt=""
          />
        </div>
        <div className="text-white ml-6">
          <h5 className="dancing-script text-3xl">Tasty Thursdays</h5>
          <h6 className="mt-6 dancing-script">
            <span className="text-5xl">20%</span>
            Off
          </h6>
        </div>
      </div>
      <div className="w-[468px] h-52 p-4 bg-gray-900 flex items-center rounded-lg">
        <div>
          <img
            className="w-40 h-40 rounded-full border-4 border-yellow-400 hover:scale-105"
            src={anh2}
            alt=""
          />
        </div>
        <div className="text-white ml-6">
          <h5 className="dancing-script text-3xl">Tasty Thursdays</h5>
          <h6 className="mt-6 dancing-script">
            <span className="text-5xl">20%</span>
            Off
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Sale;
