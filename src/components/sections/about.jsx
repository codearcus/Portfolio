"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import aboutImg from "../../assets/about.jpg";

export default function About() {
  return (
    <>
      {/* ---------------------- HERO SECTION ---------------------- */}
      <div className="min-h-screen flex items-center justify-center px-5 md:px-10 py-20 pt-24 md:pt-32">
        <div
          className="
            flex 
            flex-col-reverse md:flex-row 
            items-center justify-between 
            w-full gap-10 md:gap-16
          "
        >
          {/* Left Text Section */}
          <motion.div
            className="max-w-xl text-center md:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Our <span className="text-blue-600">Story</span>
            </motion.h1>

            <motion.p
              className="text-base md:text-lg leading-relaxed text-gray-700 font-medium mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              We are a digital solutions company dedicated to empowering brands
              with modern, scalable, and performance-driven technology. Our mission
              is to transform ideas into impactful digital experiences.
            </motion.p>

            <motion.p
              className="text-base md:text-lg leading-relaxed text-gray-700 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              With a passionate team of designers, developers, and strategists, we
              craft solutions that help businesses grow, innovate, and stand out in
              a fast-evolving digital world.
            </motion.p>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            className="w-full md:w-auto flex justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <Image
              src={aboutImg}
              width={700}
              height={500}
              alt="About image"
              className="rounded-xl shadow-lg w-full max-w-md md:max-w-none"
            />
          </motion.div>
        </div>
      </div>

      {/* --------------------- CURVED TIMELINE SECTION --------------------- */}
      <div className="w-full py-24 bg-white">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-16">
          Our <span className="text-blue-600">Process</span>
        </h2>

        <div className="relative w-full overflow-hidden px-5 md:px-20">
          {/* SVG Curve */}
          <svg
            viewBox="0 0 1200 300"
            className="w-full h-64 md:h-72"
            preserveAspectRatio="none"
          >
            <path
              d="
                M 0 150 
                C 200 10, 400 300, 600 150 
                S 1000 10, 1200 150
              "
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="10"
              strokeLinecap="round"
            />

            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#9333ea" />
              </linearGradient>
            </defs>
          </svg>

          {/* Dots + Labels */}
          <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center px-5 md:px-10 pointer-events-none">

            {/* Stage 1 */}
            <div className="flex flex-col items-center gap-3 -mt-6">
              <div className="w-6 h-6 bg-blue-500 rounded-full shadow-md"></div>
              <h3 className="font-semibold text-gray-800 text-center">Requirements Gathering</h3>
            </div>

            {/* Stage 2 */}
            <div className="flex flex-col items-center gap-3 mt-10">
              <div className="w-6 h-6 bg-purple-500 rounded-full shadow-md"></div>
              <h3 className="font-semibold text-gray-800 text-center">Designing</h3>
            </div>

            {/* Stage 3 */}
            <div className="flex flex-col items-center gap-3 -mt-6">
              <div className="w-6 h-6 bg-blue-500 rounded-full shadow-md"></div>
              <h3 className="font-semibold text-gray-800 text-center">Implementation</h3>
            </div>

            {/* Stage 4 */}
            <div className="flex flex-col items-center gap-3 mt-10">
              <div className="w-6 h-6 bg-purple-500 rounded-full shadow-md"></div>
              <h3 className="font-semibold text-gray-800 text-center">Delivery & Support</h3>
            </div>
          </div>
        </div>

        {/* Paragraph under timeline */}
        <p className="text-center text-gray-600 text-base md:text-lg mt-16 px-5 md:px-40">
          Our structured and transparent workflow ensures high-quality results—starting from 
          understanding your needs, crafting the perfect design, building with precision, 
          and delivering continuous support for long-term success.
        </p>
      </div>
    </>
  );
}
