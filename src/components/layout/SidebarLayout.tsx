import { NextPage } from "next";
import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Header from "./Header";

interface SidebarLayoutProps {
  children: React.ReactNode;
}

const SidebarLayout: NextPage<SidebarLayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow w-full">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default SidebarLayout;
