"use client";

import { motion } from "framer-motion";

export default function ServicesPage() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
    }),
  };

  const services = [
    {
      key: "web",
      title: "Website Development",
      desc:
        "Responsive, fast, and accessible websites built with modern stacks to scale with your business.",
      color: "text-blue-600",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8" />
          <path d="M7 7h.01M17 7h.01" />
        </svg>
      ),
    },
    {
      key: "app",
      title: "App Development",
      desc:
        "Cross-platform mobile apps and native builds that deliver excellent UX and performance.",
      color: "text-purple-600",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="2" width="12" height="20" rx="2" />
          <path d="M11 18h2" />
        </svg>
      ),
    },
    {
      key: "seo",
      title: "SEO",
      desc:
        "Data-driven SEO: technical fixes, content strategy, and link building to increase organic traffic.",
      color: "text-green-600",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10v6a2 2 0 0 1-2 2H5" />
          <path d="M3 6h18" />
          <path d="M8 6v12" />
        </svg>
      ),
    },
    {
      key: "dm",
      title: "Digital Marketing",
      desc:
        "Paid & organic campaigns, social strategy, and analytics to grow awareness and conversions.",
      color: "text-indigo-600",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 8v6M18 8v6" />
          <path d="M2 12h14" />
          <path d="M7 8l-5 4 5 4" />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="pt-28 pb-8 px-5 md:px-10 lg:px-28">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our <span className="text-blue-600">Services</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            We offer end-to-end digital services — from strategy and design to
            build and growth. Pick a service below to learn how we can help you
            achieve measurable results.
          </p>
        </div>
      </section>

      {/* Services grid (carousel-ready) */}
      <section className="px-5 md:px-10 lg:px-28 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Grid: 1 column mobile, 2 on md, 4 on lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <motion.article
                key={s.key}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
                variants={cardVariants}
                role="article"
                aria-labelledby={`svc-${s.key}`}
              >
                <div className={`mb-4 ${s.color}`}>{s.icon}</div>

                <h3 id={`svc-${s.key}`} className="text-xl font-semibold mb-3">
                  {s.title}
                </h3>

                <p className="text-gray-600 text-sm mb-5">{s.desc}</p>

                <div className="mt-auto">
                  <a
                    href={`/services#${s.key}`}
                    className="inline-block text-sm font-medium px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    Learn more
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto text-center px-5 md:px-10">
          <h3 className="text-2xl font-semibold mb-3">
            Ready to start a project?
          </h3>
          <p className="text-gray-600 mb-6">
            Tell us about your idea and we’ll suggest the best approach to solve it.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Get in touch
          </a>
        </div>
      </section>
    </main>
  );
}
