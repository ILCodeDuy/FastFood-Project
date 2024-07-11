import React from "react";
import { bg, anh, anh2, aboutIMG } from "../assets/img";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const plus = faPlus; // Sử dụng faPlus từ thư viện Font Awesome

  return (
    <>
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

      <div className="w-full mx-32 flex mb-24">
        <div className="w-530 h-52 p-4 bg-gray-900 flex items-center rounded-lg mr-4">
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
        <div className="w-530 h-52 p-4 bg-gray-900 flex items-center rounded-lg">
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

      <div className="container mx-auto px-4">
        <h2 className="text-center dancing-script text-slate-950 text-5xl">
          Our Menu{" "}
        </h2>
        <div className="w-full mt-24 mx-12 flex flex-wrap">
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

      <div className="w-screen h-about mt-16 bg-gray-900 flex items-center">
        <div className="w-1/4 ml-52">
          <img className="w-imglg h-box1" src={aboutIMG} alt="" />
        </div>
        <div className="w-1/4 mx-32">
          <h2 className="text-white dancing-script text-5xl">
            Ăn không sợ BÉO!
          </h2>
          <p className="text-white mt-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All!
          </p>
          <button className="mt-6 bg-yellow-400 w-1/3 text-white p-3 rounded-full">
            Xem Thêm
          </button>
        </div>
      </div>

      <div className="bg-gray-100 h-96">"works-place"</div>
    </>
  );
};

export default Home;
