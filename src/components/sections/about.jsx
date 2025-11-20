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
            flex-col md:flex-row
            items-center justify-between 
            w-full gap-10 md:gap-16
          "
        >
          {/* ---------------- IMAGE ON LEFT ---------------- */}
          <motion.div
            className="w-full md:w-auto flex justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <Image
              src={aboutImg}
              width={700}
              height={500}
              alt="About image"
              className="rounded-xl shadow-lg w-full max-w-md md:max-w-none"
            />
          </motion.div>

          {/* ---------------- TEXT ON RIGHT ---------------- */}
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
              with modern, scalable, and performance-driven technology.
            </motion.p>

            <motion.p
              className="text-base md:text-lg leading-relaxed text-gray-700 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              Our passionate team transforms ideas into successful digital
              products that help businesses grow and stand out.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* ---------------------- ROTATING PROCESS CARDS SECTION ---------------------- */}
      <div className="w-full py-24 bg-white">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-16">
          Our <span className="text-blue-600">Process</span>
        </h2>

        {/* FIXED: Added py-10 to stop clipping */}
        <div className="overflow-hidden w-full py-10">
          <motion.div
            className="flex gap-10 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 22,   // slower speed
              ease: "linear",
            }}
          >
            {/* Duplicate for looping */}
            {[1, 2].map((row) => (
              <div key={row} className="flex gap-10">

                {/* ---- CARD 1 ---- */}
                <Card
                  title="Requirements Gathering"
                  desc="Understanding client needs to define the perfect solution."
                  color="blue"
                  icon={
                    <path d="M12 7v10M7 12h10" />
                  }
                />

                {/* ---- CARD 2 ---- */}
                <Card
                  title="Designing (UI / UX)"
                  desc="Creating user-friendly and visually appealing interfaces."
                  color="purple"
                  icon={<circle cx="12" cy="12" r="10" />}
                />

                {/* ---- CARD 3 ---- */}
                <Card
                  title="Development"
                  desc="Building high-quality digital products using modern tech."
                  color="blue"
                  icon={<rect x="3" y="4" width="18" height="15" rx="2" />}
                />

                {/* ---- NEW CARD: TESTING ---- */}
                <Card
                  title="Testing"
                  desc="Ensuring everything is bug-free, secure, and performs reliably."
                  color="green"
                  icon={<path d="M5 13l4 4L19 7" />}
                />

                {/* ---- CARD 4 ---- */}
                <Card
                  title="Deployment & Support"
                  desc="Smooth launch and long-term maintenance support."
                  color="purple"
                  icon={<path d="M5 12l5 5L20 7" />}
                />

              </div>
            ))}
          </motion.div>
        </div>
      </div>
       {/* ------- PARAGRAPH BELOW CAROUSEL (NOW VISIBLE) ------- */}
  <p className="text-center text-gray-600 text-base md:text-lg mt-0 px-5 md:px-40">
    Our structured and transparent workflow ensures high-quality results—
    from understanding your needs, crafting the perfect design, testing 
    thoroughly, developing with precision, and delivering continuous support 
    for long-term success.
  </p>
    </>
  );
}

/* ---------------------- CARD COMPONENT ---------------------- */
function Card({ title, desc, color, icon }) {
  const colors = {
    blue: "text-blue-600 stroke-blue-600",
    purple: "text-purple-600 stroke-purple-600",
    green: "text-green-600 stroke-green-600",
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 w-72 text-center hover:scale-105 transition duration-300">
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        className={`mx-auto mb-4 ${colors[color]}`}
        fill="none"
        strokeWidth="2"
      >
        {icon}
      </svg>
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}
