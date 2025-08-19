"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/dash1.jpg",
  "/dash2.jpg",
  "/dash3.jpg",
  "/dash4.jpg",
  "/dash5.jpg",
  "/dash6.jpg",
  "/dash7.jpg",
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center">
      <div className="container mx-auto px-6 py-12 lg:flex lg:items-center lg:gap-12">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
            Empowering businesses to discover and harness the full potential of
            data
          </h1>
          <p className="text-lg text-black mb-8">
            Your Partner in Becoming a Data Driven Business.
          </p>
          <a
            href="#services"
            className="bg-yellow-700 text-white hover:bg-yellow-500 font-bold py-3 px-8 rounded-full transition-colors duration-300"
          >
            Explore Services
          </a>
        </motion.div>

        <motion.div
          className="relative lg:w-1/2 mt-10 lg:mt-0 h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <AnimatePresence>
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={images[currentImageIndex]}
                alt="Showcase of services"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
