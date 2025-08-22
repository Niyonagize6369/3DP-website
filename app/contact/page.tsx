"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiClock,
  FiArrowRight,
} from "react-icons/fi";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const contactInfoCards = [
  {
    icon: <FiMapPin size={24} className="text-yellow-500" />,
    title: "Location",
    content: "Kigali/Rwanda/KG 7 Ave Kacyiru",
  },
  {
    icon: <FiPhone size={24} className="text-yellow-500" />,
    title: "Contact",
    content: "+250 785842428",
    href: "tel:+250785842428",
  },
  {
    icon: <FiMail size={24} className="text-yellow-500" />,
    title: "Email",
    content: "info@3dp.rw",
    href: "mailto:info@3dp.rw",
  },
  {
    icon: <FiClock size={24} className="text-yellow-500" />,
    title: "Visit Us",
    content: "All times - 24/7",
  },
];

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    setIsSubmitting(true);
    console.log("Form Data:", data);

    setTimeout(() => {
      toast.success("Message sent successfully!");
      reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="bg-slate-50">
      <motion.div
        className="bg-gray-800 text-white text-center py-20"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6">
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold mt-2"
          >
            Get in Touch
          </motion.h1>
        </div>
      </motion.div>

      <motion.section
        className="py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfoCards.map((card, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-slate-100 p-4 rounded-full">
                    {card.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {card.title}
                </h3>
                {card.href ? (
                  <a
                    href={card.href}
                    className="text-black hover:text-yellow-700 transition-colors"
                  >
                    {card.content}
                  </a>
                ) : (
                  <p className="text-black">{card.content}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl font-bold text-black "
              >
                Send Message
              </motion.h2>

              <motion.form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
                variants={fadeInUp}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Full Name"
                      {...register("name", { required: "Name is required" })}
                      className="mt-1 block text-black w-full px-4 py-3 bg-white border border-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                      disabled={isSubmitting}
                    />
                    {typeof errors.name?.message === "string" && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your Email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className="mt-1 block w-full px-4 py-3 text-black bg-white border border-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                      disabled={isSubmitting}
                    />
                    {typeof errors.email?.message === "string" && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="sr-.only">
                    Your Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Your Phone"
                    {...register("phone")}
                    className="mt-1 block w-full px-4 py-3 text-black bg-white border border-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="How can we help you?"
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className="mt-1 block w-full px-4 py-3 text-black bg-white border border-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                    disabled={isSubmitting}
                  ></textarea>
                  {typeof errors.message?.message === "string" && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 bg-yellow-700 text-white hover:bg-yellow-500 font-bold py-3 px-8 rounded-md transition-colors duration-300 disabled:bg-red-500"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FiArrowRight />
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            </motion.div>

            {/* Map */}
            <motion.div
              className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.525568571063!2d30.06313881529603!3d-1.94246803723386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6a4b654f5c9%3A0x673322d7168b4493!2sKG%207%20Ave%2C%20Kigali!5e0!3m2!1sen!2srw!4v1671542151656!5m2!1sen!2srw"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className="bg-cover bg-center text-white py-24 relative"
        style={{ backgroundImage: "url('/office-background.jpg')" }}
      >
        <div className="absolute inset-0 bg-gray-800"></div>
        <div className="container mx-auto px-6 text-center relative">
          <h2 className="text-4xl font-bold">Ready to Work, Let's Chat</h2>
          <p className="mt-4 max-w-2xl mx-auto">
            Our team of experts is ready to collaborate with you every step of
            the way, from initial consultation to implementation.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 bg-yellow-700 text-black font-bold py-3 px-8 rounded-md hover:bg-yellow-500 transition-colors"
          >
            CONTACT US TODAY! <FiArrowRight />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
