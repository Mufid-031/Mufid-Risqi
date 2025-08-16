"use client";

import { useEffect, useState } from "react";

export default function Clock() {
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

  return <div className="text-md font-mono mr-5">{time}</div>;
}
