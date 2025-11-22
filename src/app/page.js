"use client";
import Image from "next/image";
import home from "../assets/home.jpg";
import { motion } from "framer-motion";

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
              width={700}
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


{/* ---------------------- WHY CHOOSE US ---------------------- */}
<section className="py-24 px-6 md:px-20 text-center bg-gray-50">
  <h2 className="text-4xl font-extrabold mb-12">
    Why <span className="text-blue-600">Choose Us?</span>
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    
    {/* Card 1 */}
    <motion.div
      className="p-8 bg-white rounded-xl shadow hover:shadow-xl transition"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="font-bold text-xl mb-3">Experienced Team</h3>
      <p className="text-gray-600">We deliver professional-grade work.</p>
    </motion.div>

    {/* Card 2 */}
    <motion.div
      className="p-8 bg-white rounded-xl shadow hover:shadow-xl transition"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <h3 className="font-bold text-xl mb-3">Affordable Cost</h3>
      <p className="text-gray-600">Best pricing for small businesses.</p>
    </motion.div>

    {/* Card 3 */}
    <motion.div
      className="p-8 bg-white rounded-xl shadow hover:shadow-xl transition"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      <h3 className="font-bold text-xl mb-3">Fast Delivery</h3>
      <p className="text-gray-600">We value your time.</p>
    </motion.div>

  </div>
</section>


{/* ---------------------- TESTIMONIALS ---------------------- */}
      <div className="py-20 px-6 md:px-20 bg-gray-50">
        <h2 className="text-center text-4xl font-extrabold mb-12">
          What Our <span className="text-blue-600">Clients Say</span>
        </h2>

        <div className="flex gap-10 overflow-x-auto no-scrollbar py-5">
          {[
            { name: "Praveen", text: "Amazing service and fast delivery!" },
            { name: "Karthik", text: "Perfect website for my business." },
            { name: "Sahana", text: "Professional team and great support." },
            { name: "Karthik", text: "Perfect website for my business." },
          ].map((t, i) => (
            <motion.div
              key={i}
              className="min-w-[300px] bg-white p-6 shadow-lg rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <p className="text-gray-600 italic mb-4">“{t.text}”</p>
              <h4 className="font-semibold text-lg">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ---------------------- PRICING PLANS ---------------------- */}
      <div className="py-20 px-6 md:px-20">
        <h2 className="text-center text-4xl font-extrabold mb-12">
          Our <span className="text-blue-600">Pricing</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: "Basic", price: "₹3,***", features: ["Static Website", "3-8 Pages", "Basic SEO"] },
            { title: "Standard", price: "₹6,***", features: ["Dynamic Website", "6-12 Pages", "Advanced SEO"] },
            { title: "Premium", price: "₹**,499", features: ["Full Website", "Unlimited Pages", "Marketing Support"] },
          ].map((p, i) => (
            <motion.div
              key={i}
              className="bg-white shadow-xl rounded-2xl p-8 text-center hover:scale-105 transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
              <p className="text-blue-600 text-3xl font-extrabold mb-5">{p.price}</p>
              <ul className="text-gray-700 space-y-2">
                {p.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ---------------------- TECH STACK ---------------------- */}
     {/* ---------------------- TECH STACK ---------------------- */}
<div className="py-20 px-6 md:px-20 bg-gray-50">
  <h2 className="text-center text-4xl font-extrabold mb-12">
    Our <span className="text-blue-600">Tech Stack</span>
  </h2>

  <div className="flex flex-wrap justify-center gap-10">

    {/* Tech Items with Logos */}
    {[
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      },
      {
        name: "Next.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
      },
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
      },
      {
        name: "PHP",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
      },
      {
        name: "MySQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
      },
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
      },
      {
  name: "TailwindCSS",
  logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
}

    ].map((tech, i) => (
      <motion.div
        key={i}
        className="p-6 bg-white shadow-lg rounded-xl text-center w-36 hover:scale-110 transition cursor-pointer"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.2, duration: 0.6 }}
      >
        <img src={tech.logo} alt={tech.name} className="w-16 h-16 mx-auto mb-3" />
        <p className="text-lg font-semibold">{tech.name}</p>
      </motion.div>
    ))}
  </div>
</div>



    </div>
  );
}
