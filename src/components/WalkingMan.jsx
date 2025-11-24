/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function WalkingMan() {
  const [xPos, setXPos] = useState(0); // horizontal position
  const [direction, setDirection] = useState(1); // 1: right, -1: left
  const [ready, setReady] = useState(false);
  const speed = 2; // px per tick (adjust for faster/slower walk)
  const interval = 16; // ms per tick

  useEffect(() => {
    setReady(true); // trigger walk after mount
  }, []);

  useEffect(() => {
    if (!ready) return;
    let animationFrame;
    let width = window.innerWidth || 1200; // fallback width

    function animate() {
      setXPos((prev) => {
        const next = prev + speed * direction;
        // When reaching left or right edge
        if (next >= width - 120) {
          setDirection(-1);
          return width - 120;
        }
        if (next <= 0) {
          setDirection(1);
          return 0;
        }
        return next;
      });
      animationFrame = setTimeout(animate, interval);
    }
    animate();
    return () => clearTimeout(animationFrame);
  }, [ready, direction]);

  return (
    <div
      className="
        absolute
        left-0
        bottom-[-5px]
        w-screen
        z-50
        pointer-events-none
      "
    >
      <div
        style={{
          position: "absolute",
          left: xPos,
          bottom: 0,
          transition: "left 0.03s linear",
        }}
      >
        <Image
          width={120}
          height={120}
          src="/walking-boy.gif"
          alt="walking man"
          className={
            // Flip horizontally when walking right-to-left
            direction === 1 ? "w-[120px]" : "w-[120px] scale-x-[-1]"
          }
        />
      </div>
    </div>
  );
}
