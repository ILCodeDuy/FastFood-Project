import React from "react";
import Heading from "../../components/Profile/Heading";
import Navigate from "../../components/Profile/Navigate";
import { Outlet } from 'react-router-dom';

const Profile = () => {
  
  return (
    <div className="p-6">
      <Heading />
      <div className="flex mx-24">
        <Navigate />
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Profile;
