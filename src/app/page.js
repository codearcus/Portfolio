"use client";
import Image from "next/image";
import home from "../assets/home.jpg";
import { motion } from "framer-motion";
import About from "@/components/sections/about";
import Contact from "@/components/sections/Contact";
import ServicesPage from "@/components/sections/Services";

export default function Home() {
  return (
    <div>
      <div
        className="
    flex 
    min-h-screen 
    items-center 
    justify-center 
    px-5 md:px-10 
    pt-24 md:pt-32
  "
      >
        <div
          className="
          flex 
          flex-col-reverse md:flex-row 
          justify-between items-center 
          w-full 
          gap-10 md:gap-16
        "
        >
          <motion.div
            className="max-w-xl pt-5 text-center md:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="
              text-4xl md:text-6xl 
              font-extrabold 
              leading-tight 
              mb-6
            "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Empowering Businesses <br />
              Through Digital Innovation
            </motion.h1>

            <motion.p
              className="
              text-base md:text-lg 
              leading-relaxed 
              text-gray-700 
              font-medium
            "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Unlock the full potential of your brand with tailored digital
              solutions designed to elevate efficiency, enhance customer
              experience, and accelerate growth in today’s fast-paced digital
              world.
            </motion.p>
          </motion.div>

          <motion.div
            className="w-full md:w-auto flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <Image
              src={home}
              width={800}
              height={600}
              alt="home image"
              className="
              rounded-xl 
              w-full 
              max-w-md md:max-w-none
            "
            />
          </motion.div>
        </div>
      </div>
      <About />
      <ServicesPage />
      <Contact />
    </div>
  );
}
