"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.target);

    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
      message: form.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(payload),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      e.target.reset();
    }
  };

  return (
    <div className="py-24 px-6 md:px-20 bg-gray-50">

      {/* Title */}
      <motion.h2
        className="text-center text-4xl md:text-5xl font-extrabold mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Get in <span className="text-blue-600">Touch</span>
      </motion.h2>

      <motion.p
        className="text-center text-gray-600 max-w-2xl mx-auto mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Have an idea? Let's build something amazing together.
        Contact us for project discussion, pricing, or support!
      </motion.p>

      {/* FORM CARD */}
      <motion.div
        className="relative bg-white p-10 rounded-2xl shadow-xl border max-w-3xl mx-auto min-h-[420px] flex items-center justify-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {!success ? (
          <form className="space-y-6 w-full" onSubmit={handleSubmit}>
            
            {/* Name */}
            <div>
              <label className="text-gray-700 text-sm">Your Name</label>
              <input
                name="name"
                required
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-gray-700 text-sm">Email</label>
              <input
                name="email"
                type="email"
                required
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="example@mail.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-gray-700 text-sm">Phone</label>
              <input
                name="phone"
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="+91 98765 43210"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-gray-700 text-sm">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            {/* Button */}
            <button
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-blue-300"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        ) : (
          /* SUCCESS MESSAGE – PERFECTLY CENTERED */
          <div className="flex flex-col items-center justify-center text-center h-full">

            <motion.h3
              className="text-3xl font-bold text-blue-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Message Sent Successfully!
            </motion.h3>

            <p className="text-gray-600 mt-4 text-lg">
              Thank you for contacting us. We will get back to you shortly.
            </p>
          </div>
        )}
      </motion.div>

      {/* MAP */}
      <div className="mt-20 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6 text-blue-600 text-center">
          Our Location
        </h3>

        <div className="rounded-2xl overflow-hidden shadow-xl h-96 border">
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps?q=Pudukkottai,%20Tamil%20Nadu&z=12&output=embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
