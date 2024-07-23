import React from "react";
import { Outlet } from 'react-router-dom';
import SideBar from "../../components/Admin/SideBar/SideBar";
import TopNavBar from "../../components/Admin/TopNavBar/TopNavBar";
const UserAdmin = () => {
  return (
    <div className="flex bg-gray-100">
      <SideBar />
      <div className="flex-1 flex flex-col ml-64">
        <TopNavBar title={'Dashboard'}/>
        <main className="p-6 h-screen">
            <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserAdmin;
