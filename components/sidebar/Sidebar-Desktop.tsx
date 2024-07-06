import React from "react";
import SidebarContents from "./Sidebar-Contents";

const sidebarDesktop = () => {
  return (
    <>
      <div className="absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden duration-300 ease-linear bg-slate-50 dark:bg-boxdark sm:static sm:translate-x-0 -translate-x-full">
        <SidebarContents />
      </div>
    </>
  );
};

export default sidebarDesktop;
