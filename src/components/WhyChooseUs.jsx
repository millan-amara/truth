import React from 'react';
import { motion } from "framer-motion";
import { Users, DollarSign, Clock, Wrench } from "lucide-react";

function WhyChooseUs() {

    const features = [
        {
        icon: <Users className="text-rose-600 w-8 h-8 mb-2" />,
        title: "Professional Team",
        desc: "Trained technicians with hands-on experience in networking & security.",
        },
        {
        icon: <DollarSign className="text-rose-600 w-8 h-8 mb-2" />,
        title: "Affordable Pricing",
        desc: "Fair, transparent rates with no hidden costs.",
        },
        {
        icon: <Clock className="text-rose-600 w-8 h-8 mb-2" />,
        title: "Fast Turnaround",
        desc: "Quick site visits, installations and support when you need it.",
        },
        {
        icon: <Wrench className="text-rose-600 w-8 h-8 mb-2" />,
        title: "Support & Maintenance",
        desc: "Ongoing help and technical support for all systems we install.",
        },
    ];

  return (
    <section className="py-8 px-4">
        <motion.h2
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        >
        Why Choose Us
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {features.map((item, i) => (
            <motion.div
            key={i}
            className="bg-white rounded-xl p-6 shadow hover:shadow-md transition duration-300 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            >
            <div className="flex flex-col items-center">
                {item.icon}
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
            </div>
            </motion.div>
        ))}
        </div>

        {/* Stat Grid */}
        <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true }}
        >
        <div>
            <p className="text-3xl font-bold text-red-600">99.9%</p>
            <p className="text-gray-600 text-sm">Network Uptime</p>
        </div>
        <div>
            <p className="text-3xl font-bold text-red-600">1,000+</p>
            <p className="text-gray-600 text-sm">Installations</p>
        </div>
        <div>
            <p className="text-3xl font-bold text-red-600">24/7</p>
            <p className="text-gray-600 text-sm">Support</p>
        </div>
        <div>
            <p className="text-3xl font-bold text-red-600">4.9★</p>
            <p className="text-gray-600 text-sm">Customer Rating</p>
        </div>
        </motion.div>
    </section>
  )
}

export default WhyChooseUs