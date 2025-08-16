"use client";

import Magnetic from "../common/magnetic";
import Image from "next/image";
import Clock from "./clock";

export const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-24 flex justify-between items-center px-5 z-50">
      <Magnetic padding={10} className="cursor-pointer">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
      </Magnetic>
      <Clock />
    </nav>
  );
};
