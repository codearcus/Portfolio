"use client";

import { useEffect, useState } from "react";

export default function WalkingMan() {
  const [start, setStart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStart(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`
        absolute 
        left-0 
        w-screen
        z-50
        pointer-events-none
        ${start ? "man-walk" : ""}
      `}
      style={{ bottom: "-5px" }} 
    >
      <img
        src="/walking-boy.gif"
        className="w-[120px]"
        alt="walking man"
      />
    </div>
  );
}
