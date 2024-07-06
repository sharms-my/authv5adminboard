"use client";
import { useMediaQuery } from "usehooks-ts";
import SidebarMobile from "./Sidebar-Mobile";
import SidebarDesktop from "./Sidebar-Desktop";

const Sidebar = () => {
  const isDesktop = useMediaQuery("(min-width: 640px)", {
    initializeWithValue: false,
  });

  if (isDesktop) {
    return <SidebarDesktop />;
  }

  return <SidebarMobile />;
};

export default Sidebar;
