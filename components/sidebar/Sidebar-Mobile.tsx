import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import React from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import SidebarContents from "./Sidebar-Contents";

const sidebarMobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="fixed top-3 left-3 z-50">
          <Menu size={30} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="px-3 py-4">
        <SidebarContents />
      </SheetContent>
    </Sheet>
  );
};

export default sidebarMobile;
