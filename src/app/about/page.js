"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import aboutImg from "../../assets/about.jpg";

export default function About() {
  return (
    <div className="space-y-32 pt-24">

      {/* ---------------------- OUR STORY ---------------------- */}
      <section className="flex flex-col md:flex-row items-center gap-16 px-6 md:px-20">
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Our <span className="text-blue-600">Story</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            CodeArcUs was founded with a simple mission — empowering brands through 
            modern digital solutions. What started as a small creative team has grown 
            into a full-service development studio helping businesses globally.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Image
            src={aboutImg}
            alt="about"
            width={600}
            height={450}
            className="rounded-xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* ---------------------- MISSION & VALUES ---------------------- */}
      <section className="px-6 md:px-20 text-center">
        <h2 className="text-4xl font-extrabold mb-10">
          Our <span className="text-blue-600">Mission & Values</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Innovation",
              desc: "We build creative, scalable, modern solutions for future-ready businesses.",
            },
            {
              title: "Trust",
              desc: "We believe in transparency, honesty, and long-term partnerships.",
            },
            {
              title: "Excellence",
              desc: "Quality is at the heart of everything we deliver. Always.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-8 bg-white shadow rounded-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------------- WHAT WE DO ---------------------- */}
      <section className="px-6 md:px-20">
        <h2 className="text-4xl font-extrabold mb-10 text-center">
          What <span className="text-blue-600">We Do</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              title: "Website Development",
              desc: "Custom websites with modern UI and high performance.",
            },
            {
              title: "Mobile App Development",
              desc: "iOS & Android apps that users love.",
            },
            {
              title: "SEO Optimization",
              desc: "Rank faster and get more traffic organically.",
            },
            {
              title: "Digital Marketing",
              desc: "Grow your brand through targeted digital campaigns.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              className="p-8 bg-white rounded-xl shadow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------------- CULTURE ---------------------- */}
      <section className="px-6 md:px-20 text-center">
        <h2 className="text-4xl font-extrabold mb-10">
          Our <span className="text-blue-600">Culture</span>
        </h2>

        <motion.p
          className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          At CodeArcUs, we believe in collaboration, creativity, and continuous learning. 
          Our environment encourages sharing ideas, experimenting, and pushing boundaries — 
          always putting the user first.
        </motion.p>
      </section>

      {/* ---------------------- CTA SECTION ---------------------- */}
      <section className="px-6 md:px-20 text-center py-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white">
        <h2 className="text-4xl font-extrabold mb-6">Ready to Build Something Great?</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Let’s turn your ideas into powerful digital products. Reach out and let’s get started.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg shadow hover:scale-105 transition"
        >
          Contact Us
        </a>
      </section>

    </div>
  );
}
