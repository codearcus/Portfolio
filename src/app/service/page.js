"use client";

import { motion } from "framer-motion";
import ServiceSlider from "@/components/ServiceSlider";


const services = [
  {
    name: "Website Development",
    tagline: "High-performing, responsive and modern websites.",
    points: [
      "Business websites and landing pages",
      "Portfolio and personal branding sites",
      "Custom designs with Tailwind & React",
    ],
    color: "from-blue-500 to-cyan-500",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "App Development",
    tagline: "Scalable mobile and web applications.",
    points: [
      "Android app development",
      "Progressive Web Apps (PWAs)",
      "API integration & custom features",
    ],
    color: "from-violet-500 to-purple-500",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "SEO",
    tagline: "Rank higher, get more traffic organically.",
    points: [
      "On-page & technical SEO",
      "Keyword & content strategy",
      "Performance and site audits",
    ],
    color: "from-emerald-500 to-lime-500",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  },
  {
    name: "Digital Marketing",
    tagline: "Turn clicks into customers.",
    points: [
      "Social media campaigns",
      "Lead generation strategies",
      "Brand awareness & creatives",
    ],
    color: "from-orange-500 to-pink-500",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg",
  },
];

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "For small business websites, it usually takes 2–4 weeks depending on pages, content, and features.",
  },
  {
    q: "Do you work with small businesses and startups?",
    a: "Yes! We love working with small businesses and startups and we offer budget-friendly packages.",
  },
  {
    q: "Can you handle everything end-to-end?",
    a: "Yes. From design, development, SEO, hosting guidance, and post-launch support, we handle the full cycle.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "We offer maintenance and support plans to keep your website or app updated, secure, and fast.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24 md:pt-32 pb-24 bg-white">
      {/* ================= HERO SECTION ================= */}
      <section className="px-6 md:px-20 mb-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text */}
          <motion.div
            className="max-w-xl text-center md:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
              Services that{" "}
              <span className="text-blue-600">Grow Your Business</span>
            </h1>
            <p className="text-gray-700 text-base md:text-lg mb-6">
              From websites to apps, SEO, and digital marketing – we provide
              complete digital solutions tailored for small businesses and
              growing brands.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">
                Get a Free Consultation
              </button>
              <button className="px-6 py-3 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition">
                View Pricing
              </button>
            </div>
          </motion.div>

          {/* Hero Highlight Card */}
          <motion.div
            className="w-full md:w-[380px] bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl p-8 shadow-2xl"
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <p className="text-sm uppercase tracking-[0.2em] mb-3 opacity-80">
              WHY CODEARCUS
            </p>
            <p className="text-xl font-semibold mb-4">
              We blend design, development and marketing into one powerful
              digital engine for your business.
            </p>
            <ul className="space-y-2 text-sm opacity-90">
              <li>✔ Budget-friendly solutions for small businesses</li>
              <li>✔ Fast delivery timelines</li>
              <li>✔ Long-term partnership & support</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ================= OVERVIEW OF SERVICES ================= */}
      <section className="px-6 md:px-20 mb-20">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-4">
          Our <span className="text-blue-600">Core Services</span>
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          We cover the full digital spectrum – from building your online
          presence to driving traffic and conversions.
        </p>
           {/* ================= SERVICE SLIDER SECTION ================= */}
<div className="px-6 md:px-20 mb-20">
  <ServiceSlider />
</div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}
              >
                <img
                  src={service.logo}
                  alt={service.name}
                  className="w-9 h-9 object-contain"
                />
              </div>
              <h3 className="font-bold text-lg mb-2">{service.name}</h3>
              <p className="text-sm text-gray-600">{service.tagline}</p>
            </motion.div>
          ))}
        </div> */}
      </section>

      {/* ================= INDIVIDUAL SERVICE SECTIONS ================= */}
      <section className="px-6 md:px-20 mb-20">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center">
          What We <span className="text-blue-600">Do</span>
        </h2>

        <div className="space-y-10">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              {/* Left "logo" block */}
              <div
                className={`w-full md:w-1/3 bg-gradient-to-br ${service.color} rounded-3xl p-8 flex flex-col items-center justify-center text-white shadow-lg`}
              >
                <img
                  src={service.logo}
                  alt={service.name}
                  className="w-16 h-16 mb-4 object-contain"
                />
                <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                <p className="text-sm text-blue-50">{service.tagline}</p>
              </div>

              {/* Right text details */}
              <div className="w-full md:w-2/3">
                <h4 className="text-xl font-semibold mb-3">
                  How we help with {service.name.toLowerCase()}
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  {service.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PROCESS SECTION ================= */}
      <section className="px-6 md:px-20 mb-20 bg-gray-50 py-16">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-4">
          Our <span className="text-blue-600">Process</span>
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          A simple, transparent and efficient workflow from idea to launch.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              title: "1. Discover",
              desc: "We understand your goals, audience, and requirements.",
            },
            {
              title: "2. Design",
              desc: "We craft clean UI/UX and user flows that fit your brand.",
            },
            {
              title: "3. Build",
              desc: "We develop using modern, scalable, and secure tech.",
            },
            {
              title: "4. Launch & Support",
              desc: "We deploy, monitor, and support your product long-term.",
            },
          ].map((step, i) => (
            <motion.div
              key={step.title}
              className="bg-white rounded-2xl shadow-md p-6 text-center border-t-4 border-blue-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                {i + 1}
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="px-6 md:px-20">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-4">
          Frequently <span className="text-blue-600">Asked Questions</span>
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Here are some common questions our clients ask before starting a
          project with us.
        </p>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((item, i) => (
            <motion.div
              key={item.q}
              className="bg-white rounded-xl shadow-sm border px-5 py-4 text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <p className="font-semibold mb-1">{item.q}</p>
              <p className="text-sm text-gray-600">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
