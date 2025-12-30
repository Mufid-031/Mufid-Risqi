"use client";

import Clock from "./clock";
import Image from "next/image";
import Magnetic from "../common/magnetic";

export const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-24 flex justify-between items-center px-5 z-[999]">
      <Magnetic padding={10} className="cursor-pointer">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
      </Magnetic>
      <Clock />
    </nav>
  );
};
