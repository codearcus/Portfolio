"use client";
import Image from "next/image";
import home from "../assets/home.jpg";
import { motion } from "framer-motion";
import WalkingMan from "@/components/WalkingMan";
import InfiniteSlider from "@/components/InfiniteSlider";

export default function Home() {
  const testimonials = [
    {
      name: "Praveen Kumar",
      text: "Amazing service! My website was delivered faster than expected and looks extremely professional.",
    },
    {
      name: "Karthik R",
      text: "Perfect website for my business. The UI is clean, fast, and exactly what I wanted!",
    },
    {
      name: "Sahana M",
      text: "Great support team. They clarified all my doubts and handled everything smoothly.",
    },
    {
      name: "Harish V",
      text: "Loved the design and performance. The team really understands modern web development.",
    },
    {
      name: "Nandhini S",
      text: "Very responsive and friendly. They built my portfolio just the way I imagined.",
    },
    {
      name: "Ashwin",
      text: "If you need a website for business or personal use, trust them—professional work!",
    },
  ];

  const pricing = [
    {
      title: "Basic",
      // price: "₹3,***",
      features: ["Static Website", "3-8 Pages", "Basic SEO"],
    },
    {
      title: "Standard",
      // price: "₹6,***",
      features: ["Dynamic Website", "6-12 Pages", "Advanced SEO"],
    },
    {
      title: "Premium",
      // price: "₹**,499",
      features: ["Full Website", "Unlimited Pages", "Marketing Support"],
    },
  ];

  const row1 = [
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "MySQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Bootstrap",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "Spring Boot",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    },
  ];

  const row2 = [
    {
      name: "Expo",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg",
    },
    {
      name: "Firebase",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Redux",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "HTML5",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Vue.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "GitLab",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
    },
  ];

  return (
    <div className="container mx-auto">
      {/* ---------------------- HERO PAGE  ---------------------- */}
      <section
        className="
          flex 
          flex-col-reverse md:flex-row 
          justify-between items-center 
          w-full 
          gap-10 md:gap-16
          px-6 md:px-20 
          py-20
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
      </section>

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
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <h2 className="text-center text-4xl font-extrabold mb-12">
          What Our <span className="text-blue-600">Clients Say</span>
        </h2>

        <div className="overflow-hidden no-scrollbar">
          <div className="flex gap-10 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="min-w-[300px] bg-white p-6 shadow-lg rounded-xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94], // smooth cubic bezier
                }}
              >
                <p className="text-gray-600 italic mb-4">“{t.text}”</p>
                <h4 className="font-semibold text-lg">{t.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------- PRICING PLANS ---------------------- */}
      <section id="pricing" className="py-20 px-6 md:px-20">
        <h2 className="text-center text-4xl font-extrabold mb-12">
          Our <span className="text-blue-600">Pricing</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pricing.map((p, i) => (
            <motion.div
              key={i}
              className="bg-white shadow-xl rounded-2xl p-8 text-center hover:scale-105 transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94], // smooth cubic bezier
              }}
            >
              <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
              <p className="text-blue-600 text-3xl font-extrabold mb-5">
                {p.price}
              </p>
              <ul className="text-gray-700 space-y-2">
                {p.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------------- TECH STACK ---------------------- */}
      <section
        id="tech-stack-section"
        className="py-20 px-6 md:px-20 bg-gray-50 relative overflow-hidden"
      >
        <h2 className="text-center text-4xl font-extrabold mb-12">
          Our <span className="text-blue-600">Tech Stack</span>
        </h2>

        <div className="space-y-2">
          {/* Row 1 - slide left to right */}
          <InfiniteSlider items={row1} reverse={true} speed={20} />

          {/* Row 2 - slide right to left */}
          <InfiniteSlider items={row2} reverse={false} speed={20} />
        </div>

        <WalkingMan />
      </section>
    </div>
  );
}
