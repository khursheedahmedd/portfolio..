"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionLetsConnect from "../SectionLetsConnect";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
  });

  const queryOptions = ["Hire Me", "Work With Me", "General Query"];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <section className="px-4 py-2 md:py-12 ">
        <div className="text-center">
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-3xl font-extrabold lg:text-6xl font-montserrat gradient-text"
          >
            Contact Me
          </motion.h2>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-gray-600 max-w-xl mx-auto mt-4"
          >
            Have questions or want to collaborate? Feel free to reach out!
          </motion.p>
        </div>

        <div className="mt-12 flex justify-center w-full md:w-3/4 lg:w-1/2 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-gray-100 rounded-3xl p-8 w-full max-w-md shadow-lg"
          >
            <form className="grid grid-cols-1 gap-6 ">
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  // className="input-field"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:border-primary transition"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:border-primary transition"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:border-primary transition"
              />
              <select
                name="queryType"
                value={formData.queryType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:border-primary transition"
              >
                <option value="">Select Query Type</option>
                {queryOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:border-primary transition h-32"
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full p-4 font-bold text-white gradient-btn rounded-xl"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
      <SectionLetsConnect />
    </div>
  );
}
