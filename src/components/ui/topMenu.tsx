import React from "react";
import { MobileMenu } from "@/components/ui/mobileMenu";
import Image from "next/image";


export const TopMenu = () => {
  return (
    <header className=" border-b-2 bg-[#020817] border-gray-800 h-14 sticky top-0 z-10">
      <nav className="flex w-full h-full justify-between items-center px-2 ">
        <Image src='/imgs/logo.svg' alt="logo" width={80} height={80} className="ml-2"  />
        <MobileMenu />
      </nav>
    </header>
  );
};
