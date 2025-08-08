"use client";

import { motion } from "framer-motion";

import { FaBullseye, FaEye } from "react-icons/fa";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const AboutPage = () => {
  return (
    <div className="bg-white text-black">
      {/* --- Hero Section --- */}
      <motion.div
        className="bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-20 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-black"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            3DP Rwanda
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl text-black max-w-3xl mx-auto"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2, duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
          >
            Empowering businesses with data-driven insights and innovative
            solutions for better decision-making.
          </motion.p>
        </div>
      </motion.div>

      {/* --- Our Story Section --- */}
      <motion.section
        className="container mx-auto px-6 py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
        variants={stagger}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl font-bold text-black mb-4">Our Journey</h2>
            <p className="text-black mb-4">
              Founded on the principle that data is the new currency of
              business, 3DP Rwanda was established to bridge the gap between raw
              data and actionable strategy. We saw a landscape rich with
              potential but underserved in data literacy and analytics.
            </p>
            <p className="text-black">
              Our journey began with a small team of passionate data scientists
              and strategists committed to transforming Rwanda's businesses.
              Today, we stand as a trusted partner for enterprises of all sizes,
              guiding them toward a data-driven future. [2]
            </p>
          </motion.div>
          <motion.div
            className="rounded-lg overflow-hidden shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Replace with a relevant image, e.g., your team or an abstract data visualization */}
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
              alt="Data Analytics Dashboard"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* --- Mission & Vision Section --- */}
      <motion.section
        className="bg-gray-800 text-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
        variants={stagger}
      >
        <div className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 text-center md:text-left">
            <motion.div
              variants={fadeInUp}
              className="flex items-start space-x-4"
            >
              <FaBullseye className="text-5xl text-yellow-500 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                <p className="text-white">
                  To create a secure, enabling environment for increased trade,
                  investments, and skills development through professional
                  conduct and offering high-quality service. [14]
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex items-start space-x-4"
            >
              <FaEye className="text-5xl text-yellow-500 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
                <p className="text-white">
                  To build Rwanda as a prosperous, welcoming, and secure nation,
                  recognized as a leader in the data economy.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* --- Meet The Team Section --- */}
      <motion.section
        className="container mx-auto px-6 py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
        variants={stagger}
      >
        <h2 className="text-3xl font-bold text-center text-black mb-12">
          Meet Our Experts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* --- Team Member Card (Example) --- */}
          <motion.div variants={fadeInUp} className="text-center">
            {/* Replace with actual team member photos */}
            <img
              src="/photo1.jpg"
              alt="Team Member"
              className="w-32 h-46 rounded-full mx-auto mb-4 shadow-lg"
            />
            <h4 className="text-xl font-bold">Danika Lea</h4>
            <p className="text-black">CEO & Lead Strategist</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center">
            <img
              src="/photo2.jpg"
              alt="Team Member"
              className="w-32 h-46 rounded-full mx-auto mb-4 shadow-lg"
            />
            <h4 className="text-xl font-bold">Don John</h4>
            <p className="text-black">Head of Data Science</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center">
            <img
              src="/photo3.jpg"
              alt="Team Member"
              className="w-32 h-46 rounded-full mx-auto mb-4 shadow-lg"
            />
            <h4 className="text-xl font-bold">Joana Sheilla</h4>
            <p className="text-black">Business Intelligence Lead</p>
          </motion.div>
        </div>
      </motion.section>

      {/* --- Call to Action --- */}
      <motion.div
        className="bg-gray-800 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 py-12 text-center">
          <h2 className="text-3xl font-bold mb-2">
            Ready to unlock your data's potential?
          </h2>
          <p className="mb-6">
            Let's analyze your data and build a strategy for your success.
          </p>
          <a
            href="/contact"
            className="bg-yellow-700 text-white hover:bg-yellow-500 font-bold py-3 px-8 rounded-full transition-colors duration-300"
          >
            Get In Touch
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
