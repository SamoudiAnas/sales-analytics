import { NextPage } from "next";
import React from "react";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import Header from "@/components/layout/Header";

interface SidebarLayoutProps {
  children: React.ReactNode;
}

const SidebarLayout: NextPage<SidebarLayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-grow w-full pl-64">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default SidebarLayout;
