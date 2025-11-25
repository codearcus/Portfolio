/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ServiceSlider() {
  const services = [
    {
      title: "Website Development",
      description: "We build modern, responsive, SEO-friendly websites.",
      image: "/service1.jpg",
    },
    {
      title: "App Development",
      description: "Beautiful Android mobile apps using modern tech.",
      image: "/AppService.jpg",
    },
    {
      title: "Digital Marketing",
      description: "Grow your brand through strategic digital marketing.",
      image: "/service3.jpg",
    },
    {
      title: "SEO Optimization",
      description: "Rank higher on Google with advanced SEO techniques.",
      image: "/service4.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % services.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex items-center justify-center px-4 md:px-0">
      {/* CARD ONLY — No outer background */}
      <div className="relative w-full bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-10 min-h-[380px] flex">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col md:flex-row items-center justify-between gap-10"
          >
            {/* LEFT TEXT */}
            <div className="w-full md:w-[45%]">
              <h1 className="text-4xl font-bold text-[#0e1a2b] mb-4">
                {services[index].title}
              </h1>

              <p className="text-gray-600 text-lg mb-6">
                {services[index].description}
              </p>

              <button className="px-8 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>

            {/* FIXED SIZE IMAGE */}
            <div className="w-full md:w-[50%] h-[260px] flex items-center justify-center">
              <div className="w-full h-full max-w-md rounded-2xl overflow-hidden shadow-lg bg-white flex justify-center items-center">
                <Image
                  src={services[index].image}
                  width={420}
                  height={260}
                  alt="service"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
