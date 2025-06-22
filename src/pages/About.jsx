import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

function About() {
  return (
    <>
      {/* About Us */}
      <Navbar />
      <section className="bg-gray-50 p-8 md:py-16 ">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-600">About Us</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Filao Network Solutions provides fast, secure, and scalable networking services tailored to your needs.
            With certified professionals and years of experience, we deliver dependable connectivity and advanced security systems.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Our Mission",
              desc: "To simplify connectivity and security by offering cutting-edge, affordable solutions that keep homes and businesses connected, protected, and efficient."
            },
            {
              title: "Our Vision",
              desc: "To be the most trusted local provider of networking, security, and smart tech systems, redefining how people live, work, and stay safe."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              variants={fadeInUp}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-12 md:py-24 px-6 bg-gray-50">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">What Sets Us Apart</h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>Locally based, fast-response team</li>
            <li>Certified technicians with hands-on experience</li>
            <li>Partnerships with top global brands</li>
            <li>Tailored solutions for homes, offices, and industrial spaces</li>
            <li>Ongoing support and system maintenance</li>
          </ul>
        </motion.div>
      </section>
    </>
  );
}

export default About;