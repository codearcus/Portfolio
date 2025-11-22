"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="py-24 px-6 md:px-20 bg-gray-50">

      {/* ---------------------- PAGE TITLE ---------------------- */}
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

      {/* ---------------------- FORM SECTION ---------------------- */}
      <motion.div
        className="bg-white p-10 rounded-2xl shadow-xl border max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-blue-600">
          Send a Message
        </h3>

        <form className="space-y-6">
          <div>
            <label className="text-gray-700 text-sm">Your Name</label>
            <input
              type="text"
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="text-gray-700 text-sm">Email</label>
            <input
              type="email"
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="example@mail.com"
            />
          </div>

          <div>
            <label className="text-gray-700 text-sm">Phone</label>
            <input
              type="text"
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="+91 98765 43210"
            />
          </div>

          <div>
            <label className="text-gray-700 text-sm">Message</label>
            <textarea
              rows="4"
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Tell us about your project..."
            ></textarea>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </motion.div>

      {/* ---------------------- MAP SECTION ---------------------- */}
      <motion.div
        className="mt-20 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-blue-600 text-center">
          Our Location
        </h3>

        <div className="rounded-2xl overflow-hidden shadow-xl h-96 border">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.481897327879!2d78.82055377451736!3d10.37804516711745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa9b8b4e723df1%3A0x6cdc32bcd3840321!2sPudukkottai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000"
          ></iframe>
        </div>
      </motion.div>

    </div>
  );
}
