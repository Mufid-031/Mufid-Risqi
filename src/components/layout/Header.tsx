"use client";

import Image from "next/image";
import Magnetic from "../common/magnetic";
import { useEffect, useState } from "react";

export default function Header() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hours} : ${minutes} : ${seconds}`);
    };

    updateClock(); // panggil sekali saat mount
    const interval = setInterval(updateClock, 1000); // update tiap detik

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 h-24 flex justify-between items-center px-5 z-[999]">
      <Magnetic padding={10} className="cursor-pointer">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
      </Magnetic>
      <div className="text-md font-mono mr-5">{time}</div>
    </header>
  );
}
