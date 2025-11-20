"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6 md:px-20 bg-gray-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-10"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
          Contact <span className="text-blue-600">Us</span>
        </h2>
        <p className="text-center text-gray-600 mb-10 text-lg">
          Have a question or want to work together?  
          Fill out the form and we’ll get back to you soon.
        </p>

        {/* Contact Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">Email Address</label>
            <input
              type="email"
              placeholder="example@email.com"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">Phone Number</label>
            <input
              type="text"
              placeholder="+91 98765 43210"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">Subject</label>
            <input
              type="text"
              placeholder="Project discussion..."
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-gray-700 font-medium mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-500 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="
              md:col-span-2 
              bg-blue-600 text-white 
              py-3 rounded-lg 
              font-semibold text-lg 
              shadow-md hover:bg-blue-700 transition
            "
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
