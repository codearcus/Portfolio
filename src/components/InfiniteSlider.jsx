"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function InfiniteSlider({ items, reverse = false, speed }) {
  return (
    <div className="overflow-hidden w-full py-4">
      <motion.div
        className="flex flex-nowrap gap-6 md:gap-10"
        animate={{
          x: reverse ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ width: "200%" }}
      >
        {[...items, ...items].map((tech, i) => (
          <div
            key={i}
            className="p-3 md:p-6  text-center w-24 md:w-36 shrink-0 hover:scale-110 transition cursor-pointer"
          >
            <div className="w-12 h-12 md:w-20 md:h-20 mx-auto mb-2 md:mb-3 flex items-center justify-center">
              <Image src={tech.logo} alt={tech.name} width={64} height={64} />
            </div>
            <p className="text-base md:text-lg font-extralight">{tech.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
