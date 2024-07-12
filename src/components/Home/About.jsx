import React from "react";
import { aboutIMG } from "../../assets/img";

const About = () => {
  return (
    <div className="h-about mt-16 p-6 bg-gray-900 flex items-center mb-16">
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
  );
};

export default About;
