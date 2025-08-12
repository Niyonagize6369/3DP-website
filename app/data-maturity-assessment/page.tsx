// app/data-maturity-assessment/page.js

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaPlayCircle, FaClipboardList, FaChartLine, FaAward } from "react-icons/fa";

// Storing the steps in an array makes the code cleaner and easier to update
const assessmentSteps = [
  {
    icon: <FaClipboardList className="text-4xl text-yellow-800" />,
    title: "1. Answer Questions",
    description: "You'll be guided through a series of multiple-choice questions about your organization's data practices.",
  },
  {
    icon: <FaChartLine className="text-4xl text-yellow-800" />,
    title: "2. Get Instant Analysis",
    description: "Our system analyzes your responses in real-time to calculate your position on the data maturity spectrum.",
  },
  {
    icon: <FaAward className="text-4xl text-yellow-800" />,
    title: "3. Receive Your Score",
    description: "Receive a personalized report detailing your score, key strengths, and actionable areas for improvement.",
  },
];

// Animation Variants for Framer Motion
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AssessmentLandingPage = () => {
  return (
    <div className="bg-gray-50 text-black">
      {/* --- Hero Section --- */}
      <motion.section
        className="text-center bg-white"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6 py-24">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-black leading-tight"
            variants={fadeInUp}
          >
            Data Maturity Assessment
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl text-black max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Discover your organization's data capabilities and unlock a clear path to becoming a data-driven leader.
          </motion.p>
        </div>
      </motion.section>

      {/* --- Instructions & Steps Section --- */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            A Simple 3-Step Process
          </h2>
          <p className="mt-3 text-black">
            Follow these steps to get your personalized maturity score.
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          initial="initial"
          // Animate when the section scrolls into view
          whileInView="animate"
          variants={staggerContainer}
          // Only animate once
          viewport={{ once: true, amount: 0.5 }}
        >
          {assessmentSteps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-gray-800"
              variants={fadeInUp}
            >
              <div className="flex justify-center mb-5">{step.icon}</div>
              <h3 className="text-xl font-bold text-black mb-2">{step.title}</h3>
              <p className="text-black">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- Start Button & Final CTA Section --- */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-20 text-center">
            <motion.h2 
                className="text-3xl font-bold text-black mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Ready to Start Your Assessment?
            </motion.h2>
            <motion.p 
                className="max-w-2xl mx-auto mb-8 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                The assessment is free and takes approximately 10-15 minutes to complete.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <Link
                    // This is the link to the page where your questions will be
                    href="/data-maturity-assessment/dashboard"
                    className="inline-flex items-center justify-center px-10 py-4 font-semibold text-white bg-gray-800 rounded-lg shadow-xl hover:bg-gray-900 transition-transform transform hover:scale-105 duration-300"
                >
                    <FaPlayCircle className="mr-3 text-xl" />
                    Start Assessment Now
                </Link>
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AssessmentLandingPage;