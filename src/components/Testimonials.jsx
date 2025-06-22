import React from "react";
import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    quote: '"Filao Networks transformed our office network. Great service!"',
    author: "— James, Business Owner",
  },
  {
    quote: '"Fast and reliable WiFi at home now, thanks to the team."',
    author: "— Sarah, Home User",
  },
];

const testimonialVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3 + 0.5,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

function Testimonials() {
  return (
    <section className="pt-12 px-4 bg-white text-center h-auto md:h-screen md:flex flex-col justify-center">
      <motion.h2
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        What Clients Say
      </motion.h2>

      <div className="max-w-3xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            className="flex flex-col justify-center items-center mt-10 first:mt-0"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={testimonialVariants}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaUserCircle className="h-12 w-8 mb-4 text-gray-500" />
            </motion.div>
            <blockquote className="italic text-gray-700 mb-6">{t.quote}</blockquote>
            <p className="font-semibold text-blue-500">{t.author}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;