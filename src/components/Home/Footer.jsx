import React from "react";
import { faEnvelope, faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Footer = () => {
  return (
    <div className="bg-gray-900 footer-session">
      <div className="flex justify-around mx-20 p-6">
        <div className="text-center mt-12">
          <h4 className="dancing-script text-3xl text-white">Contact Us</h4>
          <p className="mt-8 text-white">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-white text-lg mr-3"
            />
            Location
          </p>
          <p className="mt-2 text-white">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-white text-lg mr-3"
            />
            Call +84 0384762977
          </p>
          <p className="mt-2 text-white">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-white text-lg mr-3"
            />
            ankhongsobeo@gmail.com
          </p>
        </div>
        <div className="mt-12">
          {/* Replace anchor tag with Link */}
          <Link to="#" className="dancing-script text-5xl text-white">
            Ăn không sợ BÉO!
          </Link>
          <p className="text-gray-300 font-bold mt-6 text-center">
            Ăn là để thưởng thức!
          </p>
          <div className="flex mt-6 ml-16">{/* Your social media icons */}</div>
        </div>
        <div className="mt-12">
          <h4 className="dancing-script text-3xl text-white">Giờ mở cửa</h4>
          <p className="text-gray-300 font-bold mt-6 text-center">Mỗi ngày</p>
          <p className="text-gray-300 font-bold mt-6 text-center">
            10.00 AM - 10.00 PM
          </p>
        </div>
      </div>
      <div className="mt-12 font-bold text-white text-center ml-14">
        <p>
          © All Rights Reserved By{" "}
          <Link to="#">Ăn không sợ BÉO!</Link>
        </p>
        <p className="mt-3">
          © Distributed By <Link to="#">Ăn không sợ BÉO!</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
